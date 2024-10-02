import Inputnote from "./inputnote";
import Button from "./button";
import { MouseEvent, useRef } from "react";



export default function NoteForm(props:{note: string,setnote: (arg0: string) => void,setdata: (arg0: (string | { item: string; key: string; })[]) => void,data: Array<string>}) {
  function setstorageitem(storevalue: string | { item: string; key: string;judul:string,type:"to-do-list" | "note" | "project" }){
    localStorage.setItem(new Date().getTime().toString(), JSON.stringify(storevalue));
    props.setdata([...props.data, storevalue]);
  }
  const inputref = useRef()
  function editlocalstorage(
    value: string,e: React.MouseEvent<HTMLButtonElement, MouseEvent>  ) {
    e.preventDefault();
    setstorageitem({item:value,key:new Date().getTime().toString(),judul:"ini adalah judul",type:"to-do-list"})
    props.setnote("")
    inputref.current.value = ""
  }
  return <form action="" onSubmit={(e) => editlocalstorage(props.note,e)} method="post">
     <Inputnote
          inputref={inputref}
          style="border border-black outline-none text-xl text-blue-400"
          type="text"
          identity="addnote"
          textnote={props.note}
          usetextnote={props.setnote}
        />
        <Button style="bg-blue-400 px-3 py-1" text="create" />
     </form>;
}
