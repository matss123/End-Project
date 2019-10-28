var requiredMessage = "Obligāti aizpildi šo lauku!";

$("#registration_form").validate({
rules: {
   name: "required",
   surname: "required",
   password: "required",
   retype_password: {
      equalTo: "#password"
    },
    email: {       required: true,
      email: true
    }
  },
   messages: {
   name: requiredMessage,
   surname: requiredMessage,
   password: requiredMessage,
   retype_password: "Šim laukam jāsakrīt ar 'Password password' lauku!",
  email: requiredMessage
  }
//    submitHandler:function(){
//    var data =$("#registration_form").serializeArray();
//    var dataJSON={};
//   $.each(data,function(_,field){
//   dataJSON[field.name]=field.value;
//       });
   
}); 
