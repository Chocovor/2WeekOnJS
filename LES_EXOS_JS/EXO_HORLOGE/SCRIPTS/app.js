function refresh(){
  let t = 1000; // rafraîchissement en millisecondes
  setTimeout('showDate()',t)
}
function showDate() {
  let date = new Date()
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if (m < 10) m = "0" + m;
  if (s < 10) s = "0" + s;
  let time = (h+1) % 24 + ':' + m + ':' + s
  document.getElementById('horloge').innerHTML = "Paris : " + time;
  refresh();

  time = (h+19) % 24 + ':' + m + ':' + s
  document.getElementById('firstClock').innerHTML = "New York : " + time;
  refresh();

  time = (h+16) %24 + ':' + m + ':' + s
  document.getElementById('secondClock').innerHTML = "Los Angeles : " + time;
  refresh();

  time = (h+9) % 24 + ':' + m + ':' + s
  document.getElementById('tokei').innerHTML = "Tokyo :  " + time;
  refresh();

  time = (h+4) % 24 + ':' + m + ':' + s
  document.getElementById('saea').innerHTML = "Dubaï : " + time;
  refresh();
}
