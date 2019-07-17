document.write("問１<br>");
for(var star0=1;star0<6;star0++){
    document.write("★");
}
document.write("<br><br>");

document.write("問２<br>");
for(var star1=1;star1<3;star1++){
    for(var star2=1;star2<4;star2++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問３<br>");
for(var star3=1;star3<3;star3++){
    for(var star4=1;star4<6;star4++){
        document.write("☆");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問４<br>");
for(var star5=1;star5<5;star5++){
    for(var star6=1;star6<6;star6++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問５<br>");
for(var star7=1;star7<5;star7++){
    for(var star8=1;star8<4;star8++){
        document.write("★");
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問６<br>");
for(var star9=1;star9<4;star9++){
    for(var star10=1;star10<4;star10++){
        if(star10%2==0){
            document.write("☆");
        }
        else{
            document.write("★");
        }
    }
    document.write("<br>");
    }
document.write("<br>");

document.write("問７<br>");
for(var star11=1;star11<5;star11++){
    for(var star12=1;star12<6;star12++){
        if(star12%2==0){
            document.write("☆");
        }
        else{
            document.write("★");
        }
    }
    document.write("<br>");
}
document.write("<br>");

document.write("問８<br>");
for(var star13=1;star13<6;star13++){
    for(var star14=1;star14<=star13;star14++){
        document.write("★");
    }
    document.write("<br>");
}


