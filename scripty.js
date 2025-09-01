document.addEventListener('DOMContentLoaded', function() {
    const keywordInput = document.getElementById('keyword-input');
    const videoContainer = document.getElementById('video-container');
    const youtubePlayer = document.getElementById('youtube-player');
    const closeBtn = document.getElementById('close-video');
    const mainElement = document.querySelector('main');
            
            
    const secretKeyword = 'silkSong';
            
    const youtubeVideoId = '6XGeJwsUP9c';
            
    keywordInput.addEventListener('input', function() {
        if (this.value.toLowerCase() === secretKeyword.toLowerCase()) {
            mainElement.classList.add('secret-revealed');
            
            youtubePlayer.src = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`;
            
            videoContainer.style.display = 'flex';
            
            this.value = '';
            
            setTimeout(() => {
                mainElement.classList.remove('secret-revealed');
            }, 2000);
        }
    });
            
           
    closeBtn.addEventListener('click', function() {
        videoContainer.style.display = 'none';
        youtubePlayer.src = '';
    });
    
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && videoContainer.style.display === 'flex') {
            videoContainer.style.display = 'none';
            youtubePlayer.src = ''; 
        }
    });
});

const botao = document.getElementById('secreto');
const Input = document.getElementById('keyword-input');

secreto.addEventListener('click', function() {
    Input.classList.toggle('visible');
});