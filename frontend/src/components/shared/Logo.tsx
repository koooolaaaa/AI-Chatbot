import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <div style={{
        display: 'flex', 
        marginRight:"auto", 
        alignItems: "center", 
        gap: "8px",
        }}
        >
            <Link to={'/'}>
                <img src="openai.png" alt="openai" width={'30px'} className="image-inverted"/>
                    <Typography sx={{ display: {md:"block", sm:"none", xs:"none"}, mr:"auto", fontWeight:"800", textShadow: "2px 2px 20px #000", }}></Typography>

            </Link>
        </div>
  )
}

export default Logo