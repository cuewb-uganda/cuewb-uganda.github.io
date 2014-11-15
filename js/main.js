$(function() {

// image modals
$('#imageModal').on('show.bs.modal', function (event) {
  var img = $(event.relatedTarget);
  var imgurl = img.attr('src');
  var modal = $(this);
  modal.find('#modal-image').attr('src',imgurl);
});

});