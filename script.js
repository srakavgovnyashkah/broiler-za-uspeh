document.addEventListener('DOMContentLoaded', function() {
    const paymentBtn = document.getElementById('payment-btn');
    const retryBtn = document.getElementById('retry-btn');
    const errorPanel = document.getElementById('error-panel');
    
    // Обработчик для кнопки оплаты
    paymentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Показать анимацию нажатия
        paymentBtn.style.transform = 'scale(0.95)';
        paymentBtn.style.opacity = '0.8';
        
        // Показать ошибку через 1 секунду
        setTimeout(function() {
            errorPanel.classList.remove('hidden');
            
            // Восстановить кнопку
            setTimeout(function() {
                paymentBtn.style.transform = '';
                paymentBtn.style.opacity = '';
            }, 300);
        }, 1000);
    });
    
    // Если есть кнопка "Попробовать снова"
    if (retryBtn) {
        retryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Анимация нажатия
            retryBtn.style.transform = 'scale(0.95)';
            
            // Скрыть ошибку
            errorPanel.classList.add('hidden');
            
            // Восстановить кнопку
            setTimeout(function() {
                retryBtn.style.transform = '';
            }, 300);
        });
    }
    
    // Закрытие панели ошибки при клике вне ее
    errorPanel.addEventListener('click', function(e) {
        if (e.target === errorPanel) {
            errorPanel.classList.add('hidden');
        }
    });
});
