import React from 'react';
import './formModal.css';
import MainForm from '../components/MainForm';
import { Container } from 'semantic-ui-react';

class FormModal extends React.Component {
    state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal} >
          <Container textAlign='center'>
        <MainForm />
      </Container>
          </Modal>
          <button type='button' onClick={this.showModal}>Open</button>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };

  export default FormModal;
  