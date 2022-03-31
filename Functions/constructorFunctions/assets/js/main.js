// Factoryfunctions;
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

// const calc = createCalculate();
// calc.run();

// Constructor  Functions;

function CreateCalculator() {
  this.display = document.querySelector(".display");

  this.run = () => {
    this.clickButtons();
    this.keyEnter();
  };

  this.keyEnter = () => {
    this.display.addEventListener("keyup", (event) => {
      if (event.keyCode === 13) {
        this.result();
      }
    });
  };

  this.clickButtons = () => {
    document.addEventListener("click", (event) => {
      const element = event.target;

      if (element.classList.contains("btn-num")) {
        this.addNumberDisplay(element);
        this.display.focus();
      }
      if (element.classList.contains("btn-clear")) {
        this.display.value = "";
      }
      if (element.classList.contains("btn-del")) {
        this.removeOneElement();
      }
      if (element.classList.contains("btn-eq")) {
        this.result();
      }
    });
  };

  this.addNumberDisplay = (element) => {
    this.display.value += element.innerText;
  };

  this.removeOneElement = () => {
    this.display.value = this.display.value.slice(0, -1);
  };
  this.result = () => {
    try {
      const result = eval(this.display.value);

      if (!result) {
        alert("Conta inválida");
        return;
      }

      this.display.value = result;
    } catch (error) {
      alert("Conta Inválida");
      return;
    }
  };
}

const calculator = new CreateCalculator();
calculator.run();
