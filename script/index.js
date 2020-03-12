

let tag = document.getElementById("tag-line");

let headings = document.querySelectorAll(".bg-main-content h2");

let collect = `${tag.textContent}\n`;
for(let heading of headings)
    {
        collect += `${heading.textContent}\n`;
    }

alert(collect);




let  content = document.getElementsByClassName("bg-main-content")[0];
let when_to_launch = content.getElementsByClassName("box")[12];
let information = when_to_launch.children;
collect = `${information[0].textContent}\n`;
var preet;
for (preet = 1; preet < information.length; preet++) {
  	collect += `${information[preet].textContent}\n`;
}
alert(collect);

