import './assets/css/styles.scss';
import './assets/css/header.scss';

const user = {
    name: 'Alex',
    sayHi() {
        console.log('hi,', this.name)
    }
};

user.sayHi();

const f = () => {
    console.log(this)
}

f()

console.log(this);

