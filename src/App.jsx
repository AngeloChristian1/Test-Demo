
import './App.css'
import logo from './assets/icons/logo.svg';
import cart from './assets/icons/cart.svg';
import contact from './assets/icons/contact.svg';
import search from './assets/icons/search.svg';
import hero from './assets/images/HERO-IMAGE.svg'
import middle1 from './assets/images/middleImage1.svg'
import middle2 from './assets/images/middleImage2.svg'
import middle3 from './assets/images/middleImage3.svg'
import img1 from './assets/images/img1.png'
import img2 from './assets/images/img2.svg'
import img3 from './assets/images/img3.svg'
import line1 from './assets/short-lines.svg'
import line2 from './assets/long-lines.svg'
import Navbar from './assets/components/Navbar'
import Button from './assets/components/Button'
import BlueCard from './assets/components/blueCard'
import DefaultCard from './assets/components/DefaultCard';
import Footer from './assets/components/Footer';


function App() {
  

  return (
    <>
    <div className="mainContainer">
      <div className="container1"  style={{ backgroundImage:`url(${hero})`}}> 
        <div><Navbar 
      logo={logo}/></div>
      <div className="center">
      <div className="heroText">
        <p>Lorem ipsum dolor sit amet consectetur. Volutpat.</p>
      </div>
      <div className='home'>
        <Button
        buttonContent="Lorem ipsum"
        />
      </div>
      </div>

      </div>
      <div className="container2">
        <div className="about">

          <div className="line"><img src={line1} alt="" /></div>
          <DefaultCard
          title='ABOUT LOREM IPSUM'
          cardContent='Lorem ipsum dolor sit amet consectetur. Blandit dolor eu enim ac nisl enim sed diam. Egestas integer bibendum sapien dignissim sit felis pharetra nibh. Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo. Id molestie neque vel interdum aliquam vitae at euismod. Convallis consectetur sit mauris augue. Tempor rhoncus aenean dolor vitae.'
          content2=' Tellus erat aliquam blandit etiam. Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. Sodales interdum aenean in dolor risus leo at. Praesent laoreet tincidunt malesuada eu adipiscing. Adipiscing posuere ultrices gravida duis iaculis sagittis ipsum convallis. Sed amet ac eleifend enim. Massa fringilla maecenas odio imperdiet imperdiet. Luctus at viverra.'
         />
        </div>
        <div className="missionContainer">
          <div className="mission">
          <DefaultCard
          title='MISSION'
          cardContent='Tellus erat aliquam blandit etiam. Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. Sodales interdum aenean in dolor risus leo at. Praesent laoreet tincidunt malesuada eu adipiscing. '
          />
          </div>
          <div className="vission"><DefaultCard
          title='VISION'
          cardContent='Tellus erat aliquam blandit etiam. Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. Sodales interdum aenean in dolor risus leo at. Praesent laoreet tincidunt malesuada eu adipiscing. '
          /></div>
          <div className="objective">
          <DefaultCard
          title='OBJECTIVE'
          cardContent='Tellus erat aliquam blandit etiam. Mauris suscipit faucibus felis risus lectus platea neque ut. Odio adipiscing tincidunt velit egestas convallis placerat vestibulum. Sodales interdum aenean in dolor risus leo at. Praesent laoreet tincidunt malesuada eu adipiscing.  '
          />
          </div>
        </div></div>
        <div className="container3">
          <div>
          <DefaultCard
          title='Tellus erat aliquam blandit etiam'
         />
          </div>
          <div className="imageCards">
            <div>
            <img src={middle1} alt="image" />
            </div>
            <div><img src={middle2} alt="image" /></div>
            <div><img src={middle3} alt="image" /></div>
          </div>
        </div>
        <div className="container4">
        <div className="upperLine"><img src={line2} alt="" /></div>
        <div className="divContent">
        <div className="div1 div ">
          <div><h3>Lorem ipsum dolor sit consectetur.</h3></div>
          <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non vero maxime sint quo sequi? Aliquid exercitationem pariatur quaerat quia.</p></div>
          <div>
        <Button
        buttonContent="Lorem ipsum"
        />
      </div>
        </div>
        <div className="div2 div">
        <div><h3>Lorem ipsum dolor sit consectetur.</h3></div>
          <div><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut non vero maxime sint quo sequi? Aliquid exercitationem pariatur quaerat quia.</p></div>
          <div>
        <Button
        buttonContent="Lorem ipsum"
        buttonClass='opaque'
        />
      </div>
        </div></div>
        <div className="lowerLine"><img src={line2} alt="" /></div>
        </div>
        <div className="container5">
        <div>
          <DefaultCard
          title='latest stories and updates'
         /></div>
         <div className="cardContainer2">
          <div><BlueCard
          blueImage={img1}
          title='Blandit dolor eu enim ac nisl enim sed diam. '
          cardContent='Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.'
          /></div>
         
          <div><BlueCard
          blueImage={img2}
          title=' Egestas integer bibendum sapien '
          cardContent='Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.'
          /></div>
         
          <div><BlueCard
          blueImage={img3}
          title='Blandit dolor eu enim ac nisl enim sed diam Egestas. '
          cardContent='Fames elementum scelerisque lectus sit id. Maecenas porttitor nunc adipiscing gravida tincidunt sed aliquet condimentum leo.'
          /></div></div>
          <div className='btnCenter'>
          <Button
        buttonContent="Lorem ipsum"
        buttonClass='opaque '
        />
          </div>
          </div>
         
        
      <div className="footerContainer">
      <Footer/>
      </div>
    </div>
      
    </>
  )
}

export default App
