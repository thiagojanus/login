// Função para fechar o alerta
function closeAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "none";
  }
  
  // Função para exibir o alerta
  function showAlert() {
    const alertContainer = document.getElementById("alert-container");
    alertContainer.style.display = "flex";
  }
  
  // Adicionando event listener ao botão de fechar
  document.addEventListener("DOMContentLoaded", function() {
    const closeBtn = document.getElementById("alert-close-btn");
    closeBtn.addEventListener("click", closeAlert);
  
    // Chamar a função showAlert quando o DOM estiver pronto
    if (document.getElementById("alert-container")) {
      showAlert();
    }
  });

  function mostrarSenha(){
    var inputPass = document.getElementById('senha')
    var btnShowPass = document.getElementById('btn-senha')

    if(inputPass.type === 'password'){
      inputPass.setAttribute('type', 'text')
      btnShowPass.classList.replace('uil-eye-slash','uil-eye')
    }else{
      inputPass.setAttribute('type','password')
      btnShowPass.classList.replace('uil-eye','uil-eye-slash')
    }
  }
