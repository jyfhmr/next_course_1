"use client"
import React from 'react'

//los metadata no pueden ser usados del lado de use client

export default function Page() {
    
    
    return (
        <>
         
            <h1>Hola esto es el home</h1>
            <button onClick={()=>{alert("a")}}>Click</button>
        </>
    )
}
