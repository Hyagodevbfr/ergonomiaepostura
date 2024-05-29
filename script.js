document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    const responseDiv = document.getElementById('formResponse');
    
    responseDiv.innerHTML = `<p>Obrigado, ${nome}. Sua mensagem foi recebida!</p>`;
    
    this.reset();
});
