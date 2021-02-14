import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
<<<<<<< HEAD
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });
=======
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');
  const [deletedCardId, setDeletedCardId] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [isDeletingCard, setIsDeletingCard] = React.useState(false);
>>>>>>> develop

  const [currentUser, setCurrentUser] = React.useState({});

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((userData) => {
      setCurrentUser(userData); 
    })
    .catch((err) => console.log("Ошибка при загрузке данных", err));
  }, [])


  // popaps opening and closing
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

  function handleDeleteCardClick(card) {
    setIsDeletingCard(true);
    setIsDeleteCardPopupOpen(true);    
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
<<<<<<< HEAD
    setSelectedCard({ name: '', link: '' });
=======
    setSelectedCard(false);
    setIsDeleteCardPopupOpen(false);
    setIsDeletingCard(false);
  }

  // profile
  function handleUpdateUser(userData) {
    setIsLoading(true)
    api.setUserInfo(userData)
      .then((newUserData) => {         
        setCurrentUser(newUserData);        
        setIsLoading(false);
        closeAllPopups();
      })
  }

  // avatar
  function handleUpdateAvatar(avatarObj) {
    setIsLoading(true)
    api.setUserAvatar(avatarObj.avatar)
      .then((userData) => {
        setCurrentUser(userData); 
        setIsLoading(false);
        closeAllPopups();
    })
  }

  // cards
  React.useEffect(() => {
    api.getCardList()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => console.log("Ошибка при загрузке данных", err));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  } 

  function checkDeletedCardId(cardId) {
    setDeletedCardId(cardId);
  }

  function handleCardDelete() {
    setIsLoading(true);
    api.deleteCard(deletedCardId)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== deletedCardId);
        setCards(newCards); 
        setIsLoading(false);
        closeAllPopups();
      })
  }

  // card
  function handleAddPlaceSubmit(card) {
    setIsLoading(true)
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
        setIsLoading(false);
        closeAllPopups();
    })
>>>>>>> develop
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">

        <div className="page">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            handleCardClick={handleCardClick}
            cards={cards}
            onCardLike={handleCardLike} 
            checkCardDelete={checkDeletedCardId}
            onCardDeleteClick={handleDeleteCardClick}
          />
          <Footer />
        </div>
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          isLoading={isLoading}
        /> 

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          isLoading={isLoading}
        />

<<<<<<< HEAD
      <PopupWithForm
        name='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" name="popupInputName" placeholder="Введите Ваше имя"
          className="popup-${props.name}__text popup__text popup-${props.name}__text_type_name popup__input" id="${props.name}-name" required
          minlength="2" maxlength="40" />
        <span id="${props.name}-name-error" className="popup__text-error"></span>
        <input type="text" name="popupInputJob" placeholder="Введите Вашу профессию"
          className="popup-${props.name}__text popup__text popup-${props.name}__text_type_profession popup__input" id="${props.name}-job"
          required minlength="2" maxlength="200" />
        <span id="${props.name}-job-error" className="popup__text-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='card'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <input type="text" name="popupInputPlace" placeholder="Название"
          className="popup-card__text popup__text popup-card__text_type_place popup__input" id="card-place" required
          minlength="2" maxlength="30" />
        <span id="card-place-error" className="popup__text-error"></span>
        <input type="url" name="popupInputLink" placeholder="Ссылка на картинку"
          className="popup-card__text popup__text popup-card__text_type_link popup__input" id="card-link" required />
        <span id="card-link-error" className="popup__text-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <input type="url" name="avatarInputLink" placeholder="Ссылка на картинку"
          className="popup-avatar__text popup__text popup-avatar__text_type_link popup__input" id="avatar-link" required />
        <span id="avatar-link-error" className="popup__text-error"></span>
      </PopupWithForm>

      <ImagePopup
        card={selectedCard}
=======
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          isLoading={isLoading}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

        <DeleteCardPopup
        isOpen={isDeleteCardPopupOpen}
>>>>>>> develop
        onClose={closeAllPopups}
        onDeleteCard={handleCardDelete}
        isLoading={isLoading}
        isDeletingCard={isDeletingCard}
        />

      </div >
    </CurrentUserContext.Provider>    
  );
}

export default App;
