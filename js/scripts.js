////////// Back-End //////////
function Pizza(size, toppings) {
  this.size = size,
  this.toppings = toppings,
  this.cost = 0
}

Pizza.prototype.chosenToppings = function(topping) {
  this.topping.push(topping);
}

Pizza.prototype.addCost = function() {
  if(this.size === "1") {
    this.cost += 5;
  } else if(this.size === "2") {
    this.cost += 8;
  } else if(this.size === "3") {
    this.cost += 11;
  }

  if (this.topping === "m1") {
    cost += 2;
  };
  if (this.topping === "v1") {
    cost += 2;
  }
  if (this.topping === "c1") {
    cost += 2;
  }
  return this.cost;
}

Pizza.prototype.test = function() {
  console.log("test");
}


////////// Front-End //////////
$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var usersToppings = [];
    var usersSize = $("[name=size]").val();
    var usersPizza = new Pizza(usersSize, usersToppings);
    $("input:checkbox[name=topping]:checked").each(function() {
      var selectedToppings = $(this).val();
      usersPizza.addCost(selectedToppings);
    });
    var totalCost = usersPizza.addCost();
    $("#output").text(totalCost);
  });
});