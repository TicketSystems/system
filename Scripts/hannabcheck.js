// Define the list of valid tickets
const validTickets = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
//const validTickets = [];

if (validTickets.length === 0) {
// No valid tickets, hide 'cuccok' div and show 'error' div
document.querySelector('.cuccok').style.display = 'none';
document.querySelector('.error').style.display = 'block';
} else {
// Valid tickets exist, show 'cuccok' div and hide 'error' div
document.querySelector('.cuccok').style.display = 'block';
document.querySelector('.error').style.display = 'none';
}

document.addEventListener("keyup", function(event) {
  if (event.key === 'Enter') {
    checkTicket()
}
});

function playSound(audioName) {
  let audio = new Audio(audioName)
  audio.play()
}

function playArrive() {
  let audio = new Audio("Köszöntelek a partin.m4a")
  audio.play()
}

function checkTicket() {
  // Get the value of the ticket number input field
  const ticketNumber = parseInt(document.getElementById("ticketNum").value);
  
  // Check if the ticket number is in the list of valid tickets
  if (validTickets.includes(ticketNumber)) {
    // Remove the ticket number from the list of valid tickets
    validTickets.splice(validTickets.indexOf(ticketNumber), 1);

    // Display a success message
    //alert(ticketNumber + "✅");
    document.getElementById('pipa').style.display = 'block';
          setTimeout(function() {
              document.getElementById('pipa').style.display = 'none';
          }, 1000);

    // Clear the input field
    document.getElementById("ticketNum").value = "";
  } else {
    // Display an error message
    //alert(ticketNumber + "❌");
    document.getElementById('x').style.display = 'block';
          setTimeout(function() {
              document.getElementById('x').style.display = 'none';
          }, 1000);

    // Clear the input field
    document.getElementById("ticketNum").value = "";
  }
}