// ## Soal 1


/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
    console.log(kata);

    for(let i = 0; i < (kata.length / 2); i++){
        // console.log(`kata ${i} = ${kata[i]} dan ${kata[kata.length - i - 1]}`)

        if(kata[i] === kata[kata.length - i - 1]){
            return true;
        } else {
            return false;
        }
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
console.log(palindrome('apa'));
