function validParentheses(parentheses){
    return parentheses.split('').filter(par => par === ")").length
        === parentheses.split('').filter(par => par === "(").length;
}

console.log(validParentheses("()"));
