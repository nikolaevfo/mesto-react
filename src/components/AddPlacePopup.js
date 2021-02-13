import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

  const placeNameRef = React.useRef();
  const placeLinkRef = React.useRef();

  function handlePlaceNameChange(e) {
    placeNameRef.current = e.target.value;
  }
  function handlePlaceLinkChange(e) {
    placeLinkRef.current = e.target.value;
  }

  function handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    props.onAddPlace({
      name: placeNameRef.current,
      link: placeLinkRef.current,
    });
    
  }
  
  return (
    <PopupWithForm
      classDescription='card'
      title='Новое место'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input type="text" name="popupInputPlace" placeholder="Название"
            className="popup-card__text popup__text popup-card__text_type_place popup__input" id="card-place" required
            minLength="2" maxLength="30"
            onChange={handlePlaceNameChange} ref={placeNameRef}
          />
          <span id="card-place-error" className="popup__text-error"></span>
          <input type="url" name="popupInputLink" placeholder="Ссылка на картинку"
            className="popup-card__text popup__text popup-card__text_type_link popup__input" id="card-link" required
            onChange={handlePlaceLinkChange} ref={placeLinkRef}
          />
          <span id="card-link-error" className="popup__text-error"></span>
        </>
      }
    />
  )
  
}

export default AddPlacePopup;
  