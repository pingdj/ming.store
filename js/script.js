// 联系模态框相关元素
(function() {
    const contactModal = document.getElementById('contactModal');
    const closeContactModal = document.getElementById('closeContactModal');
    const openContactModalBtns = [
        document.getElementById('contactBtn'),
        document.getElementById('heroContactBtn'),
        document.getElementById('ctaContactBtn')
    ].filter(btn => btn !== null);

    function openContactModal() {
        contactModal.style.display = 'flex';
    }
    function closeContactModalFunc() {
        contactModal.style.display = 'none';
    }
    openContactModalBtns.forEach(btn => btn.addEventListener('click', openContactModal));
    closeContactModal.addEventListener('click', closeContactModalFunc);
    contactModal.addEventListener('click', (e) => {
        if (e.target === contactModal) closeContactModalFunc();
    });

    // 软件实图链接滚动
    const screenshotLink = document.getElementById('screenshotLink');
    const screenshotSection = document.getElementById('screenshot');
    if (screenshotLink && screenshotSection) {
        screenshotLink.addEventListener('click', (e) => {
            e.preventDefault();
            screenshotSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 图片放大模态框
    const imageModal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const imageCloseBtn = document.querySelector('#imageModal .image-close');
    const allImages = document.querySelectorAll('.screenshot-card img');

    function openImageModal(imgSrc) {
        modalImage.src = imgSrc;
        imageModal.style.display = 'flex';
    }
    function closeImageModal() {
        imageModal.style.display = 'none';
        modalImage.src = '';
    }
    allImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            openImageModal(img.src);
        });
    });
    imageCloseBtn.addEventListener('click', closeImageModal);
    imageModal.addEventListener('click', (e) => {
        if (e.target === imageModal) closeImageModal();
    });
})();