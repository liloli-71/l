const toggleBtn = document.querySelector('.toggle-btn');
        const container = document.querySelector('.container');

        toggleBtn.addEventListener('click', () => {
            container.classList.toggle('show');
        });