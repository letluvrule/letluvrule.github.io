const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const showSearchResult = () => {
  let searchWord = searchInput.value;
  window.open(`https://www.google.com/search?q=${searchWord}`, '_blank');
  searchInput.value = '';
};

const enterKey = (event) => {
  if (event.code === 'Enter') {
    showSearchResult();
  }
};

searchInput.addEventListener('keypress', (event) => {
  enterKey(event);
});

searchButton.addEventListener('click', () => {
  showSearchResult();
});
