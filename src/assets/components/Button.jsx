import "../../App.css"

const Button = (props)=>{
    return(
        <>
        <div className={' buttonContainer ' + props.buttonClass}>
        <button className={props.buttonClass ? props.buttonClass:'btn' } type={props.type ? props.type:""}>{props.buttonContent}</button>
        </div>
        </>
    )
}

export default Button