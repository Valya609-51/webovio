document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleBtn');
    let isLiked = false;

    toggleBtn.addEventListener('click', () => {
        if (isLiked) {
            // Переключаем в состояние "Dislike"
            toggleBtn.textContent = '👎 Dislike';
            toggleBtn.classList.remove('like-state');
            toggleBtn.classList.add('dislike-state');
            isLiked = false;
        } else {
            // Переключаем в состояние "Like"
            toggleBtn.textContent = '👍 Liked';
            toggleBtn.classList.remove('dislike-state');
            toggleBtn.classList.add('like-state');
            isLiked = true;
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.toggle-btn');

    buttons.forEach(button => {
        let isLiked = false;

        button.addEventListener('click', () => {
            if (isLiked) {
                // Переключаем в состояние "Dislike"
                button.textContent = '👎 Dislike';
                button.classList.remove('like-state');
                button.classList.add('dislike-state');
                isLiked = false;
            } else {
                // Переключаем в состояние "Like"
                button.textContent = '👍 Liked';
                button.classList.remove('dislike-state');
                button.classList.add('like-state');
                isLiked = true;
            }
        });
    });
});