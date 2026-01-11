document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('subscription-form');
    const errorMessage = document.getElementById('error-message');
    const submitBtn = document.getElementById('submit-btn');
    const tryAgainBtn = document.getElementById('try-again-btn');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Показываем анимацию загрузки
        submitBtn.innerHTML = '<span class="btn-text">ОБРАБОТКА ПЛАТЕЖА...</span><span class="btn-icon"><i class="fas fa-spinner fa-spin"></i></span>';
        submitBtn.disabled = true;
        
        // Имитация обработки платежа
        setTimeout(function() {
            // Всегда показываем ошибку 411
            showError();
        }, 2000);
    });
    
    tryAgainBtn.addEventListener('click', function() {
        // Скрываем сообщение об ошибке
        errorMessage.classList.add('hidden');
        
        // Восстанавливаем кнопку
        submitBtn.innerHTML = '<span class="btn-text">ПОДПИСАТЬСЯ И СТАТЬ УСПЕШНЫМ</span><span class="btn-icon"><i class="fas fa-arrow-right"></i></span>';
        submitBtn.disabled = false;
        
        // Очищаем форму
        form.reset();
    });
    
    function showError() {
        // Показываем сообщение об ошибке
        errorMessage.classList.remove('hidden');
        
        // Прокручиваем страницу к сообщению об ошибке
        errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Добавляем дополнительный эффект - мигание заголовка ошибки
        const errorHeader = document.querySelector('.error-header h3');
        let blinkCount = 0;
        const blinkInterval = setInterval(function() {
            errorHeader.style.visibility = errorHeader.style.visibility === 'hidden' ? 'visible' : 'hidden';
            blinkCount++;
            
            if (blinkCount > 6) {
                clearInterval(blinkInterval);
                errorHeader.style.visibility = 'visible';
            }
        }, 300);
        
        // Добавляем звуковой эффект (если нужно)
        playErrorSound();
    }
    
    function playErrorSound() {
        // Создаем звуковой эффект ошибки с помощью Web Audio API
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'sawtooth';
            oscillator.frequency.setValueAtTime(150, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);
            
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
        } catch (e) {
            console.log("Аудио контекст не поддерживается");
        }
    }
    
    // Добавляем валидацию для поля с номером карты
    const cardInput = document.getElementById('card');
    cardInput.addEventListener('input', function() {
        let value = this.value.replace(/\s/g, '').replace(/\D/g, '');
        
        // Форматируем как XXXX XXXX XXXX XXXX
        let formatted = '';
        for (let i = 0; i < value.length && i < 16; i++) {
            if (i > 0 && i % 4 === 0) {
                formatted += ' ';
            }
            formatted += value[i];
        }
        
        this.value = formatted;
    });
    
    // Добавляем валидацию для поля срока действия
    const expiryInput = document.getElementById('expiry');
    expiryInput.addEventListener('input', function() {
        let value = this.value.replace(/\D/g, '');
        
        if (value.length >= 2) {
            this.value = value.substring(0, 2) + '/' + value.substring(2, 4);
        } else {
            this.value = value;
        }
    });
    
    // Добавляем валидацию для поля CVV
    const cvvInput = document.getElementById('cvv');
    cvvInput.addEventListener('input', function() {
        this.value = this.value.replace(/\D/g, '').substring(0, 3);
    });
});