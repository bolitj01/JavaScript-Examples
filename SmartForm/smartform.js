var base = "", high;
var cdiv = null, cc = null, button = null, ph, oph, pattern,
    form, iph = "AreaCode-Phone Number", local = true;

function init() 
{  
    high    = "#9ff"; 

    ph      = document.getElementById("phone");
    oph     = ph.getAttribute("placeholder");
    pattern = ph.getAttribute("pattern");
    
    button  = document.getElementById("sb");
    form    = document.getElementById("sf");
    countryCode(document.getElementById("country"));
}

function highlight(nd)
{  
    base = nd.style.backgroundColor;
    nd.style.backgroundColor = high;
}

function normal(nd)
{ 
    nd.style.backgroundColor = base; 
}

function isLocal(ct)
{ 
    return (ct == "US" || ct == "CA" || ct == "" || ct == "MX");
}   

function countryCode(country)
{ 
    if ( isLocal(country.value) )
    {  
        if ( ! local )
        {  
            form.removeChild(cdiv);
            ph.setAttribute("placeholder", oph);
            ph.setAttribute("pattern", pattern);
            local = true;
        }
        return;
    }

    if ( ! local ) 
    {  
        cc.value = ""; return; 
    }

    if ( cdiv == null )
    {  
        cdiv = document.createElement("div");
        cdiv.appendChild(makeLabel());
        cdiv.appendChild(makeCC());
    }

    form.insertBefore(cdiv, button);
    ph.setAttribute("placeholder", iph);
    ph.removeAttribute("pattern");
    local = false;
}

function makeLabel()
{  
    var t, n; 
    
    n = document.createElement("label");
    t = document.createTextNode("Country Code:");
    n.appendChild(t);
   
    return n;
}

function makeCC()
{  
    var t, n;
   
    cc = document.createElement("input");
    cc.setAttribute("onfocus", "highlight(this)");
    cc.setAttribute("onblur", "normal(this)");
    cc.setAttribute("name", "cc");
    cc.setAttribute("id", "cc");
    cc.setAttribute("size", "7");
   
    n = document.createElement("span");
    n.appendChild(cc);
    t = document.createTextNode(" (example: 86 for China)");
    n.appendChild(t);
   
    return n;
}
