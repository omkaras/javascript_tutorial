function Palindrom(str){var str_len =str.length;
    for (var i = 0;i<str_len;i++){
        for (var j = str_len-i-1;j>str_len-i-2;j--){
           if(str.substring(i, i+1)!==str.substring(j, j+1)){
               return 'String is not a Palindrom'
           }}}return 'String is a Palindrom'}

// Time complexity of this program must be shitting brick at the end of the last iteration
// Rewrite using less complexity! Take the logic of reverse or something else.