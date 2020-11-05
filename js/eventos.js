function logout() {

    localStorage.removeItem("usuariologado");
    window.location = "index.html";
}

/* function filtrar() {
    fetch("http://localhost:8080/buscarevento/" +
        document.getElementById("txtinicio").value +
        "/" + document.getElementById("txtfim").value)
        .then(res => res.json())
        .then(res => montartabela(res));
}

function montartabela(lista) {
    var tabela =
        "<table border='1' align='center' width='80%' cellspacing='2'>" +
        "<tr>" +
        "<th>Data</th>" +
        "<th>Alarme</th>" +
        "<th>Equipamento</th>" +
        "</tr>";
    for (cont = 0; cont < lista.length; cont++) {
        tabela +=
            "<tr>" +
            "<td>" + lista[cont].data + "</td>" +
            "<td>" + lista[cont].alarme.descricao + "</td>" +
            "<td>" + lista[cont].equipamento.hostname + "</td></tr>";
    }
    tabela += "</table>";
    document.getElementById("resultado").innerHTML = tabela;
} */
