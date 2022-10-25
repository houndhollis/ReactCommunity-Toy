import React from 'react'
import { Form } from 'react-bootstrap'
import axios from 'axios'

const ImageUpload = (props) => {

const FileUpload = (e) => {
  let formData = new FormData()
  formData.append('file',(e.target.files[0]))
  axios.post('/api/post/image/upload', formData)
  .then(((res)=>props.setImage(res.data.filepath)))
}

  return (
    <div>
      <Form.Control type='file' accept='image/*' onChange={(e)=>FileUpload(e)}/>
    </div>
  )
}

export default ImageUpload