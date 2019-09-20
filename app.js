var data = [
  {
    'name': 'Boot1',
    'img': 'Images/Boot1.jpg'
  },
  {
    'name': 'Boot2',
    'img': 'Images/Boot2.jpg'
  },
  {
    'name': 'Boot3',
    'img': 'Images/Boot3.jpg'
  }
];

var image__places = [
  '#second__image',
  '#third__image',
  '#fourth__image'
];

$( document ).ready(function() {
  var image = '<img src="'+data[0].img+'" />';
  // var secondImage = '<img src ="Images/Boot1.jpg"/>';
  // var thirdImage = '<img src ="Images/Boot2.jpg"/>';
  // var fourthImage = '<img src ="Images/Boot3.jpg"/>';
  // $("#main__image").html(image);
  // $("#second__image").html(secondImage);
  // $("#third__image").html(thirdImage);
  // $("#fourth__image").html(fourthImage);
  //
  //$('#main__image').html(image);


  for(var i = 0; i < data.length; i++){
    var image = '<img src="'+data[i].img+'" alt=""/>';
    $(image__places[i]).html(image);

    $(image__places[i]).on('click', function(e){
      var imageIClickedOn = e.target.outerHTML
      //$("#main__image").html(imageIClickedOn)\

      document.getElementById("main__image").innerHTML = imageIClickedOn
    })
  }

});
