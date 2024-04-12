
const enviar = document.getElementById('send')
const apagar = document.getElementById('trash')

const binario = document.getElementById('binario')
const octal = document.getElementById('octal')
const hexadecimal = document.getElementById('hexadecimal')

// darkmode

const dark = document.getElementById('dark');

dark.addEventListener('change', () => {
    document.body.classList.toggle('light-mode-variables')

})

// fuction


function ConversorDec(decimal, base) {
    decimal = document.getElementById('decimal').value
    let items = [],
    rest,
    str = '',
    digits = '0123456789ABCDEF'

    while (decimal > 0) {
        rest = Math.floor(decimal % base)
        items.push(rest)
        decimal = Math.floor(decimal / base)
    }

    while (items.length > 0) {
        str += digits[items.pop()] 
    }

    return str
}

enviar.addEventListener('click', function() {

    binario.textContent = ConversorDec(decimal, 2)
    octal.textContent = ConversorDec(decimal, 8)
    hexadecimal.textContent = ConversorDec(decimal, 16)
})

apagar.addEventListener('click', function() {
    document.getElementById('decimal').value = ''
    binario.textContent = ''
    octal.textContent = ''
    hexadecimal.textContent = ''
})