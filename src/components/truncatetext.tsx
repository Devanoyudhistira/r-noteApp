export default function Truncatetext(props:{text:string,style:string}){
    return <h1 className={`truncate ${props.style}`}>{props.text}</h1>
}