function ListOfHeroes (props){

    return(
        <>
            <h2>List of heroes</h2>
            <ul>
                {props.children}
            </ul>
        </>
    )
}

export default ListOfHeroes;