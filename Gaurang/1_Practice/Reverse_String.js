function Reverse_String(Name) {
    var strlen = Name.length; 
    var revstr = '';
    for (var i = strlen - 1; i >= 0; i--) {
        revstr = revstr + Name.substr(i, 1)
    }
    console.log(revstr)
}
//method param should always be in small case
//method prints blank when pass integer as parameter