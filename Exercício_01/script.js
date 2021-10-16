function adicionarNota() {
  let nota = document.getElementById("nota").value;

  let notaNove = nota >= 90 && nota <= 100;
  let notaOito = nota < 90 && nota >= 80;
  let notaSete = nota < 80 && nota >= 70;
  let notaSeis = nota < 70 && nota >= 60;
  let notaMenor = nota < 60 && nota >= 0;

  if (notaNove) {
    alert("Excelente! Você tirou A!");
  } else if (notaOito) {
    alert("Ótimo! Você tirou B!");
  } else if (notaSete) {
    alert("Muito bem! Você tirou C!");
  } else if (notaSeis) {
    alert("Estude mais! Você tirou D!");
  } else {
    alert("Reprovado! Você tirou F!");
  }
}
