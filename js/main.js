function renderEntry(entry) {

  const $li = document.createElement('li');

  const $image = document.createElement('img');
  $image.setAttribute('src', entry.url);

  const $picTitle = document.createElement('h3');
  $picTitle.textContent = entry.title;

  const $descriptions = document.createElement('div');
  $descriptions.className = 'descriptions';
  $descriptions.textContent = entry.notes;

  $li.appendChild($image);
  $li.appendChild($picTitle);
  $li.appendChild($descriptions);

  return $li;
}

const $ul = document.querySelector('ul');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const newEntry = data.entries[i];
    const dataEntry = renderEntry(newEntry);
    $ul.appendChild(dataEntry);
  }
  toggleNoEntries();
});

function toggleNoEntries() {
  const $entries = document.querySelector('.hidden');
  if ($entries) {
    const $entries = $ul.querySelector('li') !== null;
    if ($entries) {
      $entries.className = 'hidden';
    } else {
      $entries.className = 'none';
    }
  }
}
