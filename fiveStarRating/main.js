//Get elements from the DOM
const bigStar = document.querySelector('.big-star i');
const stars = document.querySelectorAll('.star');
const ratingText = document.querySelector('.selected-rating');
const feedbackMessage = document.querySelector('.feedback-message');
const btn = document.querySelector(".rating button");

//Loop through each start
stars.forEach(star => {
  //Add mouseenter event to each star
  star.addEventListener('mouseenter', handleHover);
  //Add mouseleave event to each star
  star.addEventListener('mouseleave', handleLeave);
  //Add click event to each star
  star.addEventListener('click', handleClick);
});

//Variable to hold the rating value
let rating;

//Function for highlighting the stars
function highlightStars(rating) {
  //Loop through all stars
  stars.forEach((star, index) => {
    //If the index of the star is lower than the rating
    if (index < rating) {
      //Add the css class for the highlight
      star.classList.add('selected');
    //If not
    } else {
      //Remove the highlight class
      star.classList.remove('selected');
    }
  });
}

//Switch between each rating message
function getFeedbackMessage(rating) {
  switch (rating) {
    case '1':
      return `
        <h2>Woof!</h2>
        <p>We\'re sorry to hear that!</p>`;
    case '2':
      return `
        <h2>Eeeeek!</h2>
        <p>We\'ll strive to do better!</p>
      `;
    case '3':
      return `
        <h2>It\'s okay.</h2>
        <p>We appreciate your honesty.</p>
      `;
    case '4':
      return `
        <h2>Sweet!</h2>
        <p>Hope to see you again!</p>
      `;
    case '5':
      return `
        <h2>Such joy!</h2>
        <p>That\'s why we are here!</p>
      `;
    default:
      return '';
  }
}

//Function for the mouseenter (hover) event
function handleHover(e) {
  //Separate rating variable for the mouseenter event
  const rating = e.currentTarget.getAttribute('data-value');
  //Run the star highlight function
  highlightStars(rating);
}

//Function for the mouseleave event
function handleLeave() {
  //Run the star highlight function
  highlightStars(rating);
}

//Function for the click event
function handleClick(e) {
  //Show the submit rating button
  btn.style.display = "block";
  //Set the rating to the clicked star data value
  rating = e.currentTarget.getAttribute('data-value');
  /*Change the font size of the 
  large star depending on the rating*/
  bigStar.style.fontSize = `${1 + rating * 0.1}em`;
  //Change the rating text
  ratingText.textContent = rating;
  //Change the feedback message
  feedbackMessage.innerHTML = getFeedbackMessage(rating);
  //Show the feedback message
  feedbackMessage.style.visibility = 'visible';
  feedbackMessage.style.opacity = '1';
}