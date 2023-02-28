function num0(){
    var exi = document.getElementById("view")
    exi.innerHTML += 0
}

function num1(){
    var exi = document.getElementById("view")
    exi.innerHTML += 1
}

function num2(){
    var exi = document.getElementById("view")
    exi.innerHTML += 2
}

function num3(){
    var exi = document.getElementById("view")
    exi.innerHTML += 3
}

function num4(){
    var exi = document.getElementById("view")
    exi.innerHTML += 4
}

function num5(){
    var exi = document.getElementById("view")
    exi.innerHTML += 5
}

function num6(){
    var exi = document.getElementById("view")
    exi.innerHTML += 6
}

function num7(){
    var exi = document.getElementById("view")
    exi.innerHTML += 7
}

function num8(){
    var exi = document.getElementById("view")
    exi.innerHTML += 8
}

function num9(){
    var exi = document.getElementById("view")
    exi.innerHTML += 9
}

function soma(){
    var exi = document.getElementById("view")
    exi.innerHTML += "+"
}

function sub(){
    var exi = document.getElementById("view")
    exi.innerHTML += "-"
}

function mult(){
    var exi = document.getElementById("view")
    exi.innerHTML += "*"
}

function div(){
    var exi = document.getElementById("view")
    exi.innerHTML += "/"
}

function igual(){
    var resultado = document.getElementById("view").innerHTML
    document.getElementById("view").innerHTML=eval(resultado)
    
}

function limpar(){
    exi = document.getElementById("view").innerHTML = "    "
}