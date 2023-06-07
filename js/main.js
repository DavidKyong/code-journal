const $inputURL = document.querySelector('#url');
const $image = document.querySelector('img');
const $form = document.querySelector('form');
const $ul = document.querySelector('ul');
// let updateEntryId;

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

  if (data.editing === null) {
    formValue.entryId = data.nextEntryId;
    data.nextEntryId++;

    data.entries.unshift(formValue);

    const entryElement = renderEntry(formValue);

    $ul.prepend(entryElement);

  } else if (data.editing !== null) {
    const updateEntryId = data.editing.entryId;
    formValue.entryId = updateEntryId;

    const originalIndex = data.entries.findIndex(function (entry) {
      return entry.entryId === updateEntryId;
    });

    if (originalIndex !== -1) {
      data.entries[originalIndex] = formValue;

      const newLi = renderEntry(formValue);
      const $oldLi = document.querySelector('[data-entry-id= "' + updateEntryId + '"]');

      $oldLi.replaceWith(newLi);
    }
    data.editing = null;
  }

  $image.setAttribute('src', '/images/placeholder-image-square.jpg');
  $form.reset();

  viewSwap('entries');
  toggleNoEntries();

});

const $newEntry = document.getElementById('entries-input');

function renderEntry(entry) {

  const $li = document.createElement('li');
  $li.setAttribute('data-entry-id', entry.entryId);
  $li.className = 'new-entries';

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

  const $titleRow = document.createElement('div');
  $titleRow.className = 'title-row';
  $columnContent.appendChild($titleRow);

  const $h3 = document.createElement('h3');
  $h3.textContent = entry.title;
  $titleRow.appendChild($h3);

  const $pencilIcon = document.createElement('i');
  $pencilIcon.className = 'fas fa-pencil';
  $titleRow.appendChild($pencilIcon);

  const $description = document.createElement('p');
  $description.textContent = entry.notes;
  $columnContent.appendChild($description);

  return $li;
}

$newEntry.addEventListener('click', function (event) {
  if (event.target.className === 'fas fa-pencil') {
    const theEntryId = event.target.closest('[data-entry-id]').getAttribute('data-entry-id');
    for (let i = 0; i < data.entries.length; i++) {
      if (data.entries[i].entryId === parseInt(theEntryId)) {
        data.editing = data.entries[i];
        $form.elements.title.value = data.editing.title;
        $form.elements.url.value = data.editing.url;
        $form.elements.notes.value = data.editing.notes;
        const $newTitle = document.querySelector('.picTitle h2');
        $newTitle.textContent = 'Edit Entry';
        data.editing.entryId = parseInt(theEntryId);

        viewSwap('entry-form');
        break;
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const entry = data.entries[i];
    const entryElement = renderEntry(entry);
    $newEntry.appendChild(entryElement);
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
