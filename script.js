window.onload = function() {
  var x = document.querySelectorAll(".items");
  var leftoffset = 10;
  for (i = 0; i < x.length; i++) {
    x[i].style.left = leftoffset+"vw";
    $(x[i]).animate({
      top: "50vh"
    }, 5000);
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".amtinput");
  var leftoffset = 10;
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("maxlength", "3");
    x[i].style.left = "calc("+leftoffset+"vw + 5vmin)";
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".addamt");
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("maxlength", "3");
    x[i].style.left = document.getElementsByClassName("amtinput")[i].offsetLeft + document.getElementsByClassName("amtinput")[i].offsetWidth + 'px';
    x[i].setAttribute("onclick", "add(this.id)");
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".subamt");
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("maxlength", "3");
    x[i].style.left = document.getElementsByClassName("amtinput")[i].offsetLeft - x[i].offsetWidth + 'px';
    x[i].setAttribute("onclick", "subtract(this.id)");
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".itemcost");
  for (i = 0; i < x.length; i++) {
    x[i].style.left = document.getElementsByClassName("items")[i].offsetLeft + 'px';
  }
}

function subtract(el) {
  var x = document.querySelectorAll(".subamt");
  for (i = 0; i < x.length; i++) {
    if (x[i].getAttribute("id") == el && eval(document.getElementsByClassName("amtinput")[i].value > 0)) {
      document.getElementsByClassName("amtinput")[i].value = eval(document.getElementsByClassName("amtinput")[i].value) - 1;
    }
  }
}

function add(el) {
  var x = document.querySelectorAll(".addamt");
  for (i = 0; i < x.length; i++) {
    if (x[i].getAttribute("id") == el) {
      document.getElementsByClassName("amtinput")[i].value = eval(document.getElementsByClassName("amtinput")[i].value) + 1;
    }
  }
}

window.onresize = function() {
  var x = document.querySelectorAll(".items");
  var leftoffset = 10;
  for (i = 0; i < x.length; i++) {
    x[i].style.left = leftoffset+"vw";
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".amtinput");
  var leftoffset = 10;
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("maxlength", "3");
    x[i].style.left = "calc("+leftoffset+"vw + 5vmin)";
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".addamt");
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("maxlength", "3");
    x[i].style.left = document.getElementsByClassName("amtinput")[i].offsetLeft + document.getElementsByClassName("amtinput")[i].offsetWidth + 'px';
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".subamt");
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("maxlength", "3");
    x[i].style.left = document.getElementsByClassName("amtinput")[i].offsetLeft - x[i].offsetWidth + 'px';
    leftoffset += 20;
  }
  var x = document.querySelectorAll(".itemcost");
  for (i = 0; i < x.length; i++) {
    x[i].style.left = document.getElementsByClassName("items")[i].offsetLeft + 'px';
  }
}

function buy() {
  if (document.getElementById("buy").innerHTML == "Confirm Purchase"+"<img id=\"shopsvg\" src=\"https://rb.gy/igfoh9\">") {
    if (eval(document.getElementById("balanceamt").innerHTML) - eval(document.getElementById("totalamt").innerHTML) < 0) {
      document.getElementById("buy").innerHTML = "Buy"+"<img id=\"shopsvg\" src=\"https://rb.gy/igfoh9\">";
      alert("not enough money");
    } else {
      document.getElementById("balanceamt").innerHTML = eval(document.getElementById("balanceamt").innerHTML) - eval(document.getElementById("totalamt").innerHTML);
      document.getElementById("buy").innerHTML = "Buy"+"<img id=\"shopsvg\" src=\"https://rb.gy/igfoh9\">";
      document.getElementById("totalamt").innerHTML = null;
      var x = document.querySelectorAll(".amtinput");
      for (i = 0; i < x.length; i++) {
        document.getElementsByClassName("invamt")[i].innerHTML = eval(document.getElementsByClassName("invamt")[i].innerHTML) + eval(x[i].value);
        x[i].value = 0;
      }
    }
  } else {
    var x = document.querySelectorAll(".amtinput");
    var total = 0;
    for (i = 0; i < x.length; i++) {
      var total = total + eval(x[i].value)*0.15;
    }
    if (eval(total) < 0) {
      alert("stop cheating asshole");
      return;
    }
    document.getElementById("totalamt").innerHTML = Math.round(total*100)/100;
    document.getElementById("buy").innerHTML = "Confirm Purchase"+"<img id=\"shopsvg\" src=\"https://rb.gy/igfoh9\">";
  }
}

