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

  // var onLoadImage = '<img src="Images/Boot1.jpg"/>';
  // $('#main__image').html(onLoadImage);
  //
  //var onLoadDescription = '<div class="prod__infoLoad"><h2>Boot Title 1</h2><button>Discover 1</button><h5>Description 1</h5></div>';
  // $('#info').html(onLoadDescription);
  //
  //data[0].onLoad;
  var onLoadImage = '<img src="'+data[0].img+'" />';
  $('#main__image').html(onLoadImage);
  var titleOnLoad = data[0].title;
  $('#info').html(titleOnLoad);
  var buttonOnLoad = data[0].button;
  $('#button').html(buttonOnLoad);
  var descriptionLoad = data[0].description;
  $('#description').html(descriptionLoad);

  // var onLoadTitle = '<img src="'+data[0].title+'" />';
  // $('#info').html(onLoadTitle);

  // var onLoadData = '<img data-title="'+data[0].title+'" data-description="'+data[0].description+'" data-button="'+data[0].button+'" src="'+data[0].img+'"/>';
  // $('#info').html(onLoadData);

  for(var i = 0; i < data.length; i++){
    // for main image
    var image = '<img data-title="'+data[i].title+'" data-description="'+data[i].description+'" data-button="'+data[i].button+'" src="'+data[i].img+'" alt=""/>';
    //var desc = '<h3  src="'+data[i].img+'"></h3';

    // var description = e.target.attributes.getNamedItem('data-description').value;
    //var description = '<img data-description="'+data[i].description+'" src="'+data[i].img+'" alt=""/>'
    $(image__places[i]).html(image);
    // $(image__places[i]).html(desc);


    //click even to main image
    $(image__places[i]).on('click', function onLoad(e){
      var imageIClickedOn = e.target.outerHTML;
      var info = e.target.attributes.getNamedItem('data-title').value;
      var description = e.target.attributes.getNamedItem('data-description').value;
      var button = e.target.attributes.getNamedItem('data-button').value;
      $('#main__image').html(imageIClickedOn);

      $('#info').html(info);
      $('#description').html(description);
      $('#button').html(button);

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
