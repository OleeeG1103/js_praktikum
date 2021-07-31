// open/close edit popup

let profileEditBtn = document.querySelector('.profile-info--editBtn');
let profileAddBtn = document.querySelector('.profile-add-btn');
let closePopup = document.querySelector('.popup-close');
let popup = document.querySelector('.popup-wrapper');

function popupEditShow() {
	popup.classList.add('popup-wrapper--show');
}

profileEditBtn.addEventListener('click', popupEditShow);

function popupEditClose() {
	popup.classList.remove('popup-wrapper--show');
}

closePopup.addEventListener('click', popupEditClose);

document.addEventListener('click', (e) => {
	if(e.target === popup) {
		popupEditClose();
	}
});


// form edit popup 

let profileName = document.querySelector('#profile-name');
let popupFormName = document.querySelector('.popup-form--name');
let profilePosition = document.querySelector('#profile-position');
let popupFormPosition = document.querySelector('.popup-form--position');
let popupFormBtn = document.querySelector('.popup-form--btn');

popupFormName.value = profileName.textContent;
popupFormPosition.value = profilePosition.textContent;

function editProfile(evt) {
	evt.preventDefault();
	profileName.textContent = popupFormName.value;
	profilePosition.textContent = popupFormPosition.value;
}

popupFormBtn.addEventListener('submit', editProfile);
