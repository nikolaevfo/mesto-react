import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="root">

      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name='card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupWithForm
        name='delete'
        title='Вы уверены?'
      />
      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup />

      <template id="card-template" className="card-template">
        <article className="card">
          <button type="button" className="card__trash button"></button>
          <img src="<%=require('./images/sidorovi-gori.jpg')%>" alt="Картинка" className="card__img" />
          <div className="card__row">
            <h3 className="card__title">Сидоровы горы</h3>
            <div className="card__like-items">
              <button type="button" className="card__like button"></button>
              <p className="card__like-quantity"></p>
            </div>

          </div>
        </article>
      </template>
      {/*  
      <section className="popup-profile popup root__popup">
        <div className="popup-profile__container popup__container">
          <button type="button" className="popup__button-cross popup-profile__button-cross button"></button>
          <h3 className="popup-profile__title popup__title">Редактировать профиль</h3>
          <form action="#" name="popupProfileForm" className="popup-profile__form popup__form">

            <input type="text" name="popupInputName" placeholder="Введите Ваше имя"
              className="popup-profile__text popup__text popup-profile__text_type_name popup__input" id="profile-name" required
              minlength="2" maxlength="40" />
            <span id="profile-name-error" className="popup__text-error"></span>

            <input type="text" name="popupInputJob" placeholder="Введите Вашу профессию"
              className="popup-profile__text popup__text popup-profile__text_type_profession popup__input" id="profile-job"
              required minlength="2" maxlength="200" />
            <span id="profile-job-error" className="popup__text-error"></span>
            <button type="submit" className="popup-profile__btn-add popup__btn-add">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup-card popup root__popup">
        <div className="popup__container">
          <button type="button" className="popup__button-cross popup-card__button-cross button"></button>
          <h3 className="popup__title popup-card__title">Новое место</h3>
          <form action="#" name="popupCardForm" className="popup-card__form popup__form">
            <input type="text" name="popupInputPlace" placeholder="Название"
              className="popup-card__text popup__text popup-card__text_type_place popup__input" id="card-place" required
              minlength="2" maxlength="30" />
            <span id="card-place-error" className="popup__text-error"></span>
            <input type="url" name="popupInputLink" placeholder="Ссылка на картинку"
              className="popup-card__text popup__text popup-card__text_type_link popup__input" id="card-link" required />
            <span id="card-link-error" className="popup__text-error"></span>
            <button type="submit" className="popup-card__btn-add popup__btn-add">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup-delete-card popup root__popup">
        <div className="popup__container">
          <button type="button" className="popup-delete-card__button-cross popup__button-cross button"></button>
          <h3 className="popup-delete-card__title popup__title">Вы уверены?</h3>
          <form action="#" name="popupCardDelete" className="popup-delete-card__form popup__form">
            <button type="submit" className="popup-delete-card__btn-add popup__btn-add">Да</button>
          </form>
        </div>
      </section>

      <section className="popup-avatar popup root__popup">
        <div className="popup__container">
          <button type="button" className="popup-avatar__button-cross popup__button-cross button"></button>
          <h3 className="popup-avatar__title popup__title">Обновить аватар</h3>
          <form action="#" name="popupAvatar" className="popup-avatar__form popup__form">
            <input type="url" name="avatarInputLink" placeholder="Ссылка на картинку"
              className="popup-avatar__text popup__text popup-avatar__text_type_link popup__input" id="avatar-link" required />
            <span id="avatar-link-error" className="popup__text-error"></span>
            <button type="submit" className="popup-avatar__btn-add popup__btn-add">Да</button>
          </form>
        </div>
      </section>
*/}

    </div>
  );
}

export default App;
