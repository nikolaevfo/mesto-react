import React from 'react';
import api from '../utils/api';

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.douwnloadUserInfo()
      .then((userData) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
      });
  })

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <div className="profile__avatar" style={{ background: `url(${userAvatar})`, backgroundSize: 'cover' }}></div>
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

      <section className="elements"> </section>

    </main >

  );
}

export default Main;
