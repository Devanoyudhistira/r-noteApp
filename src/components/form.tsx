import {FormEventHandler, ReactNode } from "react";


export default function NoteForm(props:{ children:ReactNode,submitevent: FormEventHandler<HTMLFormElement> | undefined}) {
  return <form action="" onSubmit={props.submitevent} method="post"> {props.children} </form>;
}
