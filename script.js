document.addEventListener('DOMContentLoaded', function() {
    // Все ссылки на странице будут работать стандартно
    // Кнопка оплаты уже содержит прямую ссылку
    
    // Можно добавить небольшую анимацию при загрузке
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
});
