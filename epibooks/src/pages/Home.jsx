import React from "react";
import Container from "react-bootstrap/Container";
import AlertBanner from "../components/AlertBanner";
import BookList from "../components/BookList";


function Home() {
  return (
    <Container className="pt-5">
      <AlertBanner />
        <BookList />
    </Container>
  );
}

export default Home;
