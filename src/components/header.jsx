import { BsFillBookmarkDashFill } from "react-icons/bs";
import { FaChevronLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import '../../src/styles/scss/header.scss';


function Header({title, toPage= -1, navigateReturn = true, bookmark = false, search = false, profileImg = false}) {
    const navigate = useNavigate();
    return ( 
        <>
        <header>
            {navigateReturn && <FaChevronLeft  onClick={() => navigate(toPage)}/>}
            <h2>{title}</h2>
            {search && <IoSearchOutline/> }
            {bookmark && <BsFillBookmarkDashFill />}
            {profileImg && <img src="https://placehold.jp/100x100.png" alt="profile" />}
        </header>
        </>
     );
}

export default Header;