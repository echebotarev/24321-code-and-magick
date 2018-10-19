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
  //console.log(max);
  return Math.round(Math.random()*max)
}
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

  //получить рандомное имя
  //получить рандомную фамилию
  //сложить
  //добавить в массив  // console.log(ADDITION);
}
console.log(arr);

/*var wizards = [    //создаем обьект. в котором будем описывать свойства
  {
    name: WIZARD_NAMES[0],
    coatColor: 'rgb(101, 137, 164)',
    eyesColor: 'black'
  },
  {
    name: WIZARD_NAMES[1],
    coatColor: 'rgb(241, 43, 107)',
    eyesColor: 'red'
  },
  {
    name: WIZARD_NAMES[2],
    coatColor: 'rgb(146, 100, 161)',
    eyesColor: 'blue'
  },
  {
    name: WIZARD_NAMES[3],
    coatColor: 'rgb(56, 159, 117)',
    eyesColor: 'yellow'
  },
  {
    name: WIZARD_NAMES[4],
    coatColor: 'rgb(215, 210, 55)',
    eyesColor: 'green'
  },
  {
    name: WIZARD_NAMES[5],
  coatColor: 'rgb(0, 0, 0)',
  eyesColor: ''}
];   */
for (var i = 0; i < 4; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = name;
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill =  eyesColor;

  similarListElement.appendChild(wizardElement);
  }
  //var fragment = document.createDocumentFragment();
