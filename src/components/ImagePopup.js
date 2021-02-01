function ImagePopup() {
  return (
    <section className="root__popup popup-image popup popup_theme_dark">
      <div className="popup-image__container">
        <button type="button" className="popup-image__button-cross popup__button-cross button"></button>
        <img src="#" alt="Картинка" className="popup-image__img" />
        <h3 className="popup-image__title"></h3>
      </div>
    </section>
  );
}

export default ImagePopup;