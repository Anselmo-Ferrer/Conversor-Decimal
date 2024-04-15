
const enviar = document.getElementById('send')
const apagar = document.getElementById('trash')

const decimal = document.getElementById('decimal')
const binario = document.getElementById('binario')
const octal = document.getElementById('octal')
const hexadecimal = document.getElementById('hexadecimal')

const select = document.getElementById('select')

// darkmode

const dark = document.getElementById('dark');

dark.addEventListener('change', () => {
    document.body.classList.toggle('light-mode-variables')

})

// fuction


function conversor(numero, base, para) {

    numero = document.getElementById('numero').value  
    numero = String(numero)

    let items = [];
    let total = 0;
    let rest;
    let str = ''
    let digits = '0123456789ABCDEF'
    let text = ""

        // transformar em array

        for (let i = 0; i < numero.length; i++) {
            
            text += numero[i]

            if (i < numero.length-1) {
                text += " "
            }
        }

        let array = text.split(" ")

        // transformacao se for hexadecimal

        if (base == 16) {
            for (let i = 0; i < array.length; i++) {

                if (typeof array[i] === "string") {
    
                    if (array[i] === "A" || array[i] === "a") {
                        array.splice(i, 1)
                        array.splice(i, 0, 10)
                    } 
    
                    else if (array[i] === "B" || array[i] === "b") {
                        array.splice(i, 1)
                        array.splice(i, 0, 11)
                    } 
    
                    else if (array[i] === "C" || array[i] === "c") {
                        array.splice(i, 1)
                        array.splice(i, 0, 12)
                    } 
    
                    else if (array[i] === "D" || array[i] === "d") {
                        array.splice(i, 1)
                        array.splice(i, 0, 13)
                    } 
    
                    else if (array[i] === "E" || array[i] === "e") {
                        array.splice(i, 1)
                        array.splice(i, 0, 14)
                    } 
    
                    else if (array[i] === "F" || array[i] === "f") {
                        array.splice(i, 1)
                        array.splice(i, 0, 15)
                    }
                }
            }
        }

        // transfomar em decimal

        for (let i = 1; i <= array.length; i++) {
            rest = (array[array.length-i]) * Math.pow(base, i-1)
            total += rest
        }

        if (para === 10) {
            return total
        }
    
        // Decimal para outra base
    
        else {
            while (total > 0) {
                rest = Math.floor(total % para)
                items.push(rest)
                total = Math.floor(total / para)
            }
        
            while (items.length > 0) {
                str += digits[items.pop()] 
            }
        
            return str
        }

}


function atualizarResultado() {
    
    let numero = document.getElementById('numero').value;
    let base = document.getElementById('select').value;

    let decimal = document.getElementById('decimal');
    let binario = document.getElementById('binario');
    let octal = document.getElementById('octal');
    let hexadecimal = document.getElementById('hexadecimal');

    if (base === 'decimal') {
        decimal.textContent = conversor(numero, 10, 10);
        binario.textContent = conversor(numero, 10, 2);
        octal.textContent = conversor(numero, 10, 8);
        hexadecimal.textContent = conversor(numero, 10, 16);
    } else if (base === 'binario') {
        decimal.textContent = conversor(numero, 2, 10);
        binario.textContent = conversor(numero, 2, 2);
        octal.textContent = conversor(numero, 2, 8);
        hexadecimal.textContent = conversor(numero, 2, 16);
    } else if (base === 'octal') {
        decimal.textContent = conversor(numero, 8, 10);
        binario.textContent = conversor(numero, 8, 2);
        octal.textContent = conversor(numero, 8, 8);
        hexadecimal.textContent = conversor(numero, 8, 16);
    } else if (base === 'hexadecimal') {
        decimal.textContent = conversor(numero, 16, 10);
        binario.textContent = conversor(numero, 16, 2);
        octal.textContent = conversor(numero, 16, 8);
        hexadecimal.textContent = conversor(numero, 16, 16);
    }
}

document.getElementById('numero').addEventListener('input', atualizarResultado);

apagar.addEventListener('click', function() {
    document.getElementById('numero').value = ''
    decimal.textContent = ''
    binario.textContent = ''
    octal.textContent = ''
    hexadecimal.textContent = ''
})
 