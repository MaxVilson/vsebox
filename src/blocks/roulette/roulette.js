var btnRoulette = document.getElementById('btn-roulette');
var rouletteItem = document.querySelectorAll('.item');

btnRoulette.onclick = function() {
  for (var i = 0; i < rouletteItem.length; i++) {
    rouletteItem[i].style.transform = 'translateX(-2100px)';
  }
  setTimeout(modalShow, 3500);
}

function modalShow() {
  $("#modal-demo-04").modal('show');
}
