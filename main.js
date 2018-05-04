window.onload = function() { 
  
  // Puts results into a result div if if button clicked. Result pushed into
  // a new composed draft with potential emails in to field
  function generateEmails() {
    var firstname = document.getElementById('fname').value.toLowerCase().replace(/ /g,'');
    var lastname = document.getElementById('lname').value.toLowerCase().replace(/ /g,'');
    var email = document.getElementById('cname').value.toLowerCase().replace(/ /g,'');
    if (firstname.length > 0 && lastname.length > 0 && email.length > 0) {
      console.log(firstname + " " + lastname + " " + email);
      var resultElement = document.getElementById('emails');
      resultString = ""
      resultString += (firstname + '@' + email + ',\n');
      resultString += (firstname + '.' + lastname + '@' + email + ',\n');
      resultString += (firstname.charAt(0) + lastname + '@' + email+ ',\n');
      resultString += (firstname + lastname + '@' + email+ ',\n');
      resultString += (firstname + '.' + lastname.charAt(0) + '@' + email+ '\n');
      resultString += (firstname.charAt(0) + '.' + lastname.charAt(0) + '@' + email+ ',\n');
      resultString += (lastname + '@' + email+ ',\n');
      resultString += (firstname.charAt(0) + '.' + lastname + '@' + email+ ',\n');
      resultString += (firstname + lastname.charAt(0) + '@' + email+ ',\n');
      resultString += (firstname + '_' + lastname + '@' + email+ ',\n');
      resultElement.textContent = resultString;
      clickCompose();
      window.close();
      chrome.runtime.sendMessage(resultString);

    }
  } document.getElementById('generate-emails').onclick = generateEmails;
  
  // Clears input fields and hides the results div
  function clearScreen() {
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("cname").value = "";
    var result = document.getElementById("reults");
    result.style.display = "none";
  } document.getElementById('clear-screen').onclick = clearScreen;
  
  // Lets your press enter on the company name and generate it without the click
  document.getElementById('cname').onkeypress = function(e) {
    var keyCode = e.keyCode || e.which;
    var firstname = document.getElementById('fname').value.toLowerCase().replace(/ /g,'');
    var lastname = document.getElementById('lname').value.toLowerCase().replace(/ /g,'');
    var email = document.getElementById('cname').value.toLowerCase().replace(/ /g,'');
    if (keyCode == '13' && firstname.length > 0 && lastname.length > 0 && email.length > 0) {
      generateEmails();
    }
  }
  
  // Injects the script for clicking the 'Compose' button in Gmail
  function clickCompose() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "press_compose.js"});
    });
  }
  
};


