import Labelinput from "./labelInput"

import { ChangeEvent, LegacyRef} from "react"

 function Inputnote(props:{
     tagline:string,inputref: LegacyRef<HTMLInputElement> | undefined,type:string,textnote:string,usetextnote: (arg0: string) => void
}){

    function texthandler(text: ChangeEvent<HTMLInputElement>){
        const textvalue = text.target.value
        props.usetextnote(textvalue)
    }
    return (
        <Labelinput ngclass="text-xl" inputname={props.identity} >
          <h1> {props.tagline} </h1>
            <input ref={props.inputref} onChange={e => texthandler(e)} type={props.type ? props.type : "text"} id={props.identity} name={props.identity} className="border border-black outline-none text-xl text-blue-400" />   
        </Labelinput>
    )
}

export default Inputnote