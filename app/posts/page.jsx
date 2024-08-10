import { resolve } from 'styled-jsx/css';
import PostCard from '../../components/PostCard'

async function loadPosts(){
    //Crear una peticion
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    //await new Promise((resolve) => setTimeout(resolve,3000))

    return data
}

async function PostPages() {

 const posts = await loadPosts();
//  console.log(posts)


  return (
    <PostCard posts={posts}></PostCard>
  )
}

export default PostPages