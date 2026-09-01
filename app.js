// ======================================================
// CASA CHICA — V2 (con Supabase y sin planificador de rutas)
// ======================================================

const CASA_CHICA = {
    nombre: "Casa Chica",
    lat: 36.7597719992591,
    lon: -6.395568464491491
};

// ======================================================
// ICONOS (SVG de línea, sustituyen a los emojis)
// ======================================================

const ICONOS = {
    pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-7.58 7-12a7 7 0 1 0-14 0c0 4.42 7 12 7 12z"/><circle cx="12" cy="9" r="2.4"/></svg>',
    brujula: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9.2l-2 5.6-5.6 2 2-5.6z"/></svg>',
    comida: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 2v7a2 2 0 0 0 4 0V2"/><path d="M9 9v13"/><path d="M17 2c-1.4 0-2.5 1.8-2.5 4s.6 3.6 1.5 4v11"/></svg>',
    mapa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z"/><path d="M9 3v16M15 5v16"/></svg>',
    estrellaLlena: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.2-4.7 6.9-.7z"/></svg>',
    estrellaVacia: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.6 5.9 21l1.5-6.8-5.2-4.7 6.9-.7z"/></svg>',
    camara: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.2"/></svg>',
    moneda: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 15.2c.4.7 1.3 1.1 2.3 1.1 1.5 0 2.7-.8 2.7-2 0-1.1-1-1.6-2.7-2-1.7-.4-2.7-.9-2.7-2 0-1.2 1.2-2 2.7-2 1 0 1.9.4 2.3 1.1"/><path d="M12 6.5v11"/></svg>',
    reloj: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.2 2"/></svg>',
    mas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>',
    cerrar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>',
    puerta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M13 4H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7"/><path d="M16 12h5m0 0-2.5-2.5M21 12l-2.5 2.5"/></svg>',
    candado: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    inicio: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11.5 12 4l8 7.5"/><path d="M6 10v9a1 1 0 0 0 1 1h3v-6h4v6h3a1 1 0 0 0 1-1v-9"/></svg>',
    cuenta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3.4"/><path d="M5 20c0-3.3 3.1-6 7-6s7 2.7 7 6"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12.5l5 5L20 6"/></svg>',
    exito: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.6 2.6L16 9.5"/></svg>',
    lupa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.7-4.7"/></svg>',
    granada: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.2c.5.6 1 1.3 1 2 0 .5-.3.8-.6 1.1 3.4.5 6 3.4 6 6.9 0 4-3.3 8.6-6.4 9.6-.9.3-1.7.3-2.6 0C6.3 20.6 3 16 3 12c0-3.5 2.6-6.4 6-6.9-.3-.3-.6-.6-.6-1.1 0-.7.5-1.4 1-2 .3.4.6.8.6 1.3 0 .3-.1.5-.3.7.4-.1.9-.1 1.3-.1.4 0 .9 0 1.3.1-.2-.2-.3-.4-.3-.7 0-.5.3-.9.6-1.3z"/><circle cx="9.5" cy="12.5" r="1" fill="#fff"/><circle cx="12.5" cy="10.5" r="1" fill="#fff"/><circle cx="11.5" cy="14.5" r="1" fill="#fff"/><circle cx="14.5" cy="13" r="1" fill="#fff"/></svg>'
};

// Icono por categoría, para sustituir al emoji libre que se guardaba antes
// (se sigue guardando el campo "emoji" en Supabase por compatibilidad, pero
// ya no se usa para pintar el icono en pantalla).
function iconoPorCategoria(categoria) {
    if (categoria === 'comida') return ICONOS.comida;
    if (categoria === 'quehacer') return ICONOS.brujula;
    return ICONOS.pin;
}

let lugares = [];
let pantallaOrigen = 'inicio';
let mapaCompleto = null;
let miniMapa = null;
let rutaControl = null;
let marcadoresGrupo = null;

// ======================================================
// SPLASH
// ======================================================

const fotosCreadoras = [
    'https://images.unsplash.com/photo-1589156280159-27698a951943?w=600&h=900&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=900&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&h=900&fit=crop&crop=center',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&h=900&fit=crop&crop=center'
];

let splashInterval = null;
let splashIndex = 0;

function iniciarCarruselSplash() {
    const slider = document.getElementById('splashSlider');
    const dotsContainer = document.getElementById('splashDots');

    slider.innerHTML = '';
    dotsContainer.innerHTML = '';

    fotosCreadoras.forEach((url, i) => {
        const slide = document.createElement('div');
        slide.className = 'splash-slide';
        slide.style.backgroundImage = `url(${url})`;
        slide.dataset.index = i;
        slider.appendChild(slide);

        const dot = document.createElement('span');
        dot.className = 'splash-dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', () => irASlide(i));
        dotsContainer.appendChild(dot);
    });

    irASlide(0);

    if (splashInterval) clearInterval(splashInterval);
    splashInterval = setInterval(() => {
        const next = (splashIndex + 1) % fotosCreadoras.length;
        irASlide(next);
    }, 4000);
}

