console.log('app.js!!!');

// setInterval(function(){
//   navigator.geolocation.getCurrentPosition(function(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     $.get('https://bumperz.herokuapp.com/accidents/warn_level', {latitude: latitude, longitude: longitude}).done(function(res) {
//       console.log(res);
//       if (res.warning == "yellow") {
//         notie.alert(2, 'Accident Warning: You are in an accident ' + res.warning + ' zone.', 2);
//       } else if (res.warning == "orange") {
//         notie.alert(2, 'Accident Warning: You are in an accident ' + res.warning + ' zone.', 2);
//       } else if (res.wanring == "red") {
//         notie.alert(3, 'Accident Warning: You are in an accident ' + res.warning + ' zone.', 2);
//       }
//     });
//   });
// }, 5000);

$('#bggif').click(function() {

  var audio = document.getElementById('micro');
  audio.play();

  setTimeout(function() {
    responsiveVoice.speak("You are now entering into a medium accident zone.")
    notie.alert(2, 'Accident Warning: You are in an accident orange zone.', 4);
  }, 5000);

  setTimeout(function() {
    responsiveVoice.speak("You are now entering into a high accident zone.")
    notie.alert(3, 'Accident Warning: You are in an accident red zone.', 4);
  }, 10000);
  
});
