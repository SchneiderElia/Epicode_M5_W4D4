import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import ViewCommentAreaPlus from "./ViewCommentAreaPlus";

function Card({ img, title, price, asin, props }) {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState(false);
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("")
  const [latestComment, setLatestComment] = useState(null);
  const [editingComment, setEditingComment] = useState(null);
  const [editedCommentText, setEditedCommentText] = useState("");

  const handleClose = () => {
    setShow(false);
    setColor(false);
  };

  const handleShow = () => {
    setShow(true);
    setColor(true);
  };

  const addPost = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_STRIVE_SCHOOL_API_KEY",
        },
        body: JSON.stringify({
          comment: comment,
          rate: parseInt(rating),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Error adding comment: ${response.status} - ${errorData.message || 'Something went wrong'}`);
      }

      console.log("Comment added successfully!");

      handleClose();
      setRating("");
      setComment("");


    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost();
  }

  const editComment = async (commentId) => {

    if(editingComment === commentId) {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
                method: "PUT",
                headers: {
                    Authorization: "Bearer YOUR_STRIVE_SCHOOL_API_KEY",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({comment: editedCommentText, rate: latestComment.rate})
            })
            if(!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            setEditingComment(null)
        } catch (error) {
            console.error("Error updating comment", error)
        }

    } else {
        setEditingComment(commentId)
    }


}



const deleteComment = async (commentId) => {
    // ... (delete logic - same as before)
    setLatestComment(null)
};



  return (
    <>
      <div>
        <div style={{ width: "220px", height: "330px" }}>
          <Button
            onClick={handleShow}
            style={{
              width: "220px",
              height: "330px",
              position: "absolute",
              backgroundColor: "transparent",
              boxShadow: color ? "0 0 15px 3px green" : "none",
            }}
          ></Button>
          <img
            style={{
              width: "220px",
              height: "330px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
            src={img}
          />
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
                <form onSubmit={handleSubmit}>
                  <Form.Label>Rate this book</Form.Label>
                  <Form.Select id="rate">
                    <option style={{ color: "grey" }}>Selected own rating</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Select>
                  <Form.Control
                    id="comment"
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
            {latestComment && ( // Conditionally render the latest comment
                <div className="mt-3">
                    <h5>Latest Comment:</h5>
                    {editingComment === latestComment._id ?
                        (<textarea value={editedCommentText} onChange={e => setEditedCommentText(e.target.value)} />)
                        :
                        (<p>{latestComment.comment}</p>)}
                    <p>Rating: {latestComment.rate}</p>
                    <Button onClick={() => editComment(latestComment._id)}>{editingComment === latestComment._id ? "Save" : "Edit"}</Button> {/* Edit button */}
                    <Button variant="danger" onClick={() => deleteComment(latestComment._id)}>
                        Delete
                    </Button>
                </div>
            )}
          </Offcanvas>
        </div>
        <div className="d-flex flex-column">
          <p
            className="mt-2"
            style={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              width: "220px",
              color: "whitesmoke",
            }}
          >
            {title}
          </p>
          <div className="d-flex justify-content-between">
            <h6 style={{ color: "whitesmoke" }}>Price: € {price}</h6>
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
