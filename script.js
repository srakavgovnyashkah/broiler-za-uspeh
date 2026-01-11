document.addEventListener('DOMContentLoaded', function() {
    // Анимация при загрузке
    const elements = document.querySelectorAll('.feature, .payment-card, .price-badge');
    
    elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Взаимодействие со скрытыми элементами
    const hiddenImage = document.querySelector('.hidden-image');
    const hiddenText = document.querySelector('.hidden-text');
    const secretMessage = document.querySelector('.secret-message');
    
    // При клике на скрытое изображение
    if (hiddenImage) {
        hiddenImage.style.pointerEvents = 'auto';
        hiddenImage.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.add('secret-found');
            
            // Увеличиваем изображение при клике
            const img = this.querySelector('.very-hidden-photo');
            if (img) {
                img.style.transform = 'scale(3) rotate(0deg)';
                img.style.opacity = '0.8';
                img.style.zIndex = '10000';
                img.style.transition = 'all 1s ease';
                
                // Возвращаем обратно через 3 секунды
                setTimeout(() => {
                    img.style.transform = 'perspective(500px) rotateY(15deg) rotateX(5deg)';
                    img.style.opacity = '0.03';
                    img.style.zIndex = '9998';
                    hiddenImage.classList.remove('secret-found');
                }, 3000);
            }
        });
    }
    
    // При клике на скрытый текст
    if (hiddenText) {
        hiddenText.style.pointerEvents = 'auto';
        hiddenText.addEventListener('click', function(e) {
            e.preventDefault();
            this.classList.add('secret-found');
            secretMessage.classList.add('secret-found');
            
            // Делаем текст более заметным
            secretMessage.style.opacity = '1';
            secretMessage.style.color = '#ff3300';
            secretMessage.style.fontSize = '24px';
            secretMessage.style.letterSpacing = '5px';
            secretMessage.style.textShadow = '0 0 10px rgba(255, 51, 0, 0.7)';
            secretMessage.style.background = 'rgba(0, 0, 0, 0.8)';
            secretMessage.style.padding = '15px 30px';
            secretMessage.style.border = '2px solid #ff3300';
            secretMessage.style.transform = 'rotate(0deg)';
            secretMessage.style.position = 'fixed';
            secretMessage.style.top = '50%';
            secretMessage.style.left = '50%';
            secretMessage.style.transform = 'translate(-50%, -50%)';
            secretMessage.style.zIndex = '10001';
            secretMessage.style.whiteSpace = 'nowrap';
            
            // Возвращаем обратно через 5 секунд
            setTimeout(() => {
                secretMessage.style.opacity = '';
                secretMessage.style.color = '';
                secretMessage.style.fontSize = '';
                secretMessage.style.letterSpacing = '';
                secretMessage.style.textShadow = '';
                secretMessage.style.background = '';
                secretMessage.style.padding = '';
                secretMessage.style.border = '';
                secretMessage.style.transform = '';
                secretMessage.style.position = '';
                secretMessage.style.top = '';
                secretMessage.style.left = '';
                secretMessage.style.zIndex = '';
                secretMessage.style.whiteSpace = '';
                
                hiddenText.classList.remove('secret-found');
                secretMessage.classList.remove('secret-found');
            }, 5000);
        });
    }
    
    // Поиск скрытых элементов при движении мыши в определенных зонах
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        
        // Если курсор в правом нижнем углу (где скрытое изображение)
        if (mouseX > windowWidth - 150 && mouseY > windowHeight - 150) {
            if (hiddenImage) {
                hiddenImage.style.opacity = '0.1';
                setTimeout(() => {
                    if (!hiddenImage.classList.contains('secret-found')) {
                        hiddenImage.style.opacity = '0.03';
                    }
                }, 1000);
            }
        }
        
        // Если курсор в левой части экрана (где скрытый текст)
        if (mouseX < 100) {
            if (hiddenText) {
                hiddenText.style.opacity = '0.4';
                setTimeout(() => {
                    if (!hiddenText.classList.contains('secret-found')) {
                        hiddenText.style.opacity = '0.2';
                    }
                }, 1000);
            }
        }
    });
});
