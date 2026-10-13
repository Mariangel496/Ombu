// 1. CARROUSEL / BANNER DE LA PÁGINA HOME
const imagenesBanner = [
    "img/banner 2.jpeg",            
    "img/TRADICION QUE SE SIENTE.jpg" 
];
let indiceActual = 0;

function inicializarBanner() {
    const bannerImg = document.getElementById("banner-principal");
    if (!bannerImg) return; 


    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenesBanner.length;
        bannerImg.src = imagenesBanner[indiceActual];
    }, 4000);
}

// 2. BUSCADOR (CON LA LUPITA)
// CATÁLOGO COMPLETO DE PRODUCTOS PARA EL BUSCADOR
const catalogoProductos = [
    // MATES
    { nombre: "Mate Imperial Uruguayo",            categoria: "Mates",    url: "Mate1.html",    img: "img/mates/Mate con vasito.jpeg" },
    { nombre: "Mate Camionero Uruguayo Personalizado", categoria: "Mates", url: "Mate2.html",   img: "img/mates/Mate Camionero Uruguayo Personalizado.jpeg" },
    { nombre: "Mate Classic Stanley",              categoria: "Mates",    url: "Mate3.html",    img: "img/mates/Mate stanley.jpeg" },
    { nombre: "Mate Madera Blanca",                categoria: "Mates",    url: "Mate4.html",    img: "img/mates/Mate tallado madera blanco.png" },
    { nombre: "Mate Merlin",                       categoria: "Mates",    url: "Mate5.html",    img: "img/mates/Mate merlin.png" },
    { nombre: "Mate Imperial Madera",              categoria: "Mates",    url: "Mate6.html",    img: "img/mates/Mate Imperial Madera.jpeg" },
    { nombre: "Mate Imperial Ombu",                categoria: "Mates",    url: "Mate7.html",    img: "img/mates/Mate Classic Negro.jpeg" },
    { nombre: "Mate Classic Blanco",               categoria: "Mates",    url: "Mate8.html",    img: "img/mates/Mate Classic Blanco.jpeg" },
    { nombre: "Mate Classic Negro",                categoria: "Mates",    url: "Mate9.html",    img: "img/mates/Mate Classic Negro metal.jpeg" },
    { nombre: "Mate Imperial Uruguayo Blanco",     categoria: "Mates",    url: "mate10.html",   img: "img/mates/Mate imperial Uruguayo Blanco.jpeg" },
    { nombre: "Mate Imperial Calabaza Pulida",     categoria: "Mates",    url: "mate11.html",   img: "img/mates/Mate imperial Calabaza Pulida.jpeg" },
    { nombre: "Mate Tallado Madera Blanco",        categoria: "Mates",    url: "mate12.html",   img: "img/mates/Mate tallado madera blanco.jpeg" },
    // CANASTAS
    { nombre: "Canasta Matera Argentina",          categoria: "Canastas", url: "Canasta-1.html", img: "img/Canastas Materas/Canasta Matera Argentina.png" },
    { nombre: "Canasta Matera Ombú",               categoria: "Canastas", url: "Canasta-2.html", img: "img/Canastas Materas/Canasta matera Ombu.png" },
    { nombre: "Canasta Matera Boca Jrs",           categoria: "Canastas", url: "Canasta-3.html", img: "img/Canastas Materas/Canasta Matera Boca Jrs.png" },
    { nombre: "Canasta Matera Croco",              categoria: "Canastas", url: "Canasta-4.html", img: "img/Canastas Materas/Canasta Matera con textura.png" },
    { nombre: "Canasta Matera Negra",              categoria: "Canastas", url: "Canasta-5.html", img: "img/Canastas Materas/Canas Matera Negra.png" },
    { nombre: "Canasta Matera Simple",             categoria: "Canastas", url: "Canasta-6.html", img: "img/Canastas Materas/Canasta simple Eco-CUero.png" },
    { nombre: "Canasta Matera Ladrillo",           categoria: "Canastas", url: "Canasta-7.html", img: "img/Canastas Materas/Canasta Matera Ladrillo.png" },
    // MÁS
    { nombre: "Bombillas Customizadas Argentina",  categoria: "Más",      url: "Mas-1.html",    img: "img/Más/Bombillas customizadas argentina.png" },
    { nombre: "Yerbero de Cuero Gamuzado",         categoria: "Más",      url: "Mas-2.html",    img: "img/Más/Yerbero de cuero gamuzado.png" },
    { nombre: "Kit Termo + Mate Ombu",             categoria: "Más",      url: "Mas-3.html",    img: "img/Más/Termo verde ombu.png" },
    { nombre: "Kit Mate + Yerbero de Cuero Gamuzado", categoria: "Más",  url: "Mas-4.html",    img: "img/Más/Kit mate y yerbero.png" },
    { nombre: "Kit Mate + Termo + Matera",         categoria: "Más",      url: "Mas-5.html",    img: "img/Más/Kit Mate, Termo Matera.png" },
    { nombre: "Termo Beige",                       categoria: "Más",      url: "Mas-6.html",    img: "img/Más/Termo beige.png" },
    { nombre: "Kit Mate + Bombilla + Termo",       categoria: "Más",      url: "Mas-7.html",    img: "img/Más/combo-ombu.png" },
    { nombre: "Kit Mate Argentina",                categoria: "Más",      url: "Mas-8.html",    img: "img/Canastas Materas/Canasta Matera Argentina grande.png" },
    // YERBAS
    { nombre: "Yerba Ombú",                        categoria: "Yerbas",   url: "pag-yerbas.html", img: "img/yerba-ombu.jpeg" },
];

