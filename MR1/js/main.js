// Color changer
var header = document.querySelector('.cc')

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}



function changeHeaderColor() {
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

setInterval("changeHeaderColor()",1000);
//My Resume header 1 animation
$('#h0').mouseover(function() {
  $(this).text("Welcome to My Resume 😃")
})
$('#h0').mouseout(function() {
  $(this).text('My Resume!')
})

//Skills header 2 animation
$('#ss').mouseover(function() {
  $(this).text("| Always Learning | Always a Student | knowledge has no Limits |")
})
$('#ss').mouseout(function() {
  $(this).text('Skills')
})

//Languages header 2 animation
$('#lang').mouseover(function() {
  $(this).text("| Arabic: Native | English: Excellent |")
})
$('#lang').mouseout(function() {
  $(this).text('Languages')
})

//Certificates header animation
$('#cert').mouseover(function() {
  $(this).text("Certificates! => Additional Skills!")
})

$('#cert').mouseout(function() {
  $(this).text('Certificates!')
})



/* Education and skills Sections Animated Collapsibles */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
