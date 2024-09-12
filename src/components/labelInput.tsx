import { ReactNode } from "react";

export default function Labelinput(props:{children:ReactNode,inputname:string,ngclass:string}){
    return (
        <label htmlFor={props.inputname} className={props.ngclass} >
            {props.children}
        </label>
    )
}