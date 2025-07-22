const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formInputs = document.querySelectorAll('#form-container input[type="text"], #form-container input[type="password"]');
    const emptyField = Array.from(formInputs).find(input => !input.value.trim());

    const oldError = document.getElementById('form-error');
    if (oldError) oldError.remove();
    formInputs.forEach(input => input.style.borderColor = '');

    if (emptyField) {
        emptyField.focus();
        emptyField.placeholder = '⚠️⚠️ This field is required!';
        const errorMessage = document.createElement('div');
        errorMessage.id = 'form-error';
        errorMessage.textContent = 'Please fill out all fields.';
        errorMessage.style.color = 'red';
        errorMessage.style.marginBottom = '10px';
        errorMessage.style.fontSize = '16px';
        errorMessage.style.fontWeight = 'bold';
        const h1 = document.querySelector('form h1');
        h1.insertAdjacentElement('afterend', errorMessage);
        setTimeout(() => {
            errorMessage.remove();
            emptyField.placeholder = '';
        }, 2000);
    } else {
        const username = document.getElementById('Username').value;
        alert(`Welcome back, ${username}!`);
        form.reset();
    }
});