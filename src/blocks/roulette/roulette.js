var rouletteItem = document.querySelectorAll('.item');
var randomNumber = Math.random(0, 10);
for (var i = 0; i < rouletteItem.length; i++) {
  rouletteItem[i].style.transform = 'translateX(-2100px)';
}
