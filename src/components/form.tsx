import Inputnote from "./inputnote";
import Button from "./button";
import { MouseEvent, useRef } from "react";
import Selectinput from "./selectinput";

export default function NoteForm(props: {
  judul: string;
  setjudul: (arg0: string) => void;
  type: string;
  settype: (arg0: string) => void;
  note: string;
  setnote: (arg0: string) => void;
  setdata: (arg0: (string | { item: string; key: string })[]) => void;
  data: Array<string>;
}) {
  function setstorageitem(
    storevalue:
      | string
      | {
          item: string;
          key: string;
          judul: string;
          type: "to-do-list" | "note" | "project" | string;
        }
  ) {
    localStorage.setItem(
      new Date().getTime().toString(),
      JSON.stringify(storevalue)
    );
    props.setdata([...props.data, storevalue]);
  }
  const inputref = useRef();
  const judulref = useRef();
  function editlocalstorage(
    value: string,
    judulnote: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    setstorageitem({
      item: value,
      key: new Date().getTime().toString(),
      judul: judulnote,
      type: props.type,
    });
    props.setnote("");
    props.setjudul("");
    inputref.current.value = "";
    judulref.current.value = "";
  }
  return (
    <form
      action=""
      onSubmit={(e) => editlocalstorage(props.note, props.judul, e)}
      method="post"
    >
      <Inputnote
        tagline="isi"
        inputref={inputref}
        identity="addnote"
        textnote={props.note}
        usetextnote={props.setnote}
      />
      <Inputnote
        tagline="judul"
        inputref={judulref}
        identity="judul"
        textnote={props.judul}
        usetextnote={props.setjudul}
      />
      <Selectinput data={["note","to-do-list","project"]} usetype={props.settype} />
      <Button style="bg-blue-400 px-3 py-1" text="create" />
    </form>
  );
}
