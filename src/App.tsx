import NoteForm from "./components/form";
import Inputnote from "./components/inputnote";
import Labelinput from "./components/labelInput";



function editlocalstorage(value:string,e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
   e.preventDefault()
   localStorage.setItem("name",value)
}

export default function App(){
  return( 
      <>
      <NoteForm>
         <Labelinput inputname="addnote" ngclass="text-2xl" >
            add note
            <Inputnote style="border border-black outline-none text-xl text-blue-400" type="text" identity="addnote" />
         </Labelinput>
         <button type="submit" onClick={e =>editlocalstorage("oke",e)} className="bg-blue-400 px-3 py-1">tambah</button>
      </NoteForm>
      </>
   )
}