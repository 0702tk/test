document.write("問１<br>");
function menseki(hankei){
    return "半径"+hankei+"cmの円の面積は"+(hankei*hankei*3.14)+"cm2です。"
}
document.write(menseki(5)+"<br>");
document.write(menseki(7)+"<br>");
document.write(menseki(10)+"<br>");

document.write("問２<br>");
function goukei(otona,kodomo){
    return "合計金額は"+(otona*500+kodomo*200)+"円です。"
}
document.write(goukei(2,4)+"<br>");
document.write(goukei(1,5)+"<br>");
document.write(goukei(3,4)+"<br>");