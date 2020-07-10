import { auth } from "./firebase.js";

export function makeHeader() {
    const html = /*html*/`
        <header>
        <div id="header">
        <a href="index.html"><h1 class="fancy-header">PRISMATIC</h1></a>
        </div>
        </header>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function makeProfile(user) {
    const avatar = user.photoURL || './assets/default-avatar.png';
    const html = /*html*/`
        <div class="profile">
            <img src="${avatar}" alt="Avatar of ${user.displayName}">
            <span>${user.displayName}</span>
            <button>Sign Out</button>
        </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const headerContainer = document.getElementById('header-container');

export default function loadHeader() {
    const dom = makeHeader();
    const header = dom.querySelector('header');
    headerContainer.appendChild(dom);

    auth.onAuthStateChanged(user => {
        if(user) {
            const userDom = makeProfile(user);
            const signOutButton = userDom.querySelector('button');
            signOutButton.addEventListener('click', () => {
                auth.signOut();
            });
            header.appendChild(userDom);
        } else {
            window.location = './auth.html';
        }
    });
}
