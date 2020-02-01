////////// Back-End //////////
// Pizza Constr. //
function Pizza(size, topping) {
  this.size = size;
  this.topping = topping;
}

Pizza.prototype.chosenToppings = function(topping) {
  this.topping.push(topping);
}

Pizza.prototype.cost = function() {
  var cost = 0;
  if(this.size === "1") {
    cost = cost + 5;
  } else if(this.size === "2") {
    cost = cost + 8;
  } else if(this.size === "3") {
    cost = cost + 11;
  };

  if (this.topping.includes("m1", "m2", "m3", "m4", "m5")) {
    cost += 2;
  };
  if (this.topping.includes("v1", "v2", "v3", "v4", "v5", "v6")) {
    cost += 2;
  }
  if (this.topping.includes("c1", "c2", "c3", "c4", "c5")) {
    cost += 2;
  };
}


////////// Front-End //////////

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var usersToppings = []
    var usersSize = $("select:[name=size]:checked").val();
    var usersPizza = new Pizza(usersSize, usersToppings);
    $("input:checkbox[name=topping]:checked").each(function() {
      var selectedToppings = $(this).val();
      usersPizza.cost(selectedToppings);
    });
    var totalCost = usersPizza.cost();
    $("#output").text(totalCost);
  })
})