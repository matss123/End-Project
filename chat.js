$("#submit_message").click(function(){
  var mesage=$("messsage").val();
  $("#message").val("");
  $(".container").append(
      '<div class="row message-row"></div><div class="col col-md-2 image-col" > <img src="pictures/chat.png" style="width:50px;height:50px;"></div><div class="col col-md-8 mesage-col"><p class="message-content"></p></div><div class="col col-md-2"></div>'
  );
});


