import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditAvatarPopup(props) {

  const currentUser = React.useContext(CurrentUserContext);
  const avatarLinkRef = React.useRef();
  
  React.useEffect(() => {
    avatarLinkRef.current = currentUser.avatar;
  }, [currentUser]); 


  function handleLinkChange(e) {
    avatarLinkRef.current = e.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
    avatar: avatarLinkRef.current,
  });
} 
  
  return (
    <PopupWithForm
      classDescription='avatar'
      title='Обновить аватар'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      children={
        <>
          <input type="url" name="avatarInputLink" placeholder="Ссылка на картинку"
            className="popup-avatar__text popup__text popup-avatar__text_type_link popup__input" id="avatar-link" required
            onChange={handleLinkChange} ref={avatarLinkRef} />
          <span id="avatar-link-error" className="popup__text-error"></span>
        </>
      } 
    />
  )
}

export default EditAvatarPopup;
  