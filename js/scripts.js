$(document).ready(function() {
  $('#add-city').click(function() {
    $("#new-city").append('<div class="new-cities">' +
                            '<div class="new-city">' +
                              '<div class="form-group">' +
                                '<label for="new-city">' +
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
                            '</div>' +
                          '</div>');
  });
});
