$(document).ready(() => {
  // // NavBar
  // window.onscroll = function () { scrollFunction() };
  // function scrollFunction() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("navBar").style.height = "2vh";
  //   }
  //   else {
  //     document.getElementById("navBar").style.height = "144px";
  //   };

  // };
  // function scrollFunction() {
  //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  //     document.getElementById("navI").style.display = "none";
  //   }
  //   else {
  //     document.getElementById("navI").style.display = "block";
  //   };
  // };

  // Sidebar Menu 
  // Models
  $("#SamsungD").click(() => {
    $(".SamsungP").slideToggle("slow")
  });
  $("#iPhoneD").click(() => {
    $(".iPhoneP").slideToggle("slow")
  });
  $("#HuaweiD").click(() => {
    $(".HuaweiP ").slideToggle("slow")
  });
  $("#VivoD").click(() => {
    $(".VivoP ").slideToggle("slow")
  });
  $("#InfinixD").click(() => {
    $(".InfinixP ").slideToggle("slow")
  });

  // Features
  $("#CameraD").click(() => {
    $(".CameraP").slideToggle("slow");
  });
  $("#RamRomD").click(() => {
    $(".RamRomP").slideToggle("slow");
  });
  $("#BatteryD").click(() => {
    $(".BatteryP").slideToggle("slow");
  });
  $("#InternalMD").click(() => {
    $(".InternalMP").slideToggle("slow");
  });

  // About Us 
  $("#Company").click(() => {
    $("#Company_P").slideToggle("slow");
  });
  $("#Contact").click(() => {
    $("#Contact_P").slideToggle("slow");
  });
});