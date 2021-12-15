function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
      tabcontent[i].scrollHeight=500
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";

    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    topfunction();
    //F5 quay lại đầu trang
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
  }


}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click(
    topfunction())

  //đến đầu trang khi click
  function topfunction(){
    document.documentElement.scrollTop=0;
  }


