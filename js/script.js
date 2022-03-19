
$(function () {
    $('.summary').hide();
    $('.cdata-overlay').hide();
//Getting inputs
$("#checkout").click(function () {
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);

        //Function order
        let order = (flavour, size, crust, topping, number, total) => {
            return {flavour, size, crust, topping, number, total};
        };

        //checking the price
        let price, totalPrice;
        switch (flavour) {
            case flavour = "vegfeast":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "chickentikka":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "cheeseburger":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "bbq":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "spicyboerewors":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "chickenhawaiian":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "mushroom":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
            case flavour = "regina":
                switch (size) {
                    case size = "regular":
                        price = 350;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "medium":
                        price = 650;
                                  
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                    case size = "large":
                        price = 1250;
                        if (crust === "thin") {
                            totalPrice = (price * number) + 150;
                        } else if (crust === "thick") {
                            totalPrice = (price * number) + 200;
                        } else if (crust === "flatbread") {
                            totalPrice = (price * number) + 230;
                        } else {
                            totalPrice = (price * number) + 330;
                        }
                        break;
                };
                break;
        }
        switch (topping) {
            case topping = "zucchini":
                totalPrice = totalPrice + 100;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 100;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 100;
                break;
            case topping = "artichokes":
                totalPrice = totalPrice + 150;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 150;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 150;
                break;
            case topping = "cauliflower":
                totalPrice = totalPrice + 150;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 150;
                break;
            case topping = "beef":
                totalPrice = totalPrice + 200;
                break;
            case topping = "chicken":
                totalPrice = totalPrice + 200;
                break;

        }

        //Execute order function
        let newOrder = order(flavour, size, crust, topping, number, totalPrice);
        console.log(newOrder); // test func

        //create a new object
        // let myOrder = JSON.stringify(JSON.parse(newOrder));

        //Write to the order
        $('.summary').slideDown(2000);
        $('.cdata-overlay').slideUp();
        $('#list').slideDown();
        $('.deliver').show(1000);
        $('.delivernot').show(1000);

        $('#list').text(" ");
        $("#list").append("<br>" + "Flavour :   " + newOrder.f + "<br>" + "Size :   "
            + newOrder.s + "<br>" + "Crust :     "
            + newOrder.c + "<br>" + "Toppings :     "
            + newOrder.t + "<br>" + " Number of pizzas :    "
            + newOrder.n + "<br>" + "Total Price :  "
            + newOrder.total + "<br><br>").css('font-family', 'system-ui').css('font-size', '24px');
    });

    //Deliver
    $(".deliver").click(function () {
        $('.summary').slideUp();
        $('#list').slideUp();
        $('.summary').text("Provide location details").slideDown();
        $('.deliver').hide(1000);
        $('.delivernot').hide(1000);
        $('.cdata-overlay').slideDown();
    });


    //Pick Up
    $(".delivernot").click(function () {

    });

   //Scrollify
   $(function () {
    $.scrollify.move('#sum-order');
});
});
