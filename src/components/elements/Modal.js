import React, { Component } from 'react';
import styled from 'styled-components';
import Icon from 'components/elements/Icon';
import { Card } from 'components/elements/Cards';
import { Portal } from 'components/utilities';

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

const ModalCard = Card.extend`
  position: relative;
  min-width: 320px;
  z-index: 10;
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