window.onload = function(){ 
  // Puts all emails inside a div, copies it to user's clipboard, opens a new
  // email by clicking compose
  // TODO: Put emails in to field
  function generateEmails() {
    var firstname = document.getElementById('fname').value.toLowerCase().replace(/ /g,'');
    var lastname = document.getElementById('lname').value.toLowerCase().replace(/ /g,'');
    var email = document.getElementById('cname').value.toLowerCase().replace(/ /g,'');
    if (firstname.length != 0 && lastname.length !=0 && email.length != 0) {
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
      
      var range = document.getSelection().getRangeAt(0);
      range.selectNode(document.getElementById('emails'));
      window.getSelection().addRange(range);
      document.execCommand("copy");
      
      injectTheScript();
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
    if (keyCode == '13'){
      generateEmails();
      return false;
    }
  }
  
  // Inject the compose_script into the main page in the hopes of it actually
  // hitting the compose button...
  function injectTheScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
        chrome.tabs.executeScript(tabs[0].id, {file: "inject_emails.js"});
    });
  }
};