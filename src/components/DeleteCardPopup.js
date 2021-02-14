import React from 'react';
import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {

  function handleSubmit(e) {    
    e.preventDefault();
    props.onDeleteCard()
} 
  
  return (
    <PopupWithForm
      classDescription='delete'
      title='Вы уверены?'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      isLoading={props.isLoading}
      children={
        <></>
      } 
    />
  )
}

export default DeleteCardPopup;
  