function normalizarTexto(texto) {
    return texto.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
}

function inicializarBuscador() {
    const formularioBuscar = document.querySelector(".buscador");
    if (!formularioBuscar) return;

    const inputBuscar = document.getElementById("input-busqueda");
    const contenedorSugerencias = document.getElementById("sugerencias-busqueda");

    inputBuscar.addEventListener("input", function () {
        const texto = normalizarTexto(this.value.trim());
        contenedorSugerencias.innerHTML = "";

        if (texto.length < 2) {
            contenedorSugerencias.style.display = "none";
            return;
        }

        const resultados = catalogoProductos.filter(p =>
            normalizarTexto(p.nombre).includes(texto) ||
            normalizarTexto(p.categoria).includes(texto)
        ).slice(0, 7); 

        if (resultados.length === 0) {
            contenedorSugerencias.style.display = "none";
            return;
        }

        resultados.forEach(producto => {
            const item = document.createElement("a");
            item.href = producto.url;
            item.className = "sugerencia-item";
            item.innerHTML = `
                <img src="${producto.img}" alt="${producto.nombre}" class="sugerencia-img">
                <div class="sugerencia-info">
                    <span class="sugerencia-nombre">${producto.nombre}</span>
                    <span class="sugerencia-categoria">${producto.categoria}</span>
                </div>
            `;
            contenedorSugerencias.appendChild(item);
        });

        contenedorSugerencias.style.display = "block";
    });


    document.addEventListener("click", function (e) {
        if (!formularioBuscar.contains(e.target)) {
            contenedorSugerencias.style.display = "none";
        }
    });

    inputBuscar.addEventListener("keydown", function (e) {
        const items = contenedorSugerencias.querySelectorAll(".sugerencia-item");
        const activo = contenedorSugerencias.querySelector(".sugerencia-item.activo");
        let indice = Array.from(items).indexOf(activo);

        if (e.key === "ArrowDown") {
            e.preventDefault();
            if (activo) activo.classList.remove("activo");
            const siguiente = items[indice + 1] || items[0];
            if (siguiente) siguiente.classList.add("activo");
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            if (activo) activo.classList.remove("activo");
            const anterior = items[indice - 1] || items[items.length - 1];
            if (anterior) anterior.classList.add("activo");
        } else if (e.key === "Enter") {
            if (activo) {
                e.preventDefault();
                window.location.href = activo.href;
            }
        } else if (e.key === "Escape") {
            contenedorSugerencias.style.display = "none";
        }
    });

    formularioBuscar.addEventListener("submit", function (event) {
        event.preventDefault();
        const activo = contenedorSugerencias.querySelector(".sugerencia-item.activo");
        if (activo) {
            window.location.href = activo.href;
            return;
        }

        const valor = normalizarTexto(inputBuscar.value.trim());
        if (valor === "") return;

        if (valor.includes("canasta") || valor.includes("matera")) {
            window.location.href = "pag-canastas.html";
        } else if (valor.includes("yerba")) {
            window.location.href = "pag-yerbas.html";
        } else if (valor.includes("mate")) {
            window.location.href = "pag-mates.html";
        } else {
            window.location.href = "pag-mas.html";
        }
    });
}

