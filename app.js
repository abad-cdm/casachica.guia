// ======================================================
// CASA CHICA — V2 (con Supabase)
// ======================================================

const CASA_CHICA = {
    nombre: "Casa Chica",
    lat: 36.7597719992591,
    lon: -6.395568464491491
};

let lugares = [];
let pantallaOrigen = 'inicio';
let mapaCompleto = null;
let miniMapa = null;

// ======================================================
// FUNCIONES DE SUPABASE
// ======================================================

async function cargarLugaresDesdeSupabase() {
    try {
        const { data, error } = await window.supabaseClient
            .from('places')
            .select('*')
            .eq('activo', true)
            .order('nombre');

        if (error) {
            console.error('Error al cargar lugares:', error);
            return [];
        }
        return data;
    } catch (err) {
        console.error('Error en la conexión con Supabase:', err);
        return [];
    }
}

// ======================================================
// FAVORITOS (localStorage)
// ======================================================

function obtenerFavoritos() {
    try {
        const guardado = localStorage.getItem("casachica_favoritos");
        return guardado ? JSON.parse(guardado) : [];
    } catch (error) {
        return [];
    }
}

function esFavorito(id) {
    return obtenerFavoritos().includes(id);
}

function alternarFavorito(id) {
    const favoritos = obtenerFavoritos();
    const indice = favoritos.indexOf(id);
    if (indice === -1) {
        favoritos.push(id);
    } else {
        favoritos.splice(indice, 1);
    }
    localStorage.setItem("casachica_favoritos", JSON.stringify(favoritos));
}

// ======================================================
// NAVEGACIÓN ENTRE PANTALLAS
// ======================================================

function mostrarPantalla(nombre) {
    document.querySelectorAll(".screen").forEach(function(pantalla) {
        pantalla.classList.toggle("active", pantalla.dataset.screen === nombre);
    });

    document.querySelectorAll(".nav-item").forEach(function(item) {
        item.classList.toggle("active", item.dataset.screenTarget === nombre);
    });

    window.scrollTo(0, 0);

    if (nombre === "mapa") {
        prepararMapaCompleto();
    }

    if (nombre === "favoritos") {
        renderizarFavoritos();
    }
}

// Eventos para navegación desde la barra inferior y tiles
document.querySelectorAll("[data-screen-target]").forEach(function(el) {
    el.addEventListener("click", function() {
        mostrarPantalla(el.dataset.screenTarget);
    });
});

// Eventos para botones de volver (data-back)
document.querySelectorAll("[data-back]").forEach(function(el) {
    el.addEventListener("click", function() {
        mostrarPantalla(el.dataset.back);
    });
});

// ======================================================
// GRID DE CATEGORÍAS
// ======================================================

const CATEGORY_LABELS = {
    sitios: "Sitios",
    quehacer: "Qué hacer",
    comida: "Comida"
};

document.querySelectorAll(".glass-tile[data-category]").forEach(function(tile) {
    tile.addEventListener("click", function() {
        abrirCategoria(tile.dataset.category);
    });
});

function abrirCategoria(categoria) {
    document.getElementById("categoryTitle").textContent = CATEGORY_LABELS[categoria] || "Lugares";

    const filtrados = lugares.filter(function(lugar) {
        return lugar.categoria === categoria;
    });

    renderizarListaLugares(filtrados, document.getElementById("categoryList"));
    pantallaOrigen = 'categoria';
    mostrarPantalla("categoria");
}

// ======================================================
// RENDER: LISTA DE LUGARES
// ======================================================

