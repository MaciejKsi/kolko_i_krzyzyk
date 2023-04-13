var licznik = 0;

function znak(id) {
  licznik++;
  if (licznik % 2 == 0) znaczek = "O";
  else znaczek = "X";
  document.getElementById(id).innerHTML = znaczek;
}
