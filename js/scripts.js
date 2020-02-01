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
  if (this.topping.includes("m1", "m2", "m3", "m4", "m5")) {
    cost += 2;
  }
  if (this.topping.includes("m1", "m2", "m3", "m4", "m5")) {
    cost += 2;
  }
}



////////// Front-End //////////


















 
  //   $("form#One").submit(function(event) {
//     event.preventDefault();
//     $("input:checkbox:checked").each(function() {
//       var selectedToppings = $(this).val();
//       usersPizza.chosenToppings(selectedToppings);
//     })
//     var selectedSize = $("select#size").val();
//     console.log(selectedSize);
//     var usersPizza = new Pizza(size, topping)
//     usersPizza.chosenSize(selectedSize);
//     console.log(usersPizza);
//   })
// })
