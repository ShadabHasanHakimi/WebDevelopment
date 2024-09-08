(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                console.log("Form validation failed.");
                event.preventDefault();
                event.stopPropagation();
            } else {
                console.log("Form validation passed.");
            }

            form.classList.add('was-validated');
        }, false);
    });
})();
