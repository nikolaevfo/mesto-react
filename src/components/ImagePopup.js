function ImagePopup(props) {
  return (
    <section className={`root__popup popup-image popup popup_theme_dark ${props.card.link ? 'popup_opened' : ''}`}>
      <div className="popup-image__container">
        <button type="button" className="popup-image__button-cross popup__button-cross button" onClick={props.onClose}></button>
<<<<<<< HEAD
        <img src={`${props.card.link}`} alt="Картинка" class="popup-image__img"></img>
=======
        <img src={`${props.card.link}`} alt="Картинка" className="popup-image__img"></img>
>>>>>>> develop
        <h3 className="popup-image__title">{props.card.name}</h3>
      </div>
    </section >
  );
}

export default ImagePopup;