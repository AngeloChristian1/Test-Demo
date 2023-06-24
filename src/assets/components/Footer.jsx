import "../../App.css"
import Button from "./Button"
import Social from "./Social"
import facebook from '../icons/facebook.svg'
import twitter from '../icons/twitter.svg'
import linkedin from '../icons/linkedin.svg'
import Youtube from '../icons/youtube.svg'
const Footer = (props)=>{
    return(
        <>
       <div className="footer">
        <div className="upperFooter">      <div></div>
      <div>
        <div><h4>Subscribe to our weekly newletter</h4></div>
        <div className="input">
            <input type="text" placeholder='email' name='email'/>
            <Button 
            type='submit'
            buttonContent="Submit"
            />
        </div>
      </div>
      <div className='reachUs'>
      <div><h4>Reach Us</h4></div>
      <div className="navigate">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Contact Us</li>
            <li>Blog</li>
        </ul>
      </div>
      </div>
      <div className='socialIcons'>
      <div><h4>Be Social</h4></div>
      <div className="navigate">
        <ul>
            
           <li><Social icon={facebook} social='Facebook'/></li>
           <li><Social icon={twitter} social='Twitter'/></li>
           <li><Social icon={linkedin} social='Linkedin'/></li>
           <li><Social icon={Youtube} social='Youtube Channel'/></li>
        </ul>
      </div>
      </div>
      <div>
      <div><h4>Quick Links</h4></div>
      <div className="navigate">
        <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>

        </ul>
      </div>
      </div>
      </div>
    <div className="lowerFooter">
     
        <div><p>@2023-Rwanda. All Rights Reserved</p></div>
        <div><p>Privacy Policy</p></div>
      
      
    </div>
      </div>
    
        </>
    )
}

export default Footer