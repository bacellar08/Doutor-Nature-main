//Pacote1
const oferta = document.getElementsByName("selectCaixa");
const preco = document.getElementById("valorCaixa");
const desconto = document.getElementById("desconto");
const valorPrazo = document.getElementById("valorPrazo");
const valorDebito = document.getElementById("valorDebito");

//Assinatura
const checkbox = document.querySelector("input[id='assinatura']");
const checks = document.querySelectorAll("#check");
const itens_lista = document.querySelectorAll("#item_ass");

//Pacote2
const ofertaa = document.getElementsByName("selectCaixa2");
const preco2 = document.getElementById("valorCaixa2");
const desconto2 = document.getElementById("desconto2");
const valorPrazo2 = document.getElementById("valorPrazo2");
const valorDebito2 = document.getElementById("valorDebito2");

//Assinatura2
const checkbox2 = document.querySelector("input[id='assinatura2']");
const checks2 = document.querySelectorAll("#check2");
const itens_lista2 = document.querySelectorAll("#item_ass2");

checkbox.addEventListener("change", () => {
  if (checkbox.checked) {
    checks.forEach((check) => {
      check.checked = true;
      check.classList.remove("unmarked");
      check.classList.add("marked");
    });
    itens_lista.forEach((item) => {
      item.classList.remove("unmarked");
      item.classList.add("marked");
    });
  } else {
    checks.forEach((check) => {
      check.checked = false;
      check.classList.remove("marked");
      check.classList.add("unmarked");
    });
    itens_lista.forEach((item) => {
      item.classList.remove("marked");
      item.classList.add("unmarked");
    });
  }
});

oferta.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.checked) {
      if (item.value == "1") {
        preco.innerText = "111,11";
        desconto.innerText = "11,11";
        valorPrazo.innerText = "11,11";
        valorDebito.innerText = "111,11";
      } else if (item.value == "2") {
        console.log(item.value);
        preco.innerText = "148,60";
        desconto.innerText = "136,20";
        valorPrazo.innerText = "49,99";
        valorDebito.innerText = "445,80";
      } else if (item.value == "3") {
        console.log(item.value);
        preco.innerText = "222,22";
        desconto.innerText = "22,22";
        valorPrazo.innerText = "22,22";
        valorDebito.innerText = "222,22";
      }
    }
  });
});

ofertaa.forEach((item) => {
  item.addEventListener("change", () => {
    if (item.checked) {
      if (item.value == "4") {
        preco2.innerText = "333,33";
        desconto2.innerText = "33,33";
        valorPrazo2.innerText = "33,33";
        valorDebito2.innerText = "333,33";
      } else if (item.value == "5") {
        console.log(item.value);
        preco2.innerText = "148,60";
        desconto2.innerText = "136,20";
        valorPrazo2.innerText = "49,99";
        valorDebito2.innerText = "445,80";
      } else if (item.value == "6") {
        console.log(item.value);
        preco2.innerText = "444,44";
        desconto2.innerText = "44,44";
        valorPrazo2.innerText = "44,44";
        valorDebito2.innerText = "444,44";
      }
    }
  });
});
