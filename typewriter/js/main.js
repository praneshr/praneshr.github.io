function animate(){
    insert.innerHTML=arr[0].slice(0,temp);
    temp++;
    if(initial < count)
    {
        setTimeout(function(){
            animate();
        },Math.floor(Math.random() * (200-100))+100); 
    }
    initial++;
}
function animate1(){
    info.innerHTML=arr[0].slice(0,temp);
    temp++;
    if(initial < count)
    {
        setTimeout(function(){
            animate1();
        },Math.floor(Math.random() * (200-100))+100); 
    }
    initial++;
}
function blink1(){
    if(i == 0)
    {
        setTimeout(function(){
            blink.style.opacity=1;
            i=1;
            blink1();
        },500);
    }
    if(i == 1)
    {
        setTimeout(function(){
            blink.style.opacity=0;
            i=0;
            blink1();
        },500);
    }
}
function out(){
    circlee.style.width="100px";
    circlee.style.height="100px";
    circlee.style.borderRadius="50px";
    circlee.style.transform="scale(1)";
    $(".menu").css("background","#FFF");
    $("#over").css("position","relative");
    circle.style.background="#FFF";
    if(second_offset<=circle_offset)
    {
        $("#circle").css("background","#D2527F");
        $(".menu").css("background","#FFF");
        $("#circlee").css("background","#D2527F");
        $("#circlee").css("opacity",".5");
        $(".second").css("opacity","1");
    }
    else{
        $("#circle").css("background","#FFF");
        $(".menu").css("background","#D2527F");
        $("#circlee").css("background","#FFF");
        $("#circlee").css("opacity",".7");
        $(".second").css("opacity","1");
    }
    t++;
}
$(".menu-list").fadeOut(10);
var row = document.getElementsByClassName("row");
var circle = document.getElementById("circle");
var menu = document.getElementById("menu");
var circlee = document.getElementById("circlee");
var attach = document.getElementById("attach");
var insert = document.getElementById("insert");
var blink = document.getElementById("blink");
var content = document.getElementsByClassName("content");
var html = document.getElementById("over");
var small_row = document.getElementById("small_row");
var small_row1 = document.getElementById("small_row1");
var img = document.getElementById("img");
var info_text = document.getElementById("info_text");
img.style.marginTop=((innerHeight/2))+"px";
content[0].style.marginTop=((innerHeight/2)-100)+"px";
row[0].style.height=innerHeight+"px";
row[1].style.height=innerHeight+"px";
small_row.style.height=innerHeight+"px";
info_text.style.marginTop=((innerHeight/2)-400)+"px";
mt = ((innerHeight/2)-20)+"px";
$("#small-title").css("margin-top",mt);
$("#medium_row").css("height",innerHeight+"px");
$("#medium-title").css("margin-top",mt);
$("#small_row1").css("height",innerHeight+"px");
$("#medium_row1").css("height",innerHeight+"px");
$("#m-list").fadeOut(1);
$("#m-list-m").fadeOut(1);
$("#menu-button").click(function(){
    $("#menu-button").css("width","1000px");
    $("#menu-button").css("height","1000px");
    $("#menu-button").css("border-radius","500px");
    $("#menu-button").css("transform","scale(3)");
    $("#m-list").fadeIn(800);
    $("#close").css("width","30px");
    $("#close1").css("width","30px");
    $("#close").css("transform","rotate(45deg)");
    $("#close1").css("transform","rotate(135deg)");
});
$("#close-button").click(function(){
    $("#close").css("width","0px");
    $("#close1").css("width","0px");
    $("#close").css("transform","rotate(0deg)");
    $("#close1").css("transform","rotate(0deg)");
    setTimeout(function(){
        $("#m-list").fadeOut(400);
        $("#menu-button").css("width","50px");
        $("#menu-button").css("height","50px");
        $("#menu-button").css("border-radius","25px");
        $("#menu-button").css("transform","scale(1)");
    },300)
});
$("#menu-button-m").click(function(){
    $("#menu-button-m").css("width","1000px");
    $("#menu-button-m").css("height","1000px");
    $("#menu-button-m").css("border-radius","500px");
    $("#menu-button-m").css("transform","scale(3)");
    $("#m-list-m").fadeIn(800);
    $("#close-m").css("width","50px");
    $("#close1-m").css("width","50px");
    $("#close-m").css("transform","rotate(45deg)");
    $("#close1-m").css("transform","rotate(135deg)");
});
$("#close-button-m").click(function(){
    $("#close-m").css("width","0px");
    $("#close1-m").css("width","0px");
    $("#close-m").css("transform","rotate(0deg)");
    $("#close1-m").css("transform","rotate(0deg)");
    setTimeout(function(){
        $("#m-list-m").fadeOut(400);
        $("#menu-button-m").css("width","50px");
        $("#menu-button-m").css("height","50px");
        $("#menu-button-m").css("border-radius","25px");
        $("#menu-button-m").css("transform","scale(1)");
    },300)
});
function start(){
    str = "'TypeWriter.js' is AWESOME";
    arr = [str];
    count = arr[0].length;
    i = 1;
    temp = 1;
    initial =0;
    animate();
    blink1();
    t = 1;
}
function start1(){
    str = "Probant coniunctione hic nostrud. Officia cohaerescant ne quibusdam a enim commodo do voluptatibus. Irure eu proident do esse, appellat quid mandaremus senserit. ";
    arr = [str];
    count = arr[0].length;
    i = 1;
    temp = 1;
    initial =0;
    animate1();
    t = 1;
}
start();
$(window).resize(function(){
    row[0].style.height=innerHeight+"px";
    row[1].style.height=innerHeight+"px";
    img.style.marginTop=((innerHeight/2))+"px";
    content[0].style.marginTop=((innerHeight/2)-100)+"px";
    info_text.style.marginTop=((innerHeight/2)-400)+"px";
    small_row.style.height=innerHeight+"px";
    mt = ((innerHeight/2)-20)+"px";
    $("#small-title").css("margin-top",mt);
    $("#medium_row").css("height",innerHeight+"px");
    $("#medium-title").css("margin-top",mt);
    $("#small_row1").css("height",innerHeight+"px");
    $("#medium_row1").css("height",innerHeight+"px");
});
circle.addEventListener("click",function(){
    if(t%2 == 1)
    {
        circlee.style.width="1000px";
        circlee.style.height="1000px";
        circlee.style.borderRadius="500px";
        circlee.style.transform="scale(10)";
        circle.style.background="#D2527F";
        $(".menu").css("background","#FFF");
        $(".menu-list").fadeIn(500);
        $(".second").css("opacity",".1");
        $("#over").css("position","fixed");
        t++;
    }
    else
    {
        $(".menu-list").fadeOut(500);
        setTimeout(function(){
            out();},300);
    }
});
$(HTMLBodyElement).scroll(function(){
    circle_offset = $("#circlee").offset().top;
    second_offset = $(".second").offset().top;
    if(second_offset<=circle_offset)
    {
        $("#circle").css("background","#D2527F");
        $(".menu").css("background","#FFF");
        $("#circlee").css("background","#D2527F");
        $("#circlee").css("opacity",".5");
        $("#info").css("transform","translateX(-50%)");
        $("#info").css("opacity","1");
    }
    else{
        $("#circle").css("background","#FFF");
        $(".menu").css("background","#D2527F");
        $("#circlee").css("background","#FFF");
        $("#circlee").css("opacity",".7");
        $("#info").css("transform","translateX(0)");
        $("#info").css("opacity","0");
    }
});