function checkAge(age) {
    if(age >= 18 && age < 100){
        return 'adult';
    } else if(age > 100 ) {
        return "You are old";
    }else{
        return 'child';
    }
}

const userAge = parseInt(prompt('Enter your age'));
const message = checkAge(userAge);
alert(message);
