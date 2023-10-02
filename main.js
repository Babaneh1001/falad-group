const openHam = document.querySelector('.open-hamburger');
const closeHam = document.querySelector('.navigation-for-hamburger');
const showDiv = document.querySelector('.hamburger-menu');


openHam.addEventListener("click", () => {
  openHam.classList.add('hidden');
  showDiv.classList.remove('hidden');
});

closeHam.addEventListener("click", () => {
  showDiv.classList.add('hidden');
  openHam.classList.remove('hidden');
});