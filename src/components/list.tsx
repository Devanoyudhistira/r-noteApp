import { JSXElementConstructor, MouseEventHandler, ReactElement, ReactNode, ReactPortal } from "react"

const List = (props:{data,deletefunction: MouseEventHandler<HTMLButtonElement> | undefined}) =>{
    return(
        <ul  className="flex flex-col gap-2">
            {props.data.map((e: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined) => <li className="text-blue-300">  <button className="bg-red-600 text-white px-3 py-1 text-xl font-bold" onClick={() => props.deletefunction(e)}>delete</button> {e} </li>)}
        </ul>
    )
}

export default List