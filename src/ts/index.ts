"use strict"

function welcome() {
    console.log("CONTACT ME:\n" +
        "----------\n\n" +
        "(\\__/)\n" +
        "(o^-^)\n" +
        "(_('')(')\n\n" +   
        "Hello ! If you like this portfolio, leave a star on the Github repo: https://github.com/tiboitel/portfolio/\n\n" +
        "Don't hesitate to PM me at tiboitel@student.42.fr either.\n\n" +
        "See you soon space cowboy ~"
    );
}

function main() {
    const homeComponent = new HomeComponent();
    const cursorComponent = new CursorComponent();
    
    welcome();
}

document.addEventListener('DOMContentLoaded', main);