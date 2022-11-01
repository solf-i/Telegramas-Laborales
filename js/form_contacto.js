(() => {
    class FormContactoAdjutos {
        static #maxFiles = 5;
        static #maxSize = 5242880; // 5MB.
        #form;
        #submit;
        #okMessage;
        #errorMessage;
        #inputFile;

        constructor($formSelector) {
            const me = this;

            me.#form = document.querySelector($formSelector);
            me.#submit = me.#form.querySelector('[type="submit"]');
            me.#okMessage = me.#form.querySelector('[role="files-ok-message"]');
            me.#errorMessage = me.#form.querySelector(
                '[role="files-error-message"]'
            );
            me.#inputFile = document.querySelector(
                '[role="archivos_adjuntos"]'
            );

            console.log({ submit: me.#submit });

            me.#inputFile.addEventListener('change', me.#change);
        }

        #change = (event) => {
            const me = this;
            console.log({ target: event.target });
            console.log({ target_files: event.target.files });
            const input = event.target;
            const files = input.files;

            if (files.length === 0) return;

            let error = files.length > FormContactoAdjutos.#maxFiles;
            let errorMessage = error
                ? 'No se pueden seleccionar másde 5 archivos.'
                : '';

            let sizeError = '';
            for (let file of files) {
                if (file.size > FormContactoAdjutos.#maxSize)
                    sizeError += file.name + '<br>';
            }
            console.log({ sizeError: sizeError });

            if (sizeError !== '') {
                errorMessage =
                    'Los Siguientes archivos superan los 5MB de tamaño máximo: <br>' +
                    sizeError;
                error = true;
            }

            me.#disableSendButton(error);
            me.#showOkMessage(!error, 'Selección de archivos aceptada');
            me.#showErrorMessage(error, errorMessage);
        };

        #disableSendButton = (status) => {
            const me = this;
            setTimeout(() => {
                me.#submit.disabled = status;
            }, 200);
        };

        #showOkMessage = (status, message) => {
            this.#showMessage(this.#okMessage, status, message);
        };

        #showErrorMessage = (status, message) => {
            this.#showMessage(this.#errorMessage, status, message);
        };

        #showMessage = ($element, status, message) => {
            setTimeout(() => {
                const alert = $element.querySelector('[role="alert"]');
                alert.innerHTML = message;
                if (!status) {
                    $element.classList.add('d-none');
                    $element.classList.remove('d-flex');
                } else {
                    $element.classList.add('d-flex');
                    $element.classList.remove('d-none');
                }
            }, 200);
        };
    }

    document.addEventListener('DOMContentLoaded', () => {
        console.log('form_contacto.js');
        const f = new FormContactoAdjutos('#form');
    });
})();
