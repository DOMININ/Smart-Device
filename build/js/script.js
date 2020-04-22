'use strict';

var buttonOpen = document.querySelector('.page-header__call-button');
var buttonClose = document.querySelector('.popup__close');
var popup = document.querySelector('.popup');
var firstInput = document.querySelector('.popup__input-name');
var form = popup.querySelector('form');

var firstName = document.querySelector('[name=firstName]');
var phone = document.querySelector('[name=phone]');
var question = document.querySelector('[name=question]');

var isStorageSupport = true;
var storageName = '';
var storagePhone = '';
var storageQuestion = '';

try {
  storageName = localStorage.getItem('firstName');
  storagePhone = localStorage.getItem('phone');
  storageQuestion = localStorage.getItem('question');
} catch (err) {
  isStorageSupport = false;
}

buttonOpen.addEventListener('click', function () {
  popup.classList.toggle('close');
  firstInput.focus();

  if (storageName) {
    firstName.value = storageName;
  }

  if (storagePhone) {
    phone.value = storagePhone;
  }

  if (storageQuestion) {
    question.value = storageQuestion;
  }
});

buttonClose.addEventListener('click', function () {
  popup.classList.add('close');
});

popup.addEventListener('click', function (e) {
  if (e.target === popup) {
    popup.classList.add('close');
  }
});

window.onkeydown = function (e) {
  if (e.keyCode === 27) {
    popup.classList.add('close');
  }
};

form.addEventListener('submit', function () {
  if (isStorageSupport) {
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('phone', phone.value);
    localStorage.setItem('question', question.value);
  }
});
