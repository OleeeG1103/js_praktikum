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

// const body view img popup
const popupViewImgBody = document.querySelector('.popup-body--img');
const popupViewImgTitle = document.querySelector('.popup-view-img--title'); 

// show/hide popup
const popupShow = (popup) => {
	popup.classList.add('popup-wrapper--show');
};

const popupHide = (popup) => {
	popup.classList.remove('popup-wrapper--show');
};

// forms edit popup
profileEditBtn.addEventListener('click', () => {
	popupShow(popupEditProfile);
	popupFormName.value = profileName.textContent;
  popupFormPosition.value = profilePosition.textContent;
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

// form add card popup
profileAddCardBtn.addEventListener('click', () => {
	popupShow(popupAddCard);
	popupFormNameCard.placeholder = 'Название';
    popupFormLinkImg.placeholder = 'Ссылка на картинку';
});

closePopupAddCard.addEventListener('click', () => {
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

// gallery cards, array initialCard
const galleryList = document.querySelector('.gallery');
//const galleryTemplate = document.querySelector('.gallery-template').content;
const galleryTemplate = document.querySelector('.gallery-template');

function renderGalleryCards() { 
    const newInitialCards = initialCards.map(showInitialCards); 
        galleryList.append(...newInitialCards); 
}; 

const showInitialCards = (item) => { 
    //const card = galleryTemplate.querySelector('.card').cloneNode(true);
    const card = galleryTemplate.content.cloneNode(true);
    const cardBodyTitle = card.querySelector('.card-body--title'); 
    const cardTopPhoto = card.querySelector('.card-top--photo'); 
    const cardLikeBtn = card.querySelector('.card-body--like');
    const deleteCardBtn = card.querySelector('.card-delete');

        cardBodyTitle.textContent = item.name; 
        cardTopPhoto.src = item.link; 
        cardTopPhoto.alt = item.name;

        cardLikeBtn.addEventListener('click', likeCard);

        deleteCardBtn.addEventListener('click', deleteCard);

        cardTopPhoto.addEventListener('click', () => viewImg(cardTopPhoto, cardBodyTitle));

    return card; 
};

const deleteCard = (evt) => {
  evt.target.closest('.card').remove();
};

const likeCard = (evt) => {
  evt.target.classList.toggle('card-body--like-active');
};

const viewImg = (cardTopPhoto, cardBodyTitle) => {
  popupShow(popupViewImg);
  popupViewImgBody.src = cardTopPhoto.src;
  popupViewImgBody.alt = cardTopPhoto.alt;
  popupViewImgTitle.textContent = cardBodyTitle.textContent;

  closePopupViewImg.addEventListener('click', () => {
    popupHide(popupViewImg);
  })
};

renderGalleryCards();





 

