var famousPeople = [{
  title: "Science Fiction Grandmaster",
  name: "Isaac Asimov",
  bio: "Prolific Author of primarily Science Fiction",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Isaac.Asimov01.jpg/440px-Isaac.Asimov01.jpg",
  lifespan: {
    birth: 1919,
    death: 1992
  }
}, {
  title: "Actor, Comedian",
  name: "John Candy",
  bio: "Popular actor in television and movies",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/John_Candy.jpg",
  lifespan: {
    birth: 1950,
    death: 1994
  }
}, {
  title: "Electrical Engineer",
  name: "Vannevar Bush",
  bio: "Scientist who founded Raytheon",
  image: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Vannevar_Bush_portrait.jpg",
  lifespan: {
    birth: 1890,
    death: 1974
  }
}, {
  title: "Senator",
  name: "Strom Thurmond",
  bio: "U.S. Senator from South Carolina",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/43/Strom_Thurmond.jpg",
  lifespan: {
    birth: 1902,
    death: 2003
  }
}];

// Get text Input field
var txt = document.getElementById("text1");

// Get div where cards go
var contain = document.getElementById("container");

// Stores which Article was selected
var focus1;

// Adds cards of celebrities
for (var i=0; i<famousPeople.length; i++){
  contain.innerHTML += "<article class='person'><header><p id='one' class='uno'>" + famousPeople[i].name + "</p><p id='two' class='dos'>" + famousPeople[i].title +
                       "</p></header><section><p id='three' class='tres'>" + famousPeople[i].bio + "</p><img src=" + famousPeople[i].image + " alt='" + famousPeople[i].name + "' class='quatro'></section><footer><p class='cinco'>Birth: " + famousPeople[i].lifespan.birth + " </p><p class='seis'>Death: " + famousPeople[i].lifespan.death + "</footer></article>";
}

// Event Listener for Text Input field that determines which Article/element was selected. Checks every <p> for foo class
txt.addEventListener("focus", function(){
  for (var k=0; k<peopleArray.length; k++){
    for (var l=0; l<peopleArray[k].children.length; l++){
      for (m=0; m<peopleArray[k].children[l].children.length; m++){
        if (peopleArray[k].children[l].children[m].classList.contains("foo")){
          focus1 = k;
        }
      }
    }
  }
});

// Event Listener for Text Input where text entered matches what is written to selected Article's Bio. Enter Key clears Text Input
txt.addEventListener("keyup", function(e){
  if (e.keyCode !== 13){
    peopleArray[focus1].children[1].children[0].innerHTML = txt.value;
  } else{
    txt.value = "";
  }
});

// Gets all Articles, puts them into array and assigns Event Listener to each Card. On click, adds foo class to selected element
var peopleArray = document.getElementsByClassName("person");
for (var j=0; j<famousPeople.length; j++){
  peopleArray[j].addEventListener("click", function(e){
    if (e.target.className != ""){
      e.target.classList.add("foo");
      txt.focus();
    }
  });
}