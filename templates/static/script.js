document.addEventListener('DOMContentLoaded', () => {
    const smallGophers = document.querySelectorAll('.small-gopher');
    const leftPupil = document.querySelector('.left-eye .pupil');
    const rightPupil = document.querySelector('.right-eye .pupil');
    const centerGopher = document.querySelector('.center-gopher');

    const gopherImages = [
        'static/small-gopher-1.png',
        'static/small-gopher-2.png',
        'static/small-gopher-3.png',
        'static/small-gopher-4.png',
    ];

    function animateGophers() {
        smallGophers.forEach((gopher, index) => {
            console.log(gopher, index)
            gopher.style.backgroundImage = `url(${gopherImages[index]})`;
            const delay = index * 6000; // Stagger the appearance
            setTimeout(() => {
                    
                    let randomEdge = Math.floor(Math.random() * 4);
                    let startX, startY;
                    let slideInAnimation, slideOutAnimation;
                    
                    if (randomEdge === 0) { // Top
                        startX = Math.random() * window.innerWidth;
                        startY = -50; // Slightly above the viewport
                        slideInAnimation = 'slide-in-top 2s forwards ';
                        slideOutAnimation = 'slide-out-top 2s 2s forwards';
                    } else if (randomEdge === 1) { // Bottom
                        startX = Math.random() * window.innerWidth;
                        startY = window.innerHeight - 50; // Slightly below the viewport
                        slideInAnimation = 'slide-in-bottom 2s forwards';
                        slideOutAnimation = 'slide-out-bottom 2s 2s forwards';
                    } else if (randomEdge === 2) { // Left
                        startX = -50; // Slightly left of the viewport
                        startY = Math.random() * window.innerHeight;
                        slideInAnimation = 'slide-in-left 2s forwards';
                        slideOutAnimation = 'slide-out-left 2s 2s forwards';
                    } else { // Right
                        startX = window.innerWidth - 50; // Slightly right of the viewport
                        startY = Math.random() * window.innerHeight;
                        slideInAnimation = 'slide-in-right 2s forwards';
                        slideOutAnimation = 'slide-out-right 2s 2s forwards';
                    }
                    
                    gopher.style.left = `${startX}px`;
                    gopher.style.top = `${startY}px`;
                    gopher.style.display = 'block';
                    gopher.style.animation = slideInAnimation;
                    
                    // Move the pupils to look at the gopher
                    
                    // Hide the gopher after the slide out animation
                    setTimeout(() => {
                        movePupils(gopher);
                        gopher.style.animation = slideOutAnimation;
                        setTimeout(() => {
                        gopher.style.display = 'none';
                    }, 4000);
                }, 2000);
            }, delay);
        });
    }
    
    function movePupils(target) {
        const targetRect = target.getBoundingClientRect();
        console.log(targetRect)
        const centerRect = centerGopher.getBoundingClientRect();

        const targetX = targetRect.left + targetRect.width / 2;
        const targetY = targetRect.top + targetRect.height / 2;

        const centerX = centerRect.left + centerRect.width / 2;
        const centerY = centerRect.top + centerRect.height / 2;

        const angle = Math.atan2(targetY - centerY, targetX - centerX);
        const pupilDistance = 20; // Adjust this value for appropriate pupil movement

        const pupilX = pupilDistance * Math.cos(angle);
        const pupilY = pupilDistance * Math.sin(angle);

        leftPupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        rightPupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
    }

    animateGophers();
});
