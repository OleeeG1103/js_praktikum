
export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._popupHideEsc = this._popupHideEsc.bind(this);
    this._overlayHide = this._overlayHide.bind(this);
  }

  open() {
    !this._popup.classList.contains('popup-wrapper--show') && this._popup.classList.add('popup-wrapper--show');
    document.addEventListener('keydown', this._popupHideEsc);
  }

  close() {
    this._popup.classList.contains('popup-wrapper--show') && this._popup.classList.remove('popup-wrapper--show');
    document.addEventListener('keydown', this._popupHideEsc);
  }

  _popupHideEsc(evt) {
    if ( 
      evt.key === 'Escape' && document.querySelector('.popup-wrapper--show') !== null) { 
      this.close(); 
    } 
  }

  _overlayHide() {
    document.addEventListener('click', (evt) => { 
      if (evt.target === document.querySelector('.popup-wrapper--show')) {
        this.close();
      }
    });
  }

  setEventListeners() {
    this._popup.querySelector('.popup-close--btn-icon').addEventListener('click', () => this.close());
    this._popup.addEventListener('mousedown', (evt) => this._overlayHide(evt))
  }
} 