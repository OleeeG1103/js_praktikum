// const show/hide edit popup
const profileEditBtn = document.querySelector('.profile-info--editBtn');
const popupProfile = document.querySelector('#popupEditProfile');

// const form edit popup
const profileSelectors = { 
	profileName: "#profile-name", //имя в профиле  
	profileJob: "#profile-position", //деятельность в профиле 
  };

const popupFormEditProfile = document.querySelector('.popup-form--edit-profile');
const popupFormName = popupFormEditProfile.querySelector('.popup-form--name');
const popupFormPosition = popupFormEditProfile.querySelector('.popup-form--position');

// const show/hide add card popup
const profileAddCardBtn = document.querySelector('.profile-add-card--btn');
const popupAddImg = document.querySelector('#popupAddCard');

// const form add card popup
const popupFormAddCard = document.querySelector('.popup-form--add-card');

// const show/hide view img popup
const popupViewImg = document.querySelector('#popupViewImg');

export {
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
};