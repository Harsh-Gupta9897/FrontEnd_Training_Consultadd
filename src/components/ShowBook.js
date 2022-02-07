import react, { useEffect, useState } from "react";


const ShowBook = (props) => {
    const [book, setBook] = useState({})
    console.log(props)

    const getBook = () => {
        let BookId = props["match"]["params"]["id"]
        fetch("https://jsonplaceholder.typicode.com/posts/" + BookId)
        .then((res) => {
            // console.log(res)
            return res.json()
        }).then((data) => {
            console.log(data)
            setBook(data)

            
        })
    }

    useEffect(()=>{
        getBook()
    },[])

    
    return (
        <div style={{ marginTop: "2rem", border: "1px solid gray", padding:"2px", justifyItems:"center"}}>
            <div><h1>BookID: {book.id}</h1></div>
            <div><h2>AuthorID: {book.userId}</h2></div>
            <div><h4>Title: {book.title}</h4></div>
            <div><p> {book.body}</p></div>
        </div>
    )
}

export default ShowBook;