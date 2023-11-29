document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formContato');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const nome = document.getElementById('nome').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value;
  
      console.log(`Nome: ${nome}, E-mail: ${email}, Mensagem: ${mensagem}`);
      alert('Mensagem enviada com sucesso!');
    });
  });
  