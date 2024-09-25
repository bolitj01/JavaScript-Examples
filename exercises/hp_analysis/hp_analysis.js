//Complete this script as an exercise for client-side File I/O and word data analysis.
function readHP(event) {
    let fr = new FileReader();

    let names = ["Harry", "Ron", "Hermione", "Dumbledore", "Hagrid"];

    names.sort((a, b) => {
        return b.length - a.length;
    });

    let characters = {};

    fr.onload = () => {
        let book = fr.result;
        let words = book.split(" ");
        words.forEach((word) => {
            names.forEach((character) => {
                if (word.includes(character)) {
                    if (characters[character] === undefined) {
                        characters[character] = 0;
                    }
                    else {
                        characters[character] += 1;
                    }
                }
            })
        });
        let table = document.querySelector("table");
        //add the character key and value to table
        for (let character in characters) {
            let row = table.insertRow();
            let name = row.insertCell();
            let count = row.insertCell();
            name.innerHTML = character;
            count.innerHTML = characters[character];
        }
    }

    let file = event.target.files[0];

    fr.readAsText(file);
}
