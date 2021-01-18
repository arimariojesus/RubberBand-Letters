const textElement = document.querySelector('.text');
const letters = document.querySelectorAll('.letter');

letters.forEach(letter => {
  letter.addEventListener('mouseenter', function() {
    this.classList.add('rubberband');
    setTimeout(() => this.classList.remove('rubberband'), 1000);
  });
});