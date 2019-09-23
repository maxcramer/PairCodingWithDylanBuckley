var data = [
  {
    'name': 'Boot1',
    'img': 'Images/Boot1.jpg',
    'title': 'Boot Title 1',
    'button': 'Discover 1',
    'description': 'Description 1 ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'name': 'Boot2',
    'img': 'Images/Boot2.jpg',
    'title': 'Boot Title 2',
    'button': 'Discover 2',
    'description': 'Description 2 ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    'name': 'Boot3',
    'img': 'Images/Boot3.jpg',
    'title': 'Boot Title 3',
    'button': 'Discover 3',
    'description': 'Description 3 ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
    var image = '<img data-title="'+data[i].title+'" src="'+data[i].img+'" alt=""/>';
    var desc = '<h3 data-description="'+data[i].description+'" src="'+data[i].img+'"></h3';

    // var description = e.target.attributes.getNamedItem('data-description').value;
    //var description = '<img data-description="'+data[i].description+'" src="'+data[i].img+'" alt=""/>'
    $(image__places[i]).html(image);
    $(image__places[i]).html(desc);


    //click even to main image
    $(image__places[i]).on('click', function(e){
      var imageIClickedOn = e.target.outerHTML;
      var info = e.target.attributes.getNamedItem('data-title').value;
      var description = e.target.attributes.getNamedItem('data-description').value;
      $('#main__image').html(imageIClickedOn);
      $('#info').html(info);
      $('#description').html(description);
    });

  }

});


//for description
// var title = '<h2>'+data[0].title+'</h2>';
// $(info[i]).html(title);
// var button = '<button>'+data[0].button+'</button>';
// $(info[i]).html(button);
// var description = '<h5>'+data[0].description+'</h5>';
// $(info[i]).html(description);

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
