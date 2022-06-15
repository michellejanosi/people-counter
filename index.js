let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveCount = `${count} - `;
  saveEl.textContent += saveCount;
  // rest countEl to 0 after save
  count = 0;
  countEl.textContent = 0;
}