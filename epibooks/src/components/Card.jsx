import React from "react";
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import ViewCommentAreaPlus from "./ViewCommentAreaPlus";






function Card({ img, title, price, asin,props }) {
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
    <>
    
      <div>
        <div style={{width:"220px", height:"330px"}}>
        <Button onClick={handleShow} style={{ width:"220px", height:"330px", position: 'absolute', backgroundColor: 'transparent', boxShadow: color ? '0 0 15px 3px green' : 'none' }}></Button>
          <img style={{width:"220px", height:"330px", objectFit: 'cover',borderRadius:'10px'}} src={img}/>
          <Offcanvas
      show={show}
      onHide={handleClose}
      backdrop="static"
      placement="end"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Leave a Comment</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <div className="row">
          <div className="col-6">
            <img src={img} style={{ width: "150px" }} />
          </div>
          <div className="col-6">
            <p>{title}</p>
            <ViewCommentAreaPlus />
          </div>
        </div>
        <div className="mt-5">
          <form>
            <Form.Label>Range</Form.Label>
            <Form.Range />
            <Form.Control className="mb-3" type="text" placeholder="Name" />
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
            <Button
              variant="primary"
              type="submit"
              style={{ width: "370px", marginTop: "20px" }}
            >
              Add Commnet
            </Button>
          </form>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
        </div>
        <div className="d-flex flex-column">
            <p className="mt-2" style={{whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '220px'}}>{title}</p>
            <div className="d-flex justify-content-between">
            <h6>Price: € {price}</h6>
            <Link to={`/books/${asin}`}>
            <Button>Book page</Button>
            </Link>
            </div>
        </div>
      </div>
 
    </>
  );
}
export default Card;
