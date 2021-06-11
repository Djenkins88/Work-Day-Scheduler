var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

$(".saveBtn").on("click", function() {
    // geting text and row values
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // save in localStorage
    localStorage.setItem(time /* aka KEY = row id */, value /* text in the textarea */);
});


