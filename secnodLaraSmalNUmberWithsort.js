var arr = [];
for (i = 0; arr.length <= 10; i++) {
    arr.push(Math.floor((Math.random() * 10) + 1));
}
function findWithSort() {
    arr.sort();
    // console.log(arr);
    console.log("2nd largest is " + arr[arr.length - 1] + " and 2nd smallest is " + arr[1]);
}
findWithSort();