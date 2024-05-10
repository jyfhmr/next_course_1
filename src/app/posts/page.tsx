//puedes usar use client en un componente que vas a llamar desde un componente server para no tener errores

import Link from "next/link";


async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log("el post", data); // Imprime en la consola del navegador
    return data
}


async function  PageWithAllPost() {

    const posts = await fetchData()

    return (
        <div>
            {posts.map((post: any)=>{
                return <div>
                      <Link href={`/posts/${post.id}`}>Ir a la publicacion</Link>
                      <h3>{post.id}</h3>
                      <h2>{post.title}</h2>
                      <h4>{post.body}</h4>
                </div>
            })}
        </div>
    );
}

export default PageWithAllPost;


