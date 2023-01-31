import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SendEmail(props) {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_5qj7sh8', 'template_zj0jeyi', form.current, 'E9-te9vnBq4sCMDNN')
        .then((result) => {
            result.status === 200 ? alert("Poptávka byla úspěšně odeslána") : alert("Poptávka nebyla odeslána");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <form ref={form} onSubmit={sendEmail}>
        <fieldset>
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              <legend> Poptávka </legend>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Jméno</label>
                    <input type="text" className="form-control" name="from_name" placeholder="Jan Novák"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email</label>
                    <input type="email" className="form-control" name="reply_to" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Text zprávy</label>
                    <textarea className="form-control" name="message" rows="3"></textarea>
                </div>
          </Modal.Body>
        </fieldset>
        <Modal.Footer>
            <Button variant="danger" onClick={props.onHide}>Zrušit poptávku</Button>
            <Button variant="success" type="submit" value="Send" onClick={props.onHide}>Odeslat poptávku</Button>
        </Modal.Footer>
       </form>
    </Modal>
  )
}
