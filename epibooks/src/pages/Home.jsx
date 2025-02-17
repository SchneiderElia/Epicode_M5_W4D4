import React from "react"
import Container from 'react-bootstrap/Container'
import AlertBanner from "../components/AlertBanner"
import AllTheBooks from "../AllTheBooks"

function Home() {
    return(
        <Container className='pt-5'>
             <AlertBanner />

             <AllTheBooks className='mt-5'/>
        </Container>
    )
}

export default Home