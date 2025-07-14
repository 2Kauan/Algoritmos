// 1. 25+17
console.log(25 + 17); // 42

// 2. 100-250
console.log(250 - 100); // 150

// 3. 9x6
console.log(9 * 6); // 54

// 4. 144 dividido por 12
console.log(144 / 12); // 12

// 5. Resto da divisão de 55 e 6
console.log(55 % 6); // 1

// 6. Incremento
let x = 10;
console.log(++x); // 11

// 7. Decremento
let y = 5;
y--;
y--;
console.log(y); // 3

// 8. Soma, subtração e multiplicação
console.log((10 + 5 - 3) * 2); // 24

// 9. Média de três números
console.log((8 + 7.5 + 10) / 3); // 8.5

// 10. Operadores de atribuição
let a = 20, b = 5;
a += b; // 25
a *= 2; // 50
console.log(a); // 50

// 11. Ver se 10 é maior que 7
console.log(10 > 7); // true

// 12. Ver se 5 é menor ou igual a 3
console.log(5 <= 3); // false

// 13. Comparação com == e ===
console.log(7 == '7');  // true (compara valor)
console.log(7 === '7'); // false (compara valor e tipo)

// 14. Comparação com !== e !=
console.log(10 !== '10'); // true
console.log(10 != '10');  // false

// 15. (5 > 3) && (8 < 10)
console.log((5 > 3) && (8 < 10)); // true

// 16. (5 < 3) || (8 === 8)
console.log((5 < 3) || (8 === 8)); // true

// 17. !(7 > 2)
console.log(!(7 > 2)); // false

// 18. Comparar (4 + 3) * 2 e 4 + 3 * 2
console.log((4 + 3) * 2); // 14
console.log(4 + 3 * 2);   // 10

// 19. Potência: 2 ** 4
console.log(2 ** 4); // 16

// 20. ((10 + 2) / 2) ** 2
console.log(((10 + 2) / 2) ** 2); // 36

// 21. Verificar se 4 + 4 == 2 * 4
console.log((4 + 4) == (2 * 4)); // true

// 22. Expressão com ==, !, &&
console.log((5 == 5) && !(3 == 3) && (2 == 2)); // false

// 23. Expressão com ||, !== e números
console.log(4 !== '4' || 2 === 2 || false || 10 > 1); // true

// 24. 5 + 3 * 2 ** 2
console.log(5 + 3 * 2 ** 2); // 17
// Ordem: 2**2 = 4 → 3*4 = 12 → 5+12 = 17

// 25. r += 2 * 4; depois r /= 2
let r = 3;
r += 2 * 4; // 3 + 8 = 11
r /= 2;     // 11 / 2 = 5.5
console.log(r); // 5.5

// 26. Concatenar strings
let nome = "Ana", sobrenome = "Silva";
console.log(nome + " " + sobrenome); // Ana Silva

// 27. ("5" + 5) == 55
console.log(("5" + 5) == 55); // true
// "5" + 5 vira string "55" → comparado com número 55 vira true com ==

// 28. true && false || true
console.log(true && false || true); // true
// true && false = false → false || true = true

// 29. Expressão com aritmético, comparação e lógica
console.log((5 + 3 > 6) && (10 <= 10)); // true

// 30. let resultado = (10 + 5 * 2) > (30 / 2) && !false;
let resultado = (10 + 5 * 2) > (30 / 2) && !false;
// 5*2 = 10 → 10 + 10 = 20
// 30 / 2 = 15
// 20 > 15 = true
// !false = true
// true && true = true
console.log(resultado); // true