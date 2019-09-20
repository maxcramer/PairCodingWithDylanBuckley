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


var image__places = [
  '#second__image',
  '#third__image',
  '#fourth__image'
];


$( document ).ready(function () {

  var onLoadImage = '<img src="Images/Boot1.jpg"/>';
  $('#main__image').html(onLoadImage);

  var onLoadDescription = '<h2>Boot Title 1</h2><button>Discover 1</button><h5>Description 1</h5>';
  $('#info').html(onLoadDescription);

  for(var i = 0; i < data.length; i++){
    // for main image
    var image = '<img src="'+data[i].img+'" alt=""/>';
    $(image__places[i]).html(image);

    //for description
    var title = '<h2>'+data[0].title+'</h2>';
    $(image__places[i]).html(title);
    var button = '<button>'+data[0].button+'</button>';
    $(image__places[i]).html(button);
    var description = '<h5>'+data[0].description+'</h5>';
    $(image__places[i]).html(description);

    //click even to main image
    $(image__places[i]).on('click', function(e){
      var imageIClickedOn = e.target.outerHTML;
      $('#main__image').html(imageIClickedOn);
      $('#info').html(imageIClickedOn);

    //  document.getElementById("main__image").innerHTML = imageIClickedOn
    });

    // click event to des
    // $(image__places[i]).on('click', function(e){
    //   var imageIClickedOn = e.target.outerHTML;

    });
  }

});

// $( document ).ready(function () {
//   var onLoadImage = '<img src="Images/Boot1.jpg"/>';
//   $('#main__image').html(onLoadImage);
// });
//
// $( document ).ready(function () {
//   var onLoadDescription = '<h2>Boot Title 1</h2><button>Discover 1</button><h5>Description 1</h5>';
//   $('#info').html(onLoadDescription);
// });


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
// $(document).ready(function () {
//   var onLoadImage = '<img src="Images/Boot1.jpg"/>';
//   $('#main__image').html(onLoadImage);
//
//   var onLoadDescription = '<h2>Boot Title 1</h2><button>Discover 1</button><h5>Description 1</h5>';
//   $('#info').html(onLoadDescription);
//
//   for(var i =0; i < bootData.length; i++){
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


// var imageMain = $('#second__image').first();
// var createImage = $('<img>');
//
// $( document ).ready(function imageOnLoad() {
//   imageMain.attr('src', $(this).attr('src'));
//   createImage.attr('src', '#second__image');
// });
