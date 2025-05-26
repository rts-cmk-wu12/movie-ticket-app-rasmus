import { AiFillHome } from "react-icons/ai";
import { FaCompass } from "react-icons/fa";
import { BsFillBookmarkDashFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import '../styles/scss/footer.scss';
import { NavLink } from "react-router-dom";

function Footer() {
    return (
        <>
            <footer>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/' style={({ isActive }) => ({
                            color: isActive ? '#54A8E5' : '#636882'
                            })}>
                                <AiFillHome />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='explore' style={({ isActive }) => ({
                                color: isActive ? '#54A8E5' : '#636882'
                            })}>
                                <FaCompass />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='details' style={({ isActive }) => ({
                                color: isActive ? '#54A8E5' : '#636882'
                            })}>
                                <BsFillBookmarkDashFill />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='settings' style={({ isActive }) => ({
                                color: isActive ? '#54A8E5' : '#636882'
                            })}>
                                <FaUser />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    );
}

export default Footer;