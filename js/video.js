var video;
window.addEventListener("load", function() {
    console.log("Good job opening the window")
    video=this.document.querySelector("#player1")
    video.autoplay=false;
    video.loop=false;
});


	// Play
	document.querySelector("#play").addEventListener("click", function () {
		video.play();
		document.querySelector("#volume").innerHTML = Math.round(video.volume * 100) + "%";
		console.log("Play clicked. Volume:", video.volume);
	});

	// Pause
	document.querySelector("#pause").addEventListener("click", function () {
		video.pause();
		console.log("Paused");
	});

	// Slower
	document.querySelector("#slower").addEventListener("click", function () {
		video.playbackRate *= 0.9;
		console.log("Slowed down to", video.playbackRate);
	});

	// Faster
	document.querySelector("#faster").addEventListener("click", function () {
		video.playbackRate /= 0.9;
		console.log("Sped up to", video.playbackRate);
	});

	// Skip Ahead
	document.querySelector("#skip").addEventListener("click", function () {
		if (video.currentTime + 10 > video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current Time:", video.currentTime);
	});

	// Mute
	document.querySelector("#mute").addEventListener("click", function () {
		video.muted = !video.muted;
		this.innerHTML = video.muted ? "Unmute" : "Mute";
		console.log("Muted:", video.muted);
	});

	// Volume Slider
	document.querySelector("#slider").addEventListener("input", function () {
		video.volume = this.value / 100;
		document.querySelector("#volume").innerHTML = this.value + "%";
		console.log("Volume changed to", video.volume);
	});

	// Vintage
	document.querySelector("#vintage").addEventListener("click", function () {
		video.classList.add("oldSchool");
		console.log("OldSchool style applied");
	});

	// Original
	document.querySelector("#orig").addEventListener("click", function () {
		video.classList.remove("oldSchool");
		console.log("OldSchool style removed");
	});
