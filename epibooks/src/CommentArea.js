import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import dati from './books/history.json'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function CommentArea() {
  const [show, setShow] = useState(true);
/*   const [color, setColor] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); */

  const handleClose = () => {
    setShow(false);
   /*  setColor(false); */
  };

  const handleShow = () => {
    setShow(true);
    /* setColor(true);
    setSelectedBook(); */
  };



  return (
    <>
  
        <Button
          onClick={ handleShow}
          
          /* style={{ height: '480px', width: '240px', position: 'absolute', bottom: '0', backgroundColor: 'transparent', }} */
        >Show Commet
      </Button>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Add your comment area here */}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default CommentArea;