function renderizarListaLugares(listaLugares, contenedor) {
    contenedor.innerHTML = "";

    if (!listaLugares || listaLugares.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">🧭</div>
                <p>No hemos encontrado nada aquí todavía.</p>
            </div>
        `;
        return;
    }

    listaLugares.forEach(function(lugar) {
        const fila = document.createElement("div");
        fila.className = "place-row";

        const esFav = esFavorito(lugar.id);

        fila.innerHTML = `
            <div class="place-row-photo">${lugar.emoji || '📍'}</div>
            <div class="place-row-body">
                <h3>${lugar.nombre}</h3>
                <div class="place-row-tags">
                    <span>${lugar.tipo || ''}</span>
                    <span>·</span>
                    <span>${lugar.distancia || '?'}</span>
                    ${lugar.recomendado ? '<span class="place-row-star">★ Recomendado</span>' : ''}
                </div>
            </div>
            <button class="place-row-fav ${esFav ? 'active' : ''}" aria-label="Guardar en favoritos">${esFav ? '★' : '☆'}</button>
        `;

        fila.querySelector(".place-row-fav").addEventListener("click", function(evento) {
            evento.stopPropagation();
            alternarFavorito(lugar.id);
            const boton = evento.currentTarget;
            const activo = esFavorito(lugar.id);
            boton.classList.toggle("active", activo);
            boton.textContent = activo ? "★" : "☆";

            if (contenedor.id === "favoritesList") {
                renderizarFavoritos();
            }
        });

        fila.addEventListener("click", function() {
            abrirFicha(lugar.id);
        });

        contenedor.appendChild(fila);
    });
}

// ======================================================
// FAVORITOS
// ======================================================

function renderizarFavoritos() {
    const favoritosIds = obtenerFavoritos();
    const favoritosLugares = lugares.filter(function(lugar) {
        return favoritosIds.includes(lugar.id);
    });
    renderizarListaLugares(favoritosLugares, document.getElementById("favoritesList"));
}

// ======================================================
// FICHA DE LUGAR
// ======================================================

let lugarActual = null;

function abrirFicha(id) {
    const lugar = lugares.find(function(p) { return p.id === id; });
    if (!lugar) return;

    lugarActual = lugar;

    const pantallaActiva = document.querySelector('.screen.active');
    if (pantallaActiva) {
        pantallaOrigen = pantallaActiva.dataset.screen || 'inicio';
    } else {
        pantallaOrigen = 'inicio';
    }

    document.getElementById("detailPhoto").textContent = lugar.emoji || '📍';
    document.getElementById("detailCategoria").textContent = lugar.tipo || 'Lugar';
    document.getElementById("detailNombre").textContent = lugar.nombre;
    document.getElementById("detailBadge").style.display = lugar.recomendado ? "inline-block" : "none";
    document.getElementById("detailDescripcion").textContent = lugar.descripcion || 'Sin descripción';
    document.getElementById("detailDistancia").textContent = "📍 " + (lugar.distancia || '?');
    document.getElementById("detailPrecio").textContent = "💰 " + (lugar.precio || 'No especificado');
    document.getElementById("detailHorario").textContent = "🕒 " + (lugar.horario || 'Consultar');

    const botonFav = document.getElementById("detailFavorito");
    const activo = esFavorito(lugar.id);
    botonFav.classList.toggle("active", activo);
    botonFav.textContent = activo ? "★" : "☆";

    mostrarPantalla("ficha");
}

document.getElementById("backFromDetail").addEventListener("click", function() {
    if (pantallaOrigen === 'ficha' || !pantallaOrigen) {
        mostrarPantalla('inicio');
    } else {
        mostrarPantalla(pantallaOrigen);
    }
});

document.getElementById("detailFavorito").addEventListener("click", function() {
    if (!lugarActual) return;
    alternarFavorito(lugarActual.id);
    const activo = esFavorito(lugarActual.id);
    this.classList.toggle("active", activo);
    this.textContent = activo ? "★" : "☆";
});

document.getElementById("detailComoLlegar").addEventListener("click", function() {
    if (!lugarActual) return;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            const url = "https://www.openstreetmap.org/directions?" +
                "from=" + pos.coords.latitude + "," + pos.coords.longitude +
                "&to=" + lugarActual.lat + "," + lugarActual.lon;
            window.open(url, "_blank");
        }, function() {
            const url = "https://www.openstreetmap.org/directions?" +
                "from=" + CASA_CHICA.lat + "," + CASA_CHICA.lon +
                "&to=" + lugarActual.lat + "," + lugarActual.lon;
            window.open(url, "_blank");
        });
    } else {
        const url = "https://www.openstreetmap.org/directions?" +
            "from=" + CASA_CHICA.lat + "," + CASA_CHICA.lon +
            "&to=" + lugarActual.lat + "," + lugarActual.lon;
        window.open(url, "_blank");
    }
});

document.getElementById("detailVerMapa").addEventListener("click", function() {
    if (!lugarActual) return;
    mostrarPantalla("mapa");
    if (mapaCompleto) {
        mapaCompleto.setView([lugarActual.lat, lugarActual.lon], 15);
    }
});

// ======================================================
// BUSCADOR
// ======================================================

document.getElementById("searchInput").addEventListener("input", function(evento) {
    const texto = evento.target.value.trim().toLowerCase();
    if (texto === "") return;

    const resultados = lugares.filter(function(lugar) {
        return lugar.nombre.toLowerCase().includes(texto) ||
               (lugar.tipo && lugar.tipo.toLowerCase().includes(texto));
    });

    renderizarListaLugares(resultados, document.getElementById("searchList"));
    pantallaOrigen = 'busqueda';
    mostrarPantalla("busqueda");
});

// ======================================================
// RECOMENDADOS (carrusel)
// ======================================================

function renderizarRecomendados() {
    const contenedor = document.getElementById("recommendedCarousel");
    contenedor.innerHTML = '';
    const recomendados = lugares.filter(function(lugar) {
        return lugar.recomendado === true;
    });

    if (recomendados.length === 0) {
        contenedor.innerHTML = '<p style="padding:10px;">No hay recomendados aún.</p>';
        return;
    }

    recomendados.forEach(function(lugar) {
        const tarjeta = document.createElement("div");
        tarjeta.className = "rec-card";
        tarjeta.innerHTML = `
            <div class="rec-card-photo">
                <span class="rec-card-badge">★ Casa Chica</span>
                ${lugar.emoji || '📍'}
            </div>
            <div class="rec-card-body">
                <h3>${lugar.nombre}</h3>
                <p>${lugar.tipo || ''} · ${lugar.distancia || ''}</p>
            </div>
        `;
        tarjeta.addEventListener("click", function() {
            abrirFicha(lugar.id);
        });
        contenedor.appendChild(tarjeta);
    });
}

// ======================================================
// MAPAS (Leaflet + OpenStreetMap)
// ======================================================

function crearIconoLugar(emoji, esCasaChica) {
    return L.divIcon({
        className: "marcador-lugar",
        html: `<span style="display:flex;align-items:center;justify-content:center;width:${esCasaChica ? 40 : 32}px;height:${esCasaChica ? 40 : 32}px;border-radius:50%;background:${esCasaChica ? '#1F2A33' : '#fff'};border:2px solid #fff;box-shadow:0 4px 10px rgba(0,0,0,0.3);font-size:${esCasaChica ? 18 : 15}px;">${emoji}</span>`,
        iconSize: [esCasaChica ? 40 : 32, esCasaChica ? 40 : 32],
        iconAnchor: [esCasaChica ? 20 : 16, esCasaChica ? 20 : 16]
    });
}

function añadirMarcadores(mapa) {
    L.marker([CASA_CHICA.lat, CASA_CHICA.lon], { icon: crearIconoLugar("🏠", true) })
        .addTo(mapa)
        .bindPopup("<strong>" + CASA_CHICA.nombre + "</strong><br>Tu apartamento");

    lugares.forEach(function(lugar) {
        const marcador = L.marker([lugar.lat, lugar.lon], { icon: crearIconoLugar(lugar.emoji || '📍', false) })
            .addTo(mapa);

        const popupContent = `
            <strong>${lugar.nombre}</strong><br>
            ${lugar.tipo || ''} · ${lugar.distancia || ''}<br>
            <button class="popup-ficha-btn" data-id="${lugar.id}" style="margin-top:6px;background:#1F2A33;color:#fff;border:none;padding:4px 12px;border-radius:12px;cursor:pointer;">Ver ficha</button>
        `;
        marcador.bindPopup(popupContent);

        marcador.on('popupopen', function() {
            const btn = document.querySelector('.popup-ficha-btn');
            if (btn) {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const id = this.dataset.id;
                    abrirFicha(id);
                    mapa.closePopup();
                });
            }
        });
    });
}

function inicializarMiniMapa() {
    if (miniMapa) {
        setTimeout(function() { miniMapa.invalidateSize(); }, 50);
        return;
    }

    miniMapa = L.map("miniMap", {
        zoomControl: false,
        dragging: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        attributionControl: false
    }).setView([CASA_CHICA.lat, CASA_CHICA.lon], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(miniMapa);
    añadirMarcadores(miniMapa);
}

function prepararMapaCompleto() {
    if (mapaCompleto) {
        setTimeout(function() { mapaCompleto.invalidateSize(); }, 50);
        return;
    }

    mapaCompleto = L.map("fullMap").setView([CASA_CHICA.lat, CASA_CHICA.lon], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(mapaCompleto);

    añadirMarcadores(mapaCompleto);
}

document.getElementById("openFullMap").addEventListener("click", function() {
    mostrarPantalla("mapa");
});

// ======================================================
// ARRANQUE DE LA APP
// ======================================================

async function iniciarApp() {
    document.getElementById('loadingIndicator').style.display = 'block';

    const datos = await cargarLugaresDesdeSupabase();
    lugares = datos;

    document.getElementById('loadingIndicator').style.display = 'none';

    if (lugares.length === 0) {
        console.warn('No se cargaron lugares. Revisa la conexión con Supabase.');
    }

    renderizarRecomendados();
    inicializarMiniMapa();
}

iniciarApp();