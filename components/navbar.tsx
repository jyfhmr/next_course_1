import Link from 'next/link'
import React from 'react'

export default function Navbar() {


    return (

            <nav>
                <ul>
                    <Link href="/">Home</Link>
                </ul>
                <ul>
                    <Link href="/about">About</Link>
                </ul>
                <ul>
                    <Link href="/tienda/categorias">Tienda / Categorias</Link>
                </ul>
                <ul>
                    <Link href="/posts">Post</Link>
                </ul>
            </nav>

    )
}
