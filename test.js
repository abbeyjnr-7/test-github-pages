window.addEventListener("load", () => {
    const song = document.getElementById("song");

    if (song && song.paused) {
        let play = document.getElementById("play");

        play.onclick = () => {
            song.play()
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
