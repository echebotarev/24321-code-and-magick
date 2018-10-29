'use strict';

var CLOUD_WIDTH = 420; /*вводим константы для облака*/
var CLOUD_HEIGHT = 270;

var CLOUD_X = 150;
var CLOUD_Y = 250;
var GAP = 50;
var BAR_WIDTH = 40;
var BAR_HEIGHT = -150;
var BAR_Y = 231;
var TEXT_HEIGHT = 16;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT );
};

window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 120, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 110, 10, '#fff');

  var getMaxElement = function(arr) {
    var maxElement  = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (arr[i] > maxElement) {
        maxElement = arr[i];
      }
    }
    return maxElement;
  };

  ctx.font = '16px PT Mono';
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили',150,32);
  ctx.fillText('Список результатов:', 150, 50);


  function getColor(name) {
    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255,0,0,1)';
    }
    else {
      ctx.fillStyle = 'hsl(240,' + Math.round(Math.random() * 100)  +'%,'+Math.round(Math.random() * 100) +'% )';
    }
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    getColor(names[i]);
    
    ctx.fillText(names[i], CLOUD_X + (BAR_WIDTH + GAP)* i, CLOUD_Y);
    ctx.fillRect(CLOUD_X  + (BAR_WIDTH + GAP) * i, BAR_Y, BAR_WIDTH, (BAR_HEIGHT* times[i]) / maxTime);
  }
};
