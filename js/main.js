function renderEntry(entry) {
  const $columnFull = document.createElement('div');
  $columnFull.className = 'column-full';

  const $entryInfo = document.createElement('ul');
  $entryInfo.className = 'entry-info';

  const $image = document.createElement('li');
  $image.setAttribute('src', entry.imageURL);

  const $title = document.createElement('li');
  $title.className = 'title';

  const $descriptions = document.createElement('li');
  $descriptions.className = 'descriptions';

  $columnFull.appendChild($entryInfo);

  $entryInfo.appendChild($image);
  $entryInfo.appendChild($title);
  $entryInfo.appendChild($descriptions);

}
const $row = document.querySelector('.row');

document.addEventListener('DOMContentLoaded', function (event) {
  for (let i = 0; i < data.entries.length; i++) {
    const newEntry = data.entries[i];
    const dataEntry = renderEntry(newEntry);
    $row.appendChild(dataEntry);
  }
});
