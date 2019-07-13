// https://www.linkedin.com/mynetwork/

// This function allows us to stop our code for |ms| milliseconds.
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// I've put our main code into this function.
async function addPeople() {
  ul = $('ul.artdeco-carousel__slider')[0];
  firstLi = ul.querySelector('li');
  // Count how many people you've added
  count = 0; 
  // Stop after adding 50 people
  while(firstLi && count < 50){ 
    buttonToClick = firstLi.querySelector("button[data-control-name=invite]");
    // Make sure that this button contains the text "Connect"
    if (buttonToClick.innerText.includes("Connect")){
      buttonToClick.click();
      count += 1;
      console.log("I have added " + count + " people so far.");
    }
    ul.removeChild(firstLi);

    // Generate random numbers between 1000 ~ 9000
    let randNum = Math.floor((Math.random() * 9000) + 1000); 
    await sleep(randNum); // stop this function for 1 second here.
    firstLi = ul.querySelector('li');
  }
}

addPeople();