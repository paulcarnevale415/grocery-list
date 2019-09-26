var inputsUser = [];

$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var inputsUser = ['first', 'second', 'third', 'fourth', 'fifth'];

    var newArray = inputsUser.map(function(inputer) {
      return $("#" + inputer).val();
    });
    newArray.sort();
    newArray.forEach(function(element) {
      var item = "<li>" + element +"</li>";
      $("#ulsixth").append(item);

    });

 event.preventDefault();

  });
});
