$(document).ready(function() {
  $("#submit_info").submit(function(event){
 event.preventDefault();
    var item1 = $("input#itemOne").val();
    var item2 = $("input#itemTwo").val();
    var item3 = $("input#itemThree").val();
    var item4 = $("input#itemFour").val();
    var item5 = $("input#itemFive").val();
    var items = [item1, item2, item3, item4, item5];
   var sortItems = items.sort();
   var upperCase = sortItems.toString().toUpperCase();

   var listItems = upperCase.split(",");
    // console.log(listItems);
    listItems.forEach(function (item){
      $("ul").append("<li>" + item + "</li>");

    });


  });

});
