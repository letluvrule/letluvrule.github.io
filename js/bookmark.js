const newBookmarkForm = document.getElementById('bookmark-item-input-form');
const bookmarkItemList = document.getElementById('bookmark-list');
const newBookmarkNameInput = document.getElementById('new-bookmark-name-input');
const newBookmarkUrlInput = document.getElementById('new-bookmark-url-input');
const bookmarkItemAddBtn = document.getElementById('bookmark-item-add-btn');
const addBtn = document.getElementById('add-btn');
const cancelBtn = document.getElementById('cancel-btn');

let bookmarkList = getStoredBookmarkList();

newBookmarkForm.style.display = 'none';
bookmarkItemAddBtn.addEventListener('click', newBookmarkToggle);
addBtn.addEventListener('click', addBookmarkItem);
cancelBtn.addEventListener('click', newBookmarkToggle);
setBookmarkList();

function getStoredBookmarkList() {
  return JSON.parse(localStorage.getItem('bookmarkList')) || [];
}

function setStoredBookmarkList(list) {
  localStorage.setItem('bookmarkList', JSON.stringify(list));
}

function newBookmarkToggle() {
  newBookmarkForm.style.display =
    newBookmarkForm.style.display === 'block' ? 'none' : 'block';
}

function deleteBookmarkItem(id) {
  const isDelete = window.confirm('정말 삭제하시겠습니까?');
  if (!isDelete) return;

  const updatedBookmarkList = bookmarkList.filter((elm) => elm.createAt !== id);
  setStoredBookmarkList(updatedBookmarkList);
  document.getElementById(`bookmark-item-${id}`).remove();
}

function setBookmarkItem(item) {
  const bookmarkItem = document.createElement('div');
  bookmarkItem.className = 'bookmark-item';
  bookmarkItem.id = `bookmark-item-${item.createAt}`;

  const bookmarkInfo = document.createElement('div');
  bookmarkInfo.className = 'bookmark-info';

  const bookmarkUrl = document.createElement('a');
  bookmarkUrl.className = 'bookmark-url';
  bookmarkUrl.href = item.url;
  bookmarkUrl.target = '_blank';

  const urlIcon = document.createElement('div');
  urlIcon.className = 'url-icon';

  const urlIconImg = document.createElement('img');
  urlIconImg.src = `https://www.google.com/s2/favicons?domain_url=${item.url}`;

  const nameElement = document.createElement('div');
  nameElement.className = 'url-name';
  nameElement.textContent = item.name;

  const bookmarkDelBtn = document.createElement('div');
  bookmarkDelBtn.className = 'del-btn';
  bookmarkDelBtn.innerHTML =
    '<i class="fas fa-times-circle fa-lg" style="color: white;"></i>';
  bookmarkDelBtn.addEventListener('click', () => {
    deleteBookmarkItem(item.createAt);
  });

  bookmarkItem.appendChild(bookmarkInfo);
  bookmarkItem.appendChild(bookmarkDelBtn);
  bookmarkInfo.appendChild(bookmarkUrl);
  bookmarkUrl.appendChild(urlIcon);
  bookmarkUrl.appendChild(nameElement);
  urlIcon.appendChild(urlIconImg);

  bookmarkItemList.appendChild(bookmarkItem);
}

function setBookmarkList() {
  bookmarkList.forEach((item) => {
    setBookmarkItem(item);
  });
}

function addBookmarkItem() {
  const name = newBookmarkNameInput.value;
  const url = newBookmarkUrlInput.value;
  const createAt = Date.now();

  if (!name || !url) return;

  const newBookmark = { name, url, createAt };
  bookmarkList.push(newBookmark);
  setStoredBookmarkList(bookmarkList);

  newBookmarkNameInput.value = '';
  newBookmarkUrlInput.value = '';
  setBookmarkItem(newBookmark);
  newBookmarkToggle();
}
