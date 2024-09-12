import Labelinput from "./labelInput"

import { ChangeEvent} from "react"

 function Inputnote(props:{identity:string,type:string,style:string,textnote:string,usetextnote: (arg0: string) => void}){

    function texthandler(text: ChangeEvent<HTMLInputElement>){
        const textvalue = text.target.value
        props.usetextnote(textvalue)

        // console.log(props.textnote)
    }
    return (
        <Labelinput ngclass="text-xl" inputname={props.identity} >
          <h1>  login </h1>
            <input onChange={e => texthandler(e)} type={props.type} id={props.identity} name={props.identity} className={props.style} />   
        </Labelinput>
    )
}

export default Inputnote