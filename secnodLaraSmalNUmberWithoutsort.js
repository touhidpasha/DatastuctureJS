var arr = [];
for (i = 0; arr.length <= 10; i++) {
    arr.push(Math.floor((Math.random() * 10) + 1));
}

function findWithoutSort() {
    let firstlar = arr[0], secondlar = arr[0], firstsmall = arr[0], secondsmall = arr[9];
    for (i = 0; i < arr.length; ++i) {
        if (firstlar < arr[i]) {
            secondlar = firstlar;
            firstlar = arr[i];
        } else
            if (arr[i] > secondlar && arr[i] != firstlar) {
                secondlar = arr[i];
            }
    }
    console.log("2nd largest is " + secondlar);

    for (i = 0; i < arr.length; ++i) {
        if (firstsmall > arr[i]) {
            secondsmall = firstsmall;
            firstsmall = arr[i];
        } else
            if (arr[i] > secondsmall && arr[i] != firstsmall) {
                secondlar = arr[i];
            }
    }
    console.log("2nd smallrrst is " + secondsmall);
}

findWithoutSort();
// findWithSort();