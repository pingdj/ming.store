// 视频演示模态框
(function() {
    const videoModal = document.getElementById('videoModal');
    const closeVideoModal = document.getElementById('closeVideoModal');
    const demoVideo = document.getElementById('demoVideo');
    const learnMoreBtn = document.getElementById('learnMoreBtn');

    function openVideoModal() {
        videoModal.style.display = 'flex';
        // 可选：自动播放（浏览器可能限制）
        // demoVideo.play().catch(e => console.log('自动播放被阻止'));
    }
    function closeVideoModalFunc() {
        videoModal.style.display = 'none';
        if (demoVideo) {
            demoVideo.pause();
            demoVideo.currentTime = 0;
        }
    }
    if (learnMoreBtn) {
        learnMoreBtn.addEventListener('click', openVideoModal);
    }
    if (closeVideoModal) {
        closeVideoModal.addEventListener('click', closeVideoModalFunc);
    }
    if (videoModal) {
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) closeVideoModalFunc();
        });
    }
})();