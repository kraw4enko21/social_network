import { NavLink } from "react-router-dom";
import s from "./Nav.module.css"
const Nav = () => {
    return (
        <nav className={s.nav}>
            <div  className={s.item}> 
                <NavLink className={({isActive})=> isActive ? `${s.activeLink}` : ''} to='/profile'>Profile</NavLink>
            </div> 
            <div className={s.item}>
                <NavLink className={({isActive})=> isActive ? `${s.activeLink}` : ''}   to='/dialog'>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className={({isActive})=> isActive ? `${s.activeLink}`: ''}  to='/news'>News</NavLink>
            </div> 
            <div className={s.item}>
                <NavLink className={({isActive})=> isActive ? `${s.activeLink}`: ''}  to='/music'>Music</NavLink>
            </div> 
            <div className={`${s.item} ${s.navbarSetting}`}>
                <NavLink className={({isActive})=> isActive ? `${s.activeLink}`: ''}  to='/setting'>Setting</NavLink>
            </div>            
            
            
            
            
        </nav>
    );
};

export default Nav;