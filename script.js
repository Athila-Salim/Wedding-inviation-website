function qtext() {
    var x = document.getElementById("nav-link");
    x.style.color = 'orange';
   }
   function stext() {
    var x =document.getElementById("nav-link");
    x.style.color = 'white';
   }
   function btext() {
    var x = document.getElementById("div1");
    x.style.color = 'orange';
   }
   function ctext() {
    var x =document.getElementById("div1");
    x.style.color = 'white';
   }
   function dtext() {
    var x = document.getElementById("div2");
    x.style.color = 'orange';
   }
   function etext() {
    var x = document.getElementById("div2");
    x.style.color = 'white';
   }
   function ftext() {
    var x = document.getElementById("div3");
    x.style.color = 'orange';
   }
   function gtext() {
    var x = document.getElementById("div3");
    x.style.color = 'white';
   }
   function htext() {
    var x = document.getElementById("div4");
    x.style.color = 'orange';
   }
   function itext() {
    var x = document.getElementById("div4");
    x.style.color = 'white';
   }
   (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "12/18/",
        wedding = dayMonth + yyyy;
    today = mm + "/" + dd + "/" + yyyy;
    if (today > wedding) {
      wedding = dayMonth + nextYear;
    }
    const countDown = new Date(wedding).getTime(),
        x = setInterval(function() {    
          const now = new Date().getTime(),
                distance = countDown - now;
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
          //do something later when date is reached
          if (distance < 0) {
            document.getElementById("headline").innerText = "It's my wedding!";
            document.getElementById("countdown").style.display = "none";
            document.getElementById("content").style.display = "block";
            clearInterval(x);
          }
          //seconds
        }, 0)
    }());
    var i = 0; //start point
        var images = [];
        var time = 1000;
        //images list
        images[0] = './images/kg1.jpg';
        images[1] = './images/kg2.jpg';
        images[2] = './images/kg3.jpg';
        images[3] = './images/kg4.jpg';
        images[4] = './images/kg5.jpg';
        images[5] = './images/kg6.jpg';
        images[6] = './images/kg7.jpg';
        images[7] = './images/kg8.jpg';
        images[8] = './images/kg9.jpg';
        images[9] = './images/kg10.jpg';
        images[10] = './images/kg5.jpg';
        images[11] = './images/kg9.jpg';
        //change Image
        function changeImg(){
            document.slide.src = images[i];
            if (i<images.length - 1){
                i++
            }else{
                i = 0;
            }
            setTimeout("changeImg()" ,time);
        }
            window.onload = changeImg;
    