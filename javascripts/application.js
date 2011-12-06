$(document).ready(function() {

  // Twitter timeline JSON wrapper
  $("#twitter-json-wrapper").tweet({
    username: "danguita",
    join_text: "-",
    avatar_size: false,
    count: 8,
    loading_text: false
  });

  // Delicious bookmarks JSON wrapper
  $('#delicious-json-wrapper').delicious("danguita", {
    type: "posts",
    favicon: false
  });

  // Feed wrapper
  $('#feed-wrapper').rssfeed("http://feeds.feedburner.com/DavidAnguita", {
    limit: 3
  });

});
