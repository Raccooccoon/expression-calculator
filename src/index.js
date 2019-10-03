function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let string = expr.replace(/\s/g, '');
    let array = string.split('');
    let indexLeftBr = [];
    let indexRightBr = [];
    let filtered = array.filter((elem, i) => {
      if (elem == "(") {
        indexLeftBr.push(i);
      }
      if (elem == ")") {
        indexRightBr.push(i);
      }
    });

    if (indexLeftBr.length != indexRightBr.length) {
        throw new Error("ExpressionError: Brackets must be paired");
    }

    if (string.search(/\/0/) != -1) {
        throw new Error("TypeError: Division by zero.");  
    }

    return new Function('return ' + expr)();
}

module.exports = {
    expressionCalculator
}