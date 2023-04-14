import React, { useState, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { GlobalState } from '../../GlobalState';

const HomePage = () => {
  const state = useContext(GlobalState);
  const [data] = state.apiTest.TestData;

  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClose = () => setShowModal(false);
  const handleShow = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {data.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card" onClick={() => handleShow(item)}>
                <div className="card-body">
                  <h5 className="card-title">{item.id}</h5>
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedItem.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{selectedItem.id}</p>
          <p>{selectedItem.body}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default HomePage;
