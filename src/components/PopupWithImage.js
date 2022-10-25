import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popup) {
    super(popup);
    this._popup = popup;
    this._popupImage = this._popup.querySelector(".popup-body--img"); 
    this._popupTitle = this._popup.querySelector(".popup-view-img--title"); 
    }

    open(name, link) {
        super.open();

        this._popupImage.src = link; 
        this._popupImage.alt = name; 
        this._popupTitle.textContent = name;
    }
}
