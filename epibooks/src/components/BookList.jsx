import React from "react"
import Card from "./Card" 
import InfoBooks from "../books/history.json"
import SearcBar from "../recycleBin/SearchBar"
import { useState } from "react"



function BookList (){
    console.log("InfoBooks:", InfoBooks)

    const [libriFiltrati, setLibriFiltrati] = useState(InfoBooks);

    const handleSearch = (searchTerm) => {
        const filtered = InfoBooks.filter(book =>
            book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setLibriFiltrati(filtered);
    };

    return(
        <div className="d-flex gap-5 flex-wrap justify-content-center">
            <SearcBar onSearch={handleSearch} />
        {libriFiltrati.map(books => {
            console.log("Libro singolo in map:", books)
            return (
                
                <Card
                    key={books.asin} 
                    img={books.img} 
                    title={books.title}
                    price={books.price}
                    asin={books.asin}
                />
                
            )
        })}
        </div>
)}

export default BookList