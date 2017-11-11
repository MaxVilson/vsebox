var btnRoulette = document.getElementById('btn-roulett' +
  'e');
var btnOpen = document.getElementById('openBox');
var rouletteItem = document.querySelectorAll('.item');
var rouletteCount = getRandomInt(0, 30) * 150;

btnOpen.onclick = function() {
  $("#modal-demo-04").modal('hide');
}

btnRoulette.addEventListener('click', scrolling);

function scrolling() {
  for (var i = 0; i < rouletteItem.length; i++) {
    rouletteItem[i].style.transform = 'translateX('+-rouletteCount+'px)';
  }
  setTimeout(modalShow, 3500);
}

function modalShow() {
  $("#modal-demo-04").modal('show');
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
