//app
const carro = [];
const objetoCompras = {};
const pintarElementosCarrito = document.getElementById('frutasCarro');
const cantidadProductos = document.getElementById('cantidad');
const finalizaCompra = document.getElementById('finalizar');

const forms = document.querySelectorAll("form");

forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const data = new FormData(form);
        const [cantidad] = [...data.values()];
        console.log(cantidad)

        carro.push({
            cantidad,
            producto: e.target.querySelector("button").dataset.fruta,
        });

        pintarElementoEnHTML();
        console.log(carro);
    });
});

});
*/

const pintarElementoEnHTML = () => {
    //console.log(carro);
    pintarElementosCarrito.innerHTML = '';
    //cantidadProductos.value.innerHTML = '';
    //cantidadProductos.innerHTML = '';
    carro.forEach((fruta) => {
        pintarElementosCarrito.innerHTML+= `<li>${fruta.producto}, Cantidad = ${fruta.cantidad}</li>`
    })
};


finalizaCompra.addEventListener("click", (e) => {
    window.location.href = "/";
});
