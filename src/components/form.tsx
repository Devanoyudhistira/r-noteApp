import Inputnote from "./inputnote";
import Button from "./button";
import { MouseEvent } from "react";


export default function NoteForm(props:{note: unknown,setnote: unknown,setdata:(arg0: string[]) => void,data: Array<string>,text:string}) {
  function editlocalstorage(
    value: string,e: React.MouseEvent<HTMLButtonElement, MouseEvent>  ) {
    e.preventDefault();
    const d = new Date
    console.log(props.data)
    localStorage.setItem(d.getMilliseconds().toString(), value);
    props.setdata([...props.data, {item:value,key:d.getMilliseconds().toString()}]);
  }
  return <form action="" onSubmit={(e) => editlocalstorage(props.text,e)} method="post">
     <Inputnote
          style="border border-black outline-none text-xl text-blue-400"
          type="text"
          identity="addnote"
          textnote={props.note}
          usetextnote={props.setnote}
        />
        <Button style="bg-blue-400 px-3 py-1" text="create" />
     </form>;
}
