let title = document.querySelector('#title');
let subtitle = document.querySelector('#subtitle');
let nameAlert = document.querySelector('#nameModal');
const name = Cookies.get('name');
let wantingName = false;

// Site Load Script
function firstVisit() {
    setTimeout(() => {
        $('body').addClass('modal-open');
        $('#modalBackground').addClass('show');
        $('#nameModal').addClass('show');
        $('#nameModal').addClass('block');
    }, 100);

}

function returningVisit() {
    title.innerHTML = `Feeling down, ${name}?`;
    subtitle.innerHTML = `Let's fix that!`;
    console.log(title.innerHTML);
}

// Welcome Modal Javascript
$(document).keyup(function (e) {
    if (e.key === "Escape") {
        $(`#nameModal`).removeClass('show');
        $(`#nameModal`).removeClass('block');
        $('body').removeClass('modal-open');
        $('#modalBackground').removeClass('show');
    }
});

function denied() {
    $('#notToday').removeClass('invis');
    $('#welcomeTextModal').addClass('invis');
    $('#yesBtn').addClass('invis');
    $('#noBtn').addClass('invis');
    $('#closeBtn').removeClass('invis');
}

function dismissModal() {
    $(`#nameModal`).removeClass('show');
    $(`#nameModal`).removeClass('block');
    $('body').removeClass('modal-open');
    $('#modalBackground').removeClass('show');
}

function confirmed() {
    $('#nameForm').removeClass('invis');
    $('#welcomeTextModal').addClass('invis');
    $('#noBtn').addClass('invis');
    $('#yesBtn').addClass('invis');
    $('#nameBtn').removeClass('invis');
    wantingName = true;
}

function setName() {
    let name = document.querySelector('#name').value;
    Cookies.set('name', name);
    dismissModal()
    returningVisit()
}


if (!name) {
    firstVisit();
} else {
    returningVisit();
}