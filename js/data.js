/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  const dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
});

const previousDataJSON = localStorage.getItem('javascript-local-storage');
if (dataJSON === previousDataJSON) {
  data = JSON.parse(dataJSON);
}
