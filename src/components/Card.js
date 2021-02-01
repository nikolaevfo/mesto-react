function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <article className="card">
      <button type="button" className="card__trash button"></button>
      <div className="card__img" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}></div>
      <div className="card__row">
        <h3 className="card__title">{props.card.name}</h3>
        <div className="card__like-items">
          <button type="button" className="card__like button"></button>
          <p className="card__like-quantity">{props.card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
