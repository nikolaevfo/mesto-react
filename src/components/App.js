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
  const [selectedCard, setSelectedCard] = React.useState('');

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <div className="root">

      <div className="page">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          handleCardClick={handleCardClick}
        />
        <Footer />
      </div>

      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="text" name="popupInputName" placeholder="Введите Ваше имя"
              className="popup-${props.name}__text popup__text popup-${props.name}__text_type_name popup__input" id="${props.name}-name" required
              minlength="2" maxlength="40" />
            <span id="${props.name}-name-error" className="popup__text-error"></span>
            <input type="text" name="popupInputJob" placeholder="Введите Вашу профессию"
              className="popup-${props.name}__text popup__text popup-${props.name}__text_type_profession popup__input" id="${props.name}-job"
              required minlength="2" maxlength="200" />
            <span id="${props.name}-job-error" className="popup__text-error"></span>
          </>
        }
      />

      <PopupWithForm
        name='card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="text" name="popupInputPlace" placeholder="Название"
              className="popup-card__text popup__text popup-card__text_type_place popup__input" id="card-place" required
              minlength="2" maxlength="30" />
            <span id="card-place-error" className="popup__text-error"></span>
            <input type="url" name="popupInputLink" placeholder="Ссылка на картинку"
              className="popup-card__text popup__text popup-card__text_type_link popup__input" id="card-link" required />
            <span id="card-link-error" className="popup__text-error"></span>
          </>
        }
      />

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input type="url" name="avatarInputLink" placeholder="Ссылка на картинку"
              className="popup-avatar__text popup__text popup-avatar__text_type_link popup__input" id="avatar-link" required />
            <span id="avatar-link-error" className="popup__text-error"></span>
          </>
        }
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    </div >
  );
}

export default App;
