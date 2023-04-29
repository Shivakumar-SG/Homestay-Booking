import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const body = document.querySelector('body');
    if (showPopup) {
      body.classList.add('popup-open');
    } else {
      body.classList.remove('popup-open');
    }
  }, [showPopup]);

  const handleOption1Click = () => {
    navigate('/homepage-Ckm');
    setShowPopup(false);
  };

  const handleOption2Click = () => {
    navigate('/homepage-SKL');
    setShowPopup(false);
  };

  return (
    <Container fluid className="homestay-container">
      <Row>
        <Col>
          <h1>Beautiful Homestay in the Mountains</h1>
        </Col>
        <Col>
          <button type="button" onClick={() => setShowPopup(true)}>Book Now</button>
        </Col>
      </Row>
      {showPopup && (
        <div className="popup">
          <h2>Select an Option:</h2>
          <button className="ckm-btn btn-block" onClick={handleOption1Click}>See Homestays in Ckm</button>
          <br/>
          <button className="skl-btn btn-block" onClick={handleOption2Click}>See Homestays in Sakaleshpura</button>
          <br/>
          <button onClick={() => setShowPopup(false)}>Close</button>
        </div>
      )}
    </Container>
  );
}

export default Home;
