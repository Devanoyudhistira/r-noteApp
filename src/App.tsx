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
      const datas = {item:storageitem,key:key}
      items.push(datas);
    }
    setdata([...data,...items.reverse()]);
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