function irASlide(index) {
    splashIndex = index;
    const slider = document.getElementById('splashSlider');
    slider.style.transform = `translateX(-${index * 100}%)`;

    document.querySelectorAll('.splash-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

document.getElementById('splashBtn').addEventListener('click', function() {
    if (splashInterval) {
        clearInterval(splashInterval);
        splashInterval = null;
    }
    const splashScreen = document.querySelector('[data-screen="splash"]');
    const inicioScreen = document.querySelector('[data-screen="inicio"]');
    splashScreen.classList.remove('active');
    inicioScreen.classList.add('active');

    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.screenTarget === 'inicio');
    });

    if (lugares.length === 0) {
        cargarDatosInicio();
    } else {
        renderizarRecomendados();
        inicializarMiniMapa();
    }
});

// ======================================================
// SUPABASE
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

async function cargarTodosLosLugares() {
    try {
        const { data, error } = await window.supabaseClient
            .from('places')
            .select('*')
            .order('nombre');

        if (error) {
            console.error('Error al cargar todos los lugares:', error);
            return [];
        }
        return data;
    } catch (err) {
        console.error('Error en la conexión con Supabase:', err);
        return [];
    }
}

// ======================================================
// FAVORITOS (localStorage si no hay cuenta, Supabase si la hay)
// ======================================================

let favoritosCache = [];

function cargarFavoritosCacheLocal() {
    try {
        const guardado = localStorage.getItem("casachica_favoritos");
        favoritosCache = guardado ? JSON.parse(guardado) : [];
    } catch (error) {
        favoritosCache = [];
    }
}

async function cargarFavoritosCacheSupabase() {
    if (!sesionUsuario) {
        favoritosCache = [];
        return;
    }
    const { data, error } = await window.supabaseClient
        .from('favorites')
        .select('place_id')
        .eq('user_id', sesionUsuario.id);

    if (error) {
        console.error('Error al cargar favoritos:', error);
        favoritosCache = [];
        return;
    }
    favoritosCache = data.map(function(fila) { return fila.place_id; });
}

// Si el usuario tenía favoritos guardados en este móvil antes de tener
// cuenta, los volcamos a Supabase la primera vez que inicia sesión.
async function migrarFavoritosLocalesASupabase() {
    if (!sesionUsuario) return;

    let localesGuardados = [];
    try {
        const guardado = localStorage.getItem("casachica_favoritos");
        localesGuardados = guardado ? JSON.parse(guardado) : [];
    } catch (error) {
        localesGuardados = [];
    }

    await cargarFavoritosCacheSupabase();

    const nuevos = localesGuardados.filter(function(id) {
        return !favoritosCache.includes(id);
    });

    if (nuevos.length > 0) {
        const filas = nuevos.map(function(id) {
            return { user_id: sesionUsuario.id, place_id: id };
        });
        const { error } = await window.supabaseClient.from('favorites').insert(filas);
        if (!error) {
            favoritosCache = favoritosCache.concat(nuevos);
        } else {
            console.error('Error al migrar favoritos locales:', error);
        }
    }

    localStorage.removeItem("casachica_favoritos");
}

function esFavorito(id) {
    return favoritosCache.includes(id);
}

async function alternarFavorito(id) {
    const indice = favoritosCache.indexOf(id);
    const eraFavorito = indice !== -1;

    // Actualización optimista: la interfaz no espera a la red.
    if (eraFavorito) {
        favoritosCache.splice(indice, 1);
    } else {
        favoritosCache.push(id);
    }

    if (sesionUsuario) {
        try {
            if (eraFavorito) {
                const { error } = await window.supabaseClient
                    .from('favorites')
                    .delete()
                    .eq('user_id', sesionUsuario.id)
                    .eq('place_id', id);
                if (error) console.error('Error al quitar favorito:', error);
            } else {
                const { error } = await window.supabaseClient
                    .from('favorites')
                    .insert([{ user_id: sesionUsuario.id, place_id: id }]);
                if (error) console.error('Error al guardar favorito:', error);
            }
        } catch (err) {
            console.error('Error de conexión al guardar favorito:', err);
        }
    } else {
        localStorage.setItem("casachica_favoritos", JSON.stringify(favoritosCache));
    }
}

// ======================================================
// NAVEGACIÓN
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
        document.getElementById('addPlacePanel').classList.remove('visible');
        document.getElementById('pinModeBanner').classList.remove('visible');
    }

    if (nombre === "favoritos") {
        renderizarFavoritos();
    }

    if (nombre === "admin") {
        if (!esAdmin()) {
            mostrarPantalla("inicio");
            return;
        }
        cargarTodosLosLugaresAdmin();
    }
}

document.querySelectorAll("[data-screen-target]").forEach(function(el) {
    el.addEventListener("click", function() {
        if (el.dataset.screenTarget === 'inicio') {
            const splash = document.querySelector('[data-screen="splash"]');
            if (splash && splash.classList.contains('active')) {
                document.getElementById('splashBtn').click();
                return;
            }
        }
        mostrarPantalla(el.dataset.screenTarget);
    });
});

document.querySelectorAll("[data-back]").forEach(function(el) {
    el.addEventListener("click", function() {
        mostrarPantalla(el.dataset.back);
    });
});

// ======================================================
// CATEGORÍAS
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
// RENDER LISTA
// ======================================================

