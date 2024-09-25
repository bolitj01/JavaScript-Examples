/**
 * Solution for in-class exercise.
 * Don't read until you try the exercise!
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 *
 * 
 * 
 * 
 * 
 * 
 *  
 * 
 * 
 * 
 * 
*/
function readHP() {

    var fr = new FileReader();
    fr.addEventListener("load", () => {
        let mentions = [];

        for (let character of ["Harry", "Ron", "Hermione", "Dumbledore",
        "Malfoy", "Hagrid", "Snape", "Voldemort"]) {
            mentions.push({ name: character, count: 0 });
        }

        //Find occurrences
        let words = fr.result.split(" ");

        for (let word of words) {
            let character = mentions.find(character => word.includes(character.name));
            if (character) {
                character.count++;
            }
        }

        //Sort the count totals
        mentions.sort((m1, m2) => m2.count - m1.count);

        //Show occurrences in the table
        let table = document.getElementById("hpWords")
        for (character of mentions) {
            table.innerHTML += 
                `
                <tr>
                    <td>${character.name}</td>
                    <td>${character.count}</td>
                </tr>
                `
        }

    });

    let file = document.getElementById("filechoose").files[0];

    fr.readAsText(file);
}