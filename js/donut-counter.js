var guest;
var donut;

guest = prompt("How many guests?");
donut = prompt("How many donuts?");

guests = parseInt(guest);
donuts = parseInt(donut);

var enough;
  if(donuts >= guests){
    enough = "There are enough donuts for each guest.";
  } else {
    enough = "There are not enough donuts for each guest.";
  }
alert(`There are ${donuts} donuts, and ${guests} guests. ${enough}`);
