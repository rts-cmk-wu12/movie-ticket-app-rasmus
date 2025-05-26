import { useEffect, useState } from "react";
import Showing from "../components/explore/showing";
import Header from "../components/header";
import '../styles/scss/explore/explore-fetch.scss';
import Upcoming from "../components/explore/upcoming";

function Explore() {

    const authKey = import.meta.env.VITE_TMDB_API_KEY;

    const popular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    const trending = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${authKey}`
        }
    };

     const [popularList, setPopularList] = useState([]);
     const [trendingList, setTrendingList] = useState([]);
    
       useEffect(() => {
          fetch(popular, options)
          .then(res => res.json())
          .then(data => setPopularList(data.results))
          .catch(err => console.error(err));
       },[])

       useEffect(() => {
        fetch(trending, options)
            .then(res => res.json())
            .then(data => setTrendingList(data.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <Header
                title={'Explore Movie'}
                search={true} />
            <Showing />
            <div className="explore">
                <div className="explore__header">
                    <h2>Top Movies</h2>
                    <p>See more</p>
                </div>
                <ul className="explore__list">
                    {popularList.map(movie => (
                        <li className="explore__list__item" key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3>{movie.title}</h3>
                            <p>{movie.vote_average.toFixed(1)}</p>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="explore__trending">
                <div className="explore__header">
                    <h2>Recommended</h2>
                    <p>See more</p>
                </div>
                <ul className="explore__trending__list">
                    {trendingList.map(movie => (
                        <li className="explore__trending__list__item" key={movie.id}>
                            <img
                                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                                alt={movie.title}
                            />
                            <h3>{movie.title}</h3>
                        </li>
                    ))}
                </ul>
            </div>
            <Upcoming/>
        </>
    );
}

export default Explore;