import { useEffect, useState } from "react"

const BASE_URL = "https://jsonplaceholder.typicode.com/posts"

interface Post {
    "userId": number,
      "id": number,
      "title": string,
      "body": string,
    }


async function getPost(): Promise<Post[]>{
    const response = await fetch(BASE_URL);
    const responseData: Post[] = await response.json();
    console.log("new ",responseData);
    return responseData;   
}


function NewApi() {
    const [posts, SetPost] = useState<Post[]>([]);

    useEffect(()=>{
    (
       async ()=>{
        const postsData = await getPost();
        SetPost(postsData)
       })()
    },[])

  return (
    <>
        <div className="text-center">NEWS</div>
        <ul>
            {posts.map((post)=>{
                return (
                    <li key={post.id}>
                        <span className="fw-bolder">{post.title}</span>
                        <p>{post.body}</p>
                    </li>
                )
            })}
        </ul>
    </>
  )
}

export default NewApi