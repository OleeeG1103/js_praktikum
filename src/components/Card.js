
export default class Card {
    constructor(data, cardSelector, {handleCardClick}) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._alt = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick; 
    }

    _getTemplate() {
        const newCard = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);

          return newCard;
    }

    _deleteCard() {
        this._element.remove();
    }

    _likeCard() {
        this.classList.toggle('card-body--like-active');
    }
    
    _viewImg() {
        this._handleCardClick(this._name, this._link);
    }

    _setEventListeners() {
        this._element.querySelector('.card-delete').addEventListener('click', this._deleteCard.bind(this));
        this._element.querySelector('.card-body--like').addEventListener('click', this._likeCard);
        this._newCardImg.addEventListener('click', () => this._viewImg());
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

