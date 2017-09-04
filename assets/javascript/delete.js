(function() {

  $("#successAlert").hide();

  $(function() {

    function getDogs (){
      $.get("http://localhost:1337/user/", function(dog) {
        $("#dogList").empty()
        for (let i = 0; i < dog.length; i++) {
          $("#dogList").append(`
            <tr>
              <td>${dog[i].name}</td>
              <td>${dog[i].breed}</td>
              <td>${dog[i].sex}</td>
              <td>${dog[i].age}</td>
              <td>${dog[i].height_in_inches}</td>
              <td>${dog[i].weight_in_pounds}</td>
              <td><button data-dogid="${dog[i].id}" class="btn btn-danger deleteButton">Delete Dog</button></td>
            </tr>
          `)
        }
      })
    }

      getDogs();

      $("#dogList").on("click", ".deleteButton", function() {

        let dogId = $(this).data("dogid")

        $.ajax({
          url: "http://localhost:1337/user/" + dogId,
          method: "DELETE",
          success: function(data){

            getDogs();

            $("#successAlert").slideDown();

            setTimeout(function(){
              $("#successAlert").slideUp();
            }, 3000)
          }
        })
      })

    })

})();

//when on the deletion step, remember:
//$("#dogList").empty()
//or else it will just append more stuff
