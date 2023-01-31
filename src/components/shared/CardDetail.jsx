import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function CoctailDetailModal(props) {
    console.log(props)
    if(!props.coctail) return null;
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.coctail.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-wrap-reverse'>
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <h4>Popis</h4>
                <p>{props.coctail.description}</p>
                <h4>Ingredience</h4>
                {props.coctail.ingredients.map((ingredient, index) => {
                    return (
                        <span key={index}>{ingredient.name}, </span>
                        )
                    })}
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <img src={props.coctail.imgLink} alt={props.coctail.name} style={{width: "100%"}}/>
            </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>Zavřít</Button>
      </Modal.Footer>
    </Modal>
  )
}