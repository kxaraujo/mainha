// script.js

var idiomas = [  "Português",  "Inglês",  "Espanhol",  "Alemão",  "Francês",  "Italiano",  "Japonês",  "Chinês",  "Russo",  "Árabe",  "Coreano",  "Hindi",  "Sueco",  "Dinamarquês",  "Norueguês"];

var mensagens = [  "Eu te amo",  "I love you",  "Te quiero",  "Ich liebe dich",  "Je t'aime",  "Ti amo",  "Aishiteru",  "我爱你",  "Я люблю тебя",  "أحبك",  "사랑해",  "मैं तुमसे प्यार करता हूँ",  "Jag älskar dig",  "Jeg elsker deg",  "Jeg elsker deg"];

var button = document.getElementById("love-button");
var mensagem = document.getElementById("mensagem");

button.addEventListener("click", function() {
  // Seleciona um índice aleatório da array de idiomas e mensagens
  var randomIndex = Math.floor(Math.random() * idiomas.length);
  var idioma = idiomas[randomIndex];
  var mensagemIdioma = mensagens[randomIndex];
  
  // Remove o item selecionado das arrays de idiomas e mensagens
  idiomas.splice(randomIndex, 1);
  mensagens.splice(randomIndex, 1);
  
  // Cria a mensagem completa e exibe na página
  var mensagemCompleta = mensagemIdioma + " em " + idioma;
  mensagem.textContent = mensagemCompleta;
  
  // Verifica se todas as mensagens foram exibidas
  if (mensagens.length === 0) {
    // Reinicia as arrays de idiomas e mensagens
    idiomas = [  "Português",  "Inglês",  "Espanhol",  "Alemão",  "Francês",  "Italiano",  "Japonês",  "Chinês",  "Russo",  "Árabe",  "Coreano",  "Hindi",  "Sueco",  "Dinamarquês",  "Norueguês"];
    mensagens = [  "Eu te amo",  "I love you",  "Te quiero",  "Ich liebe dich",  "Je t'aime",  "Ti amo",  "Aishiteru",  "我爱你",  "Я люблю тебя",  "أحبك",  "사랑해",  "मैं तुमसे प्यार करता हूँ",  "Jag älskar dig",  "Jeg elsker deg",  "Jeg elsker deg"];
  }
});

  