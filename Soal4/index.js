Matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

const N = Matrix.length

let diagonal1 = 0
let diagonal2 = 0
let subs = 0

for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
        if (x===y) {
            diagonal1 += Matrix[x][y]
            subs += Matrix[x][y]
        }
        if (y === (N-1-x)) {
            diagonal2 += Matrix[x][y]
            subs -= Matrix[x][y]
        }
    }        
}

console.log(diagonal1)
console.log(diagonal2)
console.log(subs)