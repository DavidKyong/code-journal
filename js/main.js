const $inputURL = document.querySelector('#url');
const $image = document.querySelector('img');
const $form = document.querySelector('form');

$inputURL.addEventListener('input', function (event) {
  event.preventDefault();
  $image.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const $title = $form.elements.pageTitle.value;
  const $url = $form.elements.photoURL.value;
  const $message = $form.elements.message.value;

  const formValue = {
    title: $title,
    url: $url,
    notes: $message
  };

  formValue.entryId = data.nextEntryId;
  data.nextEntryId++;

  data.entries.push(formValue);

  $image.setAttribute('src', '/images/placeholder-image-square.jpg');
  event.target.reset();
});
