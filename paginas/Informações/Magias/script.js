document.addEventListener('DOMContentLoaded', function() {
    const magias = document.querySelectorAll('#Magias article');

    const informacoes = document.querySelectorAll('#Informacoes article');

    informacoes.forEach(info => {
        info.style.display = 'none';
        info.style.opacity = '0';
        info.style.transform = 'translateY(-20px)';
        info.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    

    magias.forEach(magia => {
        magia.addEventListener('mouseenter', function() {

            const idMagia = this.id;
            const idInformacao = idMagia.replace('M-', 'I-');
            const informacaoAlvo = document.getElementById(idInformacao);

            informacoes.forEach(info => {
                if (info !== informacaoAlvo) {
                    info.style.display = 'none';
                    info.style.opacity = '0';
                    info.style.transform = 'translateY(-20px)';
                }
            });
            
            if (informacaoAlvo) {
                informacaoAlvo.style.display = 'block';
                setTimeout(() => {
                    informacaoAlvo.style.opacity = '1';
                    informacaoAlvo.style.transform = 'translateY(0)';
                }, 10);
            }
        });
    });
});