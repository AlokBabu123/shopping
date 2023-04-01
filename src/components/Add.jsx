import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Add = () => {
    const Addstudent=(procs)=>{
        var[input,setinput]=useState(procs.data)
        console.log(props.data)

        const inputhandler=(e)=>{
            const{name,value}=e.target 
            setinput({...input,[name]:value})
        }
        const readvalues=()=>{
            console.log("clicked")
            if(procs.method==='post'){
                axios.post("http://localhost:3005/products",input)
                .then(Response=>{
                    alert('success')
                })
                .catch(Error=>console.log(Error))
            }
        }
    }
  return (
    <div>
      <TextField label='name' name='name' variant='outlined' value={input.name}
      onChange={inputhandeler}></TextField>
      <Typography>{input.name}</Typography>
      <TextField label='brand' name='brand' variant='outlined' value={input.name}
      onChange={inputhandeler}></TextField>
      <Typography>{input.brand}</Typography>
      <TextField label='quantity' name='quantity' variant='outlined' value={input.name}
      onChange={inputhandeler}></TextField>
      <Typography>{input.quantity}</Typography>
      <TextField label='price' name='price' variant='outlined' value={input.name}
      onChange={inputhandeler}></TextField>
      <Typography>{input.price}</Typography>
      <br></br>
      <Button onClick={readvalues} varient="contained" color="success">Add</Button>
    </div>
  )
}

export default Add
