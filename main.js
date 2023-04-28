$(document).ready(function() {
    $('.telefone-jquery').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    })
    
    $('.form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 12
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor, insira o seu nome.',

            email: 'Por favor, insira um e-mail válido',

            telefone: 'Por favor, insira um telefone válido',

            mensagem: 'Por favor, insira uma mensagem válida'
        },
        submitHandler: function(form) {
            alert('Mensagem enviada com sucesso!')
            form.submit();
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos.`)
            }
        }
    })
})