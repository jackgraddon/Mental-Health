let title = document.querySelector('#title');
const name = Cookies.get('name');

function firstVisit() {
    var person = prompt("Hi! It looks like you are new! Let's get started.\nWhat's your name?", "");
    if (person == null || person == "") {
        alert("I'd love to know your name, but for now, we can skip past that!");
        title.innerHTML = `Feeling down?`;
        console.log(title.innerHTML);
    } else {
        Cookies.set('name', person, {
            expires: 7
        })
        title.innerHTML = `Feeling down, ${name}?`;
        console.log(title.innerHTML);
    }
}

if (!name) {
    firstVisit();
} else {
    title.innerHTML = `Feeling down, ${name}?`;
    console.log(title.innerHTML);
}
