import { useEffect, useState } from 'react';
import '../../styles/scss/index/cinema-near-you.scss';

function CinemaNearYou() {

   const authKey = import.meta.env.VITE_TMDB_API_KEY;

   const providers = 'https://api.themoviedb.org/3/watch/providers/movie?language=en-US';
   const options = {
      method: 'GET',
      headers: {
         accept: 'application/json',
         Authorization: `Bearer ${authKey}`
        }
   };

   const [providersList, setProvidersList] = useState([]);

   useEffect(() => {
      fetch(providers, options)
      .then(res => res.json())
      .then(data => setProvidersList(data.results.slice(0, 10)))
      .catch(err => console.error(err));
   },[])

   return (
      <>
         <div className='cinema-near-you'>
            <h2>Cinema Near You</h2>
            <ul className='cinema-near-you__list'>
            {providersList.map(provider => (
               <li className='cinema-near-you__list__item' key={provider.provider_id}>
                  <img
                     src={`https://image.tmdb.org/t/p/w200${provider.logo_path}`}
                     alt={provider.provider_name}
                  />
                  <h3>{provider.provider_name}</h3>
               </li>
            ))}
            </ul>
            <p>See all</p>
         </div>

      </>
   );
}

export default CinemaNearYou;