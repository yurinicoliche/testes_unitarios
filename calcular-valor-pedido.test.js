const calcularValorPedido = require('./calcular-valor-pedido');

it('Não deve cobrar valor de frete quando valor dos produtos for superior a 500', () => {
    const meuPedido = {
        itens: [
            { nome: 'Arco encantado', valor: 2000},
            { nome: 'Entrega', valor: 300, entrega: true}
        
        ]
    }

    const resultado = calcularValorPedido(meuPedido);

    expect(resultado).toBe(2000)

})

it('deve cobrar valor de frete quando valor dos produtos for menor que 500', () => {
    const pedidoComEstadoR$ = {
        itens: [
            { nome: 'Sanduiche bem caro', valor: 500},
            { nome: 'Entrega', valor: 100, entrega: true}
        ]

    };

      
 


    const resultado = calcularValorPedido(pedidoComEstadoR$);

    expect(resultado).toBe(620);

    expect(resultado).toBe(420);
});




console.log(resultado)

