function Array_Sort() {
    var arr = [23, 19, 56, 90, 8, 36, 42];
    var arr_sort = [];
    var sorted;
    for (var i = 0; i < arr.length; i++) {
        var counter = 0;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] > arr[j]) { counter = counter + 1 }
        }
        arr_sort[counter] = arr[i]
    }
    for (var j = 0; j < arr_sort.length; j++) { console.log(arr_sort[j]) }
}
// In 1st iteration you are comparing same values, no need
// Learn Bubble sort