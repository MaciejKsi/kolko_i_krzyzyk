var licznik = 0;

var plansza = [[], [], []];

function znak(id) {
  licznik++;
  var znaczek;

  var intId = parseInt(id) - 1;

  if (licznik % 2 == 0) {
    znaczek = "O";
    document.getElementById(id).style.backgroundColor = "White";

    document.getElementById(id).style.color = "Black";
  } else {
    znaczek = "X";
    document.getElementById(id).style.backgroundColor = "rgb(49,48,48)";
    document.getElementById(id).style.color = "White";
  }

  if (intId < 3) plansza[0][intId] = znaczek;
  if (intId < 6 && intId > 2) plansza[1][intId % 3] = znaczek;
  if (intId >= 6) plansza[2][intId % 3] = znaczek;

  document.getElementById(id).innerHTML = znaczek;

  document.getElementById(id).removeAttribute("onclick");

  console.log(plansza);
  czyWygrana();
  generujPlansze();
}

function czyWygrana() {
  for (let i = 0; i <= 2; i++) {
    if (
      plansza[i][0] == plansza[i][1] &&
      plansza[i][0] == plansza[i][2] &&
      plansza[i][0] != undefined
    ) {
      console.log("Wygrana");
      blokujPlansze();
    }
  }
  for (let i = 0; i <= 2; i++) {
    if (
      plansza[0][i] == plansza[1][i] &&
      plansza[0][i] == plansza[2][i] &&
      plansza[0][i] != undefined
    ) {
      console.log("Wygrana");
      blokujPlansze();
    }
  }

  for (let i = 0; i <= 2; i++) {
    if (
      plansza[0][0] == plansza[1][1] &&
      plansza[0][0] == plansza[2][2] &&
      plansza[0][0] != undefined
    ) {
      console.log("Wygrana");
      blokujPlansze();
    }
  }
  for (let i = 0; i <= 2; i++) {
    if (
      plansza[0][2] == plansza[1][1] &&
      plansza[1][1] == plansza[2][0] &&
      plansza[2][0] != undefined
    ) {
      console.log("Wygrana");
      blokujPlansze();
    }
  }
}

function blokujPlansze() {
  for (let i = 1; i <= 9; i++) {
    document.getElementById(i.toString()).removeAttribute("onclick");
  }
}

function generujPlansze() {
  var licznik2 = 1;

  for (let i = 0; i <= 2; i++) {
    for (let j = 0; j <= 2; j++) {
      console.log(plansza[i][j]);
      if (plansza[i][j] != undefined) {
        document.getElementById(licznik2.toString()).innerHTML = plansza[i][j];
      }
      licznik2++;
    }
  }
}
