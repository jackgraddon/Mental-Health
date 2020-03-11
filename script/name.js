let title = document.querySelector('#title');
let subtitle = document.querySelector('#subtitle');
const name = Cookies.get('name');

function firstVisit() {
    var person = prompt("Hi! It looks like you are new! Let's get started.\nWhat's your name?", "");
    if (person == null || person == "") {
        alert("I'd love to know your name, but for now, we can skip past that!");
        title.innerHTML = `Feeling down?`;
        subtitle.innerHTML = `We'd love to know your name! Click <a class="text-click" onclick="javascript:firstVisit()">here</a> to let us know!`;
        console.log(title.innerHTML);
    } else {
        Cookies.set('name', person, {
            expires: 7
        })
        title.innerHTML = `Feeling down, ${name}?`;
        subtitle.innerHTML = `Let's fix that!`;
        console.log(title.innerHTML);
    }
}

if (!name) {
    firstVisit();
} else {
    title.innerHTML = `Feeling down, ${name}?`;
    subtitle.innerHTML = `Let's fix that!`;
    console.log(title.innerHTML);
}
