//   $("#sendbutton").click(() => {
//     imagebox = $("#imagebox");
//     link = $("#link");
//     input = $("#imageinput")[0];
//     if (input.files && input.files[0]) {
//       let formData = new FormData();
//       formData.append("video", input.files[0]);
//       //var mydata=$(this).serialize();
//       //console.log('ajax',mydata)
//       $.ajax({
//         url: "/detect", // fix this to your liking
//         type: "POST",
//         data: formData,
        
//         //type: "JSON",
//         //contentType: 'application/json; charset=utf-8',
//         //data2: JSON.stringify(),
        
//         cache: false,
//         processData: false,
//         contentType: false,
        
//           error: function () {
//             // console.log("upload error", data);
//             // console.log(data.getAllResponseHeaders());
//           },
//           success: function (data) {
            
//           //console.log(data,"aniket");
          
//           var xyz = jQuery.parseJSON(data);
//           // console.log("lkjhgfd")
//           // console.log("snehal",xyz)
//           // bytestring = data["status"];
//           // image = bytestring.split("'")[1];
//           $("#link").css("visibility", "visible");
//           $("#download").attr("href", "static/" + data);
//           //console.log(data,"success=>>>");
//           //console.log(data2);
//         },
//       });
//     }
//   });


// function readUrl(input) {
//   imagebox = $("#imagebox");
//   // console.log(imagebox);
//   // console.log("evoked readUrl");
//   if (input.files && input.files[0]) {
//     let reader = new FileReader();
//     reader.onload = function (e) {
//       // console.log(e.target);

//       imagebox.attr("src", e.target.result);
//       //   imagebox.height(500);
//       //   imagebox.width(800);
//     };
//     reader.readAsDataURL(input.files[0]);
//   }
// }
