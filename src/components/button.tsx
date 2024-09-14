export default function Button(props:{style:string,text:string}){
    return <button className={props.style} > {props.text} </button>
}