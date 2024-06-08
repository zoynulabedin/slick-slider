$(document).ready(function () {
  $(".play-btn").on("click", function () {
    var videoSrc = $(this).data("video");
    var videoElement =
      '<video autoplay muted loop class="bg-video"><source src="' +
      videoSrc +
      '" type="video/mp4"></video>';
    $(".carousel-item.active .video-thumbnail").html(videoElement);
  });
});
