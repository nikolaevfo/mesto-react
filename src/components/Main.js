function Main(props) {

  return (
    <main className="content">

      <section className="profile">
        <div className="profile__avatar-container" onClick={props.onEditAvatar}>
          <img src="#" alt="Аватар" className="profile__avatar" />
          <div className="profile__avatar-bg"></div>
        </div>
        <div className="profile__info">
          <div className="profile__info-row">
            <h1 className="profile__title"></h1>
            <button type="button" className="profile__edit-button button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle"></p>
        </div>
        <button type="button" className="profile__add-button button" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements"> </section>

    </main>

  );
}

export default Main;
