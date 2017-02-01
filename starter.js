'use strict';
$(document).ready(() => {

  const $movieTitle = $('input');
  const $releaseDate = $('.release');
  const $actors = $('.actors');
  const $awards = $('.awards');
  const $rating = $('.rating');

// $(function() {

  const getData = function(){
    // let $movieList = $('<ul>');
    $.ajax({
      url: 'http://www.omdbapi.com/',
      method: 'GET',
      dataType: 'json',
      data: {
        t: $movieTitle.val(),
      }
    })
    .done(data => {
      console.log('Data: ', data);
      // const $movieList = $('<ul>');
      $('h5').text(data.Title);
      $('p').text('Plot: ' + data.Plot);
      $releaseDate.text('Released: ' + data.Year);
      $actors.text('Actors: ' + data.Actors);
      $awards.text('Awards: ' + data.Awards);
      $rating.text('Imdb rating: ' + data.imdbID);
      $('img').attr("src", data.Poster);
    })
  }
  $('button').on("click", getData);


$(document).ready(function(){
    $(".row").hide(0).delay(80).fadeIn(2000)
});

  // const addAJAXFunction = function(){
  // };

  // const appendMovie = function(name,imagePath){

  // };

  // const handleResponse = function(movieObject){

  // };

});// end of event listener
