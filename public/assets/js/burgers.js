// program breaks whenever I use my js code for ajax calls.

// $(".eatButton").on("click", function(event){
//     event.preventDefault();
    
//     console.log($(this).data("id"))
//     console.log($(this).attr("data-id"))
//     var id = $(this).attr("data-id")

//    $.ajax({
//       url: "/api/burgers/" + id, 
//       type: "PUT"
//     }).then(
//       function() {
//         console.log("burger has been eaten")
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   })

//   $(".create-form").on("submit", function(event){
//     event.preventDefault();

//     console.log($("#ca").val())
//     var burger_name = $("#ca").val()
//     var burgerObject = {burger_name}
//     console.log(burgerObject)

//     $.ajax({
//       url: "/api/burgers",
//       type: "POST",
//       data: burgerObject
//     }).then(function(){
//       console.log("created new burger");
//       location.reload();
//     })

//   })

//   $(".digestButton").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax({
//       url: "/api/burgers/" + id, 
//       type: "DELETE"
//     }).then(function(){
//         console.log("deleted burger", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });