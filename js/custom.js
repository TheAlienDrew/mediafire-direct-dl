// Constants

let validMediafireFileDL = /https?:\/\/(www\.)?mediafire\.com\/file\/[a-zA-Z0-9]*\/file/gm;

// Functions

let validationChecker = function() {
  let urlText = inputMediafireURL.value || '';
    let validatedURL = validMediafireFileDL.test(urlText);

    // Test if the new value is a valid link, to enable the download button
    if (urlText) {
      // check if we have valid url
      if (validatedURL) {
        if (aMediafireDownloadBtn.classList.contains('disable')) aMediafireDownloadBtn.classList.remove('disable');
        if (!pInvalidURL.classList.contains('hide')) pInvalidURL.classList.add('hide');
      } else {
        if (!aMediafireDownloadBtn.classList.contains('disable')) aMediafireDownloadBtn.classList.add('disable');
        if (pInvalidURL.classList.contains('hide')) pInvalidURL.classList.remove('hide');
      }
    } else {
      // need to reset when no text is entered
      if (!aMediafireDownloadBtn.classList.contains('disable')) aMediafireDownloadBtn.classList.add('disable');
      if (!pInvalidURL.classList.contains('hide')) pInvalidURL.classList.add('hide');
    }
  });
};

// Wait for page to load
window.addEventListener('load', function () {
  // Elements

  let inputMediafireURL = document.querySelector('#mediafire-url');
  let aMediafireDownloadBtn = document.querySelector('#mediafire-dl-btn');
  let pInvalidURL = document.querySelector('#invalid-url');
    
  // Main

  // detect key presses
  document.querySelector('input').addEventListener('keyup', validationChecker);
  // detect right-click pastes
  document.querySelector('input').addEventListener('onpaste', validationChecker);