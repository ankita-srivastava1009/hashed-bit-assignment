//4. Write a function to perform this. You are given two numbers n1 and n2.
// You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.


function sumOfProducts(n1, n2) {
    let str1 = n1.toString();
    let str2 = n2.toString();
    str1 = str1.split('').reverse().join('');
    str2 = str2.split('').reverse().join('');
    
    let maxLength = Math.max(str1.length, str2.length);
    let sum = 0;
    
    for (let i = 0; i < maxLength; i++) {
        let digit1 = i < str1.length ? parseInt(str1[i]) : 0;
        let digit2 = i < str2.length ? parseInt(str2[i]) : 0;
        sum += digit1 * digit2;
    }
    return sum;
}
let n1 = 6;
let n2 = 34;
console.log(sumOfProducts(n1, n2)); 