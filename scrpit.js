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

  /*Função do segundo olho*/
  function mostrarSenha2(){
    var inputPass = document.getElementById('senha2')
    var btnShowPass = document.getElementById('btn-senha2')

    if(inputPass.type === 'password'){
      inputPass.setAttribute('type', 'text')
      btnShowPass.classList.replace('uil-eye-slash','uil-eye')
    }else{
      inputPass.setAttribute('type','password')
      btnShowPass.classList.replace('uil-eye','uil-eye-slash')
    }
  }
  function checkPasswordStrength() {
    var password = document.getElementById("senha").value;
    var strengthMeterBar = document.querySelector(".password-strength-meter-bar");
    var strengthText = document.querySelector(".password-strength-text");
  
    // Definir as regras de força da senha
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  
    // Verificar a força da senha
    if (strongRegex.test(password)) {
      strengthMeterBar.classList.remove("is-warning", "is-invalid");
      strengthMeterBar.classList.add("is-valid");
      strengthText.textContent = "Senha forte";
      strengthMeterBar.style.width = "100%";
    } else if (mediumRegex.test(password)) {
      strengthMeterBar.classList.remove("is-valid", "is-invalid");
      strengthMeterBar.classList.add("is-warning");
      strengthText.textContent = "Senha média";
      strengthMeterBar.style.width = "50%";
    } else {
      strengthMeterBar.classList.remove("is-valid", "is-warning");
      strengthMeterBar.classList.add("is-invalid");
      strengthText.textContent = "Senha fraca";
      strengthMeterBar.style.width = "25%";
    }
  }
  
  document.getElementById("senha").addEventListener("input", checkPasswordStrength);