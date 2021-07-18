
function gerarDados(){
  let continuar;

  do {

    gerarTabela()

    continuar = prompt("Deseja inserir dados de outro aluno? Digite s para sim ou n para nao");
  } while (continuar == "s")
}

gerarDados()


function gerarTabela() {
  let nome = prompt("Escreva o nome do aluno").toLowerCase();
  nome = nome.replace(nome[0], nome[0].toUpperCase()).replace(nome[nome.indexOf(" ")+1],nome[nome.indexOf(" ")+1].toUpperCase());
  let frequencia = prompt("Digite a frequencia do aluno").replace("," , "."); 
  let nota1 = parseFloat(prompt("Digite a nota do primeiro semestre").replace("," , "."));
  let nota2 = parseFloat(prompt("Digite a nota do segundo semestre").replace("," , "."));
  let notaFinal = (nota1 + nota2)/2;
  
  
  let alunoTr = document.createElement("tr");
  let nomeTd = document.createElement("td");
  let nota1Td = document.createElement("td");
  let nota2Td = document.createElement("td");
  let frequenciaTd = document.createElement("td");
  let notaFinalTd = document.createElement("td");

  nomeTd.textContent = nome;
  nota1Td.textContent = nota1;
  nota2Td.textContent = nota2;
  frequenciaTd.textContent = frequencia;
  notaFinalTd.textContent = notaFinal;

  alunoTr.appendChild(nomeTd);
  alunoTr.appendChild(nota1Td);
  alunoTr.appendChild(nota2Td);
  alunoTr.appendChild(frequenciaTd);
  alunoTr.appendChild(notaFinalTd);

  let tabela = document.getElementById('tabela');
  tabela.appendChild(alunoTr);

  function verificaAprovacao() {
    if ((nota1 + nota2)/2 <= 6) { 
      alunoTr.classList.add("reprovado");
    } else if (frequencia < 70) {
      alunoTr.classList.add("reprovado");
    } else {
      alunoTr.classList.add("aprovado");
      }
  }  
  verificaAprovacao();
}
