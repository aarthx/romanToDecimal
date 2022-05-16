
//contar letras e multiplicar por milhar, centena, dezena e unidade, NESSA PRIMEIRA VERSÃO CONVERTERA APENAS NUMERO NO INTERVALO DE 1 À 3999
function converteRomano() {
    var input = document.querySelector("#input");
    var output = document.querySelector("#output");

    var letrasInput = Array.from(input.value)
    var tamanho = letrasInput.length

    var unidade = calculaUnidade(input.value)
    var dezena = calculaDezena(input.value)
    var centena = calculaCentena(input.value)
    var milhar = calculaMilhar(input.value)
    var decimal = unidade + dezena + centena + milhar
    output.value = decimal 

    //Melhorar verificação² apenas 1 I,X,C podem aparecer antes de V,L,D,X,C,M 
    var quantidade = [0, 0, 0, 0, 0, 0, 0] 
    for(var i = 0; i < tamanho; i++){

        if(letrasInput[i] == 'I') {
            quantidade[0]++
        } else if (letrasInput[i] == 'V') {
            quantidade[1]++
        } else if (letrasInput[i] == 'X') {
            quantidade[2]++
        } else if (letrasInput[i] == 'L') {
            quantidade[3]++
        } else if (letrasInput[i] == 'C') {
            quantidade[4]++
        } else if (letrasInput[i] == 'D') {
            quantidade[5]++
        } else if (letrasInput[i] == 'M') {
            quantidade[6]++
        }

        if(letrasInput[i] != 'I' && letrasInput[i] != 'V' && letrasInput[i] != 'X'
        && letrasInput[i] != 'L' && letrasInput[i] != 'C' && letrasInput[i] != 'D'  
        && letrasInput[i] != 'M' | output.value == NaN | quantidade[0] > 3 | quantidade[1] > 1 |
        quantidade[2] > 4 | quantidade[3] > 1 | quantidade[4] > 4 | quantidade[5] > 1 | quantidade[6] > 4 ) {
            input.value = ''
            alert('Coloque um número romano válido')
            break
        }
    }
}

function calculaUnidade(input) {
    if(input.includes('I') && !input.includes('V') && !input.includes('IX') && !input.includes('II') && !input.includes('III')) {
        return 1
    } else if(input.includes('II') && !input.includes('V') && !input.includes('III')) {
        return 2
    } else if(input.includes('III') && !input.includes('V')) {
        return 3
    } else if(input.includes('IV')) {
        return 4
    } else if(input.includes('V') && !input.includes('I')) {
        return 5
    } else if(input.includes('VI') && !input.includes('VII')) {
        return 6
    } else if(input.includes('VII') && !input.includes('VIII')) {
        return 7
    } else if(input.includes('VIII')) {
        return 8
    } else if(input.includes('IX')) {
        return 9
    } else {
        return 0
    }
}

function calculaDezena(input) {
    if(input.includes('X') && !input.includes('L') && !input.includes('XC') && !input.includes('XX') && !input.includes('XXX') && !input.includes('IX')) {
        return 10
    } else if(input.includes('XX') && !input.includes('L') && !input.includes('XXX')) {
        return 20
    } else if(input.includes('XXX') && !input.includes('L')) {
        return 30
    } else if(input.includes('XL')) {
        return 40
    } else if(input.includes('L') && !input.includes('X')) {
        return 50
    } else if(input.includes('LX') && !input.includes('LXX')) {
        return 60
    } else if(input.includes('LXX') && !input.includes('LXXX')) {
        return 70
    } else if(input.includes('LXXX')) {
        return 80
    } else if(input.includes('XC')) {
        return 90
    } else if(input.includes('XIX') && !input.includes('XXIX') && !input.includes('XXXIX')) {
        return 10
    }else {
        return 0
    }
}

function calculaCentena(input) {
    if(input.includes('C') && !input.includes('D') && !input.includes('CM') && !input.includes('CC') && !input.includes('CCC') && !input.includes('XC')) {
        return 100
    } else if(input.includes('CC') && !input.includes('D') && !input.includes('CCC')) {
        return 200
    } else if(input.includes('CCC') && !input.includes('D')) {
        return 300
    } else if(input.includes('CD')) {
        return 400
    } else if(input.includes('D') && !input.includes('C')) {
        return 500
    } else if(input.includes('DC') && !input.includes('DCC')) {
        return 600
    } else if(input.includes('DCC') && !input.includes('DCCC')) {
        return 700
    } else if(input.includes('DCCC')) {
        return 800
    } else if(input.includes('CM')) {
        return 900
    } else if(input.includes('CXC') && !input.includes('CCXC') && !input.includes('CCCXC')) {
        return 100
    }else {
        return 0
    }
}

function calculaMilhar(input) {
    if(input.includes('M') && !input.includes('CM') && !input.includes('MM') && !input.includes('MMM') && !input.includes('CM')) {
        return 1000
    } else if(input.includes('MM') && !input.includes('MMM')) {
        return 2000
    } else if(input.includes('MMM')) {
        return 3000
    } else if(input.includes('MCM') && !input.includes('MMCM') && !input.includes('MMMCM')) {
        return 1000
    } else {
        return 0
    }
}

//Função que passa automaticamente input digitado para letras maiusculas, ainda preciso entender como funciona 
function paraMaiusculas(e) {
    var ss = e.target.selectionStart;
    var se = e.target.selectionEnd;
    e.target.value = e.target.value.toUpperCase();
    e.target.selectionStart = ss;
    e.target.selectionEnd = se;
}
