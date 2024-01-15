function ListOfHeroes(props) {

    return (
        <>
            <h2>List of heroes</h2>
            <ul>
                {/* The props.children is a special prop that allows us to pass children elements to the component */}
                {props.children}
            </ul>
        </>
    )
}

export default ListOfHeroes;