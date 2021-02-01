function PopupWithForm(props) {
  return (
    <section className={`popup-${props.name} popup root__popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-${props.name}__container popup__container">
        <button type="button" className="popup__button-cross popup-${props.name}__button-cross button" onClick={props.onClose}></button>
        <h3 className="popup-${props.name}__title popup__title">{props.title}</h3>
        <form action="#" name="popup${props.name}Form" className="popup-${props.name}__form popup__form">
          {props.children}
          <button type="submit" className="popup-${props.name}__btn-add popup__btn-add">Сохранить</button>
        </form>
      </div>
    </section >
  );
}

export default PopupWithForm;