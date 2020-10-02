var menuitems=document.getElementById('menuitems'); //variable for menu icon
var myrow=document.getElementById('myrow');  //variable for making user friendly with navbar 

// variable for login and signup page
var loginForm=document.getElementById('loginForm');
var regForm=document.getElementById('regForm');
var indicator=document.getElementById('indicator');

menuitems.style.maxHeight="0px"

function menutoggle(){
    if(menuitems.style.maxHeight=="0px"){
        menuitems.style.maxHeight="200px"
         myrow.style.marginTop="170px" //  -----for not collapsing after navbarscroll----
    }
    else{
        menuitems.style.maxHeight="0px"
        myrow.style.marginTop="0px"
    }
}

// ------js for product gallery------

var productImg= document.getElementById('productImg');
var smallImg=document.getElementsByClassName('small-img');

smallImg[0].onclick=function(){
    productImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    productImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    productImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    productImg.src=smallImg[3].src;
}


// -------js for togge form ---------



function register(){
    regForm.style.transform="translateX(0px)";
    loginForm.style.transform="translateX(0px)";
    indicator.style.transform="translateX(100px)";

}

function login(){
    regForm.style.transform="translateX(300px)";
    loginForm.style.transform="translateX(300px)";
    indicator.style.transform="translateX(0px)";

}