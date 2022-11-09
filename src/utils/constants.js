// const show/hide edit popup
const profileEditBtn = document.querySelector('.profile-info--editBtn');
const popupProfile = document.querySelector('#popupEditProfile');

const editProfilePhotoBtn = document.querySelector('.profile-photo-btn');
const popupEditProfilePhoto = document.querySelector('#popupEditProfilePhoto');
const popupFormEditProfilePhoto = document.querySelector('.popup-form--edit-profile-photo');
const avatarLinkInput = popupFormEditProfilePhoto.querySelector('#profile-photo-input');

// const form edit popup
const profileSelectors = { 
	profileName: "#profile-name", //имя в профиле  
	profileJob: "#profile-position", //деятельность в профиле 
    profileAvatar: '.profile-photo--img',
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

// const show/hide delete card popup
const deleteCardBtn = document.querySelector('.card-delete');
const popupDeleteCard = document.querySelector('#popupDeleteCard');

export {
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
};