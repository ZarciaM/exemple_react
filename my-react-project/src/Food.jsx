function Food(){
    const Food1 = "orange";
    const Food2 = "banana";
    return(
        <ul>
            <li>Apple</li>
            <li>{Food1}</li>
            <li>{Food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;