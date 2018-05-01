window.onload = function(){ 

  function generateEmails() {
    var firstname = document.getElementById('fname').value.toLowerCase().replace(/ /g,'');
    var lastname = document.getElementById('lname').value.toLowerCase().replace(/ /g,'');
    var email = document.getElementById('cname').value.toLowerCase().replace(/ /g,'');
    if (!(firstname.length) || !(lastname.length) || !(email.length)) {
      console.log("Incorrect Parameters");
    } else {
      console.log(firstname + " " + lastname + " " + email);
      var result = document.getElementById('emails');
      result.textContent = "";
      result.textContent += (firstname + '@' + email + ',\n');
      result.textContent += (firstname + '.' + lastname + '@' + email + ',\n');
      result.textContent += (firstname.charAt(0) + lastname + '@' + email+ ',\n');
      result.textContent += (firstname + lastname + '@' + email+ ',\n');
      result.textContent += (firstname + '.' + lastname.charAt(0) + '@' + email+ '\n');
      result.textContent += (firstname.charAt(0) + '.' + lastname.charAt(0) + '@' + email+ ',\n');
      result.textContent += (lastname + '@' + email+ ',\n');
      result.textContent += (firstname.charAt(0) + '.' + lastname + '@' + email+ ',\n');
      result.textContent += (firstname + lastname.charAt(0) + '@' + email+ ',\n');
      result.textContent += (firstname + '_' + lastname + '@' + email+ ',\n');
      
      // copyDiv to Clipboard
      var range = document.getSelection().getRangeAt(0);
      range.selectNode(document.getElementById('emails'));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      console.log("Text properly copied");
    }
  }
  document.getElementById('generate-emails').onclick = generateEmails;

  function clearScreen() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("cname").value = "";
    var result = document.getElementById("reults");
    result.style.display = "none";
  }
  document.getElementById('clear-screen').onclick = clearScreen;
};