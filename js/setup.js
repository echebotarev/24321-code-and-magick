'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
console.log(userDialog.classList);
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
   .querySelector('.setup-similar-item');

var NAMES = ['Иван','Хуан','Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var F_NAMES = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COATCOLOR = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)']
var EYESCOLOR = ['black','red','blue','yellow','green']

var randomInteger = function (max) {
  return Math.round(Math.random()*max)
}
var createWizzards = function () {
  var arr = [];
  for (var i = 0; i < 4; i++) {
    var name = NAMES[randomInteger(NAMES.length -1)] + ' ' + F_NAMES[ randomInteger(F_NAMES.length -1)];
    var coatColor = COATCOLOR[randomInteger(COATCOLOR.length - 1)];
    var eyesColor = EYESCOLOR[randomInteger(EYESCOLOR.length - 1)];
    var obj = {
      name: name,
      coatColor: coatColor,
      eyesColor:eyesColor,
    };
    arr.push(obj);
  }
  return arr;
}

var showWizzards = function (arr) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
    wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill =  arr[i].eyesColor;
    fragment.appendChild(wizardElement);
  }
  similarListElement.appendChild(fragment);
}
var wizzards = createWizzards();
showWizzards(wizzards);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
