
import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { useState } from 'react'

export function SearchBar (props) {

    const[search, setSearch] = useState("")
    const handleInputChange = (event) => {
        setSearch(event.target.value)
        props.onSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(search);
    }

    return(
        <Form className="d-flex mb-3" style={{width:'93%'}} onSubmit={handleSubmit}>
            <Form.Control
                type="search"
                placeholder="Cerca libri per titolo..."
                className="me-2"
                aria-label="Search"
                value={search}
                onChange={handleInputChange}
            />
            <Button variant="outline-success" type="submit">Cerca</Button>
        </Form>
    )
}