function mode(event) {
  if (event.keyCode == "77") {
    document.getElementById("store").style.zIndex = "-1";
    document.getElementById("mapcontainer").style.zIndex = "100";
  }
  if (event.keyCode == "83") {
    document.getElementById("mapcontainer").style.zIndex = "-1";
    document.getElementById("store").style.zIndex = "100";
  }
}

function showkeys() {
  $("#listkeys").show("slow");
}

function hidekeys() {
  $("#listkeys").hide("slow");
}

function revealinv() {
  if (document.getElementById("revealinv").innerHTML == "&gt;") {
    $("#inventory").animate({
      left: 0+"vw"
    }, 1000)
    document.getElementById("revealinv").innerHTML = "&lt";
  } else {
    if (window.innerHeight < window.innerWidth) {
      $("#inventory").animate({
        left: -(window.innerHeight/10)-(window.innerWidth/10) + 'px'
      }, 1000)
    } else {
      $("#inventory").animate({
        left: -(window.innerWidth/10)-(window.innerHeight/10) + 'px'
      }, 1000)
    }
    document.getElementById("revealinv").innerHTML = "&gt";
  }
}

function start() {
  if (document.getElementById("startbtn").innerHTML == "Started") {
    return;
  }
  document.getElementById("startbtn").innerHTML = "Started";
  document.getElementById("startbtn").style.opacity = "0.5";
  document.getElementById("mapcontainer").style.zIndex = "1000";
  document.getElementById("store").style.zIndex = "-1";
  var x = document.querySelectorAll(".invamt");
  var calcamt = 0;
  var maxval = [0, 0, 0, 0];
  for (i = 0; i < x.length; i++) {
    maxval[i] = eval(x[i].innerHTML);
  }
  var items = Array("Sunny", "Cloudy", "Rainy");
  var item = items[Math.floor(Math.random() * items.length)];
  if (item == "Sunny") {
    document.getElementById("lemonadesold").innerHTML = Math.min(...maxval);
    document.getElementById("weather").innerHTML = "Sunny";
    document.getElementById("weathercharacter").setAttribute("src", "https://i.imgur.com/CUdExXv.png");
    document.getElementById("mapcontainer").style.backgroundColor = "rgb(0, 140, 255)";
    document.getElementById("weathercharacter").classList.add("animatingweather");
  }
  if (item == "Cloudy") {
    document.getElementById("lemonadesold").innerHTML = Math.round(Math.min(...maxval)*1/2);
    document.getElementById("weather").innerHTML = "Cloudy";
    document.getElementById("weathercharacter").setAttribute("src", "https://i.imgur.com/EjU9IZS.png");
    document.getElementById("mapcontainer").style.backgroundColor = "#676767";
    document.getElementById("weathercharacter").classList.add("animatingweather");
  }
  if (item == "Rainy") {
    document.getElementById("lemonadesold").innerHTML = Math.round(Math.min(...maxval)*1/4);
    document.getElementById("weather").innerHTML = "Rainy";
    document.getElementById("weathercharacter").setAttribute("src", "https://i.imgur.com/JMg6UuC.png");
    document.getElementById("mapcontainer").style.backgroundColor = "#4F4F4F";
    document.getElementById("weathercharacter").classList.add("animatingweather");
  }
  document.getElementById("balanceamt").innerHTML = eval(document.getElementById("balanceamt").innerHTML) + eval(document.getElementById("lemonadesold").innerHTML)*2;
  x = document.querySelectorAll(".invamt");
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = 0;
  }
  setTimeout(function() {
    document.getElementById("mapcontainer").style.zIndex = "-1";
    document.getElementById("store").style.zIndex = "100";
    document.getElementById("startbtn").innerHTML = "Start";
    document.getElementById("startbtn").style.opacity = "1";
    document.getElementById("weathercharacter").classList.remove("animatingweather");
  }, 6000);
}
