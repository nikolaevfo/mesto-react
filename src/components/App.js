import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState('');

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

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  // profile
  function handleUpdateUser(userData) {    
    api.setUserInfo(userData)
      .then((newUserData) => {         
        setCurrentUser(newUserData);
        closeAllPopups();
      })
  }

  // avatar
  function handleUpdateAvatar(avatarObj) {
    api.setUserAvatar(avatarObj.avatar)
      .then((userData) => {
        setCurrentUser(userData); 
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

  function handleCardDelete(card) {
    const cardId = card._id
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== cardId);
        setCards(newCards); 
      })
  }

  // card
  function handleAddPlaceSubmit(card) {
    api.addCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]); 
        closeAllPopups();
    })
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
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </div>
        
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        /> 

        {/* <PopupWithForm
          name='card'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          children={
            <>
              <input type="text" name="popupInputPlace" placeholder="Название"
                className="popup-card__text popup__text popup-card__text_type_place popup__input" id="card-place" required
                minLength="2" maxLength="30" />
              <span id="card-place-error" className="popup__text-error"></span>
              <input type="url" name="popupInputLink" placeholder="Ссылка на картинку"
                className="popup-card__text popup__text popup-card__text_type_link popup__input" id="card-link" required />
              <span id="card-link-error" className="popup__text-error"></span>
            </>
          }
        /> */}

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />

      </div >
    </CurrentUserContext.Provider>    
  );
}

export default App;
