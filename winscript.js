window.pvchange=function(e){var w=window.open("",e,"width=800,height=600,menubar=yes,toolbar=yes,location=yes,status=yes,scrollbars=auto,resizable=yes");w.location.href='javascript:(function(){var b=document.querySelector("head"),c=document.createElement("script"),d=document.createElement("script");c.src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js";d.src="https://jakesandbox.com/programs/'+e+'.js";b.appendChild(c);b.appendChild(d)})()';w.focus()};
window.wintg=function(a){document.getElementById(a).style.display="none"==document.getElementById(a).style.display?"inline":"none"};
window.draggable=function(v){var b=document.getElementById(v);function e(a){a=a||window.event;a.preventDefault();c=a.clientX;d=a.clientY;document.onmouseup=h;document.onmousemove=k}function k(a){a=a||window.event;a.preventDefault();f=c-a.clientX;g=d-a.clientY;c=a.clientX;d=a.clientY;b.style.top=b.offsetTop-g+"px";b.style.left=b.offsetLeft-f+"px"}function h(){document.onmouseup=null;document.onmousemove=null}var f=0,g=0,c=0,d=0;b.querySelector("#titlebar").onmousedown=e};
