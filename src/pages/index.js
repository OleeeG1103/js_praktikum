import '../pages/style.css';

import Section  from "../components/Section.js";
import Card  from '../components/Card.js';
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithSubmit from "../components/PopupWithSubmit.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator, validConfig } from "../components/FormValidator.js";
import Api from "../components/Api.js";

//import { initialCards } from "../utils/initialCards.js";
import {
  profileEditBtn,
  popupProfile, 
  editProfilePhotoBtn,
  popupEditProfilePhoto,
  popupFormEditProfilePhoto,
  avatarLinkInput,
  profileSelectors, 
  popupFormEditProfile, 
  popupFormName,
  popupFormPosition, 
  profileAddCardBtn,
  popupAddImg,
  popupFormAddCard,
  popupViewImg,
  deleteCardBtn,
  popupDeleteCard,
} from '../utils/constants.js';

let userId;

const api = new Api({
  address: 'https://mesto.nomoreparties.co/v1/cohort-26',
  headers: {
    authorization: 'd147ccf3-fe7d-432e-976a-2d83c2abca13',
    'Content-type': 'application/json',
  },
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
.then(([data, element]) => {
  userId = data._id;
  userInfo.setUserInfo(data);
  section.rendererItems(element);
})
.catch((err) => {
  console.log(err);
})

//form validator
const formProfileValidation = new FormValidator(validConfig, popupFormEditProfile);
const formAddCardValidation = new FormValidator(validConfig, popupFormAddCard); 
const formEditPhotoValidation = new FormValidator(validConfig, popupFormEditProfilePhoto); 

// откытие попап профиля  ----------------------------------------------------

const userInfo = new UserInfo(profileSelectors);

profileEditBtn.addEventListener('click', () => {
  popupEditProfile.open();

  const currentInfo = userInfo.getUserInfo();
  popupFormName.value = currentInfo.name;
  popupFormPosition.value = currentInfo.about;
  formProfileValidation.clearValidation(); 
});

// обработка формы профиля
function handleProfileFormSubmit(info) {
	popupEditProfile.renderLoading(true);
  api
  .editUserInfo(info.username, info.job)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEditProfile.close();
  })
  .finally(() => {
    popupEditProfile.renderLoading(false);
  })
  .catch((err) => {
    console.log(err);
  })
  }

// экземпляр попапа
const popupEditProfile = new PopupWithForm({
	popup: popupProfile,
	submitForm: (info) => handleProfileFormSubmit(info),
  });
  popupEditProfile.setEventListeners();

formProfileValidation.enableValidation(); 
//--------------------------------------------------------------------------------------------

// открытия попапа добавления картинки -----------------------------------------------------------
profileAddCardBtn.addEventListener('click', () => {
	popupAddCard.open();
  formAddCardValidation.clearValidation();
});

// обработка формы
function handleImgFormSubmit(data) {
  popupAddCard.renderLoading(true);
  api
  .addCard(data.name, data.link)
  .then((data) => {
    const newCard = showInitialCards(data);
    section.prependItem(newCard);
    popupAddCard.close();
  })
  .finally(() => {
    popupAddCard.renderLoading(false);
  })
  .catch((err) => {
    console.log(err);
  })
  }

// экземпляр попапа
const popupAddCard = new PopupWithForm({
  popup: popupAddImg,
  submitForm: (data) => handleImgFormSubmit(data),
});
popupAddCard.setEventListeners();

formAddCardValidation.enableValidation();

//-------------------------------------------------------------

// попап открытой картинки 
const popupWithImage = new PopupWithImage(popupViewImg); 
popupWithImage.setEventListeners(); 

//-----------------------------------------------------

//попап удаления картинки
const popupConfirmDelete = new PopupWithSubmit(popupDeleteCard, (event, card) => {
  deleteConfirm(event, card);
});

popupConfirmDelete.setEventListeners();

const deleteConfirm = (event, card) => {
  event.preventDefault();
  popupConfirmDelete.renderLoading(true);

  api
  .removeCard(card.getIdCard())
  .then((response) => {
    card.deleteCard();
    popupConfirmDelete.close();
  })
  .finally(() => {
    popupConfirmDelete.renderLoading(false);
  })
  .catch((err) => {
    console.log(err);
  })
}

//----------------------------------------------------------------------------------

// попап обнавления аватара
editProfilePhotoBtn.addEventListener('click', () => {
  popupEditPhoto.open();
  formEditPhotoValidation.clearValidation();
});

// обработка формы
function handleAvatarFormSubmit() {
  popupEditPhoto.renderLoading(true);

  api
  .editUserAvatar(avatarLinkInput.value)
  .then((res) => {
    userInfo.setUserInfo(res);
    popupEditPhoto.close();
  })
  .finally(() => {
    popupEditPhoto.renderLoading(false);
  })
  .catch((err) => {
    console.log(err);
  })
}

const popupEditPhoto = new PopupWithForm({
  popup: popupEditProfilePhoto,
  submitForm: () => handleAvatarFormSubmit(),
});
popupEditPhoto.setEventListeners();

formEditPhotoValidation.enableValidation();

//---------------------------------------------------------------------------------

// генерация карточек
const showInitialCards = (item) => {
  const card = new Card(item, '.gallery-template', { 
    handleCardClick: (name, link) => { 
		popupWithImage.open(name, link); 
    },
    handleLikeBtn: () => {
      const likedCard = card.likedCard();
      const resultApi = likedCard
      ? api.dislikeCard(card.getIdCard())
      : api.likeCard(card.getIdCard());

      resultApi
      .then((item) => {
        card.setLikes(item.likes);
        card.renderLikes();
      })
      .catch((err) => {
        console.log(err);
      })
    },
    handleCardDelete: () => {
      popupConfirmDelete.open(card);
    },
  },
  userId,
  item._id
  );

  const newCard = card.generateCard();

  return newCard;
};

//------------------------------------------------------------------------------

const section = new Section(
{
  renderer: (data) => {
    const card = showInitialCards(data);
    section.addItem(card);
  },
},
'.gallery'
)




