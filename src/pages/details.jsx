import { useParams } from "react-router-dom";
import '../styles/scss/details/details-fetch.scss';
import Header from "../components/header";
import { useEffect, useState } from "react";


function Details() {

    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [director, setDirector] = useState('');
    const [runtime, setRuntime] = useState(null);
    const authKey = import.meta.env.VITE_TMDB_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const creditsUrl = `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`;
    const run = `https://api.themoviedb.org/3/movie/${id}?append_to_response=runtime&language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authKey}`
        }
    };

    useEffect(() => {
        // fetch movie details
        fetch(url, options)
            .then(res => res.json())
            .then(data => setMovie(data))
            .catch(err => console.error(err));

        // fetch credits
        fetch(creditsUrl, options)
            .then(res => res.json())
            .then(data => {
                const dir = data.crew?.find(person => person.job === "Director");
                setDirector(dir ? dir.name : "Unknown");
            })
            .catch(err => console.error(err));

        // fetch runtime
        fetch(run, options)
            .then(res => res.json())
            .then(data => setRuntime(data.runtime))
            .catch(err => console.error(err));
    }, [id]);

    const formatRuntime = (minutes) => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    }

    return (
        <>
            <Header
                bookmark={true}
                title={'Details Movie'} />
            <div>
                {movie ? (
                    <div className="details">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                            alt={movie.title} />
                        <h2>{movie.title}</h2>
                        <div className="details__flex">
                            <p>Director: {director}</p>
                            <p>|</p>
                            <p>{movie.vote_average.toFixed(1)}</p>
                        </div>
                        <div className="details__genre">
                            {movie.genres?.map(genre => (
                                <p key={genre.id}>{genre.name}</p>

                            ))}
                            {runtime !== null && <p>{formatRuntime(runtime)}</p>}
                        </div>
                        <div className="details__overview">
                            <h3>Synopsis</h3>
                            <p>{movie.overview}</p>
                        </div>

                    </div>
                ) : (
                    <p className="loading">Loading...</p>
                )}
                <div className="details__button">
                    <button>Book Ticket</button>
                </div>
            </div>

        </>
    );
}

export default Details;