////////// Back-End //////////
// Pizza Constr. //
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}


// proto. for pushing size //
Pizza.prototype.chosenSize = function(size) {
  this.size.push(size);
}

// proto. for pushing toppings //
Pizza.prototype.chosenToppings = function(topping) {
  this.topping.push(topping);
}


////////// Front-End //////////

$(document).ready(function () {
  $("form#size").submit(function(event) {
    event.preventDefault();
    var selectedSize = $("select#size").val();
    $("input:checkbox:checked").each(function() {
      var selectedToppings = $(this).val();
      console.log(chosenToppings);
    })
  })  
})