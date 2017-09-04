(function(){

  $(function(){

    let currentDog;

    $("#addDogs :input").prop("disabled", true);

    function getDogs(){
      $.get("http://localhost:1337/user/", function(dog){

          $("#dogList").empty()

          for (var i = 0; i < dog.length; i++) {
            $("#dogList").append(`
              <tr>
              <td>${dog[i].name}</td>
              <td>${dog[i].breed}</td>
              <td>${dog[i].sex}</td>
              <td>${dog[i].age}</td>
              <td>${dog[i].height_in_inches}</td>
              <td>${dog[i].weight_in_pounds}</td>
              <td><button data-dogid="${dog[i].id}" class="btn btn-primary updateDogButton">Update Dog</button></td>
              </tr>
            `)
          }
      })
    }

    getDogs();

    $("#dogList").on("click", ".updateDogButton", function() {

      currentDog = $(this).data("dogid");

      $.get("http://localhost:1337/user/" + currentDog, function(dog) {

        $.each(dog, function(key, val) {

          let el = $('[name="'+key+'"]');
          let type = el.attr('type');

          switch(type) {
            case 'checkbox':
              el.attr('checked', 'checked');
              break;
            case 'radio':
              el.filter('[value="'+val+'"]').attr('checked', 'checked');
              break;
            default:
              el.val(val);
          }
        });
      })

      $("#addDogs :input").prop("disabled", false);
    })

    $("#updateDogButton").click(function(e){

      e.preventDefault()

      $.ajax({
        url: "http://localhost:1337/user/" + currentDog,
        data: $("addDogs").serialize(),
        method: "PUT",
        success: function(data) {

          getDogs();

          $("#addDogs :input").prop("disabled", true);

          $("#addDogs")[0].reset()

        }
      })
    })

  })

})();
