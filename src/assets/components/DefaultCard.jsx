import "../../App.css"

const DefaultCard = (props)=>{
    return(
        <>
        <div className='cardContainer'>
            <div className="cardTitle"><h4>{props.title}</h4></div>
            <div className="cardContent"><p>{props.cardContent}</p></div>
            <div className="cardContent"><p>{props.content2}</p></div>
        </div>
        </>
    )
}

export default DefaultCard