async function comprar(produto, preco){
     const resposta = await fetch("/checkouat", {
        method: "POST",
        headers: {
            "content-type": "application/json" 
        },
        body: JSON.stringify({
            produto,
            preco
       })
    })
    const dados = await resposta.json()
    const stripe = Stripe("Sua chave Publica")
    stripe.redirectToCheckout({
      sessionId: dados.id
})


}
    
