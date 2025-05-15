const calcularValorPedido = pedido => {
    const valorProdutos = pedido.itens
    .filter(item => !item.entrega)
    .reduce((totalProdutos, pedidoAtual) => totalProdutos + pedidoAtual.valor, 0);

    const entrega = pedido.itens.filter(item => item.entrega);

    if(pedido.estado === 'R$' || pedido.estado === 'SC') {
        const acrescimoEntrega = entrega[0].valor * 0.2;
        entrega[0].valor += acrescimoEntrega;
    }

    return (valorProdutos > 500) ? valorProdutos : valorProdutos + entrega[0].valor;
}



module.exports = calcularValorPedido;
