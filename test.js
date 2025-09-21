window.addEventListener("load", () => {
    const test = document.getElementById("song");

    if (test && test.paused) {
        let play = document.getElementById("play");

        play.onclick = () => {
            test.play()
                .then(() => {
                    play.classList.remove("show");
                })
                .catch((error) => {
                    play.classList.toggle("show", true);
                    console.error("Playback failed:", error);
                });
        };

        play.classList.add("show");
    }
});
