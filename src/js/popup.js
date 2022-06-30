
// show/hide popup
const popupHideEsc = function (evt) {
    if ( 
      evt.key === 'Escape' && document.querySelector('.popup-wrapper--show') !== null) { 
      popupHide(document.querySelector('.popup-wrapper--show')); 
    } 
  }; 

const popupShow = (popup) => {
	popup.classList.add('popup-wrapper--show');
	document.addEventListener('keydown', popupHideEsc);
};

const popupHide = (popup) => {
	popup.classList.remove('popup-wrapper--show');
	document.addEventListener('keydown', popupHideEsc);
};

document.addEventListener('click', (evt) => { 
    if (evt.target === document.querySelector('.popup-wrapper--show')) {
      popupHide(document.querySelector('.popup-wrapper--show'));
    }
  }); 

export {popupShow, popupHide };
