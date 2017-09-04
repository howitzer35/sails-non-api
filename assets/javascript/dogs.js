(function(){

  $(function() {

    let dogList = $("#dogList");
    let dogURL = "http://localhost:1337/user/";

      $.get(dogURL, function(data){

        let dogs = data;
        dogList.html("");
        $.each(dogs, function(index, dog){
          dogList.append(`
            <tr>
              <td>${dog.name}</td>
              <td>${dog.breed}</td>
              <td>${dog.sex}</td>
              <td>${dog.age}</td>
              <td>${dog.height_in_inches}</td>
              <td>${dog.weight_in_pounds}</td>
            </tr>
            `)
        })
      })
    })
})();
