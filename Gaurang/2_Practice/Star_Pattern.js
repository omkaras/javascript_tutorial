function Star_Pattern(){ 
    for(var i = 1;i<=5;i++){ var a='';var b;
    switch(true){case(i>3):b=6-i; break;
        case (i===3): b=3;
         break;default:b=i%3}for(var j = 1;j<=b;j++){a = a+'*'+' '} 
    console.log(a)}}