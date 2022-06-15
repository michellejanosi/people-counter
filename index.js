let countEl = document.getElementById('count-el');
let saveEl = document.getElementById('save-el');
let count = 0;

function increment() {
  count += 1;
  return countEl.textContent = count;
}

function save() {
  let saveCount = `${count} - `;
  saveEl.textContent += saveCount;
}