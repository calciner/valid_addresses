



chrome.commands.onCommand.addListener((command) => {
    if (command === "valid_address") {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          function: check_address
        });
      });
    }
  });
  

  function check_address() {
    
    const city = document.querySelector("#city");
    const state = document.querySelector("#state");
    const zip = document.querySelector("#zip");
    const country = document.querySelector("#country");
    const submit = document.querySelector("#submit");

    const focusedElement = document.activeElement;//window.getSelection();

    //get n th parent element
    function getNParents(node,n) {
      let parent = node;
      for (var i = 0; i < n; i++) {
        parent = parent.parentNode;
      }
      return parent;
    }
    console.log(focusedElement);
    const address = focusedElement.querySelector(".slds-textarea.aws-textarea.ng-pristine.ng-valid.ng-not-empty.ng-valid-required.ng-touched")
    console.log("address", address);
    let nParents = getNParents(focusedElement,3);
    focusedElement.innerHTML = "haha";
    console.log("yes");

    console.log("nParents",nParents);
  }