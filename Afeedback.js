function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    var text;
    if(name.length < 5){
      text = "Vui lòng nhập tên";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 3){
      text = "Vui lòng nhập chủ đề";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Số điện thoại không đúng";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Email không hợp lệ";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Vui lòng nhập hơn 10 ký tự";
      error_message.innerHTML = text;
      return false;
    }
    alert("Gửi thành công");
    return true;
  }