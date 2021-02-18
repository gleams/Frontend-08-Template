function match(string) {
    let state = start;
    for (let c of string) {
        state = state(c);
    }
    return state === end;
}

function start(c) {
    if (c === 'a')
        return foundA;
    else
        return start;
}

function foundA(c) {
    if (c === 'b')
        return foundB;
    return start(c);

}

function foundB(c) {
    if (c === 'x')
        return end;
    return foundA(c);
}

function end(c) {
    return end;
}

console.log(match('abababx'));
