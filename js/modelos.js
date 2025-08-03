const modelos = {
    maria: {
        nombre: 'María',
        ubicacion: 'Lima, Perú',
        imagenes: [
            'img/modelo2.jpeg',
            'img/modelo2.1.jpeg',
            'img/modelo2.2.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    Paul: {
        nombre: 'Paul',
        ubicacion: 'Arequipa, Perú',
        imagenes: [
            'img/modelo3.jpeg',
            'img/modelo3.1.jpeg',
            'img/modelo3.2.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    julia: {
        nombre: 'Julia',
        ubicacion: 'Cusco, Perú',
        imagenes: [
            'img/modelo4.jpeg',
            'img/modelo4.1.jpeg',
            'img/modelo4.2.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    camila: {
        nombre: 'Camila',
        ubicacion: 'Trujillo, Perú',
        imagenes: [
            'img/modelo5.jpeg',
            'img/modelo5.1.jpeg',
            'img/modelo5.2.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    Stefan: {
        nombre: 'Stefan',
        ubicacion: 'Chiclayo, Perú',
        imagenes: [
            'img/modelo6.jpeg',
            'img/modelo6.1.jpeg',
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    valentina: {
        nombre: 'Valentina',
        ubicacion: 'Huancayo, Perú',
        imagenes: [
            'img/modelo7.jpeg',
            'img/modelo7.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    Johan: {
        nombre: 'Johan',
        ubicacion: 'Piura, Perú',
        imagenes: [
            'img/modelo8.jpeg',
            'img/modelo8.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    Joel: {
        nombre: 'Joel',
        ubicacion: 'Iquitos, Perú',
        imagenes: [
            'img/modelo9.jpeg',
            'img/modelo9.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    Brunno: {
        nombre: 'Brunno',
        ubicacion: 'Tacna, Perú',
        imagenes: [
            'img/modelo10.jpeg',
            'img/modelo10.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    emma: {
        nombre: 'Emma',
        ubicacion: 'Ica, Perú',
        imagenes: [
            'img/modelo11.jpeg',
            'img/modelo11.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    florencia: {
        nombre: 'Florencia',
        ubicacion: 'Huaraz, Perú',
        imagenes: [
            'img/modelo12.jpeg',
            'img/modelo12.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    },
    carla: {
        nombre: 'Carla',
        ubicacion: 'Tarapoto, Perú',
        imagenes: [
            'img/modelo13.jpeg',
            'img/modelo13.1.jpeg'
        ],
        resumen: 'Carismática y comprometida con cada proyecto. Conecta fácilmente con el público.',
        experiencia: 'Participó en campañas de moda locales y en sesiones para catálogos de tiendas.'
    }
};

function mostrarDetalle(nombreId) {
  const data = modelos[nombreId];
  if (!data) return;

  modeloActivo = data;
  imagenActual = 0;

  cargarImagen();

  document.getElementById('modalNombre').textContent = data.nombre;
  document.getElementById('modalUbicacion').textContent = data.ubicacion;
  document.getElementById('modalRating').textContent = data.rating;
  document.getElementById('modalResumen').textContent = data.resumen || '';
  document.getElementById('modalExperiencia').textContent = data.experiencia || '';

  const modal = document.getElementById('modalModelo');
  modal.classList.remove('oculto');
  setTimeout(() => modal.classList.add('activo'), 10);

  document.getElementById('galeria').classList.add('galeria-desactivada');
}

function cargarImagen() {
    if (modeloActivo && modeloActivo.imagenes.length > 0) {
        document.getElementById('modalFoto').src = modeloActivo.imagenes[imagenActual];
    }
}


function siguienteImagen() {
    if (!modeloActivo) return;
    imagenActual = (imagenActual + 1) % modeloActivo.imagenes.length;
    cargarImagen();
}

function anteriorImagen() {
    if (!modeloActivo) return;
    imagenActual = (imagenActual - 1 + modeloActivo.imagenes.length) % modeloActivo.imagenes.length;
    cargarImagen();
}

function cerrarDetalle() {
    const modal = document.getElementById('modalModelo');
    const galeria = document.getElementById('galeria');

    // Inicia animación de cierre
    modal.classList.remove('activo');

    // Espera a que la animación termine antes de ocultar el modal y reactivar galería
    setTimeout(() => {
        modal.classList.add('oculto');
        galeria.classList.remove('galeria-desactivada'); // <-- mover esto AQUÍ evita el parpadeo
        modeloActivo = null;
    }, 400); // este tiempo debe coincidir con la animación CSS
}