import '../../styles/scss/index/search.scss';
import { IoSearchOutline } from "react-icons/io5";


function Search () {
    return ( 
        <>
        <div className='search'>
        <IoSearchOutline className='search__icon' />
        <input type="search" placeholder="Search your favourite movie" />
        </div>
        </>
     );
}

export default Search ;