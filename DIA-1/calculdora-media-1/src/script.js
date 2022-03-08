      var nome = "Guilherme"
      var notaPrimeiroBimestre = 9.0
      var notaSegundoBimestre = 7.0
      var notaTerceiroBimestre = 2
      var notaQuartoBimestre = 2.0
      
      document.getElementById("texto")
      document.getElementById("nota")
      
      var notaFinal = ((notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre) / 4).toFixed(2)

      texto.innerHTML = ("<b>Bem vindo " + nome + "<br>Media: " + notaFinal)

      if (notaFinal >= 6) {
        nota.innerHTML = ("<b>Situação final: Aprovado")
      } else 
      {
        nota.innerHTML = ("<b>Situação final: Reprovado")
}

// isso ser um comentario

/* 

Revisão

variáveis,strings,console.log,toFixed(),operações, concatenação(juntar tipos de dados diferentes)

Desafio

- HTML/CSS:

1. Estilizar o fundo
2. Escrever na página oq ta no console

nome
nota1
nota2
nota3
nota4
media
aprovado/reprovado

Extra:

Conversor de temperaturas

*/