
export default class Card {
    constructor(
        data, 
        cardSelector, 
        {handleCardClick, handleCardDelete, handleLikeBtn},
        userId,
        cardId
        ) {
        this._cardSelector = cardSelector;
        this._name = data.name;
        this._alt = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._handleLikeBtn = handleLikeBtn;
        this._countLikes = data.likes;
        this._userID = userId;
        this._ownerID = data.owner._id;
        this._cardID = cardId; 
    }

    //разметка карточки
    _getTemplate() {
        const newCard = document.querySelector(this._cardSelector).content.querySelector('.card').cloneNode(true);

          return newCard;
    }

// создание карточки
    generateCard() {
        this._element = this._getTemplate();
        this._newCardImg = this._element.querySelector('.card-top--photo');
        this._element.querySelector('.card-body--title').textContent = this._name;
        this._newCardImg.alt = this._name;
        this._newCardImg.src = this._link;
        this._likeBtn = this._element.querySelector('.counter-like--btn');
        this._deleteBtn = this._element.querySelector('.card-delete');
        this._numberLikes = this._element.querySelector('.counter');
        if (this._ownerID !== this._userID) {
            this._deleteBtn.style.display = 'none';
        }

        this.renderLikes();

        this._setEventListeners();
        return this._element;
    }

    _setEventListeners() {
        this._element.querySelector('.card-delete').addEventListener('click', () => { this._handleCardDelete(); });
        //this._element.querySelector('.counter-like--btn').addEventListener('click', this._likeCardIcon);
        this._likeBtn.addEventListener('click', () => { this._handleLikeBtn(); });
        //this._newCardImg.addEventListener('click', () => this._viewImg());
        this._newCardImg.addEventListener('click', () => this._viewImg());
    }

    deleteCard() {
        this._element.remove();
    }

    _likeCardIcon() {
        this.classList.toggle('counter-like--btn-active');
    }

    renderLikes() {
        this._numberLikes.textContent = this._countLikes.length;
        this.showLikes(this._userID);
    }

    getIdCard() {
        return this._cardID;
    }

    likedCard() {
        return this._countLikes.some((like) => {
            return like._id === this._userID;
        })
    }

    showLikes() {
    if (this.likedCard(this._userID)) {
      this._likeBtn.classList.add('counter-like--btn-active');
    } else {
      this._likeBtn.classList.remove('counter-like--btn-active');
    }
  }

    setLikes(list) {
        this._countLikes = list;
    }
    
    _viewImg() {
        this._handleCardClick(this._name, this._link);
    }

}

