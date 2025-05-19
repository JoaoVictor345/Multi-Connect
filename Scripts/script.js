function togglePasswordVisibility() {
    const senhaInput = document.getElementById('senhaInput');
    const eyeIcon = document.getElementById('olhoFechado');

    if (senhaInput.type === 'password') {
        senhaInput.type = 'text';
        eyeIcon.src = '../imgs/olhoaberto.png';
    } else {
        senhaInput.type = 'password';
        eyeIcon.src = '../imgs/olhofechado.png';
    }
}