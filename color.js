document.addEventListener("DOMContentLoaded", function()
{
let body = document.querySelector("body");
document.querySelector("#bisque").addEventListener("click",
            function(){ body.style.backgroundColor = "bisque";}
        );

document.querySelector("#cornsilk").addEventListener("click",
            function(){ body.style.backgroundColor = "cornsilk";}
        );

document.querySelector("#lavenderblush").addEventListener("click",
            function(){ body.style.backgroundColor = "lavenderblush";}
        );

})