function renderizarListaLugares(listaLugares, contenedor) {
    contenedor.innerHTML = "";

    if (!listaLugares || listaLugares.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">${ICONOS.brujula}</div>
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
            <div class="place-row-photo">${iconoPorCategoria(lugar.categoria)}</div>
            <div class="place-row-body">
                <h3>${lugar.nombre}</h3>
                <div class="place-row-tags">
                    <span>${lugar.tipo || ''}</span>
                    <span>·</span>
                    <span>${lugar.distancia || '?'}</span>
                    ${lugar.recomendado ? '<span class="place-row-star">' + ICONOS.estrellaLlena + ' Recomendado</span>' : ''}
                </div>
            </div>
            <button class="place-row-fav ${esFav ? 'active' : ''}" aria-label="Guardar en favoritos">${esFav ? ICONOS.estrellaLlena : ICONOS.estrellaVacia}</button>
        `;

        fila.querySelector(".place-row-fav").addEventListener("click", function(evento) {
            evento.stopPropagation();
            alternarFavorito(lugar.id);
            const boton = evento.currentTarget;
            const activo = esFavorito(lugar.id);
            boton.classList.toggle("active", activo);
            boton.innerHTML = activo ? ICONOS.estrellaLlena : ICONOS.estrellaVacia;

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
    const favoritosLugares = lugares.filter(function(lugar) {
        return favoritosCache.includes(lugar.id);
    });
    renderizarListaLugares(favoritosLugares, document.getElementById("favoritesList"));
}

// ======================================================
// FICHA
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

    document.getElementById("detailPhoto").innerHTML = iconoPorCategoria(lugar.categoria);
    document.getElementById("detailCategoria").textContent = lugar.tipo || 'Lugar';
    document.getElementById("detailNombre").textContent = lugar.nombre;
    document.getElementById("detailBadge").style.display = lugar.recomendado ? "inline-flex" : "none";
    document.getElementById("detailDescripcion").textContent = lugar.descripcion || 'Sin descripción';
    document.getElementById("detailDistancia").innerHTML = '<span class="meta-icon">' + ICONOS.pin + '</span>' + (lugar.distancia || '?');
    document.getElementById("detailPrecio").innerHTML = '<span class="meta-icon">' + ICONOS.moneda + '</span>' + (lugar.precio || 'No especificado');
    document.getElementById("detailHorario").innerHTML = '<span class="meta-icon">' + ICONOS.reloj + '</span>' + (lugar.horario || 'Consultar');

    const botonFav = document.getElementById("detailFavorito");
    const activo = esFavorito(lugar.id);
    botonFav.classList.toggle("active", activo);
    botonFav.innerHTML = activo ? ICONOS.estrellaLlena : ICONOS.estrellaVacia;

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
    this.innerHTML = activo ? ICONOS.estrellaLlena : ICONOS.estrellaVacia;
});

document.getElementById("detailComoLlegar").addEventListener("click", function() {
    if (!lugarActual) return;

    pantallaOrigen = 'ficha';
    mostrarPantalla("mapa");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            trazarRutaSimple(
                { lat: pos.coords.latitude, lon: pos.coords.longitude },
                lugarActual
            );
        }, function() {
            trazarRutaSimple(CASA_CHICA, lugarActual);
        }, { timeout: 5000 });
    } else {
        trazarRutaSimple(CASA_CHICA, lugarActual);
    }
});

document.getElementById("detailVerMapa").addEventListener("click", function() {
    if (!lugarActual) return;
    pantallaOrigen = 'ficha';
    mostrarPantalla("mapa");
    if (mapaCompleto) {
        mapaCompleto.setView([lugarActual.lat, lugarActual.lon], 15);
    }
});

// ======================================================
// BUSCADOR
// ======================================================

const searchInput = document.getElementById('searchInput');
const searchResultsContainer = document.getElementById('searchResultsContainer');
const normalContent = document.getElementById('normalContent');

searchInput.addEventListener('input', function(evento) {
    const texto = evento.target.value.trim().toLowerCase();

    if (texto === '') {
        searchResultsContainer.style.display = 'none';
        normalContent.style.display = 'block';
        return;
    }

    const resultados = lugares.filter(function(lugar) {
        return lugar.nombre.toLowerCase().includes(texto) ||
               (lugar.tipo && lugar.tipo.toLowerCase().includes(texto));
    });

    normalContent.style.display = 'none';
    searchResultsContainer.style.display = 'block';
    renderizarListaLugares(resultados, document.getElementById('searchList'));
});

searchInput.addEventListener('focus', function() {
    const texto = this.value.trim();
    if (texto !== '') {
        searchInput.dispatchEvent(new Event('input'));
    }
});

// ======================================================
// RECOMENDADOS
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
                <span class="rec-card-badge">${ICONOS.estrellaLlena} Casa Chica</span>
                ${iconoPorCategoria(lugar.categoria)}
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
// MAPAS
// ======================================================

function crearIconoLugar(iconoSvg, esCasaChica) {
    return L.divIcon({
        className: "marcador-lugar",
        html: `<span class="marcador-lugar-pin" style="display:flex;align-items:center;justify-content:center;width:${esCasaChica ? 40 : 32}px;height:${esCasaChica ? 40 : 32}px;border-radius:50%;background:${esCasaChica ? 'var(--garnet)' : '#fff'};border:2px solid #fff;box-shadow:0 4px 10px rgba(74,15,28,0.25);color:${esCasaChica ? '#fff' : 'var(--garnet)'};"><span style="display:block;width:${esCasaChica ? 20 : 16}px;height:${esCasaChica ? 20 : 16}px;">${iconoSvg}</span></span>`,
        iconSize: [esCasaChica ? 40 : 32, esCasaChica ? 40 : 32],
        iconAnchor: [esCasaChica ? 20 : 16, esCasaChica ? 20 : 16]
    });
}

function añadirMarcadores(mapa, grupo) {
    const target = grupo || mapa;

    L.marker([CASA_CHICA.lat, CASA_CHICA.lon], { icon: crearIconoLugar(ICONOS.inicio, true) })
        .addTo(target)
        .bindPopup("<strong>" + CASA_CHICA.nombre + "</strong><br>Tu apartamento");

    lugares.forEach(function(lugar) {
        const marcador = L.marker([lugar.lat, lugar.lon], { icon: crearIconoLugar(iconoPorCategoria(lugar.categoria), false) })
            .addTo(target);

        const popupContent = `
            <strong>${lugar.nombre}</strong><br>
            ${lugar.tipo || ''} · ${lugar.distancia || ''}<br>
            <button class="popup-ficha-btn" data-id="${lugar.id}" style="margin-top:6px;background:var(--garnet);color:#fff;border:none;padding:4px 12px;border-radius:12px;cursor:pointer;">Ver ficha</button>
        `;
        marcador.bindPopup(popupContent);

        marcador.on('popupopen', function(evento) {
            const elementoPopup = evento.popup.getElement();
            const btn = elementoPopup
                ? elementoPopup.querySelector('.popup-ficha-btn')
                : null;
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
        actualizarMarcadoresCompletos();
        return;
    }

    mapaCompleto = L.map("fullMap").setView([CASA_CHICA.lat, CASA_CHICA.lon], 14);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap"
    }).addTo(mapaCompleto);

    marcadoresGrupo = L.layerGroup().addTo(mapaCompleto);
    añadirMarcadores(mapaCompleto, marcadoresGrupo);

    mapaCompleto.on('click', function(evento) {
        if (modoAñadirLugar) {
            colocarPinNuevoLugar(evento.latlng);
        }
    });
}

function actualizarMarcadoresCompletos() {
    if (mapaCompleto && marcadoresGrupo) {
        marcadoresGrupo.clearLayers();
        añadirMarcadores(mapaCompleto, marcadoresGrupo);
    }
}

document.getElementById("openFullMap").addEventListener("click", function() {
    mostrarPantalla("mapa");
});

document.getElementById("backFromMap").addEventListener("click", function() {
    if (pantallaOrigen === 'ficha') {
        mostrarPantalla('ficha');
    } else {
        mostrarPantalla('inicio');
    }
});

// ======================================================
// RUTA SIMPLE (para "Cómo llegar")
// ======================================================

function limpiarRutaMapa() {
    if (rutaControl) {
        mapaCompleto.removeControl(rutaControl);
        rutaControl = null;
    }
}

function trazarRutaSimple(origen, destino) {
    limpiarRutaMapa();

    rutaControl = L.Routing.control({
        waypoints: [
            L.latLng(origen.lat, origen.lon),
            L.latLng(destino.lat, destino.lon)
        ],
        router: L.Routing.osrmv1({
            serviceUrl: 'https://router.project-osrm.org/route/v1',
            profile: 'foot'
        }),
        lineOptions: {
            styles: [{ color: '#7A1B2B', weight: 5, opacity: 0.9 }]
        },
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        show: false,
        createMarker: function() { return null; }
    }).addTo(mapaCompleto);
}

// ======================================================
// PROPONER UN LUGAR (tocando el mapa)
// ======================================================

let modoAñadirLugar = false;
let coordsNuevoLugar = null;
let marcadorNuevoLugar = null;

function cancelarModoAñadirLugar() {
    modoAñadirLugar = false;
    document.getElementById('pinModeBanner').classList.remove('visible');
}

function quitarMarcadorNuevoLugar() {
    if (marcadorNuevoLugar && mapaCompleto) {
        mapaCompleto.removeLayer(marcadorNuevoLugar);
        marcadorNuevoLugar = null;
    }
}

document.getElementById('toggleAddPlace').addEventListener('click', function() {
    document.getElementById('addPlacePanel').classList.remove('visible');
    modoAñadirLugar = true;
    document.getElementById('pinModeBanner').classList.add('visible');
});

document.getElementById('cancelarModoAñadir').addEventListener('click', function() {
    cancelarModoAñadirLugar();
    quitarMarcadorNuevoLugar();
});

document.getElementById('closeAddPlacePanel').addEventListener('click', function() {
    document.getElementById('addPlacePanel').classList.remove('visible');
    quitarMarcadorNuevoLugar();
    coordsNuevoLugar = null;
});

function colocarPinNuevoLugar(latlng) {
    quitarMarcadorNuevoLugar();

    coordsNuevoLugar = { lat: latlng.lat, lon: latlng.lng };

    marcadorNuevoLugar = L.marker(latlng, {
        icon: L.divIcon({
            className: 'marcador-lugar',
            html: '<span style="display:flex;align-items:center;justify-content:center;width:36px;height:36px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#7A1B2B;color:#fff;border:2px solid #fff;box-shadow:0 4px 10px rgba(74,15,28,0.35);"><span style="display:block;width:16px;height:16px;transform:rotate(45deg);">' + ICONOS.pin + '</span></span>',
            iconSize: [36, 36],
            iconAnchor: [18, 34]
        })
    }).addTo(mapaCompleto);

    document.getElementById('addPlaceCoords').innerHTML =
        '<span class="meta-icon">' + ICONOS.pin + '</span>' + latlng.lat.toFixed(5) + ', ' + latlng.lng.toFixed(5);

    cancelarModoAñadirLugar();
    document.getElementById('addPlacePanel').classList.add('visible');
}

document.getElementById('addPlaceGuardarBtn').addEventListener('click', async function() {
    const nombre = document.getElementById('addPlaceNombre').value.trim();
    const categoria = document.getElementById('addPlaceCategoria').value;
    const tipo = document.getElementById('addPlaceTipo').value.trim();
    const descripcion = document.getElementById('addPlaceDescripcion').value.trim();
    const mensaje = document.getElementById('addPlaceMensaje');

    if (!coordsNuevoLugar) {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">Primero toca el mapa para marcar dónde está.</span>';
        return;
    }

    if (nombre === '') {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">Ponle un nombre al sitio.</span>';
        return;
    }

    const emojisPorCategoria = { sitios: '📍', quehacer: '🧭', comida: '🍴' };

    const idGenerado =
        nombre
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
        + '-' + Date.now().toString(36);

    const nuevoLugar = {
        id: idGenerado,
        slug: idGenerado,
        nombre: nombre,
        categoria: categoria,
        tipo: tipo || null,
        emoji: emojisPorCategoria[categoria] || '📍',
        descripcion: descripcion || null,
        lat: coordsNuevoLugar.lat,
        lon: coordsNuevoLugar.lon,
        activo: false,
        recomendado: false,
        origen: 'huesped'
    };

    this.disabled = true;
    mensaje.textContent = 'Guardando…';

    try {
        const { error } = await window.supabaseClient
            .from('places')
            .insert([nuevoLugar]);

        if (error) {
            console.error('Error al guardar el lugar propuesto:', error);
            mensaje.innerHTML = '<span class="ruta-resumen-warning">No se ha podido guardar. Inténtalo de nuevo.</span>';
            this.disabled = false;
            return;
        }

        mensaje.innerHTML = '<span class="ruta-resumen-ok">¡Gracias! Lo revisaremos antes de que aparezca como recomendación.</span>';

        document.getElementById('addPlaceNombre').value = '';
        document.getElementById('addPlaceTipo').value = '';
        document.getElementById('addPlaceDescripcion').value = '';
        coordsNuevoLugar = null;

    } catch (err) {
        console.error('Error de conexión con Supabase:', err);
        mensaje.innerHTML = '<span class="ruta-resumen-warning">No se ha podido guardar. Revisa tu conexión.</span>';
    }

    this.disabled = false;
});

// ======================================================
// CUENTA DE USUARIO — registro, login, perfil y admin
// ======================================================

let sesionUsuario = null;   // objeto user de Supabase Auth, o null
let perfilUsuario = null;   // { nombre, is_admin }, o null

function esAdmin() {
    return !!(perfilUsuario && perfilUsuario.is_admin);
}

async function cargarPerfil(userId) {
    const { data, error } = await window.supabaseClient
        .from('profiles')
        .select('nombre, is_admin')
        .eq('id', userId)
        .single();

    if (error) {
        console.error('Error al cargar el perfil:', error);
        return { nombre: '', is_admin: false };
    }
    return data;
}

// Punto único que deja sesionUsuario/perfilUsuario/favoritos e interfaz
// consistentes, se llame desde donde se llame (arranque, login, logout...).
async function sincronizarSesion(session) {
    sesionUsuario = session ? session.user : null;

    if (sesionUsuario) {
        perfilUsuario = await cargarPerfil(sesionUsuario.id);
        await migrarFavoritosLocalesASupabase();
    } else {
        perfilUsuario = null;
        cargarFavoritosCacheLocal();
    }

    actualizarUICuenta();

    const pantallaActiva = document.querySelector('.screen.active');
    if (pantallaActiva && pantallaActiva.dataset.screen === 'favoritos') {
        renderizarFavoritos();
    }
}

async function inicializarSesion() {
    const { data, error } = await window.supabaseClient.auth.getSession();
    if (error) {
        console.error('Error al comprobar sesión:', error);
    }
    await sincronizarSesion(data ? data.session : null);
}

// Cambios de sesión en segundo plano (token renovado, cierre desde otra
// pestaña, etc.) mantienen la interfaz sincronizada.
window.supabaseClient.auth.onAuthStateChange(function(_event, session) {
    sincronizarSesion(session);
});

function actualizarUICuenta() {
    const logueado = !!sesionUsuario;
    const admin = esAdmin();

    document.getElementById('adminNavBtn').style.display = admin ? 'flex' : 'none';

    const navLabel = document.getElementById('cuentaNavLabel');
    const navIcon = document.getElementById('cuentaNavIcon');
    const primerNombre = (perfilUsuario && perfilUsuario.nombre) ? perfilUsuario.nombre.split(' ')[0] : 'Cuenta';
    const inicial = (perfilUsuario && perfilUsuario.nombre) ? perfilUsuario.nombre.trim().charAt(0).toUpperCase() : '';
    navLabel.textContent = logueado ? primerNombre : 'Cuenta';
    navIcon.classList.toggle('nav-avatar', logueado);
    if (logueado) {
        navIcon.textContent = inicial || '·';
    } else {
        navIcon.innerHTML = ICONOS.cuenta;
    }

    // Pantalla "Mi cuenta"
    document.getElementById('cuentaLogged').style.display = logueado ? 'block' : 'none';
    document.getElementById('cuentaForms').style.display = logueado ? 'none' : 'block';
    if (logueado) {
        document.getElementById('cuentaNombre').textContent = (perfilUsuario && perfilUsuario.nombre) || 'Sin nombre';
        document.getElementById('cuentaEmail').textContent = sesionUsuario.email || '';
        document.getElementById('cuentaAdminBtn').style.display = admin ? 'block' : 'none';
        document.getElementById('cuentaAvatar').textContent = inicial || '·';
    }

    // Tarjeta del splash
    document.getElementById('splashAuthWelcome').style.display = logueado ? 'block' : 'none';
    document.getElementById('splashAuthForms').style.display = logueado ? 'none' : 'block';
    if (logueado) {
        document.getElementById('splashAuthHello').textContent = '¡Hola de nuevo, ' + primerNombre + '!';
    }

    if (!admin && document.querySelector('[data-screen="admin"]').classList.contains('active')) {
        mostrarPantalla('inicio');
    }
}

// --- Registro y login (formularios genéricos, reutilizados en splash y en "Mi cuenta") ---

async function registrarUsuario(ids, onSuccess) {
    const nombre = document.getElementById(ids.nombre).value.trim();
    const email = document.getElementById(ids.email).value.trim();
    const password = document.getElementById(ids.password).value;
    const mensaje = document.getElementById(ids.mensaje);
    const boton = document.getElementById(ids.boton);

    if (!nombre || !email || !password) {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">Rellena nombre, email y contraseña.</span>';
        return;
    }
    if (password.length < 6) {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">La contraseña debe tener al menos 6 caracteres.</span>';
        return;
    }

    boton.disabled = true;
    mensaje.textContent = 'Creando cuenta…';

    const { data, error } = await window.supabaseClient.auth.signUp({
        email: email,
        password: password,
        options: { data: { nombre: nombre } }
    });

    boton.disabled = false;

    if (error) {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">' + (error.message || 'No se pudo crear la cuenta.') + '</span>';
        return;
    }

    if (data.session) {
        // Confirmación de email desactivada en el proyecto: entra directamente.
        mensaje.innerHTML = '<span class="ruta-resumen-ok">¡Cuenta creada! Bienvenido/a, ' + nombre + '.</span>';
        await sincronizarSesion(data.session);
        if (onSuccess) onSuccess();
    } else {
        mensaje.innerHTML = '<span class="ruta-resumen-ok">¡Cuenta creada! Revisa tu email para confirmarla y luego inicia sesión.</span>';
    }
}

async function loginUsuario(ids, onSuccess) {
    const email = document.getElementById(ids.email).value.trim();
    const password = document.getElementById(ids.password).value;
    const mensaje = document.getElementById(ids.mensaje);
    const boton = document.getElementById(ids.boton);

    if (!email || !password) {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">Rellena email y contraseña.</span>';
        return;
    }

    boton.disabled = true;
    mensaje.textContent = 'Entrando…';

    const { data, error } = await window.supabaseClient.auth.signInWithPassword({ email: email, password: password });

    boton.disabled = false;

    if (error) {
        mensaje.innerHTML = '<span class="ruta-resumen-warning">Email o contraseña incorrectos.</span>';
        return;
    }

    mensaje.textContent = '';
    await sincronizarSesion(data.session);
    if (onSuccess) onSuccess();
}

async function cerrarSesionUsuario() {
    await window.supabaseClient.auth.signOut();
    sesionUsuario = null;
    perfilUsuario = null;
    cargarFavoritosCacheLocal();
    actualizarUICuenta();
    mostrarPantalla('inicio');
}

function configurarTabsAuth(tabSignupId, tabLoginId, panelSignupId, panelLoginId) {
    const tabSignup = document.getElementById(tabSignupId);
    const tabLogin = document.getElementById(tabLoginId);
    const panelSignup = document.getElementById(panelSignupId);
    const panelLogin = document.getElementById(panelLoginId);

    tabSignup.addEventListener('click', function() {
        tabSignup.classList.add('active');
        tabLogin.classList.remove('active');
        panelSignup.style.display = 'block';
        panelLogin.style.display = 'none';
    });
    tabLogin.addEventListener('click', function() {
        tabLogin.classList.add('active');
        tabSignup.classList.remove('active');
        panelLogin.style.display = 'block';
        panelSignup.style.display = 'none';
    });
}

configurarTabsAuth('tabSignup', 'tabLogin', 'panelSignup', 'panelLogin');
configurarTabsAuth('cuentaTabSignup', 'cuentaTabLogin', 'cuentaPanelSignup', 'cuentaPanelLogin');

// --- Splash: crear cuenta / iniciar sesión / continuar / cerrar sesión ---

document.getElementById('signupBtn').addEventListener('click', function() {
    registrarUsuario({
        nombre: 'signupNombre', email: 'signupEmail', password: 'signupPassword',
        mensaje: 'splashAuthMensaje', boton: 'signupBtn'
    }, function() {
        setTimeout(function() { document.getElementById('splashBtn').click(); }, 900);
    });
});

document.getElementById('loginBtn').addEventListener('click', function() {
    loginUsuario({
        email: 'loginEmail', password: 'loginPassword',
        mensaje: 'splashAuthMensaje', boton: 'loginBtn'
    }, function() {
        document.getElementById('splashBtn').click();
    });
});

document.getElementById('splashContinueBtn').addEventListener('click', function() {
    document.getElementById('splashBtn').click();
});

document.getElementById('splashLogoutBtn').addEventListener('click', cerrarSesionUsuario);

// --- Pantalla "Mi cuenta": crear cuenta / iniciar sesión / cerrar sesión / ir a admin ---

document.getElementById('cuentaSignupBtn').addEventListener('click', function() {
    registrarUsuario({
        nombre: 'cuentaSignupNombre', email: 'cuentaSignupEmail', password: 'cuentaSignupPassword',
        mensaje: 'cuentaMensaje', boton: 'cuentaSignupBtn'
    });
});

document.getElementById('cuentaLoginBtn').addEventListener('click', function() {
    loginUsuario({
        email: 'cuentaLoginEmail', password: 'cuentaLoginPassword',
        mensaje: 'cuentaMensaje', boton: 'cuentaLoginBtn'
    });
});

document.getElementById('cuentaLogoutBtn').addEventListener('click', cerrarSesionUsuario);
document.getElementById('cuentaAdminBtn').addEventListener('click', function() {
    mostrarPantalla('admin');
});
document.getElementById('adminLogout').addEventListener('click', cerrarSesionUsuario);

// ======================================================
// ADMIN — TODOS LOS LUGARES + EDICIÓN + ELIMINACIÓN
// ======================================================

async function cargarTodosLosLugaresAdmin() {
    const contenedor = document.getElementById('adminList');
    contenedor.innerHTML = '<p style="color:var(--text-soft);">Cargando lugares…</p>';

    try {
        const data = await cargarTodosLosLugares();

        if (!data || data.length === 0) {
            contenedor.innerHTML = `
                <div class="empty-state">
                    <div class="empty-state-icon">${ICONOS.exito}</div>
                    <p>No hay lugares aún.</p>
                </div>
            `;
            return;
        }

        renderizarAdminLista(data, contenedor);

    } catch (err) {
        console.error('Error:', err);
        contenedor.innerHTML = '<p class="ruta-resumen-warning">Error de conexión.</p>';
    }
}

function renderizarAdminLista(lista, contenedor) {
    contenedor.innerHTML = '';
    lista.forEach(function(lugar) {
        const fila = document.createElement('div');
        fila.className = 'place-row admin-row';
        const estado = lugar.activo ? '✅ Activo' : '⏳ Pendiente';
        fila.innerHTML = `
            <div class="place-row-photo">${iconoPorCategoria(lugar.categoria)}</div>
            <div class="place-row-body">
                <h3>${lugar.nombre}</h3>
                <div class="place-row-tags">
                    <span>${lugar.tipo || ''}</span>
                    <span>·</span>
                    <span>${lugar.categoria || ''}</span>
                    <span>·</span>
                    <span style="font-size:11px;">${estado}</span>
                </div>
                <div style="font-size:12px; color:var(--ink-soft); margin-top:4px;">
                    ${lugar.descripcion || 'Sin descripción'}
                </div>
            </div>
            <div style="display:flex; gap:6px; flex-shrink:0;">
                <button class="admin-editar" data-id="${lugar.id}" title="Editar">✏️</button>
                <button class="admin-eliminar" data-id="${lugar.id}" title="Eliminar">🗑️</button>
            </div>
        `;
        contenedor.appendChild(fila);

        fila.querySelector('.admin-editar').addEventListener('click', function(e) {
            e.stopPropagation();
            abrirEditarLugar(lugar.id);
        });

        fila.querySelector('.admin-eliminar').addEventListener('click', function(e) {
            e.stopPropagation();
            eliminarLugar(lugar.id);
        });
    });
}

// --- Editar lugar ---

let lugarEditandoId = null;

function abrirEditarLugar(id) {
    const lugar = lugares.find(p => p.id === id);
    if (!lugar) {
        alert('No se encontró el lugar.');
        return;
    }

    lugarEditandoId = id;

    document.getElementById('editPlaceNombre').value = lugar.nombre || '';
    document.getElementById('editPlaceCategoria').value = lugar.categoria || 'sitios';
    document.getElementById('editPlaceTipo').value = lugar.tipo || '';
    document.getElementById('editPlaceDescripcion').value = lugar.descripcion || '';
    document.getElementById('editPlaceLat').value = lugar.lat || '';
    document.getElementById('editPlaceLon').value = lugar.lon || '';
    document.getElementById('editPlacePrecio').value = lugar.precio || '';
    document.getElementById('editPlaceHorario').value = lugar.horario || '';
    document.getElementById('editPlaceRecomendado').checked = !!lugar.recomendado;
    document.getElementById('editPlaceActivo').checked = !!lugar.activo;

    document.getElementById('editPlaceMensaje').innerHTML = '';
    document.getElementById('editPlacePanel').classList.add('visible');
}

document.getElementById('closeEditPlacePanel').addEventListener('click', function() {
    document.getElementById('editPlacePanel').classList.remove('visible');
    lugarEditandoId = null;
});

document.getElementById('editPlaceGuardarBtn').addEventListener('click', async function() {
    if (!lugarEditandoId) {
        document.getElementById('editPlaceMensaje').innerHTML = '<span class="ruta-resumen-warning">Error: no hay lugar seleccionado.</span>';
        return;
    }

    const nombre = document.getElementById('editPlaceNombre').value.trim();
    const categoria = document.getElementById('editPlaceCategoria').value;
    const tipo = document.getElementById('editPlaceTipo').value.trim();
    const descripcion = document.getElementById('editPlaceDescripcion').value.trim();
    const lat = parseFloat(document.getElementById('editPlaceLat').value);
    const lon = parseFloat(document.getElementById('editPlaceLon').value);
    const precio = document.getElementById('editPlacePrecio').value.trim();
    const horario = document.getElementById('editPlaceHorario').value.trim();
    const recomendado = document.getElementById('editPlaceRecomendado').checked;
    const activo = document.getElementById('editPlaceActivo').checked;

    if (!nombre) {
        document.getElementById('editPlaceMensaje').innerHTML = '<span class="ruta-resumen-warning">El nombre es obligatorio.</span>';
        return;
    }
    if (isNaN(lat) || isNaN(lon)) {
        document.getElementById('editPlaceMensaje').innerHTML = '<span class="ruta-resumen-warning">Latitud y longitud deben ser números válidos.</span>';
        return;
    }

    const emojisPorCategoria = { sitios: '📍', quehacer: '🧭', comida: '🍴' };
    const actualizacion = {
        nombre: nombre,
        categoria: categoria,
        tipo: tipo || null,
        descripcion: descripcion || null,
        lat: lat,
        lon: lon,
        precio: precio || null,
        horario: horario || null,
        recomendado: recomendado,
        activo: activo,
        emoji: emojisPorCategoria[categoria] || '📍'
    };

    this.disabled = true;
    document.getElementById('editPlaceMensaje').textContent = 'Guardando…';

    try {
        const { error } = await window.supabaseClient
            .from('places')
            .update(actualizacion)
            .eq('id', lugarEditandoId);

        if (error) {
            console.error('Error al actualizar:', error);
            document.getElementById('editPlaceMensaje').innerHTML = '<span class="ruta-resumen-warning">No se pudo guardar. Inténtalo de nuevo.</span>';
            this.disabled = false;
            return;
        }

        document.getElementById('editPlaceMensaje').innerHTML = '<span class="ruta-resumen-ok">¡Lugar actualizado correctamente!</span>';

        // Recargar datos
        await cargarDatosInicio();
        actualizarMarcadoresCompletos();
        cargarTodosLosLugaresAdmin();
        document.getElementById('editPlacePanel').classList.remove('visible');
        lugarEditandoId = null;

    } catch (err) {
        console.error('Error de conexión:', err);
        document.getElementById('editPlaceMensaje').innerHTML = '<span class="ruta-resumen-warning">Error de conexión.</span>';
    }

    this.disabled = false;
});

// --- Eliminar lugar ---

async function eliminarLugar(id) {
    if (!confirm('¿Eliminar este lugar permanentemente? Esta acción no se puede deshacer.')) return;

    try {
        const { error } = await window.supabaseClient
            .from('places')
            .delete()
            .eq('id', id);

        if (error) {
            console.error('Error al eliminar:', error);
            alert('No se pudo eliminar el lugar.\n\nDetalle: ' + (error.message || error.hint || JSON.stringify(error)));
            return;
        }

        // Limpiar favoritos que referencien este lugar (opcional, pero recomendable)
        if (sesionUsuario) {
            // Eliminar de favoritos locales y de Supabase si existe
            const idx = favoritosCache.indexOf(id);
            if (idx !== -1) {
                favoritosCache.splice(idx, 1);
                try {
                    await window.supabaseClient
                        .from('favorites')
                        .delete()
                        .eq('user_id', sesionUsuario.id)
                        .eq('place_id', id);
                } catch (e) { /* ignorar */ }
            }
        } else {
            const idx = favoritosCache.indexOf(id);
            if (idx !== -1) {
                favoritosCache.splice(idx, 1);
                localStorage.setItem("casachica_favoritos", JSON.stringify(favoritosCache));
            }
        }

        await cargarDatosInicio();
        actualizarMarcadoresCompletos();
        cargarTodosLosLugaresAdmin();

    } catch (err) {
        console.error('Error:', err);
        alert('Error de conexión: ' + err.message);
    }
}

// ======================================================
// CARGA DE DATOS
// ======================================================

async function cargarDatosInicio() {
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

// ======================================================
// ARRANQUE
// ======================================================

cargarFavoritosCacheLocal(); // valor por defecto mientras se comprueba si hay sesión
iniciarCarruselSplash();
inicializarSesion();