function count(vet: number[], value: number): number {
    let contador: number = 0;
    for(let elem of vet) {
        if (elem == value) {
            contador++;
        }
    }
    return contador
}

function sum(vet: number[]): number {
    let soma: number = 0;
    for (let elem of vet) {
        soma += Math.abs(elem);
    }
    return soma;
}

function average(vet: number[]): number {
    return sum(vet) / vet.length;
}

function more_men(vet: number[]): string {
    return "";
}

function half_compare(vet: number[]): string {
    return "";
}

function sex_battle(vet: number[]): string {


    return "";
}

if (require.main === module) {
}

export { count, sum, average, more_men, half_compare, sex_battle };



