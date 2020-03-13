let title = document.querySelector('#title');
let subtitle = document.querySelector('#subtitle');
let nameAlert = document.querySelector('#nameModal');
const name = Cookies.get('name');

function firstVisit() {
    setTimeout(() => {
        $('body').addClass('modal-open');
        $('#modalBackground').addClass('show');
        $('#nameModal').addClass('show');
        $('#nameModal').addClass('block');
    }, 1000);

}

if (!name) {
    firstVisit();
} else {
    title.innerHTML = `Feeling down, ${name}?`;
    subtitle.innerHTML = `Let's fix that!`;
    console.log(title.innerHTML);
}