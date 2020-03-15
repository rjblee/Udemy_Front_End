// $(document).ready(function() {
//     $(".h1").click(function() {
//         $("h1").hide();
//     });
//     $(".p").click(function() {
//         $("p").hide();
//     })

// });


$(function() {
    $("h1").click(function() {
        $("img").slideToggle(1000, function() {
            alert("Callback is working")
        })
    })
})