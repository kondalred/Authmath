function tabulateAnswers() {
    // initialize variables for each choice's score
    // If you add more choices and outcomes, you must add another variable here.
    var score = 0;
    
  
    
    // get a list of the radio inputs on the page
    var choices = document.getElementsByTagName('input');
    // loop through all the radio inputs
    for (i=0; i<choices.length; i++) {
      // if the radio is checked..
      if (choices[i].checked) {
        // add 1 to that choice's score
        if (choices[i].value == 'c') {
          score = score + 1;
        }
        if (choices[i].value == 'in') {
          score = score + 0;
        }
        
       
      }
    }
    
    
    
    // Display answer corresponding to that choice
    var answerbox = document.getElementById('answer');
    answerbox.innerHTML = `You have got ${score} correct answers`;
  }
  
    
  
  
  
  
  
  
  
  
  
  
  
  