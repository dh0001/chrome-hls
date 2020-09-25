enable_button = document.getElementById('btnEnable')
enable_button.addEventListener('click', updateEnabled);
enable_zoom_button = document.getElementById('btnZoomEnable')
enable_zoom_button.addEventListener('click', updateZoomEnabled);

chrome.runtime.sendMessage("getState", (state) => {
   state[0] ? enable_button.innerHTML = "Enabled" : enable_button.innerHTML = "Disabled";
   state[1] ? enable_zoom_button.innerHTML = "Zoom Enabled" : enable_zoom_button.innerHTML = "Zoom Disabled";
});


function updateEnabled() {
  if (enable_button.innerHTML == "Enabled") {
  	enable_button.innerHTML = "Disabled"
  } else {
  	enable_button.innerHTML = "Enabled"
  }
  chrome.runtime.sendMessage(enable_button.innerHTML);
}


function updateZoomEnabled() {
  if (enable_zoom_button.innerHTML == "Zoom Enabled") {
  	enable_zoom_button.innerHTML = "Zoom Disabled"
  } else {
  	enable_zoom_button.innerHTML = "Zoom Enabled"
  }
  chrome.runtime.sendMessage(enable_zoom_button.innerHTML);
}

// function play_videos(){
//   chrome.tabs.executeScript(null, {
//       file: 'hls.'+current_version+'.min.js'
//   }, function() {
//       chrome.tabs.executeScript(null, {file: 'embedded_videos.js'});
//       window.close();
//   });
// }