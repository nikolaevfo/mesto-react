import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.douwnloadUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      });
  })

  React.useEffect(() => {
    api.getCards()
      .then((initialCards) => {
        setCards(initialCards);
      });
  }, [])



  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}></div>
          <div className="profile__avatar-bg"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-row">
            <h1 className="profile__title">{userName}</h1>
            <button type="button" className="profile__edit-button button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {cards.map((item) => (
          <Card
            key={item._id}
            card={item}
            onCardClick={props.handleCardClick}
          />
        ))}
      </section>

    </main >
  );
}

export default Main;
