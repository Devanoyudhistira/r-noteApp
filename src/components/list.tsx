const List = (props:{data}) =>{
    return(
        <ul>
            {props.data.map(e => <li> {e} </li>)}
        </ul>
    )
}

export default List