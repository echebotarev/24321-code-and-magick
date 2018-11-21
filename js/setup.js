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



var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
//1.2
var setupClose = document.querySelector('.setup-close');
//1.1прописывем обработчик событий .на нажатие setupOpen
//1.1при надажтие сетуп опен у блока сетуп убираем класс хиден
setupOpen.addEventListener('click',function(){
  setup.classList.remove('hidden');
//1.3 evt keyCode = esc = 27
  document.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
      setup.classList.add('hidden');
    }
  });
});
//1.4 чтоб сделать активный фокус в разметке прописываем tabindex="0"
setupOpen.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function() {
  setup.classList.add('hidden');
});
//1.2
setupClose.addEventListener('keydown',function(evt){
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
  }
});
//заходим в разметку и начинаем прописывать атрбуты
//заполнение форм? -------пункт 6 задания
//required атрибут обязательного заполнение ----пункт 2


var newForm = document.querySelector('.button setup-submit');
setup.classList.add('hidden'); //может сначало нужно показать блок сетуп?
newForm.addEventListener('click',function(evt){
  if (evt.keyCode === 13) {
  setup.classList.remove('hidden');
};
});


var wizardCoat = document.querySelector('.wizard-coat')
wizardCoat.addEventListener('click',function(){
    ctx.fillStyle = 'hsl(240,' + Math.round(Math.random() * 100)  +'%,'+Math.round(Math.random() * 100) +'% )'
});
