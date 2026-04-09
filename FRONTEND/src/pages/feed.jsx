import React,{useState,useEffect} from 'react'
import axios from 'axios'
const feed = () => {
    const [posts, setPosts] = useState([
        {
            __id:1,
            image:'https://img.freepik.com/free-photo/beautiful_1203-2633.jpg?semt=ais_hybrid&w=740&q=80',
            caption:'Beautiful sunset at the beach'

        }
    ])
    useEffect   (()=>{
            axios.get('http://localhost:3000/posts')
            .then((res)=>{
                setPosts(res.data.posts);
            })
        },[])             
  return (
    <section className='feed-section'>
        {
            posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.__id} className='post-card'>
                        <img src={post.image} alt='Post' />
                        <p>{post.caption}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )
        }
    </section>
  )
}

export default feed
