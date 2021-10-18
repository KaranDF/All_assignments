//Built in function

// const str ="My name is karan"
// const newstr  = str.split('')
// .reverse()
// .join('');


// console.log(newstr);

//Decrementing for  loop
const str ="my name is karan";

let newStr="";
for(let i   = str.length -1 ; i>=0; i-- ){
    newStr=newStr+str[i];
}
console.log(newStr);