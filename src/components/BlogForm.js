import { useState } from "react";

const BlogForm = () => {
  const[title, setTitle] = useState('');
  const[body, setBody] = useState('');
  const onSubmit = () => {
    console.log(title, body);
  };

  return(
    <div className='container'> 
            <h1>Create a blog post</h1>
          <div className='mb-3'>
            <label className='form-label'>Title</label>
            <input
              className='form-control'
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          <div className='mb-3'>
            <label className='form-label'>Body</label>
            <textarea
              className='form-control'
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            />
          </div>

          <button 
            className='btn btn-primary'
            onClick={onSubmit}>
            post
            </button>
        </div>
   ); 
};

export default BlogForm;