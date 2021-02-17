function foundABCDEF(str) {
    let foundStr = [
        {
            char: 'a',
            isFound: false
        },
        {
            char: 'b',
            isFound: false
        },
        {
            char: 'c',
            isFound: false
        },
        {
            char: 'd',
            isFound: false
        },
        {
            char: 'e',
            isFound: false
        },
        {
            char: 'f',
            isFound: false
        }
    ];

    for (let i = 0; i < str.length; i++) {
        for (let s = 0; s < foundStr.length; s++) {
            if (foundStr[s].char == str.charAt(i)) {
                foundStr[s].isFound = true;
            }
        }
    }
    for (let s = 0; s < foundStr.length; s++) {
        if (!foundStr[s].isFound) {
            return false;
        }
        if(s == foundStr.length-1){
            return true;
        }

    }
}



console.log(foundABCDEF('Icbfm gcrdoeota.'));



