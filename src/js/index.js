const chaveDeApi = "ae33e0f0f12a49b3a7510249240711";
const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener ("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDeApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if (resposta.status !== 200) return;

    const dados = await resposta.json();

    const temperatura = Math.round(dados.current.temp_c);
    const umidade = dados.current.humidity;
    const condicao = dados.current.condition.text;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconeCondicao = dados.current.condition.icon;
    const estado = dados.location.region;
    const pais = dados.location.country;
    const sensacao = dados.current.feelslike_c;
    const visibilidade = dados.current.vis_km;



document.getElementById("cidade").textContent = cidade;
document.getElementById("estado").textContent = estado;
document.getElementById("pais").textContent = pais;

document.getElementById("temperatura").textContent = `${temperatura} °C`;
document.getElementById("umidade").textContent = `${umidade} %`;
document.getElementById("condicao").textContent = condicao;
document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;
document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
document.getElementById("sensacao-termica").textContent = `${sensacao} °C`;
document.getElementById("visibilidade").textContent = `${visibilidade} Km`;

})
