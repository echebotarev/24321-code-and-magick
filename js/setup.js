'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');   /*выводим блок убирая класс hiden*/
console.log(userDialog.classList);
document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list'); //аналогичный список элементов

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
   .querySelector('.setup-similar-item');
console.log(similarWizardTemplate);

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер']; // создаем массив с именами волшебника
var NAMES = ['Иван','Хуан','Себастьян','Мария','Кристоф','Виктор','Юлия','Люпита','Вашингтон'];
var F_NAMES = ['да Марья','Верон','Мирабелла','Вальц','Онопко','Топольницкая','Нионго','Ирвинг'];
var COATCOLOR = ['rgb(101, 137, 164)','rgb(241, 43, 107)','rgb(146, 100, 161)','rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)']
var EYESCOLOR = ['black','red','blue','yellow','green']

var randomInteger = function (max) {

  return Math.round(Math.random()*max)
}

//var createWizzards = function (name,coatColor,eyesColor) {
//for (var i = 0; i < 4; i++)
//}
//для ниже стоящего массива нужно написать код.
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

for (var i = 0; i < arr.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  console.log(arr[i]);
  console.log(name[i]);
  wizardElement.querySelector('.setup-similar-label').textContent = arr[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = arr[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill =  arr[i].eyesColor;
  similarListElement.appendChild(wizardElement);
  }
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < arr.length; i++){
    fragment.appendChild(wizardElement(arr[i]));
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  }

//createWizzards функция будет создавать массив магов
//showWizzards функция будет добавоять в дом
