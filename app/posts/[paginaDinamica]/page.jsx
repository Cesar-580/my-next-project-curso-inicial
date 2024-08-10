import Publicaciones from '../page'
import { Suspense } from 'react';

async function loadPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()
  console.log(data)

  return data
}

async function Page(props) {
  // console.log(props)

  const post = await loadPost(props.params.paginaDinamica)

  return (
    <div>
      <h1>{post.id} . {post.title}</h1>
      <p>{post.body}</p>
      <hr></hr>
      <h3>Otras publicaciones</h3>

      <Suspense fallback={
        <div>Cargando publicaciones...</div>
      }>
        <Publicaciones></Publicaciones>

      </Suspense>
    </div>
  )
}

export default Page