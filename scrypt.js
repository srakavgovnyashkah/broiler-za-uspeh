document.addEventListener('DOMContentLoaded', function() {
    const paymentBtn = document.getElementById('payment-btn');
    const errorPanel = document.getElementById('error-panel');
    const retryBtn = document.getElementById('retry-btn');
    
    // Обработчик нажатия на кнопку оплаты
    paymentBtn.addEventListener('click', function() {
        // Показываем состояние загрузки
        const originalHTML = paymentBtn.innerHTML;
        paymentBtn.innerHTML = `
            <div class="tg-btn-content">
                <i class="fas fa-spinner fa-spin"></i>
                <span>ОПЛАТА 411 114 ₽...</span>
            </div>
            <div class="tg-btn-sub">обработка платежа</div>
        `;
        paymentBtn.disabled = true;
        
        // Имитация обработки платежа
        setTimeout(() => {
            // После загрузки перенаправляем на Wikipedia
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
            
            // Также показываем ошибку 411 (на случай если перенаправление не сработает)
            showError();
            
            // Восстанавливаем кнопку (на всякий случай)
            paymentBtn.innerHTML = originalHTML;
            paymentBtn.disabled = false;
        }, 2000);
    });
    
    // Обработчик кнопки "Попробовать снова"
    retryBtn.addEventListener('click', function() {
        // Показываем загрузку на кнопке повторной попытки
        const originalRetryHTML = retryBtn.innerHTML;
        retryBtn.innerHTML = `
            <i class="fas fa-spinner fa-spin"></i>
            <span>Повторная попытка оплаты...</span>
        `;
        retryBtn.disabled = true;
        
        // Имитация повторной попытки
        setTimeout(() => {
            // Перенаправляем на Wikipedia
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
            
            // Восстанавливаем кнопку
            retryBtn.innerHTML = originalRetryHTML;
            retryBtn.disabled = false;
            
            // Добавляем анимацию ошибки (на случай если перенаправление не сработает)
            addErrorEffects();
            
            // Создаём новые плавающие числа
            createFloatingNumbers();
        }, 1500);
    });
    
    // Функция показа ошибки
    function showError() {
        // Показываем панель ошибки
        errorPanel.classList.remove('hidden');
        
        // Добавляем эффекты
        addErrorEffects();
        
        // Создаём плавающие числа 411
        createFloatingNumbers();
        
        // Воспроизводим звук ошибки
        playErrorSound();
        
        // Также добавляем перенаправление через 3 секунды
        setTimeout(() => {
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
        }, 3000);
    }
    
    // Функция добавления эффектов ошибки
    function addErrorEffects() {
        // Анимация мигания заголовка ошибки
        const errorHeader = document.querySelector('.tg-error-header h3');
        errorHeader.style.animation = 'none';
        setTimeout(() => {
            errorHeader.style.animation = 'pulse 2s infinite';
        }, 10);
        
        // Анимация дрожания панели ошибки
        const errorPanel = document.querySelector('.tg-error-panel');
        errorPanel.style.transform = 'translateX(0)';
        
        let shakeCount = 0;
        const shakeInterval = setInterval(() => {
            const offset = Math.sin(shakeCount * 2) * 4;
            errorPanel.style.transform = `translateX(${offset}px)`;
            shakeCount++;
            
            if (shakeCount > 16) {
                clearInterval(shakeInterval);
                errorPanel.style.transform = 'translateX(0)';
            }
        }, 50);
    }
    
    // Функция создания плавающих чисел
    function createFloatingNumbers() {
        const numbers = ['411', '114', '411', '114', '411', '114'];
        
        for (let i = 0; i < 12; i++) {
            const numberEl = document.createElement('div');
            numberEl.className = 'floating-number';
            numberEl.textContent = numbers[i % numbers.length];
            
            // Стили
            numberEl.style.position = 'fixed';
            numberEl.style.zIndex = '9999';
            numberEl.style.pointerEvents = 'none';
            numberEl.style.color = i % 2 === 0 ? 'rgba(255, 85, 0, 0.7)' : 'rgba(255, 51, 0, 0.7)';
            numberEl.style.fontSize = `${Math.random() * 20 + 14}px`;
            numberEl.style.fontWeight = '900';
            numberEl.style.fontFamily = "'Inter', sans-serif";
            numberEl.style.left = `${Math.random() * 100}vw`;
            numberEl.style.top = `${Math.random() * 100}vh`;
            numberEl.style.opacity = '0';
            numberEl.style.transform = 'translateY(20px)';
            
            // Анимация
            numberEl.style.transition = 'all 1s ease-out';
            
            document.body.appendChild(numberEl);
            
            // Запускаем анимацию
            setTimeout(() => {
                numberEl.style.opacity = '1';
                numberEl.style.transform = 'translateY(0)';
            }, 10);
            
            // Удаляем через 3 секунды
            setTimeout(() => {
                numberEl.style.opacity = '0';
                numberEl.style.transform = 'translateY(-80px)';
                
                setTimeout(() => {
                    if (numberEl.parentNode) {
                        numberEl.parentNode.removeChild(numberEl);
                    }
                }, 1000);
            }, 3000);
        }
    }
    
    // Функция воспроизведения звука ошибки
    function playErrorSound() {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Основной тон ошибки
            const oscillator1 = audioContext.createOscillator();
            const gainNode1 = audioContext.createGain();
            
            oscillator1.connect(gainNode1);
            gainNode1.connect(audioContext.destination);
            
            oscillator1.type = 'square';
            oscillator1.frequency.setValueAtTime(411, audioContext.currentTime);
            oscillator1.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.4);
            
            gainNode1.gain.setValueAtTime(0.08, audioContext.currentTime);
            gainNode1.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.4);
            
            oscillator1.start(audioContext.currentTime);
            oscillator1.stop(audioContext.currentTime + 0.4);
            
            // Второй тон
            setTimeout(() => {
                const oscillator2 = audioContext.createOscillator();
                const gainNode2 = audioContext.createGain();
                
                oscillator2.connect(gainNode2);
                gainNode2.connect(audioContext.destination);
                
                oscillator2.type = 'sawtooth';
                oscillator2.frequency.setValueAtTime(114, audioContext.currentTime);
                oscillator2.frequency.exponentialRampToValueAtTime(60, audioContext.currentTime + 0.3);
                
                gainNode2.gain.setValueAtTime(0.05, audioContext.currentTime);
                gainNode2.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.3);
                
                oscillator2.start(audioContext.currentTime);
                oscillator2.stop(audioContext.currentTime + 0.3);
            }, 150);
            
        } catch (e) {
            console.log("Web Audio API не поддерживается");
        }
    }
    
    // Добавляем обработчик нажатия на другие элементы, которые могут вести на оплату
    document.querySelectorAll('.tg-price-marquee, .tg-payment-card').forEach(element => {
        element.addEventListener('click', function(e) {
            if (!e.target.closest('.tg-payment-btn')) {
                // При клике на цену или карту оплаты тоже перенаправляем на википедию
                setTimeout(() => {
                    window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
                }, 1000);
            }
        });
    });
    
    // Также можно добавить перенаправление при нажатии на заголовок
    const titleElement = document.querySelector('.tg-message-title');
    if (titleElement) {
        titleElement.style.cursor = 'pointer';
        titleElement.addEventListener('click', function() {
            window.location.href = "https://ru.wikipedia.org/wiki/HTTP_411";
        });
    }
});
