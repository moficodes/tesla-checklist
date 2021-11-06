function setupStorage() {
  if(!localStorage.getItem("checked")) {
    localStorage.setItem("checked", JSON.stringify([]));
  } else {
    let checked = JSON.parse(localStorage.getItem("checked"));
    for(var i = 0; i < checked.length; i++) {
      document.getElementById(checked[i]).checked = true;
    }
  }
}

function addEventListener() {
  var checkBoxes = document.querySelectorAll(".check");
  checkBoxes.forEach(element => {
    element.addEventListener('change', event => {
      var stored = localStorage.getItem("checked");
      let checked = stored ? JSON.parse(stored) : [];
      if(event.currentTarget.checked) {        
        checked.push(event.currentTarget.id);
      } else {
        const index = checked.indexOf(event.currentTarget.id);
        if (index > -1) {
          checked.splice(index, 1);
        }
      }
      localStorage.setItem("checked", JSON.stringify(checked));
    })
  });
}


setupStorage();
addEventListener()