import React from "react";
import Navigation from "../components/Navigation";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  );
};

export default MainLayout;
