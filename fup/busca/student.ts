function inside(vet: number[], value: number): boolean {
    
    for(let elem of vet) {
        if(elem == value) {
            return true;
        }
    }
    return false;
}

function index_of(vet: number[], value: number): number {
            for(let i = 0; i < vet.length; i++) {
                if (vet[i] == value) {
                    return i;
                }
        } return -1
    }

function find_if(vet: number[]): number {
    return 0;
}

function min_element(vet: number[]): number {
    let ref = 0;
    if (vet.length == 0) {
        return -1;
    }
    for(let i = 0; i < vet.length; i++) {
        if (vet[i] < ref) {
            ref = vet[i];
        }
        return ref;
    }
}

function find_min_if(vet: number[]): number {
    return 0;
}


if (require.main === module) {
    console.log("Rodando o arquivo do estudante");
}

export { inside, index_of, find_if, min_element, find_min_if };
