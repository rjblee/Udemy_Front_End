// $(document).ready(function() {
//     $(".h1").click(function() {
//         $("h1").hide();
//     });
//     $(".p").click(function() {
//         $("p").hide();
//     })
// });


// $(function() {
//     $("h1").click(function() {
//         $("img").slideToggle(1000, function() {
//             alert("Callback is working")
//         })
//     })
// })


$(function() {
    $(".btn1").click(function() {
        $("div").addClass("new");
    });
});



$(function() {
    $(".btn2").click(function() {
        $("div").toggleClass("new");
    })
})