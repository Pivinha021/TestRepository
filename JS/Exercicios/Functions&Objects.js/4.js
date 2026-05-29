// Code:

const calculadora = {
    historico: [],
    somar: function(a, b){
        let resultado = a + b;
        this.historico.push(resultado);
        return resultado;
    },
    subtrair: function(a, b){
        let resultado = a - b;
        this.historico.push(resultado);
        return resultado;
    },
    verHistorico: function(){
        console.log("-----[Histórico]-----");
        for(let i = 0; i < this.historico.length; i++){
            console.log(`[${i+1}]`, this.historico[i]);
        }
    }
  };
  
  console.log(calculadora.somar(2,2));
  console.log(calculadora.subtrair(5,2));
  console.log(calculadora.verHistorico());

// saida:

// 4
// 3
// -----[Histórico]-----
// [1] 4
// [2] 3