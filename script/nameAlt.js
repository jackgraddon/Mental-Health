let title = document.querySelector('#title');
let subtitle = document.querySelector('#subtitle');
const name = Cookies.get('name');

$(title).append(`${name}?`);
console.log(title.innerHTML);