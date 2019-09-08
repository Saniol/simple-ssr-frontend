import App from './webapp/App.jsx';

const container = document.getElementById('app-container');
const application = new App({
    container,
});

application.init();
