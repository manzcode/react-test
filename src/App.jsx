import './App.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setNom, setEmail, setTel, setMessage,validateEmail, validatePhoneNumber } from '../features/formulaire/formulaireSlice';
import { test } from '../features/formulaire/dataSlice';

function App() {

  const dispatch = useDispatch();
  
  const nom = useSelector((state) => state.formulaire.nom);
  const email = useSelector((state) => state.formulaire.email);
  const tel = useSelector((state) => state.formulaire.tel);
  const message = useSelector((state) => state.formulaire.message);
  const errors = useSelector((state) => state.formulaire.errors);
  
  const [submitted, setSubmitted] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();

    
    const isEmailValid = validateEmail(email);
    const isPhoneNumberValid = validatePhoneNumber(tel);

    if (isEmailValid && isPhoneNumberValid) {
      setSubmitted(true);
      dispatch(test())
      // Envoyer le formulaire
    } else {
      setSubmitted(false);
      // Afficher les erreurs de validation
    }
  };

  const handleNomChange = (e) => {
    dispatch(setNom(e.target.value));
  };

  const handleEmailChange = (e) => {
    dispatch(setEmail(e.target.value));
  };

  const handleTelChange = (e) => {
    dispatch(setTel(e.target.value));
  };

  const handleMessageChange = (e) => {
    dispatch(setMessage(e.target.value));
  };

  const handleCloseModal = () => {
    setSubmitted(false);
  };
  return (
    <>
    <h1>Formulaire</h1>
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicnom">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Nom" value={nom} onChange={handleNomChange} />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange} />
        {submitted && errors.email && <span>{errors.email}</span>}
      </Form.Group>

      <Form.Group controlId="formBasictel">
        <Form.Label>Téléphone</Form.Label>
        <Form.Control type="tel" placeholder="Téléphone" value={tel} onChange={handleTelChange} />
        {submitted && errors.tel && <span>{errors.tel}</span>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} value={message} onChange={handleMessageChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

    <Modal show={submitted} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Formulaire soumis</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Nom: {nom}</p>
          <p>Email: {email}</p>
          <p>Téléphone: {tel}</p>
          <p>Message: {message}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default App
