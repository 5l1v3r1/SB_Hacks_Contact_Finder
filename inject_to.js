function inject_to() {
  var toField = document.activeElement;
  console.log(toField);
  toField.value = emailString;
}

inject_to();
