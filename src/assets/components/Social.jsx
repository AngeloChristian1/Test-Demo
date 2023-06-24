
import "../../App.css"

const Social = (props)=>{
    return(
        <>
        <div className='socialContainer'>
        <div><img src={props.icon} alt="icon" /></div>
        <div><p>{props.social}</p></div>   
        </div>
        </>
    )
}

export default Social


