// Using moment to show day and time
$("#currentDay").text(moment().format("MMMM Do YYYY,"))



var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// function for saving inputs to local storage
$(".saveBtn").on("click", function() {
    
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    
    localStorage.setItem(time,value);
});

// getting from local storage
$("9.description").val(localStorage.getItem("9")); 
$("10.description").val(localStorage.getItem("10")); 
$("11.description").val(localStorage.getItem("11")); 
$("12.description").val(localStorage.getItem("12"));
$("1.description").val(localStorage.getItem("1"));
$("2.description").val(localStorage.getItem("2"));
$("3.description").val(localStorage.getItem("3"));
$("4.description").val(localStorage.getItem("4"));
$("5.description").val(localStorage.getItem("5"));

// function to track current hour and show that hour by showing different colored time blocks
function updateHour() {
  
    
    var currentHour = moment().hours();

    // loop over time blocks
    $(".time-block").each(function() {
      var blockHour = parseInt($(this).attr("id"));

      // checking times for color
      if (blockHour < currentHour) {
       $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
      } 
      else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future");
      } 
       else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });
  }

  updateHour();

 