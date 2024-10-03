import { ChangeEvent } from "react"

export default function Selectinput(props:{data: string[],usetype: (arg0: string) => void}){
    function selecthandler(text: ChangeEvent<HTMLInputElement>){
        const typevalue = text
        props.usetype(typevalue)
    }
    return(
    <select name="typesetter" onChange={e => selecthandler(e.target.value)} className="block px-3 py-1 " id="typesetter">
        {props.data.map(e => <option  value={e} > {e} </option>) }
    </select>)
}