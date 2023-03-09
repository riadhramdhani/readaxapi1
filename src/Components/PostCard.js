import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card'
import { delete_posts, edit_posts } from '../redux/action/Postaction';
const PostCard = ({el}) => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [namee,setName]=useState(el.namee)
    const [body,setBody]=useState(el.body)
    const [title,setTitle]=useState(el.title)
    const [imageUrl,setImageUrl]=useState(el.imageUrl)
    const handleEdit=()=>{
        dispatch(edit_posts(el.id,{namee,imageUrl,title,body}),handleClose())
    }
  return (
    <div> <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={el.imageUrl} />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
        {el.namee}
      </Card.Text>
      <Button variant='danger' onClick={()=>dispatch(delete_posts(el.id))}>delete</Button>
      <Button variant="warning" onClick={handleShow}>
        edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="enter name" onChange={(e)=>setName(e.target.value)} value={namee} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="enter imageURL" onChange={(e)=>setImageUrl(e.target.value)} value={imageUrl} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="enter title" onChange={(e)=>setTitle(e.target.value)} value={title} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>body</Form.Label>
        <Form.Control type="text" placeholder="enter body"  onChange={(e)=>setBody(e.target.value)} value={body}/>
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="info" onClick={handleEdit} >
            update
          </Button>
        </Modal.Footer>
      </Modal>
    </Card.Body>
  </Card></div>
  )
}

export default PostCard