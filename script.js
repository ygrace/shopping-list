var user = {
    username: "jiji",
    password: "secret"
};

var database = [
    {
        username: "jiji",
        password: "secret"
    },

    {
        username: "kaka",
        password: "little"
    },

    {
        username: "duran",
        password: "stinky"
    }
];

var newsFeed = [
    {
        username: "jim",
        timeline: "today is so hot!"
    },

    {
        username: "kiki",
        timeline: "now it is night."
    },

    {
        username: "penny",
        timeline: "dinner"
    }
];

var userNamePrompt = prompt("what is your name?");
var passwordPrompt = prompt("what is your password?");

function userValid(name, pass) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === name && database[i].password === pass) {
            return true;
        }   
    }
    return false;
}

function signIn (name, pass) {
    if (userValid(name, pass)) {
        console.log(newsFeed);
    } else {
        console.log("sorry wrong username and password!")
    }
}

signIn(userNamePrompt, passwordPrompt);

var input = document.querySelector("#userinput");
var ul = document.querySelector("ul");
var button = document.querySelector("button");

function addNewElementClick () {
    if (input.value.length > 0) {
        var newList = document.createElement("li");
        newList.appendChild(document.createTextNode(input.value));
        ul.appendChild(newList);
        input.value = "";

        var donBtn = document.createElement("button");
        donBtn.appendChild(document.createTextNode("done!"));
        newList.appendChild(donBtn);

        donBtn.addEventListener("click", function (event) {
            event.target.parentNode.classList.toggle("done");
        });

        var delBtn = document.createElement("button");
        delBtn.appendChild(document.createTextNode("delete!"));
        newList.appendChild(delBtn);

        delBtn.addEventListener("click", function (event) {
            event.target.parentNode.remove();
        })

    }
};

button.addEventListener("click", addNewElementClick)

function addNewEventKeypress (event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        var newList = document.createElement("li");
        newList.appendChild(document.createTextNode(input.value));
        ul.appendChild(newList);
        input.value = "";
    }
};

input.addEventListener("keypress", addNewEventKeypress);

