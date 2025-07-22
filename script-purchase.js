const purchaseForm = document.getElementById('purchase');
purchaseForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const requiredFields = purchaseForm.querySelectorAll('form input, form select');
    const emptyField = Array.from(requiredFields).find(input => !input.value.trim());

    if (emptyField) {
        emptyField.focus();
        emptyField.placeholder = '⚠️⚠️ This field is required!';
        const errorMessage = document.createElement('div');
        errorMessage.id = 'form-error';
        errorMessage.textContent = 'Please fill out all required fields.';
        errorMessage.style.color = 'red';
        errorMessage.style.marginTop = '10px';
        errorMessage.style.fontSize = '16px';
        errorMessage.style.fontWeight = 'bold';
        purchaseForm.appendChild(errorMessage);
        setTimeout(() => {
            emptyField.placeholder = '';
            errorMessage.remove();
        }, 3000);

    } else {
        const firstName = document.getElementById('firstName').value;
        const bookTitle = document.querySelector('.details h2').textContent;
        alert(`Thank you ${firstName}! Your order for ${bookTitle} has been placed.`);
        purchaseForm.reset();
    }
});
