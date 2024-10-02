import { MouseEventHandler } from "react";
import { Trash } from "react-bootstrap-icons";

export default function Deletebutton(props:{deletefunction: MouseEventHandler<HTMLButtonElement> | undefined}){
 return <button onClick={props.deletefunction}> <Trash/>  </button>   
}