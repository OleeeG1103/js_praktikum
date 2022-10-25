import '../pages/style.css';

import Section  from "../components/Section.js";
import Card  from '../components/Card.js';
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import { FormValidator, validConfig } from "../components/FormValidator.js";

import { initialCards } from "../utils/initialCards.js";
import {
  profileEditBtn,
  popupProfile, 
  profileSelectors, 
  popupFormEditProfile, 
  popupFormName,
  popupFormPosition, 
  profileAddCardBtn,
  popupAddImg,
  popupFormAddCard,
  popupViewImg,
} from '../utils/constants.js';

//form validator
const formProfileValidation = new FormValidator(validConfig, popupFormEditProfile);
const formAddCardValidation = new FormValidator(validConfig, popupFormAddCard); 

// forms edit popup
profileEditBtn.addEventListener('click', () => {
	popupEditProfile.open();
	const userInfoData = userInfo.getUserInfo();
	popupFormName.value = userInfoData.username;
    popupFormPosition.value = userInfoData.job;
    formProfileValidation.clearValidation(); 
});

const userInfo = new UserInfo({
	profileName: profileSelectors.profileName,
	profileJob: profileSelectors.profileJob,
  });

function handleProfileFormSubmit(values) {
	userInfo.setUserInfo(values.username, values.job);
  }

const popupEditProfile = new PopupWithForm({
	popup: popupProfile,
	submitForm: (values) => handleProfileFormSubmit(values),
  });
  popupEditProfile.setEventListeners();

formProfileValidation.enableValidation(); 

// form add card popup
profileAddCardBtn.addEventListener('click', () => {
	popupAddCard.open();
  formAddCardValidation.clearValidation();
});

const popupAddCard = new PopupWithForm({
  popup: popupAddImg,
  submitForm: (data) => handleImgFormSubmit(data),
});
popupAddCard.setEventListeners();

formAddCardValidation.enableValidation();

const showInitialCards = (item) => {
  const card = new Card(item, '.gallery-template', { 
    handleCardClick: (name, link) => { 
		popupWithImage.open(name, link); 
    }, 
  });

  const newCard = card.generateCard();

  return newCard;
};

function handleImgFormSubmit(data) {
	section.prependItem(showInitialCards(data));
  }
  
const popupWithImage = new PopupWithImage(popupViewImg); 
popupWithImage.setEventListeners(); 

const section = new Section( 
	{ 
	  renderer: (data) => section.addItem(showInitialCards(data)), 
	}, 
	'.gallery' 
  ); 

  function renderCards(initialCards) { 
	section.rendererItems(initialCards); 
  } 
  
  renderCards(initialCards);

  
 

