
document.querySelector('#demoModalStart').addEventListener('click', function () {
  document.querySelector('#demoModalShadow').style.display = 'flex';
});

document.querySelector('input[type="message"]').oninput = function() {
  this.size = Math.max(this.value.length, 1);
 };

document.querySelector('#demoModalClose').addEventListener('click', function () {
  document.querySelector('#demoModalShadow').style.display = 'none';
});

document.querySelector('#demoModal').addEventListener('submit', function (e) {
  e.preventDefault();

  document.querySelector('#demoModalInfo').innerHTML = '<p>Сообщение отправлено</p>';
  document.querySelector('#demoModalSubscribe').style.display = 'none';
});

document.getElementById('button_sand_close').addEventListener('submit', function(e) {
  const modalWindow = document.querySelector('[class="open-modal"]');
  modalWindow.classList.remove('open');
})





