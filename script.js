document.write("Hello, world!");
function sayHello(){
  var response=prompt("what is your name?");
  alert("hello"+response+", have a good day!");
}

function add(a,b){
  return a+b;
}
console.log(add(20,30));
console.log(add(90,30));
function showTopic(){
  var x=ducument.getElementByID("demo");
  x.style.fontSize="25px";
  x.style.color="red";
}

var movies=["Avengers","Captain Marvel","Black Panther","Spiderman"];
movies[0]="Wonder Woman";
console.log(movies);
movies.push("Avengers");
movies.pop();
console.log(movies);

var moviedetails={
  title:"Captain Marvel",time:"2pm"
};
alert(moviedetails.title);
moviedetails.status="unavailable";
console.log(movie);


var fruits=[];
for (i=1;i<10;i++){fruits[i]=prompt("enter fruit");
}
alert("fruits contains"+ fruits);

for(var movie of moviedetails){
  if(movie.status==="available"){
    console.log("the movie"+ movie.tittle+" plays at"+ movie.time)
  }
  else{
    console.log("sorry, the movie "+ movie.tittle+" is sold out.")
  }
};
