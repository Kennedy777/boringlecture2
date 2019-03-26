  $(document).ready(function() {
    $("button#stuck1").click(function() {
      $("body").removeClass();
      $("body").addClass("thing1");
    });

    $("button#stuck2").click(function() {
      $("body").removeClass();
      $("body").addClass("thing2");
    });
  });


// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });
// 
//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });
// 
//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
// });