module.exports = [
    {
        type: 'input',
        name: 'appName',
        message: 'Please choose your application name',
        default: utils.yeoman.getAppName()
    },
    {
        type: 'confirm',
        name: 'postcss',
        message: 'Enable postcss?',
        default: false
    }
];