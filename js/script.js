// faq collapsible

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

/* study grades*/
var total = 0;
function grades(grade, progress)
{
  var num = prompt("Enter your grade")
     grade.value = num;
     total = total + progress ;
  if (grade.value == num)move(total);
}

/* study progressbar*/

var i = 0;
var width = 0;
function move(progress) {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    
    var id = setInterval(frame, 0);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else if (width < progress){
        width = progress;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
        i = 0;
      }
    
    }
  }
}

// new nav menu

function openPage(pageName, elmnt, color) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Remove the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Show the specific tab content
  document.getElementById(pageName).style.display = "block";

  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
