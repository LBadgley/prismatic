import { makeHeader, makeProfile } from '../src/header-component.js';

const test = QUnit.test;
QUnit.module('header component tests');

test('create header', assert => {
    const expected = /*html*/`
        <header>
        <div id="header">
            <a href="index.html"><h1 class="fancy-header">PRISMATIC</h1></a>
        </div>
        </header>
    `;

    const result = makeHeader();
    assert.htmlEqual(result, expected);
});

test('make profile', assert => {
    const expected = /*html*/`
        <div class="profile">
            <img src="https://lh5.googleusercontent.com/-4CdOE15sL5w/AAAAAAAAAAI/AAAAAAAAA8M/0Y7ZON1htn8/photo.jpg" alt="Avatar of Laura Badgley">
            <span>Laura Badgley</span>
            <button>Sign Out</button>
        </div>
    `;
    const user = {
        displayName: 'Laura Badgley',
        photoURL: 'https://lh5.googleusercontent.com/-4CdOE15sL5w/AAAAAAAAAAI/AAAAAAAAA8M/0Y7ZON1htn8/photo.jpg',
        quizColor: '40E0D0',
        uid: 'jVuAVNxgq9fw6nXTdLf2pMPrjzs2'
    };
    const result = makeProfile(user);

    assert.htmlEqual(result, expected);
});
test('make profile without photo', assert => {
    const expected = /*html*/`
        <div class="profile">
        <img src="./assets/default-avatar.png" alt="Avatar of Laura Badgley">
            <span>Laura Badgley</span>
            <button>Sign Out</button>
        </div>
    `;
    const user = {
        displayName: 'Laura Badgley',
        quizColor: '40E0D0',
        uid: 'jVuAVNxgq9fw6nXTdLf2pMPrjzs2'
    };
    const result = makeProfile(user);

    assert.htmlEqual(result, expected);
});