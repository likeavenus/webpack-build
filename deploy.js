const ghpages = require('gh-pages');
const repositoryUrl = ''; // Адрес репозитория, в который вы хотите сделать деплой

ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: repositoryUrl
}, ()=> {console.log('Deploy is successful')});
