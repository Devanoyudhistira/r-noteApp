/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import NoteForm from "./components/form";
import Navbar from "./components/navbar";
import Notewrap from "./components/notewrap";
import Note from "./components/note";

export default function App() {
  const [note, setnote] = useState("");
  const [data, setdata] = useState([]);

  useEffect(() => {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const storageitem = localStorage.getItem(key!);
      let datas = {item:storageitem,key:key}
      let parseitem;
      try{
        parseitem = JSON.parse(storageitem!)
      }
      catch{
        parseitem = storageitem
      }
      datas = parseitem
      console.log(datas)
      items.push(datas);
    }
    setdata([...data,...items]);
  }, []);
  


  return (
    <>
      <Navbar />
      <NoteForm
        setdata={setdata}
        data={data}
        note={note}
        setnote={setnote}
      ></NoteForm>
      <Notewrap>
        <Note setdata={setdata} data={data} />
      </Notewrap>
    </>
  );
}
