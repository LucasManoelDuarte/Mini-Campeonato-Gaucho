var brasilDePelotas = {
  icone: "https://ssl.gstatic.com/onebox/media/sports/logos/abHSe0XZKDWYfR52Vl_PTw_48x48.png",
  nome: "Brasil de Pelotas",
  pontos: 0,
  partidas: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
}

var gremio = {
  icone: "https://ssl.gstatic.com/onebox/media/sports/logos/Ku-73v_TW9kpex-IEGb0ZA_48x48.png",
  nome: "Grêmio",
  pontos: 0,
  partidas: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
}

var inter = {
  icone: "https://ssl.gstatic.com/onebox/media/sports/logos/OWVFKuHrQuf4q2Wk0hEmSA_48x48.png",
  nome: "Internacional",
  pontos: 0,
  partidas: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
}

var juventude = {
  icone: "https://ssl.gstatic.com/onebox/media/sports/logos/JrXw-m4Dov0gE2Sh6XJQMQ_48x48.png",
  nome: "Juventude",
  pontos: 0,
  partidas: 0,
  vitorias: 0,
  empates: 0,
  derrotas: 0,
}

var clubes = [brasilDePelotas, gremio, inter, juventude]

var nome1 = clubes[0]
var nome2 = clubes[1]
var nome3 = clubes[2]
var nome4 = clubes[3]

exibirTimesNaTela(clubes)
calcularPontos(clubes)

var rodada = document.getElementById("rodadas")

function exibirTimesNaTela (clubes) {
  clubes.sort(function (x, y) {
    return y.pontos - x.pontos
  })
  
  var html = ""
  
  for (i = 0; i < clubes.length; i++) {
    html += "<tr><td><img src='" + clubes[i].icone + "'</td>"
    html += "<td>" + clubes[i].nome + "</td>"
    html += "<td>" + clubes[i].pontos + "</td>"
    html += "<td>" + clubes[i].partidas + "</td>"
    html += "<td>" + clubes[i].vitorias + "</td>"
    html += "<td>" + clubes[i].empates + "</td>"
    html += "<td>" + clubes[i].derrotas + "</td></tr>"
  }
  
  var tabela = document.getElementById("caracteristicas")
  tabela.innerHTML = html
}

function calcularPontos (equipe) {
  var pontos = (equipe.vitorias * 3) + equipe.empates
  return pontos
}

function resultado () {  
  var valorUm = parseInt(document.getElementById("valorUm").value)
  var valorDois = parseInt(document.getElementById("valorDois").value)
  var valorTres = parseInt(document.getElementById("valorTres").value)
  var valorQuatro = parseInt(document.getElementById("valorQuatro").value)
  
  if (valorUm > valorDois) {
    nome4.vitorias++
    nome4.partidas++
    nome4.pontos = calcularPontos(nome4)
    
    nome3.derrotas++
    nome3.partidas++
    nome3.pontos = calcularPontos(nome3)
    
    exibirTimesNaTela(clubes)
  } else if (valorUm < valorDois) {
    nome4.derrotas++
    nome4.partidas++
    nome4.pontos = calcularPontos(nome4)
    
    nome3.vitorias++
    nome3.partidas++
    nome3.pontos = calcularPontos(nome3)
    
    exibirTimesNaTela(clubes)    
  } else  if (valorUm == valorDois){
    nome4.empates++
    nome4.partidas++
    nome4.pontos = calcularPontos(nome4)
    
    nome3.empates++
    nome3.partidas++
    nome3.pontos = calcularPontos(nome3)  
    exibirTimesNaTela(clubes)
  }
  
  if (valorTres > valorQuatro) {
    nome1.vitorias++
    nome1.partidas++
    nome1.pontos = calcularPontos(nome1)
    
    nome2.derrotas++
    nome2.partidas++
    nome2.pontos = calcularPontos(nome2)
    
    exibirTimesNaTela(clubes)
  } else if (valorTres < valorQuatro) {
    nome1.derrotas++
    nome1.partidas++
    nome1.pontos = calcularPontos(nome1)
    
    nome2.vitorias++
    nome2.partidas++
    nome2.pontos = calcularPontos(nome2)
    
    exibirTimesNaTela(clubes)    
  } else if (valorTres == valorQuatro){
    nome1.empates++
    nome1.partidas++
    nome1.pontos = calcularPontos(nome1)
    
    nome2.empates++
    nome2.partidas++
    nome2.pontos = calcularPontos(nome2) 
 
    exibirTimesNaTela(clubes)
  }

  document.getElementById("resultado").disabled = true
}

function rodadaDois () {
  nome1 = gremio
  nome2 = juventude
  nome3 = brasilDePelotas
  nome4 = inter
  
  rodada.innerHTML = ""
  
  var partidas = "<p>Rodada 2:</p><img src='" + inter.icone + "'><input type='number' value='0' id='valorUm' min='0' max='9'> X <input type='number' value='0' id='valorDois' min='0' max='9'><img src='" + brasilDePelotas.icone + "'><br><img src='" + gremio.icone + "'><input type='number' value='0' id='valorTres' min='0' max='9'> X <input type='number' value='0' id='valorQuatro' min='0' max='9'><img src='" + juventude.icone + "'>"
  
  rodada.innerHTML = partidas
  
  document.getElementById("rodadaDois").disabled = true
  document.getElementById("resultado").disabled = false
  document.getElementById("rodadaTres").disabled = false
  
}

function rodadaTres () {
  nome1 = gremio
  nome2 = inter
  nome3 = brasilDePelotas
  nome4 = juventude
  
  rodada.innerHTML = ""
  
  var partidas = "<p>Rodada Final:</p><img src='" + juventude.icone + "'><input type='number' value='0' id='valorUm' min='0' max='9'> X <input type='number' value='0' id='valorDois' min='0' max='9'><img src='" + brasilDePelotas.icone + "'><br><img src='" + gremio.icone + "'><input type='number' value='0' id='valorTres' min='0' max='9'> X <input type='number' value='0' id='valorQuatro' min='0' max='9'><img src='" + inter.icone + "'>"
  
  rodada.innerHTML = partidas
  
  document.getElementById("rodadaTres").disabled = true
  document.getElementById("resultado").disabled = false
}