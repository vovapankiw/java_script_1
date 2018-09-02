alert('Please, enter a number')
const a = prompt('Enter variable a');
const b = prompt('Enter variable b');
const c = prompt('Enter variable c');

function descriminant(a, b, c) {
    if (isNaN(a) || isNaN(b) || isNaN(c) || a=='' || b =='' || c ==''){
        alert('You entered not a number');
        return -1;
    }
    return  b * b - 4 * a * c;
}
const D = descriminant(a, b, c)

function solvEquasion (){
    if (D > 0){
        const x = (-b + Math.sqrt(D)) / (2 * a);
        const y = (-b - Math.sqrt(D)) / (2 * a);
        return `First solution = ${x.toFixed(2)}, \nSecond solution = ${y.toFixed(2)}`;
    }  else if (D === 0){
        const x = (-b + Math.sqrt(D)) / (2 * a);
        return `Only one possible solution = ${x.toFixed(2)}`;
    } else {
        return( 'This equasion doesn\'t have possible solution')
    }
}
alert(solvEquasion());