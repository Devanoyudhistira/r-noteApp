export default function Notewrap(props:{children}){
    return <main className="grid grid-cols-2 gap-x-1 gap-y-2 box-border px-2 w-screen">
        {props.children}
    </main>
}