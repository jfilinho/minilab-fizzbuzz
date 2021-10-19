// Seu código aqui!

for (let numero = 1; numero <= 100; numero++) {

  if ((0 == numero % 3) && (0 == numero % 5)) {
    console.log("Fizz " + "Buzz");
  } else if (0 == numero % 5) {
    console.log("Buzz");
  } else if (2 == numero % 3) {
    console.log("fizz");
  } else {
    console.log(numero);
  }
}

