import { ReactNode } from "react";


export default function NoteForm(props:{ children:ReactNode }) {
  return <form action="" method="post"> {props.children} </form>;
}
