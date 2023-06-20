
function clock(){
    var today = new Date();
    
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var period = "AM";

    //set the time period ( AM/PM)
      if(hours >=12){
          period.innerHTML = "PM";
      }else{period.innerHTML = "AM"}

     //set the 12-hours clock format
    hours = hours > 12 ? hours % 12 : hours ;


// add the 0 for the values lower than 10
 if(hours < 10){
         hours = "0" + hours;
      }

      if( minutes< 10){
        minutes = "0" + minutes;
     }

     if( seconds < 10){
      seconds = "0" + seconds;
   }




  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
  document.querySelector(".period").innerHTML = period;

}
window.addEventListener("load", function() {
var updateclock = setInterval(clock , 1000)

// GET the date in js.
var today = new Date();
const months = today.toLocaleString("default" , {month: "short" } );
const  number = today.getDate();
const  day  = today.toLocaleString( "default" , {weekday: "long"});
const  year = today.getFullYear();


document.querySelector(".months").innerHTML = months;
document.querySelector(".day").innerHTML = day;
document.querySelector(".number").innerHTML = number;
document.querySelector(".year").innerHTML = year;
})
console.log()