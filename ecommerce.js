

//cart1
// cart-btn1


let cart1=document.getElementById("cart1");
cart1.style.display="none"


let cart_btn1= document.getElementById("cart-btn1");

cart_btn1.addEventListener("click", function(){
    cart1.style.display="flex"
    
})

//cart2
// cart-btn2

let cart2=document.getElementById("cart2");
cart2.style.display="none"

let cart_btn2= document.getElementById("cart-btn2");

cart_btn2.addEventListener("click", function(){
    cart2.style.display="flex"

})


//cart3
// cart-btn3

let cart3=document.getElementById("cart3");
cart3.style.display="none"

let cart_btn3= document.getElementById("cart-btn3");

cart_btn3.addEventListener("click", function(){
    cart3.style.display="flex"

})


//cart4
// cart-btn4

let cart4=document.getElementById("cart4");
cart4.style.display="none"

let cart_btn4= document.getElementById("cart-btn4");

cart_btn4.addEventListener("click", function(){
    cart4.style.display="flex"

})

//cart5
// cart-btn5

let cart5=document.getElementById("cart5");
cart5.style.display="none"

let cart_btn5= document.getElementById("cart-btn5");

cart_btn5.addEventListener("click", function(){
    cart5.style.display="flex"

})


//cart6
// cart-btn6

let cart6=document.getElementById("cart6");
cart6.style.display="none"

let cart_btn6= document.getElementById("cart-btn6");

cart_btn6.addEventListener("click", function(){
    cart6.style.display="flex"

})

//cart7
// cart-btn7

let cart7=document.getElementById("cart7");
cart7.style.display="none"

let cart_btn7= document.getElementById("cart-btn7");

cart_btn7.addEventListener("click", function(){
    cart7.style.display="flex"

})


//cart8
// cart-btn8

let cart8=document.getElementById("cart8");
cart8.style.display="none"

let cart_btn8= document.getElementById("cart-btn8");

cart_btn8.addEventListener("click", function(){
    cart8.style.display="flex"

})



// our increse and decrese of picese section start here 


// cart1

   
let number1= document.getElementById("number1");
let result1= document.getElementById("result1");
let oldresult1= document.getElementById("oldresult1");
let piece1= document.getElementById("piece1");

    let currentPiece1= Number(piece1.innerHTML)

    function add1(){
        currentPiece1+= Number(piece1.innerHTML);

    
     if(currentPiece1<=20){
        number1.value= currentPiece1 + "piece";
        result1.innerHTML= Number(result1.innerHTML)+ Number(oldresult1.innerHTML)
     }

    
    }

    
    function min1(){
        currentPiece1-= Number(piece1.innerHTML);
     if(currentPiece1>=0){
        number1.value= currentPiece1 + "piece";
        result1.innerHTML=  Number(result1.innerHTML)- Number(oldresult1.innerHTML);
     }

     if(currentPiece1< Number(piece1.innerHTML)){
        cart1.style.display= "none";
       
     }

    }


    function del1(){
        cart1.style.display= "none"
    }
//cart1



