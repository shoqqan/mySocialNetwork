type PropsType = {
    title:any
    callback: () => void
    cssClass: string
}
export const Button = (props: PropsType)=>{
    return(
        <button  className={props.cssClass} onClick={props.callback}>{props.title}</button>
    )
}
