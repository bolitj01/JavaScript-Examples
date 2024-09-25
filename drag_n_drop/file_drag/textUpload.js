var fr = new FileReader();

function prepFileRead() {
    var fileSelect = document.getElementById("fileChoose");

    fileSelect.addEventListener("change", function() {
        fr.readAsText(this.files[0]);
    });

    //Set handlers for Drag & Drop
    let dropZone = document.getElementById("fileDrop");

    //Allow dropping
    dropZone.addEventListener("dragover", allowDrop);
    dropZone.addEventListener("dragenter", allowDrop);
    
    dropZone.addEventListener("drop", function (ev){
        ev.preventDefault();
        
        const data = ev.dataTransfer; 
        
        fr.readAsText(data.files[0]);
    });

}

fr.addEventListener("load", dumpText);

function dumpText(){
    let textDump = document.getElementById("textDump")
    let text = fr.result;
    textDump.innerHTML = text;
}

function allowDrop(ev){
    ev.preventDefault();
}


