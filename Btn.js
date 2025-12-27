var i = 0;
var arr = [];
function search1(num) {
  var a = document.getElementById("1");
  var b = document.getElementById("2");
  var c = document.getElementById("3");
  var d = document.getElementById("4");
  var e = document.getElementById("5");
  var f = document.getElementById("6");
  var g = document.getElementById("7");
  var h = document.getElementById("8");
  var j = document.getElementById("9");
  var k = document.getElementById("10");
  var l = document.getElementById("11");
  var m = document.getElementById("12");
  var n = document.getElementById("13");
  var o = document.getElementById("14");
  var p = document.getElementById("15");
  var q = document.getElementById("16");
  var r = document.getElementById("17");
  var s = document.getElementById("18");
  var t = document.getElementById("19");
  var u = document.getElementById("20");
  var v = document.getElementById("21");
  var w = document.getElementById("22");
  var x = document.getElementById("23");
  var y = document.getElementById("24");

  console.log("num=", num);
  if (!arr.includes(num)) {
    i++;
    arr.push(num);

    if (num == "1") {
      a.style.backgroundColor = "grey";
    } else if (num == "2") {
      b.style.backgroundColor = "grey";
    } else if (num == "3") {
      c.style.backgroundColor = "grey";
    } else if (num == "4") {
      d.style.backgroundColor = "grey";
    } else if (num == "5") {
      e.style.backgroundColor = "grey";
    } else if (num == "6") {
      f.style.backgroundColor = "grey";
    } else if (num == "7") {
      g.style.backgroundColor = "grey";
    } else if (num == "8") {
      h.style.backgroundColor = "grey";
    } else if (num == "9") {
      j.style.backgroundColor = "grey";
    } else if (num == "10") {
      k.style.backgroundColor = "grey";
    } else if (num == "11") {
      l.style.backgroundColor = "grey";
    } else if (num == "12") {
      m.style.backgroundColor = "grey";
    } else if (num == "13") {
      n.style.backgroundColor = "grey";
    } else if (num == "14") {
      o.style.backgroundColor = "grey";
    } else if (num == "15") {
      p.style.backgroundColor = "grey";
    } else if (num == "16") {
      q.style.backgroundColor = "grey";
    } else if (num == "17") {
      r.style.backgroundColor = "grey";
    } else if (num == "18") {
      s.style.backgroundColor = "grey";
    } else if (num == "19") {
      t.style.backgroundColor = "grey";
    } else if (num == "20") {
      u.style.backgroundColor = "grey";
    } else if (num == "21") {
      v.style.backgroundColor = "grey";
    } else if (num == "22") {
      w.style.backgroundColor = "grey";
    } else if (num == "23") {
      x.style.backgroundColor = "grey";
    } else {
      y.style.backgroundColor = "grey";
    }
  } else {
    i--;
    arr.slice()
    if (num == "1") {
      a.style.backgroundColor = "white";
    } else if(num=="2"){
      b.style.backgroundColor = "white";
    }
    else if (num == "3") {
      c.style.backgroundColor = "white";
    } else if (num == "4") {
      d.style.backgroundColor = "white";
    } else if (num == "5") {
      e.style.backgroundColor = "white";
    } else if (num == "6") {
      f.style.backgroundColor = "white";
    } else if (num == "7") {
      g.style.backgroundColor = "white";
    } else if (num == "8") {
      h.style.backgroundColor = "white";
    } else if (num == "9") {
      j.style.backgroundColor = "white";
    } else if (num == "10") {
      k.style.backgroundColor = "white";
    } else if (num == "11") {
      l.style.backgroundColor = "white";
    } else if (num == "12") {
      m.style.backgroundColor = "white";
    } else if (num == "13") {
      n.style.backgroundColor = "white";
    } else if (num == "14") {
      o.style.backgroundColor = "white";
    } else if (num == "15") {
      p.style.backgroundColor = "white";
    } else if (num == "16") {
      q.style.backgroundColor = "white";
    } else if (num == "17") {
      r.style.backgroundColor = "white";
    } else if (num == "18") {
      s.style.backgroundColor = "white";
    } else if (num == "19") {
      t.style.backgroundColor = "white";
    } else if (num == "20") {
      u.style.backgroundColor = "white";
    } else if (num == "21") {
      v.style.backgroundColor = "white";
    } else if (num == "22") {
      w.style.backgroundColor = "white";
    } else if (num == "23") {
      x.style.backgroundColor = "white";
    } else {
      y.style.backgroundColor = "white";
    }
  }
}
var submit = () => {
  console.log("total seats=", i);
  document.getElementById("result").innerHTML= `<pre>Number of seats selected ${i}<pre><h2>${i*800}</h2>`
};