const $inputURL = document.querySelector('#url');
const $image = document.querySelector('img');
const $form = document.querySelector('form');

$inputURL.addEventListener('input', function (event) {
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

  data.entries.unshift(formValue);

  $image.setAttribute('src', '/images/placeholder-image-square.jpg');
  $form.reset();
});

function renderEntry(entry) {
  const $li = document.createElement('li');

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.image);
  $li.appendChild($image);

  const $title = document.createElement('h3');
  $title.textContent = entry.title;
  $li.appendChild($title);

  const $description = document.createElement('p');
  $description.textContent = entry.notes;
  $li.appendChild($description);

  return $li;
}

document.addEventListener('DOMContentLoaded', function () {
  const $entryList = document.getElementById('entriesList');

  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const entryElement = renderEntry(entry);
    $entryList.appendChild(entryElement);
  }
  toggleNoEntries();
});

function toggleNoEntries() {
  const $noEntriesMessage = document.querySelector('.no-entries-message');

  if ($noEntriesMessage) {
    if (data.entries.length === 0) {
      $noEntriesMessage.className = 'no-entries-message';
    } else {
      $noEntriesMessage.className = 'hidden';
    }
  }
}
function viewSwap(viewName) {
  const $entryForm = document.querySelector('[data-view="entry-form"]');
  const $entries = document.querySelector('[data-view="entries"]');

  if (viewName === 'entry-form') {
    $entryForm.className = '';
    $entries.className = 'hidden';
    data.view = 'entry-form';
  } else if (viewName === 'entries') {
    $entryForm.className = 'hidden';
    $entries.className = '';
    data.view = 'entries';
  }
}

const $entriesViewLink = document.querySelector('#entriesViewLink');
const $newEntryButton = document.querySelector('#newEntryButton');

$entriesViewLink.addEventListener('click', function () {
  viewSwap('entries');
});

$newEntryButton.addEventListener('click', function () {
  viewSwap('entry-form');
});
