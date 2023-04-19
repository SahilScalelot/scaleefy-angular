 // Class Toggle 
 function toggleActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.toggle(db);
}
// class remove 
function removeActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.remove(db);
}
// class Add
function addActive(Id, db) {
  var element = document.querySelector(Id);
  element.classList.add(db);
}