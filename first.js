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


function coinDecrease(id){
    document.getElementById(id).addEventListener("click",function(){
    let coinCount = parseInt(document.getElementById("coin").innerText)
    if(coinCount<20){
        alert("❌You do not have the required coins! You need at least 20 coins to call")
        

    }
    else{

    coinCount-=20;
    document.getElementById("coin").innerText= coinCount


    const callBtn = document.getElementById("call1");
    const grandparent = callBtn.parentNode.parentNode;
    const text = grandparent.querySelector(".text-xl");
    console.log(text);
    const number = grandparent.querySelector(".text-2xl");
    console.log(number);


    alert("📞 Calling "+text.innerText+" "+number.innerText)

    


        }
})
}
coinDecrease("call1");
coinDecrease("call2");
coinDecrease("call3");
coinDecrease("call4");
coinDecrease("call5");
coinDecrease("call6");
coinDecrease("call7");
coinDecrease("call8");
coinDecrease("call9");
