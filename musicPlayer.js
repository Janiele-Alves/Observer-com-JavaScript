document.addEventListener("DOMContentLoaded", function() {
    const playButton = document.querySelector('.play');
    const pauseIcon = document.querySelector('.pause-icon');
    const playIcon = document.querySelector('.play-icon');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const track = document.querySelector('.track');
    const totalTime = document.querySelector('.total-time');
    const lastTime = document.querySelector('.last-time');

    let currentTime = 12;
    const duration = 200;
    let isPlaying = false;
    let intervalId;

    function updateTime() {
        currentTime++;
        const currentMinutes = Math.floor(currentTime / 60);
        const currentSeconds = currentTime % 60;
        lastTime.textContent = `${currentMinutes < 10 ? '0' : ''}${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        const progress = (currentTime / duration) * 100;
        track.style.width = `${progress}%`;
    }

    function playMusic() {
        isPlaying = true;
        playIcon.style.display = 'none';
        pauseIcon.style.display = 'inline';
        intervalId = setInterval(updateTime, 1000); 
    }

    
    function pauseMusic() {
        isPlaying = false;
        pauseIcon.style.display = 'none';
        playIcon.style.display = 'inline';
        clearInterval(intervalId); 
    }

    
    playButton.addEventListener('click', function() {
        if (isPlaying) {
            pauseMusic();
        } else {
            playMusic();
        }
    });

    prevButton.addEventListener('click', function() {
        currentTime -= 10; 
        if (currentTime < 0) currentTime = 0;
        updateTime();
    });

    nextButton.addEventListener('click', function() {
        currentTime += 10; 
        if (currentTime > duration) currentTime = duration;
        updateTime();
    });
});
