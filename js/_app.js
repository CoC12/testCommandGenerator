document.addEventListener('DOMContentLoaded', () =>
{
    initialize();
});

const initialize = () => {
    const inputButton = document.querySelector('.js-main-input__input-button');
    inputButton.addEventListener('click', () => {
        let path = inputForm.value;

        const splittedPath = path.split('django/app/');
        if (splittedPath.length > 1) {
            path = splittedPath[1];
        }
        const processedPath = path.split('.py')[0].split('/').join('.');
        const startCommand = './manage.py test ' + processedPath;

        const outputForm = document.querySelector('.js-main-output');
        outputForm.value = startCommand;

        const isCopy = document.querySelector('.js-main-input__input-checkbox-copy').checked;
        if (isCopy) {
            outputForm.select();
            document.execCommand("copy");
            inputForm.focus();
        }
    });

    const inputForm = document.querySelector('.js-main-input__input-path');
    inputForm.addEventListener('input', () => {
        inputButton.click();
    });
}