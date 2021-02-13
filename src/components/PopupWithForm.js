import React from 'react';

function PopupWithForm(props) {  
  return (
    <section className={`popup-${props.classDescription} popup root__popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className={`popup-${props.classDescription}__container popup__container`}>
        <button type="button" className={`popup__button-cross popup-${props.classDescription}__button-cross button`} onClick={props.onClose}></button>
        <h3 className={`popup-${props.classDescription}__title popup__title`}>{props.title}</h3>
        <form action="#" name={`popup${props.classDescription}Form`} className={`popup-${props.classDescription}__form popup__form`} onSubmit={props.onSubmit}>
          {props.children}
          <button type="submit" className={`popup-${props.classDescription}__btn-add popup__btn-add`}>Сохранить</button>
        </form>
      </div>
    </section >
  );
}

export default PopupWithForm;