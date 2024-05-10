import PageWithAllPost from "../page"
import { Suspense } from "react"
import ComponentUsingArroba from "@/../components/component"
import componentWithNormalNotation from "../../../../components/component"
import "./styles.css"


async function loadPost(id: string | undefined) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    const data = await res.json()
    console.log(data)
    return data
}


export default async function Page(props: any) {

    console.log(props)

    const post = await loadPost(props.params.id)

    return (
        <>
            <div>Post {props.params.id}</div>
            <div className="claseX">
                <h1>{post.title}</h1>
                <h3>{post.body}</h3>
            </div>

            <div>Otras publicaciones</div>
            <br />


            <hr></hr>

            
            <ComponentUsingArroba/>

            <Suspense fallback={<div>Cargando publicaciones xd</div>}> {/*Esto hace que lo que ya cargó salga y que esto lo haga despues */}
                <PageWithAllPost />
            </Suspense>


        </>
    )
}
