class Calculator{
    constructor(previusOperandTextElement, currentOperandTextElement){
        this.previusOperandTextElement = previusOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
clear(){
this.currentOperand = '';
this.previusOperand = '';
this.operation = undefined;
}

delete(){
this.currentOperand = this.currentOperand.toString().slice(0, -1)
}

appendNumber(number){
    if (number === '.' && this.currentOperand.includes('.')) return
this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation){
    if(this.currentOperand === '')return
    if(this.previusOperand !== ''){
        this.compute()
    }
this.operation = operation
this.previusOperand = this.currentOperand
this.currentOperand = ''

}

compute(){
let computation
const prev = parseFloat(this.previusOperand)
const current = parseFloat(this.currentOperand)
if (isNaN(prev) || isNaN(current)) return
switch (this.operation) {
        case '+':
        computation = prev + current
        break
        case '-':
        computation = prev - current
        break
        case '*':
        computation = prev * current
        break
        case '÷':
        computation = prev / current
        break
    default:
    return
}
this.currentOperand = computation
this.operation = undefined
this.previusOperand = ''
}

getDisplayNumber(number){
return number
}

updateDisplay(){
this.currentOperandTextElement.innerHTML = this.currentOperand
if (this.operation != null) {
    this.previusOperandTextElement.innerHTML = `${this.previusOperand} ${this.operation}`
}else{
    this.previusOperandTextElement.innerHTML = ''
}
}
}



const numberButton = document.querySelectorAll('[data-number]');
const operationButton = document.querySelectorAll('[data-operation]');
const equalbutton = document.querySelector('[data-equal]');
const deletebutton = document.querySelector('[data-delete]');
const allclearbutton = document.querySelector('[data-all-clear]');
const previusOperandTextElement = document.querySelector('[data-previus-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');



const calculator = new Calculator (previusOperandTextElement, currentOperandTextElement)

numberButton.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.innerHTML)
        console.log(button.innerHTML)
        calculator.updateDisplay()
    })
})

operationButton.forEach(button =>{
    button.addEventListener('click', () =>{
        calculator.chooseOperation(button.innerHTML)
        calculator.updateDisplay()
    })
})

equalbutton.addEventListener('click', button =>{
    calculator.compute()
    calculator.updateDisplay()
    console.log(currentOperand)
})

allclearbutton.addEventListener('click', button =>{
    calculator.clear()
    calculator.updateDisplay()
})

deletebutton.addEventListener('click', button =>{
    calculator.delete()
    calculator.updateDisplay()
})