// N1:
function num1(arr1) {
    res1 = 0
    for (let i1 = 0; i1 < arr1.length; i1++) {
        res1 += arr1[i1]
    }
    return res1
}
console.log(num1([10, 15, 20, 25, 30]));

// N2:
function num2(arr2) {
    let res2 = arr2[0];
    for (let i = 1; i < arr2.length; i++) {
        if (arr2[i] < res2) {
            res2 = arr2[i];
        }
    }
    return res2;
}
console.log(num2([10, 15, 20, 25, 30]));

// N3:
function num3(arr3) {
    let res3 = arr3.join("")
    return res3.length
}
console.log(num3(["Hello world!"]));

// N4:
function num4(arr4) {
    return arr4.sort((a, b) => a - b)
}
console.log(num4([30, 15, 20, 10, 30]));

// N5:
function num5(arr5n1, arr5n2) {
    let res5 = []
    res5 = arr5n1.concat(arr5n2)
    return res5.sort((a, b) => a - b)
}
let mas5n1 = [1, 3, 5, 7, 9]
let mas5n2 = [2, 4, 6, 8, 10]
console.log(num5(mas5n1, mas5n2));

// N6:
function num6(arr6) {
    return arr6.reverse()
}
console.log(num6([10, 15, 20, 25, 30, 35, 40, 45, 50]));

// N7:
function num7(arr7n1) {
    return arr7n1.filter(num7 => num7 > 0)
}
let mas7 = [10, -15, 20, -25, 30, -35, 40, -45, 50]
console.log(num7(mas7));

// N8:
function num8(arr8n1, arr8n2) {
    res8 = []
    for (let i8 = 0; i8 < arr8n1.length; i8++) {
        res8.push(arr8n1[i8] + arr8n2)
    }
    return res8
}
let mas8n1 = [10, -15, 20, -25, 30, -35, 40, -45, 50]
let mas8n2 = 10
console.log(num8(mas8n1, mas8n2));

// N9:
function num9(arr9) {
    mus9 = []
    man9 = []
    for (let i9 = 0; i9 < arr9.length; i9++) {
        if (arr9[i9] > 0) {
            mus9.push(arr9[i9])
        } else {
            man9.push(arr9[i9])
        }
    }
    return "Musbat sonlar: " + mus9 + " ; " + "Manfiy sonlar: " + man9
}
let mas9 = [10, -15, 20, -25, 30, -35, 40, -45, 50]
console.log(num9(mas9));

// N10:
function num10(arr) {
    let res10 = [];
    for (let i10 = 0; i10 < arr.length; i10++) {
        let number10 = Number(arr[i10]);
        if (!isNaN(number10)) {
            res10.push(number10);
        }
    }
    return res10;
}
console.log(num10(["1", "2", "3", "x", "4.5"]));

// N11:
function num11(arr11) {
    res11 = 0
    for (let i11 = 0; i11 < arr11.length; i11++) {
        res11 += arr11[i11]
    }
    return "O`rtacha qiymat: " + res11 / 2
}
let mas11 = [10, 20, 30, 40, 50]
console.log(num11(mas11));

// N12:
function num12(arr12) {
    juft12 = []
    toq12 = []
    for (let i12 = 0; i12 < arr12.length; i12++) {
        if (arr12[i12] % 2 == 0) {
            juft12.push(arr12[i12])
        } else {
            toq12.push(arr12[i12])
        }
    }
    return "Juft sonlar: " + juft12 + " ; " + "Toq sonlar: " + toq12
}
let mas12 = [10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(num12(mas12));

// N13:
function num13(arr13n1, arr13n2) {
    return arr13n1.filter(num13 => num13 != arr13n2)
}
let mas13n1 = [10, -15, 20, 10, 30, -35, 10, -45, 50]
let mas13n2 = 10
console.log(num13(mas13n1, mas13n2));

// N14:
function num14(arr14) {
    let res14 = [];
    for (let i14 = 0; i14 < arr14.length; i14++) {
        res14.push(arr14[i14] * arr14[i14]);
    }
    return "Kvadrati: " + res14.join(", ");
}

let mas14 = [10, 20, 30, 40, 50];
console.log(num14(mas14));

// N15: 
function num15(arr15) {
    let res15 = [];
    for (let i15 = 0; i15 < arr15.length; i15++) {
        res15.push(arr15[i15] * 2);
    }
    return "Ikki barobar oshirilgan: " + res15.join(", ");
}

let mas15 = [10, 20, 30, 40, 50];
console.log(num15(mas15));

// N16:
function num16(arr16) {
    return arr16.filter(num16 => num16 != null && num16 != undefined);
}
let mas16 = [1, null, 2, undefined, 3, null, 4];
console.log(num16(mas16));

// N17:
function num17(arr17) {
    let res17 = [];
    for (let i17 = 0; i17 < arr17.length; i17++) {
        res17[i17] = arr17[i17][0].toUpperCase() + arr17[i17].slice(1);
    }
    return res17;
}
let mas17 = ["hello", "world", "apple", "car", "tree"];
console.log(num17(mas17));

// N18:
function num18(arr18n1, arr18n2) {
    let res18 = 0
    for (let i18 = 0; i18 < arr18n1.length; i18++) {
        if (arr18n2 == arr18n1[i18]) {
            res18++
        }
    }
    return res18
}
let mas18n1 = [10, -15, 20, 10, 30, -35, 10, -45, 50]
let mas18n2 = 10
console.log(num18(mas18n1, mas18n2));

// N19:
function num19(num19n1, num19n2) {
    if (num19n2.length == 0) {
        return num19n1;
    }

    let res19 = Math.floor(num19n1.length / 2);
    num19n1.splice(res19, 0, num19n2[0]);
    return num19n1;
}

let mas19n1 = [1, 2, 3, 4, 5];
let num19n2 = [9];
console.log(num19(mas19n1, num19n2));

// N20:
function num20(arr20) {
    return arr20.sort((a, b) => a.length - b.length);
}
let mas20 = ["apple", "banana", "kiwi", "cherry", "fig"];
console.log(num20(mas20));

// N21:
function num21(arr21) {
    let res21 = "";
    for (let i = 0; i < arr21.length; i++) {
        if (arr21[i].length > res21.length) {
            res21 = arr21[i];
        }
    }
    return res21;
}
let mas21 = ["apple", "banana", "kiwi", "cherry", "fig"];
console.log(num21(mas21));

// N22:
function num22(arr22) {
    return arr22.join(", ");
}
let mas22 = ["apple", "banana", "kiwi", "cherry", "fig"];
console.log(num22(mas22));

// N23:
function num23(arr23) {
    return arr23.filter(res23 => typeof res23 == 'number');
}
let mas23 = [10, "apple", 20, "banana", null, 30, undefined, 40];
console.log(num23(mas23));

// N24:
function num24(arr24, n) {
    return arr24.slice(-n);
}
let mas24 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(num24(mas24, 3));