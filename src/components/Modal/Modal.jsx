import { Component } from 'react';
import { ModalStyled } from './Modal.styled';

export class Modal extends Component {

  componentDidMount() {
    document
      .querySelector('.Overlay')
      .addEventListener('click', this.closeClick);
    window.addEventListener('keydown', this.closeEsc);
  }

  componentWillUnmount() {
    document
      .querySelector('.Overlay')
      .removeEventListener('click', this.closeClick);
    window.removeEventListener('keydown', this.closeEsc);
  }

  closeClick = e => {
    if (e.target === e.currentTarget) this.props.closeModal();
  };

  closeEsc = e => {
    if (e.code === 'Escape') this.props.closeModal();
  };

render() {
  
  const { children } = this.props;
  
    return (
      <div className="Overlay">
        <ModalStyled>{children}</ModalStyled>
      </div>
    );
  }
}