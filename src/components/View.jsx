import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const View = () => {
    var[update,setupdate]=useState(false)
    var[selected,setselected]=useState([])
    var[students,setstudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/products")
        .then(response=>{
            setstudents(students=response.data)
            console.log(students)
        })
        .catch(error=>console.log(error))
    },[])
    const deleteValue=(id)=>{
        console.log(id)
        axios.delete("http://localhost:3005/products"+id)
        .then(response=>{
            alert("DELETE")
            window.location.reload(false)
        })
    }
  return (
    <div>
      
    </div>
  )
}

export default View

