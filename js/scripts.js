////////////// Back-end //////////////
function Pizza() {
  this.cost = 0;
}

Pizza.prototype.sizePrice = function (size) {
  if (size === "1") {
    this.cost += 5;
  } else if(size === "2") {
    this.cost += 8;
  } else if (size === "3") {
    this.cost += 11;
  }
  return this.cost;
}

Pizza.prototype.toppingsPrice = function (toppings) {
  if (toppings === "t1") {
    this.cost += 2;
  }
  return this.cost;
}

Pizza.prototype.total = function () {
  var total = this.cost;
  return total;
}

////////////// Front-end //////////////

$(document).ready(function () { 
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var usersPizza = new Pizza();
    var usersSize = $("[name = size]").val();
    usersPizza.sizePrice(usersSize);
    $("input:checkbox[name=topping]:checked").each(function() {
      var usersToppings = $(this).val();
      usersPizza.toppingsPrice(usersToppings);
    });
    var usersTotal = usersPizza.total();
    $("#output").text(usersTotal);
  });
});

