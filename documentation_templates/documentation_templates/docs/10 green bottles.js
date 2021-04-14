var numberal  = ["no" , "one" , "two" , "three" , "four" , "five" , "six" , "seven" , "eight" , "nine" , "ten"  ];


function greenBottles(b){
if (b==1){
    return numberal [b] +  "green bottle, hanging on the wall"
}

else {
    return numberal [b]+ "green bottles hanging on the wall"
}
}


function caps(s){
return s[0].toUpperCase() + s.subString(1);
}

for (var bottles =10; bottles> 0; bottles--){
    greenBottles(bottles);
    greenBottles(bottles);
   
    console.log ("and if one green bottle should accidently fall");
    console.log("there will be " + (bottles-1) + " green bottles hanging on the wall \n")
}
