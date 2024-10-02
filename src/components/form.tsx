import Inputnote from "./inputnote";
import Button from "./button";
import { MouseEvent, useRef } from "react";


export default function NoteForm(props:{note: string,setnote: (arg0: string) => void,setdata: (arg0: (string | { item: string; key: string; })[]) => void,data: Array<string>}) {
  function setstorageitem(storekey:string,storevalue){
    localStorage.setItem(new Date().getTime().toString(), storevalue);
    props.setdata([...props.data, {item:storevalue,key:storekey}]);
  }
  const inputref = useRef()
  function editlocalstorage(
    value: string,e: React.MouseEvent<HTMLButtonElement, MouseEvent>  ) {
    e.preventDefault();
    setstorageitem(new Date().getTime().toString(),value)
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
