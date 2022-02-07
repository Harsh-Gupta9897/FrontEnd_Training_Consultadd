import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/BookDetails.css"


const Posts = (props) => {

    const [posts, setPosts] = useState([])
    const [toggle, setToggle] = useState(false)


    useEffect(()=>{
        // main api call
        // ComponentDidMount
        getPosts()
    }, [])

    const getPosts=()=>{
        // axios 
        // axios.get()
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data => {
            //
            
            setPosts(data)
            
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
    }

    // const onSort = () => {
    //     let tempArray = [...posts]
    //     tempArray.sort()
    //     setPosts(tempArray)
        
    // }

    const onToggle = () => {
        setToggle(!toggle)
        
    }

    

    
    return(
        <div>
            <h1 style={{ color:"grey"}}>Book List</h1>
            <button onClick={onToggle} style={{color: toggle? 'salmon' : 'brown' , marginLeft:"50%"}} className="">
                Toggle
            </button>
            
            <table style={{ marginTop: "2rem",border:"2rem"}}>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Details</th>
          </tr>
          {toggle &&
            posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>

                <td>
                  <Link to={`/bookDetails/${post.id}`}>
                    <button>Show Book</button>
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
        </div>
        
    )
    

}

export default Posts;