(function(){

  $(function(){

    $("#addDogButton").click(function(e) {

      //e.preventDefault()

      $.post("http://localhost:1337/user/", $("#addDogs").serialize(), function(data){
        alert("Oh wudda pupper!")

      })
    })
  })
})();
