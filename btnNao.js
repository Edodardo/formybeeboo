window.onload = function() {
    const btnNao = document.getElementById('btnNao');
    const container = document.getElementById('doYouLoveMe');
    const textoSurpresa = document.getElementById('textoSurpresa');
    const ursogif = document.getElementById('ursopergunta');
    let clickCount = 0;

    btnNao.style.position = 'absolute';

    btnNao.addEventListener('click', function() {
        clickCount++;
        const maxLeft = container.offsetWidth - btnNao.offsetWidth;
        const maxTop = container.offsetHeight - btnNao.offsetHeight;
        const left = Math.random() * maxLeft;
        const top = Math.random() * maxTop;
        btnNao.style.left = `${left}px`;
        btnNao.style.top = `${top}px`;

        if (clickCount === 5) {
            textoSurpresa.textContent = "Não ama mesmo?";
        }
        if (clickCount === 10) {
            textoSurpresa.textContent = "Nossa, eu não esperava isso...";
        }

        if (clickCount === 15) {
            textoSurpresa.textContent = "Esse botão foi removido por causa da sua insistência! Agora por favor clique no Sim";
            ursogif.src = "ursoputo.gif";
            btnNao.remove();
        }
    });
};