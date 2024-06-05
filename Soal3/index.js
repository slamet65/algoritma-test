INPUT = ['xc', 'dz', 'bbb', 'dz']  
QUERY = ['bbb', 'ac', 'dz']  

OUTPUT = []

QUERY.forEach(q => {
    let counter = 0
    INPUT.forEach(i => {
        if (q===i) {
            counter++
        }
    });
    OUTPUT.push(counter)
});

console.log(OUTPUT)
