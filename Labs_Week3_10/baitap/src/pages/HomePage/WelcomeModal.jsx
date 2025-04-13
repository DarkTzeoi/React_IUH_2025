import React, { useState, useEffect } from "react";
import { Button, Carousel, Image, Modal } from "react-bootstrap";
import item1 from "/image.png";
import item2 from "/image2.png";
import item3 from "/image3.png";

const WelcomeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDontShowAgain = () => {
    localStorage.setItem("welcomeModalShown", "true");
    onClose();
  };

  return (
    <Modal size="lg" centered show={isOpen} onHide={onClose} >
      <Modal.Header className="flex flex-col">
        <Modal.Title
          style={{
            fontSize: "40px",
            lineHeight: "56px",
            fontWeight: "700",
            color: "#F44B87FF",
            fontFamily: "Poppins",
            marginTop: "20px",
          }}
        >
          Discover Chefify
        </Modal.Title>
        <p>
          Easy and delicious cooking instructions right here. Start exploring
          now!
        </p>
      </Modal.Header>
      <Modal.Body>
        <Carousel>
          <Carousel.Item>
            <Image
              style={{ objectFit: "cover", width: "800px", height: "500px" }}
              src={item1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ objectFit: "cover", width: "800px", height: "500px" }}
              src={item2}
              width="500px"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              style={{ objectFit: "cover", width: "800px", height: "500px" }}
              src={item3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal.Body>
      <Modal.Footer className="flex flex-col">
        <button
          className="bg-pink-500 px-48 py-2 rounded-xl text-white"
          onClick={onClose}
        >
          Next
        </button>
        <button className="text-pink-500" onClick={onClose}>
          Skip
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default WelcomeModal;
