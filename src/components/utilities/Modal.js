import React, { Component } from 'react';
import Portal from './Portal';
import Icon from './Icon';
import styled from 'styled-components';

class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        {on &&
          <ModalWrapper>
            <ModalCard>
              <CloseButton onClick={toggle}>
                <Icon color="blue" name={'close'} />
              </CloseButton>
              <div>
                {children}
              </div>

            </ModalCard>
            <Background onClick={toggle} />
          </ModalWrapper>
        }
      </Portal>
    );
  }
}

const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  background-color: white;
  border-radius: 3px;
  padding: 15px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);
  z-index: 10;
  min-width: 320px;
  margin-bottom: 400px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background-color: transparent;
  padding: 10px;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

export default Modal;