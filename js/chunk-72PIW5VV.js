// Ruta de la carpeta que contiene los archivos de texto
const carpetaArchivos = '/js/hydration-entrypoints/components/text.js/';

// Función para cargar el archivo de texto
function cargarArchivo(url, elementoId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(texto => {
            document.getElementById(elementoId).textContent = texto;
        })
        .catch(error => console.error(`Error al cargar el archivo ${url}:`, error));
}

// Objeto que mapea los IDs de los elementos HTML a los nombres de los archivos
const archivosACargar = {
    'p_inicio_titulo': 'p_inicio_titulo.txt',
    'p_inicio_texto01': 'p_inicio_texto01.txt',
    'p_inicio_texto02': 'p_inicio_texto02.txt',
    'p_inicio_sub_titulo01': 'p_inicio_sub_titulo01.txt',
    'p_inicio_texto03': 'p_inicio_texto03.txt',
    'p_inicio_sub_titulo02': 'p_inicio_sub_titulo02.txt',
    'p_inicio_texto04': 'p_inicio_texto04.txt',
    'p_inicio_sub_titulo03': 'p_inicio_sub_titulo03.txt',
    'p_inicio_texto05': 'p_inicio_texto05.txt',

    'p_dialogo_titulo': 'p_dialogo_titulo.txt',
    'p_dialogo_fecha': 'p_dialogo_fecha.txt',

    'm_header_titulo01': 'm_header_titulo01.txt',
    'm_header_titulo02': 'm_header_titulo02.txt',
    'm_header_texto01': 'm_header_texto01.txt',
    'm_header_texto02': 'm_header_texto02.txt',
    'm_header_texto03': 'm_header_texto03.txt',
    'm_header_texto04': 'm_header_texto04.txt',
    'm_header_texto05': 'm_header_texto05.txt',
    'm_header_texto06': 'm_header_texto06.txt',

    't_tarjeta01_titulo': 't_tarjeta01_titulo.txt',
    't_tarjeta01_texto': 't_tarjeta01_texto.txt',
    't_tarjeta01_boton': 't_tarjeta01_boton.txt',
    't_tarjeta02_titulo': 't_tarjeta02_titulo.txt',
    't_tarjeta02_texto': 't_tarjeta02_texto.txt',
    't_tarjeta02_boton': 't_tarjeta02_boton.txt',
    't_tarjeta03_titulo': 't_tarjeta03_titulo.txt',
    't_tarjeta03_texto': 't_tarjeta03_texto.txt',
    't_tarjeta03_boton': 't_tarjeta03_boton.txt',
    't_tarjeta04_titulo': 't_tarjeta04_titulo.txt',
    't_tarjeta04_texto': 't_tarjeta04_texto.txt',
    't_tarjeta04_boton': 't_tarjeta04_boton.txt',

    'v_tips01_texto': 'v_tips01_texto.txt',
    'v_tips02_texto': 'v_tips02_texto.txt',
    'v_tips03_texto': 'v_tips03_texto.txt',
    'v_tips04_texto': 'v_tips04_texto.txt',
    'v_tips05_texto': 'v_tips05_texto.txt',

    'p_dalamproses_titulo': 'p_dalamproses_titulo.txt',
    'p_dalamproses_texto01': 'p_dalamproses_texto01.txt',
    'p_dalamproses_texto02': 'p_dalamproses_texto02.txt',

    'p_paula_titulo': 'p_paula_titulo.txt',

    'p_sejarah_titulo': 'p_sejarah_titulo.txt',
    'p_sejarah_subtitulo01': 'p_sejarah_subtitulo01.txt',
    'p_sejarah_subtitulo02': 'p_sejarah_subtitulo02.txt',
    'p_sejarah_subtitulo03': 'p_sejarah_subtitulo03.txt',
    'p_sejarah_subtitulo04': 'p_sejarah_subtitulo04.txt',
    'p_sejarah_texto01': 'p_sejarah_texto01.txt',
    'p_sejarah_texto02': 'p_sejarah_texto02.txt',
    'p_sejarah_texto03': 'p_sejarah_texto03.txt',
    'p_sejarah_texto04': 'p_sejarah_texto04.txt',
    'p_sejarah_texto05': 'p_sejarah_texto05.txt',
    'p_sejarah_boton01': 'p_sejarah_boton01.txt',
    'p_sejarah_boton02': 'p_sejarah_boton02.txt',
    'p_sejarah_boton03': 'p_sejarah_boton03.txt',
    'p_sejarah_boton04': 'p_sejarah_boton04.txt',

    'p_visi_titulo': 'p_visi_titulo.txt',
    'p_visi_subtitulo01': 'p_visi_subtitulo01.txt',
    'p_visi_subtitulo02': 'p_visi_subtitulo02.txt',
    'p_visi_subtitulo03': 'p_visi_subtitulo03.txt',
    'p_visi_texto01': 'p_visi_texto01.txt',
    'p_visi_texto02': 'p_visi_texto02.txt',
    'p_visi_texto03': 'p_visi_texto03.txt',
    
    'p_inspirasi_titulo': 'p_inspirasi_titulo.txt',
    'p_inspirasi_subtitulo01': 'p_inspirasi_subtitulo01.txt',
    'p_inspirasi_subtitulo02': 'p_inspirasi_subtitulo02.txt',
    'p_inspirasi_texto01': 'p_inspirasi_texto01.txt',
    'p_inspirasi_texto02': 'p_inspirasi_texto02.txt',
    'p_inspirasi_texto03': 'p_inspirasi_texto03.txt',
    'p_inspirasi_card_titulo01': 'p_inspirasi_card_titulo01.txt',
    'p_inspirasi_card_texto01': 'p_inspirasi_card_texto01.txt',
    'p_inspirasi_card_fecha01': 'p_inspirasi_card_fecha01.txt',
    'p_inspirasi_card_titulo02': 'p_inspirasi_card_titulo02.txt',
    'p_inspirasi_card_texto02': 'p_inspirasi_card_texto02.txt',
    'p_inspirasi_card_fecha02': 'p_inspirasi_card_fecha02.txt',
    'p_inspirasi_card_titulo03': 'p_inspirasi_card_titulo03.txt',
    'p_inspirasi_card_texto03': 'p_inspirasi_card_texto03.txt',
    'p_inspirasi_card_fecha03': 'p_inspirasi_card_fecha03.txt',
    // Puedes añadir más elementos aquí
};

// Cargar todos los archivos
for (const [elementoId, archivo] of Object.entries(archivosACargar)) {
    const rutaCompleta = carpetaArchivos + archivo;
    cargarArchivo(rutaCompleta, elementoId);
}



