function PopupWithForm(props) {
  return (
    <section className={`popup-${props.name} popup root__popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup-${props.name}__container popup__container">
        <button type="button" className="popup__button-cross popup-${props.name}__button-cross button" onClick={props.onClose}></button>
        <h3 className="popup-${props.name}__title popup__title">{props.title}</h3>
        <form action="#" name="popup${props.name}Form" className="popup-${props.name}__form popup__form">
          {/*  
          <input type="text" name="popupInputName" placeholder="Введите Ваше имя"
            className="popup-${props.name}__text popup__text popup-${props.name}__text_type_name popup__input" id="${props.name}-name" required
            minlength="2" maxlength="40" />
          <span id="${props.name}-name-error" className="popup__text-error"></span>

          <input type="text" name="popupInputJob" placeholder="Введите Вашу профессию"
            className="popup-${props.name}__text popup__text popup-${props.name}__text_type_profession popup__input" id="${props.name}-job"
            required minlength="2" maxlength="200" />
          <span id="${props.name}-job-error" className="popup__text-error"></span>
*/}
          <button type="submit" className="popup-${props.name}__btn-add popup__btn-add">Сохранить</button>
        </form>
      </div>
    </section >
  );
}

export default PopupWithForm;