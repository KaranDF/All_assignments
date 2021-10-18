

function checkpal(str) {

    const len = string.length;

        for (let i = 0; i < len / 2; i++) {

        //Checking first and last string
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}


const string = ('Mam');
const value = checkpal(string);
console.log(value);