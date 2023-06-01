const $inputURL = document.querySelector('#url');
const $image = document.querySelector('img');
const $form = document.querySelector('form');

$inputURL.addEventListener('input', function (event) {
  $image.setAttribute('src', event.target.value);
});

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const $title = $form.elements['page-title'].value;
  const $url = $form.elements.photoURL.value;
  const $message = $form.elements.message.value;

  const formValue = {
    title: $title,
    url: $url,
    notes: $message
  };

  formValue.entryId = data.nextEntryId;
  data.nextEntryId++;

  data.entries.unshift(formValue);

  const entryElement = renderEntry(formValue);
  $newEntry.prepend(entryElement);

  $image.setAttribute('src', '/images/placeholder-image-square.jpg');
  $form.reset();

  viewSwap('entries');
  toggleNoEntries();
});

const $newEntry = document.getElementById('entries-input');

function renderEntry(entry) {
  const $li = document.createElement('li');
  $li.className = 'image-entries';

  const $row = document.createElement('div');
  $row.setAttribute('class', 'row');
  $li.appendChild($row);

  const $columnImage = document.createElement('div');
  $columnImage.setAttribute('class', 'column-half');
  $row.appendChild($columnImage);

  const $columnContent = document.createElement('div');
  $columnContent.setAttribute('class', 'column-half');
  $row.appendChild($columnContent);

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.url);
  $image.setAttribute('alt', 'No picture');
  $image.className = 'pic-images';
  $columnImage.appendChild($image);

  const $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  $columnContent.appendChild($h3);

  const $description = document.createElement('p');
  $description.textContent = entry.notes;
  $columnContent.appendChild($description);

  return $li;
}
const $entryInput = document.getElementById('entries-input');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const entryElement = renderEntry(entry);
    $entryInput.appendChild(entryElement);
  }

  viewSwap(data.view);

  toggleNoEntries();
});

const $noEntries = document.querySelector('.no-entry');

function toggleNoEntries() {
  if (data.entries.length === 0) {
    $noEntries.className = 'no-entry';
  } else {
    $noEntries.className = 'hidden';
  }
}

const $entryForm = document.querySelector('[data-view="entry-form"]');
const $entries = document.querySelector('[data-view="entries"]');

function viewSwap(viewName) {

  if (viewName === 'entry-form') {
    $entryForm.className = 'show';
    $entries.className = 'hidden';
    data.view = 'entry-form';
  } else if (viewName === 'entries') {
    $entryForm.className = 'hidden';
    $entries.className = 'show';
    data.view = 'entries';
  }
}

const $entriesLink = document.querySelector('.entries-link a');
const $newEntryButton = document.querySelector('.new a');

$entriesLink.addEventListener('click', function (event) {
  viewSwap('entries');
});

$newEntryButton.addEventListener('click', function (event) {
  viewSwap('entry-form');

  $image.setAttribute('src', '/images/placeholder-image-square.jpg');
  $form.reset();

});
