import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
    return (

        <div className='blog-card'>
            <div className='card-image'>
                <img src='/images/blog-1.jpg' className='img-fluid w-100' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>Aug18 ,2023</p>
                <h5 className='title'> A Beautiful sunday morning renaissance</h5>
                <p className='desc'>
                    Irusu Monster VR Headset with Remote Controller and Conductive Touch Button for VR Supported Smartphones
                </p>
                <Link to="/blog/:id" className='button'>Read More</Link>
            </div>
        </div>
    )
}

export default BlogCard