// 3. SISTEMA DE LOGIN VISUAL (MODAL SIN ALERTS)
function inicializarLogin() {
    const botonIconoUsuario = document.querySelector(".usuario");
    const modal = document.getElementById("modal-login");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    const formLogin = document.getElementById("form-login-real");
    const modalContenido = document.querySelector(".modal-contenido");

    if (!botonIconoUsuario || !modal || !btnCerrar || !formLogin || !modalContenido) return;


    const disenoOriginalFormulario = modalContenido.innerHTML;


    function activarEventosFormulario() {
        const nuevoBtnCerrar = document.getElementById("btn-cerrar-modal");
        const nuevoFormLogin = document.getElementById("form-login-real");

        nuevoBtnCerrar.addEventListener("click", () => {
            modal.style.display = "none";
        });

        nuevoFormLogin.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value.trim();
            const nombreUsuario = email.split('@')[0]; 

            modalContenido.innerHTML = `
                <span id="btn-cerrar-modal-exito" class="cerrar-modal">&times;</span>
                <div class="login-exito-contenedor">
                    <div class="icono-check">✓</div>
                    <h2>¡Bienvenido, ${nombreUsuario}!</h2>
                    <p>Has iniciado sesión correctamente en Ombú Mates.</p>
                    <p class="subtexto-login">Ya podés continuar con tus compras tradicionales.</p>
                    <button id="btn-entendido-login" class="btn-enviar-login">Entendido</button>
                </div>
            `;

            botonIconoUsuario.title = "Sesión iniciada: " + email;

            document.getElementById("btn-cerrar-modal-exito").addEventListener("click", cerrarYRestaurar);
            document.getElementById("btn-entendido-login").addEventListener("click", cerrarYRestaurar);
        });
    }

    function cerrarYRestaurar() {
        modal.style.display = "none";
        setTimeout(() => {
            modalContenido.innerHTML = disenoOriginalFormulario;
            activarEventosFormulario();
        }, 300);
    }

    botonIconoUsuario.addEventListener("click", (e) => {
        e.preventDefault();
        modal.style.display = "flex";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            cerrarYRestaurar();
        }
    });

    activarEventosFormulario();
}
// 4. CONTADOR DE CANTIDAD (Adaptado a Mate1.html)
let cantidadSeleccionada = 1;

function inicializarContadorProducto() {
    const botonesSigno = document.querySelectorAll(".signo-cantidad");
    const inputCantidad = document.querySelector(".numero-cantidad");

    if (botonesSigno.length < 2 || !inputCantidad) return;

    const btnMenos = botonesSigno[0];
    const btnMas = botonesSigno[1];

    cantidadSeleccionada = 1;
    inputCantidad.value = cantidadSeleccionada;

    btnMenos.addEventListener("click", () => {
        if (cantidadSeleccionada > 1) {
            cantidadSeleccionada--;
            inputCantidad.value = cantidadSeleccionada;
        }
    });

    btnMas.addEventListener("click", () => {
        cantidadSeleccionada++;
        inputCantidad.value = cantidadSeleccionada;
    });

    inputCantidad.addEventListener("change", (e) => {
        let valor = parseInt(e.target.value);
        if (isNaN(valor) || valor < 1) {
            cantidadSeleccionada = 1;
        } else {
            cantidadSeleccionada = valor;
        }
        inputCantidad.value = cantidadSeleccionada;
    });
}

// 5. CARRITO DE COMPRAS VISUAL (SIDEBAR SIN ALERTS)
let carrito = JSON.parse(localStorage.getItem("carrito_ombu")) || [];

