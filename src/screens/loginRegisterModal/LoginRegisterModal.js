  import React, {useState} from 'react';
  import Modal from 'react-modal';
  import BasicTabs from './BasicTabs';
  import './LoginRegisterModal.css';


  const LoginRegisterModal = () => {

      const [isOpen, setIsOpen] = useState(true);

      function toggleModal() {
        setIsOpen(!isOpen);
      }


    
      return (
        <div className="modalDiv">
          <Modal className="modal"
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
          >
            <div>
                  <BasicTabs></BasicTabs>
            </div>
            
          </Modal>
        </div>
      );
  }

  export default LoginRegisterModal;