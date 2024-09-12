import { forwardRef } from "react"

//  function Inputnote(props:{identity:string,type:string,style:string}){
//     return (
//         <input type={props.type} ref={} id={props.identity} name={props.identity} className={props.style} />   
//     )
// }

const Inputnote = forwardRef((props:{identity:string,type:string,style:string},ref) => {
    return(
        <input type={props.type} ref={ref} id={props.identity} name={props.identity} className={props.style} />   
    )
})

export default Inputnote