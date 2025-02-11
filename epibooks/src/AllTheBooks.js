import React from 'react'
import Card from 'react-bootstrap/Card'
import dati from './books/history.json'
import { useState } from 'react'
import SearcBar from './SearchBar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';




function CardBooks(props) {

  const [color, setColor] = useState(false);
  const [show, setShow] = useState(false);

  const handelClick = () => {
    setColor(!color);
    setShow(!show);

  }

  const handleClose = () => setShow(false);

  return (
    <Card className='p-0' style={{ width: '240px', cursor: 'pointer', boxShadow: color ? '0 0 15px 3px green' : 'none' }} onClick={handelClick}>
      {/* <Card.Img variant="top" src={props.img}/> */}
      <div className='image-container'>
        <img src={props.img} />
      </div>
      <Card.Body style={{ height: '120px' }}>
        <p className='title'>{props.title}</p>
      </Card.Body>
      <div className='px-3'>
        <p>€{props.price}</p>
      </div>

      <Offcanvas show={show} onHide={handleClose} placement="end" scroll={true} backdrop={true}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Leave a Comment</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body >
          
          <div>
            <img src={props.img} style={{ width: '200px' }} />
          </div>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
          <form>
            <Form.Label>Range</Form.Label>
            <Form.Range />

            <Form.Control className='mb-3' type="text" placeholder="Name" />
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '100px' }}
              />
            </FloatingLabel>
          </form>
        </Offcanvas.Body>
      </Offcanvas>
    </Card>
  );
}

function AllTheBooks() {

  const [libriFiltrati, setLibriFiltrati] = useState(dati);

  const handleSearch = (searchTerm) => {
    const filtered = dati.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setLibriFiltrati(filtered);
  };

  return (
    <div className='row gap-4 justify-content-center'>
      <SearcBar onSearch={handleSearch} />
      {libriFiltrati.map(books => (
        <CardBooks
          key={books.asin}
          img={books.img}
          title={books.title}
          price={books.price}
        >
        </CardBooks>
      ))}
    </div>
  )
}


export default AllTheBooks