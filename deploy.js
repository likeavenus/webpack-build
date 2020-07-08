const ghpages = require('gh-pages');
const repositoryUrl = ''; // Адрес репозитория, в который вы хотите сделать деплой, например: https://github.com/likeavenus/portfolio

ghpages.publish('dist', {
    branch: 'gh-pages',
    repo: repositoryUrl
}, ()=> {console.log('Deploy is successful')});
