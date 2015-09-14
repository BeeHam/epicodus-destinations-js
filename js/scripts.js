$(document).ready(function() {
  $('#add-city').click(function() {
    $("#new-cities").append(
                            '<div class="city">' +
                              '<div class="form-group">' +
                                '<label for="new-city">City</label>' +
                                '<input type="text" class="form-control new-city">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-landmark">Landmark</label>' +
                                '<input type="text" class="form-control new-landmark">' +
                              '</div>' +
                              '<div class="form-group">' +
                                '<label for="new-notes">Travel Notes</label>' +
                                '<input type="text" class="form-control new-notes">' +
                              '</div>' +
                            '</div>'
                          );
  });

  $('form#new-place').submit(function(event) {
    event.preventDefault();

    var countryInput = $('input#new-country').val();
    var dateInput = $('input#new-date').val();
    var partnerInput = $('input#new-partner').val();
    var newDestination = {country: countryInput, date: dateInput, partner: partnerInput, cities: []};

    $(".city").each(function() {
      var cityInput = $(this).find('input.new-city').val();
      var landmarkInput = $(this).find('input.new-landmark').val();
      var notesInput = $(this).find('input.new-notes').val();

      var newCity = { city: cityInput, landmark: landmarkInput, notes: notesInput};
      newDestination.cities.push(newCity);
debugger;
    });

    $('ul#countries').append("<li><span class='country'>" + newDestination.country + "</span></li>");

    $('.country').last().click(function() {
      $('#show-places').show();

      $('#show-contact h2').text(newDestination.country);
      $('.date').text(newDestination.date);
      $('.partner').text(newDestination.partner);
      newDestination.cities.forEach(function(city) {
        $('ul#cities').append("<li>" + city.city + ", " + city.landmark + ", " + city.notes + "</li>");
      });
    });

    $("input#new-country").val("");
    $("input#new-date").val("");
    $("input#new-partner").val("");
    $("input.new-city").val("");
    $("input.new-landmark").val("");
    $("input.new-notes").val("");


  });
});
