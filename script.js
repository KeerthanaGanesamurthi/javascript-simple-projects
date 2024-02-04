
var box1 = document.getElementById("num1")
var box2 = document.getElementById("num2")

var result = document.getElementById("result")

function add() {
    var box1value = Number(box1.value)
    var box2value = Number(box2.value)


    var total = box1value + box2value

    result.textContent ="RESULT : " + total
}