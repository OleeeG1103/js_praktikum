export class FormValidator {
    constructor(validConfig, form) {
        this._form = form;
        this._inputSelector = validConfig.inputSelector;
        this._submitButtonSelector = validConfig.submitButtonSelector;
        this._inactiveButtonClass = validConfig.inactiveButtonClass; 
        this._inputErrorClass = validConfig.inputErrorClass; 
        this._errorClass = validConfig.errorClass; 
        this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    }

    _showInputError() { 
        this._inputElement.classList.add(this._inputErrorClass); 
        this._errorElement.classList.add(this._errorClass); 
        this._errorElement.textContent = this._inputElement.validationMessage; 
      }

    _hideInputError(inputElement) { 
        this._errorElement = this._form.querySelector(`.${inputElement.id}--error`);    
        inputElement.classList.remove(this._inputErrorClass);    
        this._errorElement.classList.remove(this._errorClass);    
        this._errorElement.textContent = '';    
      }
      
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        })
    }

    _checkInputValidity(inputElement) {
        this._inputElement = inputElement;
        this._errorElement = this._form.querySelector(
        `.${this._inputElement.id}--error`
        );
        if (!this._inputElement.validity.valid) {
            this._showInputError();
        } else {
            this._hideInputError(inputElement);
        }
    }

    _toggleButtonState() { 
        if (this._hasInvalidInput()) {    
          this._buttonElement.classList.add(this._inactiveButtonClass);    
          this._buttonElement.disabled = true;    
        } else {    
          this._buttonElement.classList.remove(this._inactiveButtonClass);    
          this._buttonElement.disabled = false;     
        }     
    } 

    _setEventListeners() { 
        this._buttonElement = this._form.querySelector(this._submitButtonSelector);     
        this._toggleButtonState();     
        this._inputList.forEach((inputElement) => {     
          inputElement.addEventListener('input', () => {     
            this._checkInputValidity(inputElement);    
            this._toggleButtonState();    
          });    
        });    
    }
    
    enableValidation() { 
        this._form.addEventListener('submit', (evt) => {     
          evt.preventDefault();     
          this._toggleButtonState();     
        });     
        this._setEventListeners();    
    }
    

    clearValidation() { 
    this._inputList.forEach((input) => { 
      this._hideInputError(input); 
    }); 
    this._toggleButtonState(); 
  }  
}

const validConfig = { 
    inputSelector: '.popup-form--input', 
    submitButtonSelector: '.popup-form--btn', 
    inactiveButtonClass: 'popup-form--btn-inactive', 
    inputErrorClass: 'popup-form-input--error', 
    errorClass: 'input-error--active', 
  
  }; 
  
  export { validConfig };