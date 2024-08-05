const alp1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alp3 = "13579";
const alp4 = "24680";
const alp2 = "abcdefghijklmnopqrstuvwxyz";
const alp5 = "!@#$%^&*()_+- =[]{};:,./?><~";
const alp = alp1 + alp3 + alp4 + alp2 + alp5;

/**
 * tdo&4&/oPNPNY&Yol&ENYl&Yo&m&H&Y*o:otronroGro$roMoC
 * $do&4&/oP.=;&yo&HyR&E.=
 * Joto*ou^FcLQ#XwzKA}D3I7e 6bT[~8h
 * Jo$o*oE&l<P.H>N5{v9m!=1;R/4%ykBY
 * Jono*o?sMnt
 * JoGo*o+S$WG
 * JoMo*o(fVp,2:*]O@-oq_ZrjCiaU0)Jgdx
 * ndol&ENYloP.%N&oP.PN&;o;{BoY9oto{&YoH&P=o&4&/o*oN@ymu4: #DA-5It>w8d?.{EjHPb]zC/~Z(+K^vcWpn)Ys0qOQ&6JL31V}=_SFfrUe7gT<!Gk9xRohX$%B2[aiM*,;l
 * Gdo!lo;Y;oNY=N/oy&=9/&Yo*ou=pwWc[ADQM!fS1qYT.7edb^lsB$G]kX@_6UKrN0(3?n9%<&RaP-JEv#Vt}8L~,;FH>Ojy4zo/h ZI2mx)C*+5:{ig
 */
const p =
  "Wt(Y0NCMQR5y~8v<nOeHF.BKg9x24$zI=}P;U,u%_E73omjah*s!-brD#1VTJX{iLlq&^pcG kZA@S)w/?]:6f[d+>";
const e =
  "u=pwWc[ADQM!fS1qYT.7edb^lsB$G]kX@_6UKrN0(3?n9%<&RaP-JEv#Vt}8L~,;FH>Ojy4zo/h ZI2mx)C*+5:{ig";
function eMe(txt) {
  let txtray = txt.split("");
  let rslt = [];
  for (let i = 0; i < txtray.length; i++) {
    for (let j = 0; j < p.length; j++) {
      if (txtray[i] === p[j]) {
        rslt.push(e[j]);
        break;
      }
    }
  }
  return rslt.join("");
}
function dMe(txt) {
  let txtray = txt.split("");
  let rslt = [];
  for (let i = 0; i < txtray.length; i++) {
    for (let j = 0; j < e.length; j++) {
      if (txtray[i] === e[j]) {
        rslt.push(p[j]);
        break;
      }
    }
  }
  return rslt.join("");
}

process.stdin.setEncoding("utf-8");
console.log(" 1. e\n 2. d");
process.stdin.on("data", function (data) {
  console.log("OK!");
  if (parseInt(data.trim()) === 1) {
    process.stdin.on("data", function (dataenc) {
      console.log(eMe(dataenc.trim()));
      process.stdin.pause();
    });
  } else {
    process.stdin.on("data", function (datadec) {
      console.log(dMe(datadec.trim()));
      process.stdin.pause();
    });
  }
});
// let q = alp.split('');
// for(let i=0;i<q.length;i++){
//     let g = Math.floor(Math.random()*q.length);

//     [q[i],q[g]] = [q[g],q[i]];
// }
// console.log(q.join(''));
