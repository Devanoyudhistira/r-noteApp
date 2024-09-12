import { MouseEvent, useEffect,useState } from "react";
import NoteForm from "./components/form";
import Inputnote from "./components/inputnote";
import List from "./components/list";

export default function App() {
  const [note, setnote] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const storageitem = localStorage.getItem(key!);
      items.push(storageitem);
    }
    setdata([...data,...items])
  }, []);

  function editlocalstorage(
    value: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>  ) {
    e.preventDefault();
    localStorage.setItem(value, value);
    setdata([...data, value]);
  }

  function deleteitems(id: string){
    const updateitem = data.filter(item => item !== id)
    localStorage.removeItem(id)
    setdata(updateitem)
  }

  return (
    <>
      <NoteForm
        submitevent={(e: MouseEvent<HTMLButtonElement, MouseEvent>) =>
          editlocalstorage(note, e)
        }
      >
        <Inputnote
          style="border border-black outline-none text-xl text-blue-400"
          type="text"
          identity="addnote"
          textnote={note}
          usetextnote={setnote}
        />
        <button type="submit" className="bg-blue-400 px-3 py-1">
          tambah
        </button>
      </NoteForm>
      <List data={data} />
    </>
  );
}
