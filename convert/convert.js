var inf, cmf;

inf = document.getElementById("in");
cmf = document.getElementById("cm");

document.querySelector("input[type='button'").addEventListener("click", convert);

function convert() {
  var i = inf.value.replace(/ /, "");
  if (i) {
    cmf.value = i * 2.54;
    return;
  }

  var c = cmf.value.replace(/ /, "");
  if (c) {
    inf.value = c / 2.54;
  }
}

function reset() {
  inf.value = "";
  cmf.value = "";
}
