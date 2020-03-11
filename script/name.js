function firstVisit() {
    var person = prompt("Hi! It looks like you are new! Let's get started.\nWhat's your name?", "");
    if (person == null || person == "") {
        alert("I'd love to know your name, but for now, we can skip past that!");
    } else {
        Cookies.set('name', person, {
            expires: 7
        })
    }
}

const name = Cookies.get('name');

if (!name) firstVisit();

let title = document.getElementById('title');
title.innerHTML = `Feeling down, ${name}?`;