import React from 'react';
import api from '../utils/api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

  const [cards, setCards] = React.useState([]);
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    api.getCards()
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



  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}></div>
          <div className="profile__avatar-bg"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-row">
            <h1 className="profile__title">{currentUser.name}</h1>
            <button type="button" className="profile__edit-button button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button type="button" className="profile__add-button button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.handleCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        ))}
      </section>

    </main >
  );
}

export default Main;
