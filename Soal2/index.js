const sentence = "Saya sangat senang mengerjakan soal algoritma"

longest(sentence);

function longest(sentence) {
    const words = sentence.split(" ")
    let longestString = ""
    let longestStringCount = 0
    words.forEach(word => {
        if (word.length > longestStringCount) {
            longestStringCount = word.length
            longestString = word
        }
    });
    console.log(`${longestString} : ${longestStringCount} characters`)
}