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
    
  };

  let file = event.target.files[0];

  fr.readAsText(file);
}
