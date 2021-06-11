var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function() {
    // getting text and row values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in local storage
    localStorage.setItem(time,value);
});
// get from local storage
$("9.description").val(localStorage.getItem("9")); 
$("10.description").val(localStorage.getItem("10")); 
$("11.description").val(localStorage.getItem("11")); 
$("12.description").val(localStorage.getItem("12"));
$("1.description").val(localStorage.getItem("1"));
$("2.description").val(localStorage.getItem("2"));
$("3.description").val(localStorage.getItem("3"));
$("4.description").val(localStorage.getItem("4"));
$("5.description").val(localStorage.getItem("5"));


