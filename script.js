const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// prompt user to select the media stream
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    // play when loaded
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (err) {
    console.log(err);
  }
}
// trigger pip

button.addEventListener("click", async () => {
  // Disable the button
  button.disabled = true;
  // start PIP
  await videoElement.requestPictureInPicture();
  //reset button
  button.disabled = false;
});
// Onload
selectMediaStream();
