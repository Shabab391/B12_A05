function heartIncrease(id){
    document.getElementById(id).addEventListener("click",function(){
    let heartCount = parseInt(document.getElementById("heart").innerText)
    heartCount+=1;
    document.getElementById("heart").innerText= heartCount
})
}

heartIncrease("heart-btn1");
heartIncrease("heart-btn2");
heartIncrease("heart-btn3");
heartIncrease("heart-btn4");
heartIncrease("heart-btn5");
heartIncrease("heart-btn6");
heartIncrease("heart-btn7");
heartIncrease("heart-btn8");
heartIncrease("heart-btn9");