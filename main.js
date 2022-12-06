//! TASK2

// let number = prompt("eded daxil edin");
// function num(number) {
//     let arr = []
//     let qaliq = 0;

//     while (number > 1) {
//         qaliq = number % 10;
//         number = (number - qaliq) / 10;

//         arr.push(qaliq);

//     }
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 != 0) {
//             return console.log("Yes")

//         }
//         else {
//             return console.log("Noooo")
//         }

//     }
// }

// num(number);


//! Task3
let rows = prompt("enter count of your rows");
let columns = prompt("enteer count of your columns")
function rectangle(n, m) {
    var i, j;
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= m; j++) {
            if (i == 1 || i == n || j == 1 || j == m)
                document.write("*");
            else
                document.write("  ");
        }
        document.write("<br>");
    }
}

rectangle(rows, columns);