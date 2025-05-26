import { useEffect, useState } from "react";
import '../../styles/scss/explore/upcoming.scss';

function Upcoming() {

    const authKey = import.meta.env.VITE_TMDB_API_KEY;
    
        const upComing = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${authKey}`
            }
        };
    
        const [upComingMovies, setUpcomingMovies] = useState([]);
    
        useEffect(() => {
            fetch(upComing, options)
                .then(res => res.json())
                .then(data => setUpcomingMovies(data.results))
                .catch(err => console.error(err));
        })

    return (
        <>
            <div className="upcoming-movies">
                <h2>Upcoming Movies</h2>
                <ul className='upcoming-movies__list'>
                    {upComingMovies.map(movie => (
                        <li className='upcoming-movies__list__item' key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3>{movie.title}</h3>
                            <p>{movie.release_date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default Upcoming;