"use client"

import Link from "next/link";
import "./Posts.css"

function PostCard({ posts }) {
    return (
        <div className="grid">
            {posts.map((item) => (
                <div key={item.id}>
                    <Link href={`/posts/${item.id}`}> <h3>{item.id} . {item.title}</h3> </Link>
                    <p>{item.body}</p>
                    <button onClick={() => {
                        alert('Funcina');
                    }}> Click </button>
                </div>
            ))}
        </div>
    )
}

export default PostCard