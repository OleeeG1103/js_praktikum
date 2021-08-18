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

// show/hide popup
const popupShow = (popup) => {
	popup.classList.add('popup-wrapper--show');
};

const popupHide = (popup) => {
	popup.classList.remove('popup-wrapper--show');
};

// forms popup
profileEditBtn.addEventListener('click', () => {
	popupShow(popupEditProfile);
	popupFormName.value = profileName.textContent;
    popupFormPosition.value = profilePosition.textContent;
});

profileAddCardBtn.addEventListener('click', () => {
	popupShow(popupAddCard);
	popupFormNameCard.placeholder = 'Название';
    popupFormLinkImg.placeholder = 'Ссылка на картинку';
});

closePopupEditProfile.addEventListener('click', () => {
	popupHide(popupEditProfile);
});

closePopupAddCard.addEventListener('click', () => {
	popupHide(popupAddCard);
});


//function popupEditShow() {
//	popupFormName.value = profileName.textContent;
//    popupFormPosition.value = profilePosition.textContent;
//    
//	popup.classList.add('popup-wrapper--show');
//}

//profileEditBtn.addEventListener('click', popupEditShow);


//function popupEditClose() {
//	popup.classList.remove('popup-wrapper--show');
//}

//closePopup.addEventListener('click', popupEditClose);

//document.addEventListener('click', (e) => {
//	if(e.target === popup) {
//		popupEditClose();
//	}
//});


// form edit popup 



function editProfile(evt) {
	evt.preventDefault();
	profileName.textContent = popupFormName.value;
	profilePosition.textContent = popupFormPosition.value;
	//popupEditClose();
	//popupHide();
	popupHide(popupEditProfile);
}

popupFormEditProfile.addEventListener('submit', editProfile);

