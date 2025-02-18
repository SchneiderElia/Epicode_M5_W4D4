
import React from 'react';
import { useParams } from 'react-router-dom';
import InfoBooks from "../books/history.json"
import { Container } from 'react-bootstrap';
function BooksDetails() {
    const { asin } = useParams();
    const book = InfoBooks.find((book) => book.asin === asin);

    if (!book) {
        return <div>Book not found</div>;
    }

    return (
    
        <Container className='mt-5'>
            <Container className=' mt-5 d-flex  space-between'>
            <h4>{book.title}</h4>
            <p>Price: €{book.price}</p>
            </Container>
            <div className='col-6 mt-5 ms-3'>
            <img style={{width:"320px", height:"500px", objectFit: 'cover'}} src={book.img} />
            </div>
            <div className='col-6'>

            </div>

        </Container>
    
   
    );
}

export default BooksDetails;

