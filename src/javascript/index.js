jQuery(function() {
    var data = [
        {
          "name": "John",
          "surname": "White",  
        },
        {
            "name": "Stiven",
            "surname": "Black",  
          }
    ]
    $("#addNew").on("click", function(event) {
        $(".form").slideDown();
    })

    $("#action").on("click", function(event) {
        $(".table").slideDown();
    })

    $("#cancel").on("click", function(event) {
        $(".form").slideUp();
    })

    $("#Delete").on("click", function(event) {
        $(".table").slideUp();
    })

    $("#create").on("click", function(event) {
        $.post( "https://httpbin.org/post", { name: "John", surname: "2pm" } )
        .done(function( data ) {
            $(".form").slideUp();
        });

        $.get( "https://httpbin.org/get")
        .done(function(data) {
            $("#table").DataTable().draw();
        })
    })

    $("#refresh").on("click", function(event) {
        $("#table").DataTable().draw();

    })

    

});
 