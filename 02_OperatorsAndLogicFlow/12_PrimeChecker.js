let number = 7;

primeChecker(number)

function primeChecker(number) {
    let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
        }
    }

    if (number <= 1) {
        isPrime = false;
    }

    console.log(isPrime);
}
