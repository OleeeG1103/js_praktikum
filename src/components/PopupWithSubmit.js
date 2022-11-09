import Popup from './Popup.js';

export default class PopupWithSubmit extends Popup {
    constructor(popup, submitForm) {
        super(popup);
        this._submitForm = submitForm; 
        this._popupSubmitButton = this._popup.querySelector('.popup-form--btn');
        this._defaultSubmitButtonText = this._popupSubmitButton.textContent;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitForm(event, this._card);
        });
    }

    renderLoading(isLoading, initialMessage = 'Удаление...') {
        if (isLoading) {
            this._popupSubmitButton.textContent = initialMessage;
        } else {
            this._popupSubmitButton.textContent = this._defaultSubmitButtonText;
        }
    }

    open(card) {
        this._card = card;
        super.open();
    }
}