const inputURL = document.querySelector('#url');
const image = document.querySelector('img');

inputURL.addEventListener('input', function (event) {
  event.preventDefault();
  image.setAttribute('src', event.target.value);
}
);
