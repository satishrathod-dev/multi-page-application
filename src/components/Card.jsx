import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function DetailPage() {
  const { id } = useParams();
  const post = useSelector((state) =>
    state.posts.posts.find((post) => post.id === parseInt(id))
  );

  if (!post) {
    return <div>Post not found</div>;
  }

   return (
    <div className='bg-dark'>
        <p className="text p-2 border-bottom border-muted border-opacity-25 text-white">Social Media App</p>
        <p className='fs-4 p-2 text-white'>Details Page For Post With ID {post.id}</p>
        <div className="container-fluid d-flex justify-content-start">
        <div className="card text-white bg-transparent border border-0 fs-4 justified-text" style={{ width: '50%' }}>
            <img src={`https://picsum.photos/200?random=${post.id}`} className="det-img" height={300} width={300} alt="img"/>
            <div className="card-body">
                <p className=''>User ID : {post.id}</p>
                <p className="card-title">Title : {post.title}</p>
                <br></br>
                <p className="card-title">Body : {post.body}</p>
            </div>
        </div>
    </div>
    </div>
);
}

 export default DetailPage
