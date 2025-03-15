function calcularTotal() {
    let pedido = parseFloat(document.getElementById("pedido").value);
    let bebida = parseFloat(document.getElementById("bebida").value);
    let total = pedido + bebida;
    document.getElementById("total").textContent = total.toFixed(2);
}

function toggleCartao() {
    let pagamentoSelect = document.getElementById("pagamento");
    let cartaoInfo = document.getElementById("cartao-info");
    cartaoInfo.style.display = pagamentoSelect.value === "Cartao" ? "block" : "none";
}

document.getElementById("pedido-form").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Pedido finalizado com sucesso!");
    // Aqui você pode adicionar a lógica para enviar os dados para o backend
});