//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
//Authors: Ashby Utting, Anthony Peruzzo and Molly Hennessy
//Modified by: Molly Hennessy

var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;
    consoleDisplay = document.getElementById('consoleDisplay');



function getAuthorAndYearString(speechesArray){
//Displays when speech was written and by whom.

  consoleDisplay.innerHTML = 'This speech was written by '+ speechesArray.author + ' in ' + speechesArray.year +' <br> ';    
};


function displayBCEString(speechesArray) {
  //This indicates whether the speech was written before or after the common era.

  if(speech.yearIsBCE === true) {
    consoleDisplay.innerHTML += "The speech was written during the common era <br>"
  } else {
    consoleDisplay.innerHTML += "The speech was written before the common era <br>"
  }

};
  //This indicates whether the speech is the oldest or the newest on the page.

function getOldestOrYoungestString(speechesArray) {
 
    var oldest = speechesArray.year,
        newest = speechesArray.year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray.year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray.year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray.year === oldest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the oldest speech on the page.<br>';
  }
  if(speechesArray.year === newest){
    document.getElementById('ConsoleDisplay').innerHTML += 'This is the most recent speech on the page.<br>';
  }

};

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  var donationDisplay = document.createElement('h3'),
      donationText,
      articleElements;

  donatePrompt = window.prompt('How much would you like to donate?');

  if(donatePrompt >= 100){
    donationText = document.createTextNode('Thank you for your very generous donation!');
    donationDisplay.setAttribute('style', 'color: #DB152C;');

    articleElements = document.getElementsByTagName('article');
    for(var i = 0; i < articleElements.length; i++){
      articleElements[i].className = 'generous-donation';
    }
  }else{
    donationText = document.createTextNode('Thank you for your donation of $' + donatePrompt);
  }

  donationDisplay.appendChild(donationText);
  document.getElementById('SideNav').appendChild(donationDisplay);
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.

getAuthorAndYearString(churchillSpeech);
displayBCEString(churchillSpeech);
getOldestOrYoungestString(churchillSpeech);

});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.

getAuthorAndYearString(ghandiSpeech);
displayBCEString(ghandiSpeech);
getOldestOrYoungestString(ghandiSpeech);

});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  
getAuthorAndYearString(demosthenesSpeech);
displayBCEString(demosthenesSpeech);
getOldestOrYoungestString(demosthenesSpeech);

});