function inicializarCarrito() {
    const sidebar = document.getElementById("carrito-sidebar");
    const btnCerrar = document.getElementById("btn-cerrar-carrito");
    const btnComprar = document.querySelector(".Comprar");
    const btnVaciar = document.getElementById("btn-vaciar-carrito");
    const btnFinalizar = document.getElementById("btn-finalizar-compra");

    const botonCarritoHeader = document.getElementById("btn-abrir-carrito");

    if (!sidebar || !btnCerrar) return;

    function abrirCarrito() {
        sidebar.classList.add("abierto");
        renderizarCarrito();
    }

    function cerrarCarrito() {
        sidebar.classList.remove("abierto");
    }

    btnCerrar.addEventListener("click", cerrarCarrito);
    if (botonCarritoHeader) {
        botonCarritoHeader.addEventListener("click", abrirCarrito);
    }

    if (btnComprar) {
        btnComprar.addEventListener("click", () => {
            const nombreProducto = document.querySelector(".titulo-producto")?.textContent.trim() || "Mate Imperial Uruguayo";
            const precioTexto = document.querySelector(".descripcion-producto p")?.textContent.trim() || "$20.000,00";
            const imagenSrc = document.querySelector(".presentacion-mate")?.src || "img/mates/Mate con vasito.jpeg";
            
            const precioNum = parseFloat(precioTexto.replace("$", "").replace(/\./g, "").replace(",", "."));

            const productoParaCarrito = {
                nombre: nombreProducto,
                precio: precioNum,
                cantidad: cantidadSeleccionada,
                imagen: imagenSrc
            };

            const existe = carrito.find(item => item.nombre === productoParaCarrito.nombre);
            if (existe) {
                existe.cantidad += productoParaCarrito.cantidad;
            } else {
                carrito.push(productoParaCarrito);
            }

            localStorage.setItem("carrito_ombu", JSON.stringify(carrito));
            
            abrirCarrito();
        });
    }

    if (btnVaciar) {
        btnVaciar.addEventListener("click", () => {
            carrito = [];
            localStorage.removeItem("carrito_ombu");
            renderizarCarrito();
        });
    }

    if (btnFinalizar) {
        btnFinalizar.addEventListener("click", () => {
            if (carrito.length === 0) return;
            
            const contenedor = document.getElementById("carrito-items-contenedor");
            contenedor.innerHTML = `
                <div style="text-align: center; padding: 30px 10px;">
                    <div style="width: 60px; height: 60px; background-color: #516918; color: white; border-radius: 50%; font-size: 30px; line-height: 60px; margin: 0 auto 15px auto;">✓</div>
                    <h3 style="color: #516918;">¡Pedido Recibido!</h3>
                    <p style="font-size: 14px; color: #505050;">Muchas gracias por comprar en Ombú Mates. Estaremos procesando tu envío.</p>
                </div>
            `;
            
            carrito = [];
            localStorage.removeItem("carrito_ombu");
            document.getElementById("carrito-total-monto").textContent = "$0,00";
        });
    }
}

function renderizarCarrito() {
    const contenedor = document.getElementById("carrito-items-contenedor");
    const totalMontoDisplay = document.getElementById("carrito-total-monto");

    if (!contenedor || !totalMontoDisplay) return;

    contenedor.innerHTML = "";
    let totalGeneral = 0;

    if (carrito.length === 0) {
        contenedor.innerHTML = `<p class="carrito-vacio-texto">Tu carrito está vacío.</p>`;
        totalMontoDisplay.textContent = "$0,00";
        return;
    }

    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        totalGeneral += subtotal;

        const tarjetaHTML = `
            <div class="item-carrito-tarjeta">
                <img src="${item.imagen}" alt="${item.nombre}">
                <div class="item-carrito-detalles">
                    <h4>${item.nombre}</h4>
                    <p>${item.cantidad}x - $${subtotal.toLocaleString('es-AR', { minimumFractionDigits: 2 })}</p>
                </div>
                <button class="btn-eliminar-item" data-index="${index}">&times;</button>
            </div>
        `;
        contenedor.insertAdjacentHTML("beforeend", tarjetaHTML);
    });

    totalMontoDisplay.textContent = `$${totalGeneral.toLocaleString('es-AR', { minimumFractionDigits: 2 })}`;

    const botonesEliminar = contenedor.querySelectorAll(".btn-eliminar-item");
    botonesEliminar.forEach(btn => {
        btn.addEventListener("click", (e) => {
            const indexABorrar = parseInt(e.target.getAttribute("data-index"));
            carrito.splice(indexABorrar, 1);
            localStorage.setItem("carrito_ombu", JSON.stringify(carrito));
            renderizarCarrito(); 
        });
    });
}

// DISPARADOR GLOBAL AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
    inicializarBanner();
    inicializarBuscador();
    inicializarLogin();
    inicializarContadorProducto();
    inicializarCarrito();
});