function sumString(str){
    const values = str.split(' ')
    const [num1, operand, num2] = values
    const operations = {
        '+': (n1,n2) => n1 + n2,
        '-': (n1,n2) => n1 - n2,
        '*': (n1,n2) => n1 * n2,
        '/': (n1,n2) => n1 / n2
    };
    return operations[operand](+num1, +num2)
}

sumString("6 + 7")//?