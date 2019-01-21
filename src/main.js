// @builtin javascript | JS and TS extension disabled to avoid false TS errors
require('./main.css')

console.log('test')

const app = document.getElementById('app')
app.innerHTML = '<p class="centerbox">This was replaced by JS, yay!</p>'
