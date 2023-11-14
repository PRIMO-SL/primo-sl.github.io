// Get the element with the class "btn-watch-video"
var shuoModeButton = document.querySelector('.btn-watch-video');

// Get the image element
var imageElement = document.querySelector('.hero-img img');

// Set an initial state
var isShuoMode = false;

// Add a click event listener to the element
shuoModeButton.addEventListener('click', function() {
  // Toggle the state
  isShuoMode = !isShuoMode;

  // Change the image source based on the state
  if (isShuoMode) {
    imageElement.src = 'assets/img/team/shuo2.png';
  } else {
    imageElement.src = 'assets/img/shuo.png';
  }

  // Change the text based on the state
  if (isShuoMode) {
    shuoModeButton.innerHTML = '<i class="bi bi-play-circle"></i><span>To Shuo Mode</span>';
  } else {
    shuoModeButton.innerHTML = '<i class="bi bi-play-circle"></i><span>To Normal Mode</span>';
  }
});
