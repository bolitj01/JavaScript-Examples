function thumbnail(files)
{ 
    var tn = document.getElementById('thumbnail');

    //Clear any previous pictures
    while ( tn.hasChildNodes() ) 
    {  
        tn.removeChild(tn.firstChild);  
    }
    
    var h3 = "<h3>Pictures to upload = " + files.length + "</h3>";
    tn.innerHTML = h3; 

    for (var i = 0; i < files.length; i++) 
    {  
        var file = files[i];  
        var imageType = /image.*/;  

        if ( !file.type.match(imageType) )
        {
            continue;
        }
        
        var img = document.createElement("img");  
        img.classList.add("tm");  
        tn.appendChild(img);  

        var reader = new FileReader();  
        reader.onload = makeHandler(img);
        reader.readAsDataURL(file);  
    }  

    tn.style.display = "inline-block";
}

function makeHandler(image)
{ 
    return function(event) 
    { 
        image.src = event.target.result; 
    };
}
