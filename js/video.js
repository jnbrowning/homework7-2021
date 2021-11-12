var video = document.querySelector("#player1");
var vidVolume = document.querySelector("#volume");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	console.log(video.volume);
	vidVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate * 0.95;
	console.log("Video speed is now: " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Video speed is " + video.playbackRate);
	video.playbackRate = video.playbackRate / 0.95;
	console.log("Video speed is now: " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Current time is " + video.currentTime);
	var newTime = video.currentTime + 15;
	if (newTime > video.duration) {
		video.currentTime = 0;
	}
	else {
		video.currentTime = newTime;
	}
	console.log("Current time is now: " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute status is " + video.muted);
	if (video.muted == true) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
	console.log(video.volume);
	console.log("Mute status is now: " + video.muted);
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log(this.value);
	video.volume = this.value / 100;
	vidVolume.innerHTML = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "video oldSchool";
});

document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
});
