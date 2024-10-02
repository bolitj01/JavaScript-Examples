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
//Complete this script as an exercise for client-side File I/O and word data analysis.
function readHP(event) {
  let fr = new FileReader();

  let characters = [
    { name: "Harry", count: 0 },
    { name: "Ron", count: 0 },
    { name: "Hermione", count: 0 },
    { name: "Hagrid", count: 0 },
    { name: "Dumbledore", count: 0 },
    { name: "Snape", count: 0 },
    { name: "Voldemort", count: 0 },
    { name: "Sirius", count: 0 },
    { name: "Dobby", count: 0 },
    { name: "Draco", count: 0 },
  ];

  fr.onload = () => {
    const book = fr.result;
    const words = book.split(" ");

    words.forEach((word) => {
      characters.forEach((character) => {
        if (word.includes(character.name)) {
          character.count++;
        }
      });
    });

    characters.sort((c1, c2) => c2.count - c1.count);

    const table = document.getElementById("hpWords");

    characters.forEach((c) => {
      table.innerHTML += `
        <tr>
            <td>${c.name}</td>
            <td>${c.count}</td>
        </tr>
    `;
    });
  };

  let file = event.target.files[0];

  fr.readAsText(file);
}
