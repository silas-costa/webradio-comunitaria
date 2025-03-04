const audio = new Audio('SUA_URL_DE_STREAM_AQUI');
        const playPauseBtn = document.getElementById('playPause');
        const playIcon = document.getElementById('playIcon');
        const volumeSlider = document.getElementById('volume');
        const volumeIcon = document.getElementById('volumeIcon');

        // Controles do Player
        playPauseBtn.addEventListener('click', () => {
            if(audio.paused) {
                audio.play();
                playIcon.textContent = 'pause';
            } else {
                audio.pause();
                playIcon.textContent = 'play_arrow';
            }
        });

        volumeSlider.addEventListener('input', (e) => {
            audio.volume = e.target.value;
            updateVolumeIcon(e.target.value);
        });

        function updateVolumeIcon(volume) {
            if(volume == 0) {
                volumeIcon.textContent = 'volume_off';
            } else if(volume < 0.5) {
                volumeIcon.textContent = 'volume_down';
            } else {
                volumeIcon.textContent = 'volume_up';
            }
        }

        // Carregar programação
        function loadSchedule() {
            const programs = [
                { time: '00:00 - 00:00', title: 'Programa 1' },
                { time: '00:00 - 00:00', title: 'Programa 2' },
                { time: '00:00 - 00:00', title: 'Programa 3' }
            ];

            const container = document.querySelector('.schedule');
            programs.forEach(program => {
                const card = document.createElement('div');
                card.className = 'program-card';
                card.innerHTML = `
                    <h3 style="color: var(--primary-yellow); margin-bottom: 0.5rem;">
                        ${program.time}
                    </h3>
                    <p style="color: var(--primary-black);">${program.title}</p>
                `;
                container.appendChild(card);
            });
        }

        // Inicialização
        document.addEventListener('DOMContentLoaded', () => {
            loadSchedule();
            audio.volume = volumeSlider.value;
            
            // Otimização para touch
            document.querySelectorAll('button').forEach(btn => {
                btn.style.touchAction = 'manipulation';
            });
        });