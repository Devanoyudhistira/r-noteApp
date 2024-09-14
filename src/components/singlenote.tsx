import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Singlenote(props:{value: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined,children: string | number | boolean | ReactElement<unknown, string | JSXElementConstructor<unknown>> | Iterable<ReactNode> | ReactPortal | null | undefined,keyid:string}){
    return (<div key={props.keyid} className="text-white font-xl bg-red-400"> 
    {props.value} {props.children}
    </div>)
}