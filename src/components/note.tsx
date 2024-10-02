import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react"
import Singlenote from "./singlenote"

export default function Note(props:{data: (string | number | boolean | ReactElement<never, string | JSXElementConstructor<unknown>> | ReactPortal | Iterable<ReactNode> | null | undefined)[],setdata: (arg0: unknown) => void}){
  function deleteitems(id: string) {
    const updateitem = props.data.filter((item) => item.key !== id);
    localStorage.removeItem(id);
    props.setdata(updateitem);
  }
    return(
      props.data.reverse().map((e: string | number | boolean | ReactElement<never, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined) =>{
        return <Singlenote keyid={e.key} value={e.item}> <button onClick={() => deleteitems(e.key)} className="bg-red-600 text-xl font-robot px-3 py-1" >delete</button> </Singlenote>
      })
    )
}