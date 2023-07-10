import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactDOM } from 'react';
import FormMahasiswa from './forminputmahasiswa';
import { useState,useEffect } from "react";

export default function ProfileForm() {
  return (
    <FormMahasiswa />
    )
}
const [post, setPost] = useState(null);
  useEffect(() => {
    async function getPost() {
      const response = await client.get("/1");
      setPost(response.data);
    }
  getPost();
}, []);


if (!post) return "No post!"
  async function deletePost() {
  await client.delete("/1");
  alert("Post deleted!");
  setPost(null);
}

<div>
<h1>{post.title}</h1>
<p>{post.body}</p>
<button onClick={deletePost}>Delete Post</button>
</div>
