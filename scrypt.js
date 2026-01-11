document.addEventListener('DOMContentLoaded', function() {
    const paymentBtn = document.getElementById('payment-btn');
    const retryBtn = document.getElementById('retry-btn');
    
    // Простой обработчик для кнопки оплаты
    paymentBtn.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
    });
    
    // Если есть кнопка "Попробовать снова"
    if (retryBtn) {
        retryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
        });
    }
});
