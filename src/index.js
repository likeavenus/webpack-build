import './assets/css/styles.scss';
import './assets/css/header.scss';

function sum(a, b) {
    return a + b;
}

sum(1, 2);

async function f() {
    const promise = await fetch('https://google.com');

    return promise;
}
f().then(r => r);

class B  {
    constructor(name) {
        this.name = name;
    }
}

console.log(new B('Sanek'))



