import "../../App.css"
import plus from '../icons/plus.svg'
const BlueCard = (props)=>{
    return(
        <>
        <div className='blueCard'>
            <div className='blueImg'><img src={props.blueImage} alt="image" /></div>
            <div className="blueContent">
            <div className="blueTitle"><h5>{props.title}</h5></div>
            <div className="blueCont"><p>{props.cardContent}</p></div>
             <img src={plus} alt="" /></div>
        </div>
        </>
    )
}

export default BlueCard