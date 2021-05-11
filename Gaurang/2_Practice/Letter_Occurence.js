function Letter_Occurence(sentence){
    var newSent =sentence.replace(/ +/g, ""); console.log(newSent);
    var arr = []; console.log(newSent.length);
    for (var i=0;i<newSent.length;i++){
        arr[i] = newSent.substring(i,i+1);console.log(arr[i]);}
        var newarr = arr.map(arrFunction)
        function arrFunction(letter){
            var counter = 0; var occur;
            for (i=0; i < arr.length;i++){
                if(arr[i] === letter){ occur = arr[i]; counter+=1;
                }} return occur+ ' '+counter;}return newarr;}

// Incorrect output: Print count of O twice ["H 1", "o 2", "w 1", "a 1", "r 1", "e 1", "y 1", "o 2", "u 1"]
// Usage of incorrect Map, use Map which has key-value data structure