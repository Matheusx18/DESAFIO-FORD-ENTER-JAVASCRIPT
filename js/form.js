function Post(form) {
    if (window.event) {
        window.event.preventDefault();
    }

    const formData = new FormData(form);
    const contatoDados = {};

    formData.forEach((value, key) => {
        contatoDados[key] = value;
    });

    console.log("Objeto com os dados do formulário:", contatoDados);

    alert("Mensagem enviada com sucesso! Verifique o console do navegador.");
    
    form.reset();
    return false;
}