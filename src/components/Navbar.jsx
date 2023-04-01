import { AppBar, Box, Button, Link, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <Box>
        <AppBar>
            <Toolbar>
                <Typography>products</Typography><br/>
                <Button color="inherit"><Link to ="/"style={{color:"white",textDecoration:'none'}}>view</Link></Button>
                <Button align="center" color="inherit"><Link to="/add" style={{color:"white",textDecoration:'none'}}></Link></Button>
            </Toolbar>
        </AppBar>
    </Box>
  )
}

export default Navbar
