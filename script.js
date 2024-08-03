let input = document.querySelector('.input');
let btn_add = document.querySelector('.btn_add');
let text_area = document.querySelector('.text_area');
let btn_average = document.querySelector('.btn_average');
let average = document.querySelector('.average');

notas = [];

btn_add.addEventListener('click', () => {
    let input_string = input.value.trim();
    let nota = parseFloat(input.value);

    if (!isNaN(nota)) {
        if (nota >= 0 && nota <= 10) {
            notas.push(nota);
            let notasFormatted = notas.map((nota, index) => "A nota " + (index +1)+ " foi "+ nota + "."). join('\n');
            text_area.value = notasFormatted;
            input.value = '';
        } else {
            alert("A nota digitada é inválida, por favor digite um número entre 0 e 10.");
            input.value = "";
        }
    } else if (input_string === '') {
        alert("Insira uma nota.");
        input.value = '';
    } else {
        alert("A nota digitada é inválida, por favor digite um número entre 0 e 10.");
        input.value = '';
    }
});

btn_average.addEventListener('click', () => {
    if (notas.length === 0) {
        alert("Não há notas para calcular a média.");
    }

    soma = 0
    notas.forEach(nota => {
        soma += nota;
    });
    let avg = soma / notas.length;
    let avgFixed = avg.toFixed(2);

    average.textContent = `A média das notas é ${avgFixed}`;
});