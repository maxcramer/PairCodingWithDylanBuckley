var data = [
  {
    'name': 'Boot1',
    'img': 'Images/Boot1.jpg',
    'title': 'Boot Title 1',
    'button': 'Discover 1',
    'description': 'Description 1'
  },
  {
    'name': 'Boot2',
    'img': 'Images/Boot2.jpg',
    'title': 'Boot Title 2',
    'button': 'Discover 2',
    'description': 'Description 2'
  },
  {
    'name': 'Boot3',
    'img': 'Images/Boot3.jpg',
    'title': 'Boot Title 3',
    'button': 'Discover 3',
    'description': 'Description 3'
  }
];

var bootData = [
  {
    'title': 'Boot Title 1',
    'button': 'Discover 1',
    'description': 'Description 1',
    'img': 'Images/Boot1.jpg'
  },
  {
    'title': 'Boot Title 2',
    'button': 'Discover 2',
    'description': 'Description 2',
    'img': 'Images/Boot2.jpg'
  },
  {
    'title': 'Boot Title 3',
    'button': 'Discover 3',
    'description': 'Description 3',
    'img': 'Images/Boot3.jpg'
  }
];

var image__places = [
  '#second__image',
  '#third__image',
  '#fourth__image'
];

var boot__desc = [
  '#first_description',
  '#second_description',
  '#thrid_description'
];

$( document ).ready(function () {
  var onLoadImage = '<img src="Images/Boot1.jpg"/>';
  $('#main__image').html(onLoadImage);
});

$( document ).ready(function () {
  var onLoadDescription = '<h2>Boot Title 1</h2><button>Discover 1</button><h5>Description 1</h5>';
  $('#info').html(onLoadDescription);
});


// TRYING TO DISPLAY DESCRIPTIONS
// $( document ).ready(function () {
//
//   for(var i =0; i < data.length; i++){
//     var title = '<h2>'+bootData[0].title+'</h2>';
//     var button = '<button>'+bootData[0].button+'</button>';
//     var description = '<h5>'+bootData[0].description+'</h5>';
//
//     $(boot__desc[i]).html(title);
//     $(boot__desc[i]).html(button);
//     $(boot__desc[i]).html(description);
//
//     $(boot__desc[i]).on('click', function(e){
//       var imageIClickedOn = e.target.outerHTML;
//       $('#info').html(imageIClickedOn);
//     });
//   }
// });
//
$(document).ready(function () {

  for(var i =0; i < bootData.length; i++){
    var title = '<h2>'+bootData[0].title+'</h2>';
    var button = '<button>'+bootData[0].button+'</button>';
    var description = '<h5>'+bootData[0].description+'</h5>';

    $(boot__desc[i]).html(title);
    $(boot__desc[i]).html(button);
    $(boot__desc[i]).html(description);

    $(boot__desc[i]).on('click', function(e){
      var imageIClickedOn = e.target.outerHTML;
      $('#info').html(imageIClickedOn);
    });
  }
});

$( document ).ready(function () {
  var image = '<img src="'+data[0].img+'" />';
  // var secondImage = '<img src ="Images/Boot1.jpg"/>';
  // var thirdImage = '<img src ="Images/Boot2.jpg"/>';
  // var fourthImage = '<img src ="Images/Boot3.jpg"/>';
  // $("#main__image").html(image);
  // $("#second__image").html(secondImage);
  // $("#third__image").html(thirdImage);
  // $("#fourth__image").html(fourthImage);
  //$('#main__image').html(image);
  for(var i = 0; i < data.length; i++){
    var image = '<img src="'+data[i].img+'" alt=""/>';
    $(image__places[i]).html(image);

    $(image__places[i]).on('click', function(e){
      var imageIClickedOn = e.target.outerHTML;
      $('#main__image').html(imageIClickedOn);

    //  document.getElementById("main__image").innerHTML = imageIClickedOn
    });
  }

});


// var imageMain = $('#second__image').first();
// var createImage = $('<img>');
//
// $( document ).ready(function imageOnLoad() {
//   imageMain.attr('src', $(this).attr('src'));
//   createImage.attr('src', '#second__image');
// });
