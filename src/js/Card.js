import { popupShow } from './popup.js';

const popupViewImg = document.querySelector('#popupViewImg');
const popupViewImgBody = document.querySelector('.popup-body--img');
const popupViewImgTitle = document.querySelector('.popup-view-img--title'); 

export class Card {
    constructor(data, cardSelector) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._alt = data.alt;
        this._link = data.link;
    }

    _getTemplate() {
        const newCard = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);

          return newCard;
    }

    _deleteCard = () => {
        this._element.remove();
    }

    _likeCard = () => {
        this._element.querySelector('.card-body--like').classList.toggle('card-body--like-active');
    }
    
    _viewImg = () => {
        popupShow(popupViewImg);
        popupViewImgBody.src = this._link;
        popupViewImgBody.alt = this._alt;
        popupViewImgTitle.textContent = this._name;
    }

    _setEventListeners() {
        this._element.querySelector('.card-delete').addEventListener('click', this._deleteCard);
        this._element.querySelector('.card-body--like').addEventListener('click', this._likeCard);
        this._newCardImg.addEventListener('click', this._viewImg);
    }

    generateCard() {
        this._element = this._getTemplate();
        this._newCardImg = this._element.querySelector('.card-top--photo');
        this._element.querySelector('.card-body--title').textContent = this._name;
        this._newCardImg.alt = this._name;
        this._newCardImg.src = this._link;

        this._setEventListeners();
        return this._element;
    }
}

