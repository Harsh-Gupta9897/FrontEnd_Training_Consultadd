import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "../css/BookDetails.css"
import Table from './table';


const Posts = (props) => {

    const [posts, setPosts] = useState([])
    const [toggle, setToggle] = useState(false)
    const [count, setCount] = useState(0)

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

    const onSort = (val) => {
        let tempArray = [...posts]
        if(val === 'id'){
          tempArray.sort((a,b) => (a.id < b.id ? 1:-1));
          setPosts(tempArray)
          return;
        }
        else if(val=== 'title'){
          tempArray.sort((a,b) => (a.title.toUpperCase() > b.title.toUpperCase() ? 1:-1));
          setPosts(tempArray)
          return ;
        }
        else{
          tempArray.sort((a,b)=>(a.id>b.id ?1 :-1))
          setPosts(tempArray)
        }
        
        
    }

    const onToggle = () => {
        let radioId = document.getElementById("id")
        let radiotitle = document.getElementById("title")
        if(toggle){
          radioId.disabled = true
          radioId.checked=false 
          radiotitle.disabled =true
          radiotitle.checked =false
          onSort("idAsc")

        }else{
          radioId.disabled=false 
          radiotitle.disabled= false
        }setToggle(!toggle)
        
    }

    const handleRadio = (val) => {
      let rd = document.getElementById(val);
      console.log(rd.checked, count);
      if(!rd.checked){
        onSort("idAsc")
      }else{
        onSort(val)
      }
    }

    

    
    return(
        <div>
            <h1 style={{ color:"grey"}}>Book List</h1>
            <button onClick={onToggle} style={{color: toggle? 'salmon' : 'brown' , marginLeft:"50%"}} className="">
                Toggle
            </button>
            <input type="checkbox"  id ="id"  disabled onChange={()=> handleRadio("id")}/>
            <label >Sort on Id (Descending)</label>
            <input type="checkbox"  id ="title"  disabled onChange={()=> handleRadio("title")}/>
            <label>Sort on title (Ascending)</label>
            
            <Table toggle={toggle} posts={posts}/>
        </div>
        
    )
    

}

export default Posts;