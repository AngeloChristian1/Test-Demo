import "../../App.css"

const storyCard = (props)=>{
    return(
        <>
        <div className='cardContainer'>
            <div className="cardTitle"><h4>{props.title}</h4></div>
            <div className="cardContent"><p>{props.cardContent}</p></div>
        </div>
        </>
    )
}

export default storyCard