let number2= document.getElementById("number2");
let result2= document.getElementById("result2");
let oldresult2= document.getElementById("oldresult2");
let piece2= document.getElementById("piece2");

    let currentPiece2= Number(piece2.innerHTML)

    function add2(){
        currentPiece2+= Number(piece2.innerHTML);

    
     if(currentPiece2<=20){
        number2.value= currentPiece2 + "piece";
        result2.innerHTML= Number(result2.innerHTML)+ Number(oldresult2.innerHTML)
     }

    
    }

    
    function min2(){
        currentPiece2-= Number(piece2.innerHTML);
     if(currentPiece2>=0){
        number2.value= currentPiece2 + "piece";
        result2.innerHTML=  Number(result2.innerHTML)- Number(oldresult2.innerHTML);
     }

     if(currentPiece2< Number(piece2.innerHTML)){
        cart2.style.display= "none";
       
     }

    }


    function del2(){
        cart2.style.display= "none"
    }


    // cart2

    let number3= document.getElementById("number3");
    let result3= document.getElementById("result3");
    let oldresult3= document.getElementById("oldresult3");
    let piece3= document.getElementById("piece3");
    
        let currentPiece3= Number(piece3.innerHTML)
    

    function add3(){
        currentPiece3+= Number(piece3.innerHTML);

    
     if(currentPiece3<=20){
        number3.value= currentPiece3 + "piece";
        result3.innerHTML= Number(result3.innerHTML)+ Number(oldresult3.innerHTML)
     }

    
    }

    
    function min3(){
        currentPiece3-= Number(piece3.innerHTML);
     if(currentPiece3>=0){
        number3.value= currentPiece3 + "piece";
        result3.innerHTML=  Number(result3.innerHTML)- Number(oldresult3.innerHTML);
     }

     if(currentPiece3< Number(piece3.innerHTML)){
        cart3.style.display= "none";
       
     }

    }


    function del3(){
        cart3.style.display= "none"
    }


    // cart3

    
    let number4= document.getElementById("number4");
    let result4= document.getElementById("result4");
    let oldresult4= document.getElementById("oldresult4");
    let piece4= document.getElementById("piece4");
    
        let currentPiece4= Number(piece4.innerHTML)
    

    function add4(){
        currentPiece4+= Number(piece4.innerHTML);

    
     if(currentPiece4<=20){
        number4.value= currentPiece4 + "piece";
        result4.innerHTML= Number(result4.innerHTML)+ Number(oldresult4.innerHTML)
     }

    
    }

    
    function min4(){
        currentPiece4-= Number(piece4.innerHTML);
     if(currentPiece4>=0){
        number4.value= currentPiece4 + "piece";
        result4.innerHTML=  Number(result4.innerHTML)- Number(oldresult4.innerHTML);
     }

     if(currentPiece4< Number(piece4.innerHTML)){
        cart4.style.display= "none";
       
     }

    }


    function del4(){
        cart4.style.display= "none"
    }

    // cart4

    
    let number5= document.getElementById("number5");
    let result5= document.getElementById("result5");
    let oldresult5= document.getElementById("oldresult5");
    let piece5= document.getElementById("piece5");
    
        let currentPiece5= Number(piece5.innerHTML)
    

    function add5(){
        currentPiece5+= Number(piece5.innerHTML);

    
     if(currentPiece5<=20){
        number5.value= currentPiece5 + "piece";
        result5.innerHTML= Number(result5.innerHTML)+ Number(oldresult5.innerHTML)
     }

    
    }

    
    function min5(){
        currentPiece5-= Number(piece5.innerHTML);
     if(currentPiece5>=0){
        number5.value= currentPiece5 + "piece";
        result5.innerHTML=  Number(result5.innerHTML)- Number(oldresult5.innerHTML);
     }

     if(currentPiece5< Number(piece5.innerHTML)){
        cart5.style.display= "none";
       
     }

    }


    function del5(){
        cart5.style.display= "none"
    }

    // cart5

    let number6= document.getElementById("number6");
    let result6= document.getElementById("result6");
    let oldresult6= document.getElementById("oldresult6");
    let piece6= document.getElementById("piece6");
    
        let currentPiece6= Number(piece6.innerHTML)
    

    function add6(){
        currentPiece6+= Number(piece6.innerHTML);

    
     if(currentPiece6<=20){
        number6.value= currentPiece6 + "piece";
        result6.innerHTML= Number(result6.innerHTML)+ Number(oldresult6.innerHTML)
     }

    
    }

    
    function min6(){
        currentPiece6-= Number(piece6.innerHTML);
     if(currentPiece6>=0){
        number6.value= currentPiece6 + "piece";
        result6.innerHTML=  Number(result6.innerHTML)- Number(oldresult6.innerHTML);
     }

     if(currentPiece6< Number(piece6.innerHTML)){
        cart6.style.display= "none";
       
     }

    }


    function del6(){
        cart6.style.display= "none"
    }

    // cart6

    let number7= document.getElementById("number7");
    let result7= document.getElementById("result7");
    let oldresult7= document.getElementById("oldresult7");
    let piece7= document.getElementById("piece7");
    
        let currentPiece7= Number(piece7.innerHTML)
    

    function add7(){
        currentPiece7+= Number(piece7.innerHTML);

    
     if(currentPiece7<=20){
        number7.value= currentPiece7 + "piece";
        result7.innerHTML= Number(result7.innerHTML)+ Number(oldresult7.innerHTML)
     }

    
    }

    
    function min7(){
        currentPiece7-= Number(piece7.innerHTML);
     if(currentPiece7>=0){
        number7.value= currentPiece7 + "piece";
        result7.innerHTML=  Number(result7.innerHTML)- Number(oldresult7.innerHTML);
     }

     if(currentPiece7< Number(piece7.innerHTML)){
        cart7.style.display= "none";
       
     }

    }


    function del7(){
        cart7.style.display= "none"
    }
    // cart7


    let number8= document.getElementById("number8");
    let result8= document.getElementById("result8");
    let oldresult8= document.getElementById("oldresult8");
    let piece8= document.getElementById("piece8");
    
        let currentPiece8= Number(piece8.innerHTML)
    

    function add8(){
        currentPiece8+= Number(piece8.innerHTML);

    
     if(currentPiece8<=20){
        number8.value= currentPiece8 + "piece";
        result8.innerHTML= Number(result8.innerHTML)+ Number(oldresult8.innerHTML)
     }

    
    }

    
    function min8(){
        currentPiece8-= Number(piece8.innerHTML);
     if(currentPiece8>=0){
        number8.value= currentPiece8 + "piece";
        result8.innerHTML=  Number(result8.innerHTML)- Number(oldresult8.innerHTML);
     }

     if(currentPiece8< Number(piece8.innerHTML)){
        cart8.style.display= "none";
       
     }

    }


    function del8(){
        cart8.style.display= "none"
    }


    //cart8



    // this is our total section 

let total= document.getElementById("total");

total.value= "hh"
