import React, {useState} from 'react';
import Modal from 'react-modal';

const LoginRegisterModal = () => {

//     return (
//         <div>
//         <Modal.Dialog>
//         {/* <Modal.Header closeButton>
//           <Modal.Title>Modal title</Modal.Title>
//         </Modal.Header> */}
      
//         <Modal.Body>
//           <p>Modal body text goes here.</p>
//         </Modal.Body>
// {/*       
//         <Modal.Footer>
//           <Button variant="secondary">Close</Button>
//           <Button variant="primary">Save changes</Button>
//         </Modal.Footer> */}
//       </Modal.Dialog>
//       </div>
//     )

const [show, setShow] = useState(true);

  

   
return(
    <div>
        <h1>Hello</h1>
        <Modal
        show={show}>
             <Modal.Body>
          I will not close if you click outside me. Don't even try to press
          escape key.
        </Modal.Body>
        </Modal>
    </div>
)
}

export default LoginRegisterModal;