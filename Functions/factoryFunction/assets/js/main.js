// function criaCalculadora() {
//   return {
//     display: document.querySelector('.display'),

//     inicia() {
//       this.cliqueBotoes();
//       this.pressionaBackSpace();
//       this.pressionaEnter();
//     },

//     pressionaBackSpace() {
//       this.display.addEventListener('keydown', e => {
//         if (e.keyCode === 8) {
//           e.preventDefault();
//           this.clearDisplay();
//         }
//       });
//     },

//     pressionaEnter() {
//       this.display.addEventListener('keyup', e => {
//         if (e.keyCode === 13) {
//           this.realizaConta();
//         }
//       });
//     },

//     realizaConta() {
//       let conta = this.display.value;

//       try {
//         conta = eval(conta);

//         if(!conta) {
//           alert('Conta inválida');
//           return;
//         }

//         this.display.value = String(conta);
//       } catch(e) {
//         alert('Conta inválida');
//         return;
//       }
//     },

//     clearDisplay() {
//       this.display.value = '';
//     },

//     apagaUm() {
//       this.display.value = this.display.value.slice(0, -1);
//     },

//     cliqueBotoes() {
//       document.addEventListener('click', e => {
//         const el = e.target;

//         if(el.classList.contains('btn-num')) {
//           this.btnParaDisplay(el.innerText);
//         }

//         if(el.classList.contains('btn-clear')) {
//           this.clearDisplay();
//         }

//         if(el.classList.contains('btn-del')) {
//           this.apagaUm();
//         }

//         if(el.classList.contains('btn-eq')) {
//           this.realizaConta();
//         }

//         this.display.focus();
//       });
//     },

//     btnParaDisplay(valor) {
//       this.display.value += valor;
//     }

//   };
// }

// const calculadora = criaCalculadora();
// calculadora.inicia();

function createCalculate() {
  return {
    display: document.querySelector(".display"),
    buttonClear: document.querySelector(".btn-clear"),

    run() {
      this.clickButtons();
      this.keyEnter();
    },
    keyEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.result();
        }
      });
    },

    clickButtons() {
      document.addEventListener(
        "click",
        function (event) {
          const element = event.target;

          if (element.classList.contains("btn-num")) {
            this.btnDisplay(element.innerText);
          }
          if (element.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (element.classList.contains("btn-del")) {
            this.removeOne();
          }

          if (element.classList.contains("btn-eq")) {
            this.result();
          }
          /*
           quando você 
          clica em algo, o "focus" fica na coisa que você clicou.
          Isso é um comportamento padrão do navegador, 
          É só você mandar o foco para o display a cada botão clicado.
          */
          this.display.focus();
        }.bind(this)
      );
    },

    btnDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = " ";
    },

    removeOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    result() {
      let counter = this.display.value;
      try {
        counter = eval(counter);
        if (!counter) {
          alert("Conta inválida");
          return;
        }

        this.display.value = String(counter);
      } catch (error) {
        alert("Conta inválida");
      }
    },
  };
}

const calc = createCalculate();
calc.run();
