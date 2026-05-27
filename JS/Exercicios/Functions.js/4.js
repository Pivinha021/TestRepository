const calculadora = {
    historico = [],
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
        for(let i = 0; i < this.historico.length; i++){
            console.log(this.historico[i]);
        }
    }
  };
  
  console.log(calculadora.somar(2,2));
  console.log(calculadora.subtrair(5,2));
  console.log(calculadora.verHistorico());

  //refazer