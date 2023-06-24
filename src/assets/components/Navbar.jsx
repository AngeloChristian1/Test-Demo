import "../../App.css"
import cart from '../icons/cart.svg';
import contact from '../icons/contact.svg';
import search from '../icons/search.svg';


const Navbar = (props)=>{
    return(
        <>
        <div className='navContainer'>
            <div className="logo">
                <img src={props.logo} alt="logo" />
            </div>
            <div className="navContent">
                <ul>
                    <div className='topLinks'>
                    <li>HOME</li>
                    <li>GALLERY</li>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>BLOG</li></div>
                    <div className="topIcons">
                    <li><img src={search} alt="search" /></li>
                    <li><img src={contact} alt="search" /></li>
                    <li><img src={cart} alt="search" /></li>
                    </div>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar