document.addEventListener('DOMContentLoaded', function() {
    const amuletos = document.querySelectorAll('#Amuletos article');

    const informacoes = document.querySelectorAll('#Informacoes article');

    informacoes.forEach(info => {
        info.style.display = 'none';
        info.style.opacity = '0';
        info.style.transform = 'translateY(-20px)';
        info.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    

    amuletos.forEach(amuleto => {
        amuleto.addEventListener('mouseenter', function() {

            const idPersonagem = this.id;
            const idInformacao = idPersonagem.replace('A-', 'I-');
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