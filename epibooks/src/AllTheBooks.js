import React from 'react'
import Card from 'react-bootstrap/Card'
import dati from './books/history.json'
import { useState, useRef } from 'react'
import SearcBar from './SearchBar'
import Offcanvas from 'react-bootstrap/Offcanvas'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import CommentArea from './CommentArea'
import Button from 'react-bootstrap/Button';
import CommentAreaNew from './ShowComment'
import { Link } from 'react-router-dom';

/* /* function CardBooks(props) {
  const [color, setColor] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const offcanvasRef = useRef(null);
  const offcanvasBodyRef = useRef(null); // Mantieni il ref al body

  const handleClick = () => {
      setColor(!color);
      setShowOffcanvas(true);
  };

  const handleCloseOffcanvas = () => {
      setShowOffcanvas(false);
      setColor(false);
  };


  return (
      <Card
          className='p-0'
          style={{ width: '240px', cursor: 'pointer', boxShadow: color ? '0 0 15px 3px green' : 'none' }}
          onClick={handleClick}
      >
          <div className='image-container'>
              <img src={props.img} alt={props.title} />
          </div>
          <Card.Body style={{ height: '120px' }}>
              <p className='title'>{props.title}</p>
          </Card.Body>
          <div className='px-3'>
              <p>€{props.price}</p>
          </div>

          <Offcanvas
              ref={offcanvasRef}
              show={showOffcanvas}
              onHide={handleCloseOffcanvas} // Gestisce la chiusura tramite pulsante
              backdrop={false}
              placement="end"
              style={{ width: '640px' }}
          >
              <Offcanvas.Header closeButton onHide={handleCloseOffcanvas}>
                  <Offcanvas.Title>{props.title}</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body ref={offcanvasBodyRef}>
                  <div>
                      <img src={props.img} style={{ width: '200px' }} alt={props.title} />
                  </div>
                  <p>Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.</p>
                  <Form>
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
                  </Form>
              </Offcanvas.Body>
          </Offcanvas>
      </Card>
  );
}
 */


function CardBooks(props) {
    /*   {const [color, setColor] = useState(false);
    
      const handleClick = () => {
          setColor(!color);
           
      }*/

    const [show, setShow] = useState(false);
    const [color, setColor] = useState(false);

    const handleClose = () => {
        setShow(false);
        setColor(false);
    };

    const handleShow = () => {
        setShow(true);
        setColor(true);
    };

    return (
        <Card
            className='p-0'
            style={{ width: '240px', cursor: 'pointer', }}
        /* onClick={handleClick} */
        >
            <div className='image-container'>
                <img src={props.img} alt={props.title} />
            </div>
            <Card.Body style={{ height: '120px' }}>
                <p className='title'>{props.title}</p>
            </Card.Body>
            <div className='px-3'>
                <p>€{props.price}</p>
            </div>
            
            <Button
                onClick={handleShow}
                style={{ height: '480px', width: '240px', position: 'absolute', bottom: '0', backgroundColor: 'transparent', boxShadow: color ? '0 0 15px 3px green' : 'none' }}
            >
            </Button>
            <Offcanvas show={show} onHide={handleClose} backdrop="static" placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Leave a Comment</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='row'>
                        <div className='col-6'>
                            <img src={props.img} alt={props.title} style={{ width: '150px' }} />
                        </div>
                        <div className='col-6'>
                            <p>{props.title}</p>
                            <CommentArea /> {/* bottone per vedere l'are dei commenti aggiuntiva */}
                            <Button>hello</Button>

                           
                            <Link to={`/books/:${props.asin}`}> 
  <Button variant="secondary">Vai ai dettagli</Button> 
</Link>
                   
                        </div>
                    </div>
                    <div className='mt-5'>
                        <form>
                            <Form.Label>Range</Form.Label>
                            <Form.Range />

                            <Form.Control className='mb-3' type="text" placeholder="Name" />
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '100px' }}
                                />
                                <Button variant="primary" type="submit" style={{width:'370px', marginTop:'20px'}}>
        Add Commnet
      </Button>
                            
                        </form>
                    </div>
                    <CommentAreaNew />

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