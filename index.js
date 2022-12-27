let salarioMensal = prompt('Qual o seu salário nesse mês?');
salarioMensal = parseFloat(salarioMensal);

let horasTrabalhadas = prompt('Quantas horas você trabalhou nesse mês?');
horasTrabalhadas = parseFloat(horasTrabalhadas);

let valorHora = salarioMensal / horasTrabalhadas;

alert('A sua hora vale ' + valorHora + ' reais');