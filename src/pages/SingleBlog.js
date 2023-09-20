import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog from "../images/blog-1.jpg";
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1='blog-wrapper home-wrapper-2 py-5'>
          <div className='row'>
            <div className='col-12'>
              <div className='single-blog-card'>
                <Link to='/blogs' className='d-flex align-items-center gap-10'>
                  <HiOutlineArrowLeft className='fs-4' />Go back to Blogs</Link>
                <h3 className='title'>A Beautiful Sunday Morning Renaissanc</h3>
                <img src={blog} className='img-fluid w-100 my-4' alt='blog' />
                <p>VFX artists create photoreal, digitally-generated imagery. The role requires the seamless integration of these effects into live action in feature films, television and, increasingly, online and console gaming. You'll use the latest technology to produce computer-generated creatures, crowds and other digital assets.</p>
              </div>
            </div>
          </div>
      </Container>
    </>
  )
}

export default SingleBlog
