$(document).ready(function() {
  $(".check").click(function(e) {
    var item_id = $(this).parents('li').attr('id');
    done = $(this).hasClass('done') ? 1 : 0
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "/items/" + item_id,
      data: { _method:'PUT', item: { done: done } },
      }).done(function(data) {
      console.log(done);
        if(done) {
          $("#" + item_id + " a.done").text('Not done')
          $("#" + item_id + " .item").wrapInner("<del>");
        }
        else {
          $("#" + item_id + " a.done").text('Done')
          $("#" + item_id + " .item").html(function(i, h) {
            return h.replace("<del>", "");
          });
        }
    });
    e.preventDefault();
  });
});