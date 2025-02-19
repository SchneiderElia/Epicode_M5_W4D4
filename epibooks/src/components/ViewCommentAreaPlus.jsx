import React from 'react'
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function ViewCommentAreaPlus({asin}) {
  const [show, setShow] = useState(false);
/*   const [color, setColor] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); */
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  console.log(asin)


  const handleClose = () => {
    setShow(false);
   /*  setColor(false); */
  };

  const handleShow = () => {
    setShow(true);
    /* setColor(true);
    setSelectedBook(); */
  };

  useEffect(() => {
    const fetchComments = async () => {
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
                headers: {
                    Authorization: "Bearer YOUR_STRIVE_SCHOOL_API_KEY" // Replace with your API Key
                }
            });
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setComments(data);
        } catch (error) {
            console.error("Error fetching comments:", error);
            setError(error.message); // Store the error message in state
        }
    };

    if (show && asin) { // Only fetch if the offcanvas is open *and* we have an asin
        fetchComments();
    } else {
        setComments([]); // Clear comments when offcanvas closes
        setError(null); // Clear any previous errors
    }

}, [show, asin]); // Add asin to the dependency array

const deleteComment = async (commentId) => {
  try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
          method: "DELETE",
          headers: {
              Authorization: "Bearer YOUR_STRIVE_SCHOOL_API_KEY" // Replace with your API Key
          }
      });

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("Comment deleted successfully!");
      setComments(comments.filter(comment => comment._id !== commentId)); // Update the comments state
  } catch (error) {
      console.error("Error deleting comment:", error);
      setError(error.message);
  }
};

  return (
    <>
  
        <Button
          onClick={ handleShow}
          
          
        >Show Commet
      </Button>
      <Offcanvas show={show} onHide={handleClose} backdrop="static" placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}
                    {comments.length === 0 && !error && <p>No comments yet.</p>} {/* Message if no comments and no error*/}
                    {comments.map((comment) => (
                        <div key={comment._id}>
                            <p>{comment.comment}</p>
                            <p>Rating: {comment.rate}</p>
                            <Button variant="danger" onClick={() => deleteComment(comment._id)}>Delete</Button>
                            <hr />
                        </div>
                    ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ViewCommentAreaPlus;
