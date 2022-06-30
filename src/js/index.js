import { initialCards } from "./initialCards.js";
import { Card }  from './Card.js';
import { popupShow, popupHide, } from "./popup.js";
import { FormValidator, validConfig } from "./FormValidator.js";

const galleryList = document.querySelector('.gallery');

// const show/hide edit popup
const profileEditBtn = document.querySelector('.profile-info--editBtn');
const popupEditProfile = document.querySelector('#popupEditProfile');
const closePopupEditProfile = document.querySelector('.popup-close--editProfile');

// const form edit popup
const profileName = document.querySelector('#profile-name');
const profilePosition = document.querySelector('#profile-position');

const popupFormEditProfile = document.querySelector('.popup-form--edit-profile');
const popupFormName = popupFormEditProfile.querySelector('.popup-form--name');
const popupFormPosition = popupFormEditProfile.querySelector('.popup-form--position');
const popupFormEditProfileBtn = popupFormEditProfile.querySelector('.popup-form--btn');

// const show/hide add card popup
const profileAddCardBtn = document.querySelector('.profile-add-card--btn');
const popupAddCard = document.querySelector('#popupAddCard');
const closePopupAddCard = document.querySelector('.popup-close--addCard');

// const form add card popup
const popupFormAddCard = document.querySelector('.popup-form--add-card');
const popupFormNameCard = popupFormAddCard.querySelector('.popup-form--name');
const popupFormLinkImg = popupFormAddCard.querySelector('.popup-form--link');
const popupFormAddCardBtn = popupFormAddCard.querySelector('.popup-form--btn');

// const show/hide view img popup
const popupViewImg = document.querySelector('#popupViewImg');
const closePopupViewImg = document.querySelector('.popup-close--view-img');

//form validator
const formProfileValidation = new FormValidator(validConfig, popupFormEditProfile);
const formAddCardValidation = new FormValidator(validConfig, popupFormAddCard); 

// forms edit popup
profileEditBtn.addEventListener('click', () => {
	popupShow(popupEditProfile);
	popupFormName.value = profileName.textContent;
  popupFormPosition.value = profilePosition.textContent;
  formProfileValidation.clearValidation(); 
});

closePopupEditProfile.addEventListener('click', () => {
	popupHide(popupEditProfile);
});

function editProfile(evt) {
	evt.preventDefault();
	profileName.textContent = popupFormName.value;
	profilePosition.textContent = popupFormPosition.value;
	popupHide(popupEditProfile);
};

popupFormEditProfile.addEventListener('submit', editProfile);
formProfileValidation.enableValidation(); 

// form add card popup
profileAddCardBtn.addEventListener('click', () => {
	popupShow(popupAddCard);
	popupFormNameCard.placeholder = 'Название';
  popupFormLinkImg.placeholder = 'Ссылка на картинку';
  formAddCardValidation.clearValidation();
});

closePopupAddCard.addEventListener('click', () => {
	//popupFormNameCard.value = '';
	//popupFormLinkImg.value = '';
	popupHide(popupAddCard);
});

function addNewCard(evt) {
	evt.preventDefault();
	galleryList.prepend(showInitialCards({
		name: popupFormNameCard.value,
		link: popupFormLinkImg.value,
	}));
	popupFormNameCard.value = '';
	popupFormLinkImg.value = '';
	popupHide(popupAddCard);
};

popupFormAddCard.addEventListener('submit', addNewCard);
formAddCardValidation.enableValidation(); 

function renderGalleryCards() { 
  const newInitialCards = initialCards.map(showInitialCards); 
      galleryList.append(...newInitialCards); 
}; 

const showInitialCards = (item) => {
  const card = new Card(item, '.gallery-template');
  const newCard = card.generateCard();

  return newCard;
};

renderGalleryCards();

closePopupViewImg.addEventListener('click', () => {
  popupHide(popupViewImg);
})

 

