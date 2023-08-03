function removeProjectionBoxes() {
  // Query the div container for the elements you want to remove
  const container = document.querySelector('div.grow');
  
  // If the container is found, remove it
  if (container) {
    container.remove();
    console.log('Projection boxes removed.');
  }
}

// Run the function regularly to catch new elements as they load
setInterval(removeProjectionBoxes, 1000);
