import React from 'react'
import { Link } from 'react-router-dom'

function ItemCard({post}) {
  return (
    <div  className="col-3 mb-3">
        <div className="card text-white border border-light border-opacity-25 p-2" style={{ width: '94%',margin:'3%' }}>
            <img src={`https://picsum.photos/200?random=${post.id}`} className="card-img-top" alt="img"/>
            <div className="card-body ">
                <p className="card-text">User ID: {post.userId}</p>
                <p className="card-title card-text">
                    Title : {post.title.length > 20 ? `${post.title.substring(0, 20)}...` : post.title}
                </p>
                <p className="card-text">
                    Body :{post.body.length > 40 ? `${post.body.substring(0, 40)}` : post.body}
                </p>
                <p className='card-text'><Link style={{"color":"white"}} to={`/item/${post.id}`} className='text-decoration-none'> Read More...</Link></p>
            </div>
        </div>
    </div>
  )
}

export default ItemCard
