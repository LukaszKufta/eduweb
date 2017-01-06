(function() {
    class VideoPlayer {
        constructor(videoContainer) {
            if (!document.createElement("video").canPlayType) {
                videoContainer.querySelector(".controls").style.display = "none";
                return;
            }
            this.video = videoContainer.querySelector("video");
            this.playPause = videoContainer.querySelector(".playPause");
            this.currentTime = videoContainer.querySelector(".currentTime");
            this.totalTime = videoContainer.querySelector(".totalTime");
            this.range = videoContainer.querySelector(".range");
            this.setDuration();
            this.assignEventListeners();
            this.video.onended = this.resetPlayer.bind(this);
        }
        assignEventListeners() {
            this.playPause.onclick = this.play.bind(this);
            this.range.onclick = this.setCurrentPlayback.bind(this);
            this.video.addEventListener("timeupdate", this.updatePlayingProgress.bind(this), false);
            this.video.addEventListener("timeupdate", this.updateCurrentTime.bind(this), false);
            this.video.ondurationchange = this.setDuration.bind(this);
        }
        play(e) {
            var that = e.target;
            if (this.video.paused) {
                this.video.play();
                that.classList.remove("glyphicon-play");
                that.classList.add("glyphicon-pause");
            } else {
                this.video.pause();
                that.classList.remove("glyphicon-pause");
                that.classList.add("glyphicon-play");
            }
        }
        updatePlayingProgress() {
            this.range.value = this.video.currentTime;
        }
        formatTime(seconds) {
            var seconds = Math.round(seconds),
                minutes = Math.floor(seconds / 60),
                remainingSeconds = seconds - minutes * 60;
            if (remainingSeconds == 0)
                remainingSeconds = "00";
            else if (remainingSeconds < 10)
                remainingSeconds = "0" + remainingSeconds;
            return minutes + ":" + remainingSeconds;
        }
        setDuration() {
            this.range.max = parseInt(this.video.duration);
            this.totalTime.innerHTML = this.formatTime(this.video.duration);
        }
        updateCurrentTime() {
            this.currentTime.innerHTML = this.formatTime(this.video.currentTime);
        }
        setCurrentPlayback(e) {
            var leftPos = this.range.getBoundingClientRect().left,
                clickPos = e.pageX,
                pixelsFromLeft = clickPos - leftPos,
                percent = (pixelsFromLeft / this.range.offsetWidth),
                newTime = this.video.duration * percent;
            this.video.currentTime = newTime;
            this.range.value = newTime;
        }
        resetPlayer() {
            this.playPause.classList.remove("glyphicon-pause");
            this.playPause.classList.add("glyphicon-play");
        }
    }
    var player1 = new VideoPlayer(document.querySelector("#videoPlayer"));
})();
