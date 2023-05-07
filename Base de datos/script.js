use e-commerce-gt
db.createCollection('usuarios')
db.createCollection('productos')
const startUsers=db.usuarios.insertMany(
    [
        {
            user: 'Mariano',
            direccion: 'Zona 2 Quetzaltenango',
            tipo_usuario: 'Comun',
            pwd: '1234'
        },
        {
            user: "Ana",
            direccion: "Zona 5 Guatemala",
            tipo_usuario: "Comun",
            pwd: "1234"
        },
        {
            user: "María",
            direccion: "Zona 9 Guatemala",
            tipo_usuario: "Comun",
            pwd: "1234"
        },
        {
            user: 'Isabel',
            direccion: 'Zona 5 Quetzaltenango',
            tipo_usuario: 'Comun',
            pwd: '1234'
        },
        {
            user: 'Sofía',
            direccion: 'Zona 7 Quetzaltenango',
            tipo_usuario: 'Comun',
            pwd: '1234'
        },
        {
            user: 'Mariano2',
            direccion: 'Zona 2 Quetzaltenango',
            tipo_usuario: 'Paqueteria',
            pwd: '1234'
        },
        {
            user: "Ana2",
            direccion: "Zona 10 Guatemala",
            tipo_usuario: "Paqueteria",
            pwd: "1234"
        },
        {
            user: 'Mariano3',
            direccion: 'Zona 2 Quetzaltenango',
            tipo_usuario: 'Administrador',
            pwd: '1234'
        }
    ]
)
const idUsers=Object.values(startUsers.insertedIds);

db.productos.insertMany(
    [
        {
            nombre_producto: 'Licuadora',
            descripcion: 'Licuadora para el hogar con una potencia optima y en perfectas condiciones',
            imagen: 'http://localhost:5000/imgProduct/Licuadora.jpg',
            precio: 123.4,
            usuario: idUsers[0].toString(),
            existencia: 3,
            categoria: ['Hogar', 'Teconología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Televisor',
            descripcion: 'Televisor LED de 50 pulgadas con resolución Full HD',
            imagen: 'http://localhost:5000/imgProduct/Televisor.jpg',
            precio: 3650.0,
            usuario: idUsers[0].toString(),
            existencia: 3,
            categoria: ['Tecnología', 'Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Aspiradora',
            descripcion: 'Aspiradora de mano recargable para limpieza de espacios pequeños',
            imagen: 'http://localhost:5000/imgProduct/Aspiradora.jpg',
            precio: 280.0,
            usuario: idUsers[0].toString(),
            existencia: 4,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Libro tu primer amor',
            descripcion: 'Libro de ficción con trama de misterio y romance',
            imagen: 'http://localhost:5000/imgProduct/Libro-Primer-Amor.jpg',
            precio: 120.0,
            usuario: idUsers[0].toString(),
            existencia: 6,
            categoria: ['Literatura'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Mesa grande',
            descripcion: 'Mesa de comedor extensible para 6 personas',
            imagen: 'http://localhost:5000/imgProduct/Mesa-Grande.jpg',
            precio: 400.0,
            usuario: idUsers[0].toString(),
            existencia: 3,
            categoria: ['Hogar', 'Decoración'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Calculadora científica',
            descripcion: 'Calculadora científica con funciones avanzadas para matemáticas y estadísticas',
            imagen: 'http://localhost:5000/imgProduct/Calculadora-Cientifica.jpg',
            precio: 125.0,
            usuario: idUsers[0].toString(),
            existencia: 2,
            categoria: ['Académico', 'Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Espejo',
            descripcion: 'Espejo de pared con marco de madera rústica',
            imagen: 'http://localhost:5000/imgProduct/Espejo.jpg',
            precio: 160.0,
            usuario: idUsers[0].toString(),
            existencia: 6,
            categoria: ['Decoración', 'Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Laptop',
            descripcion: 'Laptop de 14 pulgadas con procesador Intel Core i5 y 8GB de RAM',
            imagen: 'http://localhost:5000/imgProduct/Laptop.jpg',
            precio: 3800.0,
            usuario: idUsers[0].toString(),
            existencia: 5,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Cortinas',
            descripcion: 'Cortinas de tela opaca para bloquear la luz y garantizar privacidad',
            imagen: 'http://localhost:5000/imgProduct/Cortinas.jpg',
            precio: 250.0,
            usuario: idUsers[0].toString(),
            existencia: 2,
            categoria: ['Decoración', 'Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Reloj inteligente',
            descripcion: 'Reloj inteligente con monitor de actividad física y notificaciones de smartphone',
            imagen: 'http://localhost:5000/imgProduct/Reloj-Inteligente.jpg',
            precio: 520.0,
            usuario: idUsers[0].toString(),
            existencia: 4,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Libro de cocina',
            descripcion: 'Libro de cocina con recetas fáciles y deliciosas para toda la familia.',
            imagen: 'http://localhost:5000/imgProduct/Libro-Cocina.jpg',
            precio: 120.0,
            usuario: idUsers[1].toString(),
            existencia: 7,
            categoria: ['Literatura', 'Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Silla de escritorio',
            descripcion: 'Silla de escritorio ergonómica con soporte lumbar y ajuste de altura.',
            imagen: 'http://localhost:5000/imgProduct/Silla-Escritorio.jpg',
            precio: 550.0,
            usuario: idUsers[1].toString(),
            existencia: 12,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Set de herramientas',
            descripcion: 'Set de 50 herramientas para reparaciones y proyectos de bricolaje.',
            imagen: 'http://localhost:5000/imgProduct/Set-Herramientas.jpg',
            precio: 160.0,
            usuario: idUsers[1].toString(),
            existencia: 2,
            categoria: ['Hogar', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Mesa de centro',
            descripcion: 'Mesa de centro de madera con diseño moderno y elegante.',
            imagen: 'http://localhost:5000/imgProduct/Mesa-Centro.jpg',
            precio: 400.0,
            usuario: idUsers[1].toString(),
            existencia: 7,
            categoria: ['Hogar', 'Decoración'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Smartphone',
            descripcion: 'Smartphone de gama media con pantalla Full HD y cámara de alta resolución.',
            imagen: 'http://localhost:5000/imgProduct/Smartphone.jpg',
            precio: 2400.0,
            usuario: idUsers[1].toString(),
            existencia: 4,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Juego de sábanas',
            descripcion: 'Juego de sábanas de algodón egipcio de alta calidad en tamaño Queen.',
            imagen: 'http://localhost:5000/imgProduct/Juego-Sabanas.jpg',
            precio: 300.0,
            usuario: idUsers[1].toString(),
            existencia: 2,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Botella de agua',
            descripcion: 'Botella de agua de acero inoxidable con capacidad de 1 litro y diseño resistente.',
            imagen: 'http://localhost:5000/imgProduct/Botella-Agua.jpg',
            precio: 125.0,
            usuario: idUsers[1].toString(),
            existencia: 5,
            categoria: ['Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Auriculares inalámbricos',
            descripcion: 'Auriculares inalámbricos con cancelación de ruido y batería de larga duración.',
            imagen: 'http://localhost:5000/imgProduct/Auriculares-Inalambricos.jpg',
            precio: 230.4,
            usuario: idUsers[1].toString(),
            existencia: 4,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Manta suave y cálida',
            descripcion: 'Manta de lana sintética suave y cálida en tonos neutros.',
            imagen: 'http://localhost:5000/imgProduct/Manta-Suave-Calida.jpg',
            precio: 150.0,
            usuario: idUsers[1].toString(),
            existencia: 1,
            categoria: ['Hogar', 'Decoración'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Agenda anual',
            descripcion: 'Agenda anual con diseño minimalista y espacio para notas diarias.',
            imagen: 'http://localhost:5000/imgProduct/Agenda-Anual.jpg',
            precio: 75.0,
            usuario: idUsers[1].toString(),
            existencia: 6,
            categoria: ['Académico', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Máquina de coser',
            descripcion: 'Máquina de coser eléctrica con múltiples funciones y accesorios incluidos.',
            imagen: 'http://localhost:5000/imgProduct/Maquina-Coser.jpg',
            precio: 1300.0,
            usuario: idUsers[2].toString(),
            existencia: 3,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Pinturas acrílicas',
            descripcion: 'Set de 24 pinturas acrílicas de alta calidad en colores brillantes y duraderos.',
            imagen: 'http://localhost:5000/imgProduct/Pinturas-Acrilicas.jpg',
            precio: 80.0,
            usuario: idUsers[2].toString(),
            existencia: 4,
            categoria: ['Hogar', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Parlante portátil',
            descripcion: 'Parlante portátil con Bluetooth y sonido de alta fidelidad.',
            imagen: 'http://localhost:5000/imgProduct/Parlante-Portatil.jpg',
            precio: 180.0,
            usuario: idUsers[2].toString(),
            existencia: 2,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Mochila resistente',
            descripcion: 'Mochila resistente y duradera con múltiples compartimentos y acolchado cómodo.',
            imagen: 'http://localhost:5000/imgProduct/Mochila-Resistente.jpg',
            precio: 250.0,
            usuario: idUsers[2].toString(),
            existencia: 5,
            categoria: ['Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Impresora láser',
            descripcion: 'Impresora láser multifuncional con impresión a doble cara y conectividad Wi-Fi.',
            imagen: 'http://localhost:5000/imgProduct/Impresora-Laser.jpg',
            precio: 1250.0,
            usuario: idUsers[2].toString(),
            existencia: 2,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Juego de cubiertos',
            descripcion: 'Juego de cubiertos de acero inoxidable para 6 personas con diseño elegante.',
            imagen: 'http://localhost:5000/imgProduct/Juego-Cubiertos.jpg',
            precio: 170.0,
            usuario: idUsers[2].toString(),
            existencia: 3,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Paquete de papel para impresora',
            descripcion: 'Paquete de 500 hojas de papel para impresora de alta calidad y tamaño estándar.',
            imagen: 'http://localhost:5000/imgProduct/Paquete-Papel-Impresora.jpg',
            precio: 160.0,
            usuario: idUsers[2].toString(),
            existencia: 4,
            categoria: ['Tecnología', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Lámpara de pie',
            descripcion: 'Lámpara de pie con diseño moderno y regulable en intensidad.',
            imagen: 'http://localhost:5000/imgProduct/Lampara-Pie.jpg',
            precio: 130.99,
            usuario: idUsers[2].toString(),
            existencia: 5,
            categoria: ['Decoración', 'Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Telescopio refractor',
            descripcion: 'Telescopio refractor para astronomía con trípode resistente y lente de alta calidad.',
            imagen: 'http://localhost:5000/imgProduct/Telescopio-Refractor.jpg',
            precio: 1300.0,
            usuario: idUsers[2].toString(),
            existencia: 7,
            categoria: ['Académico', 'Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Set de sartenes',
            descripcion: 'Set de sartenes antiadherentes con diferentes tamaños y mangos ergonómicos.',
            imagen: 'http://localhost:5000/imgProduct/Set-Sartenes.jpg',
            precio: 560.0,
            usuario: idUsers[2].toString(),
            existencia: 12,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Plancha de vapor',
            descripcion: 'Plancha de vapor con tecnología antiadherente y temperatura regulable.',
            imagen: 'http://localhost:5000/imgProduct/Plancha-Vapor.jpg',
            precio: 350.0,
            usuario: idUsers[3].toString(),
            existencia: 4,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Set de tazas de café',
            descripcion: 'Set de 6 tazas de café con platillos de porcelana y diseño elegante.',
            imagen: 'http://localhost:5000/imgProduct/Set-Tazas-Cafe.jpg',
            precio: 440.0,
            usuario: idUsers[3].toString(),
            existencia: 1,
            categoria: ['Hogar', 'Decoración'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Teclado mecánico',
            descripcion: 'Teclado mecánico para gaming con iluminación LED y teclas programables.',
            imagen: 'http://localhost:5000/imgProduct/Teclado-Mecanico.jpg',
            precio: 350.0,
            usuario: idUsers[3].toString(),
            existencia: 7,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Mochila de senderismo',
            descripcion: 'Mochila de senderismo resistente al agua con capacidad para 40 litros y múltiples compartimentos.',
            imagen: 'http://localhost:5000/imgProduct/Mochila-Senderismo.jpg',
            precio: 270.0,
            usuario: idUsers[3].toString(),
            existencia: 2,
            categoria: ['Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Robot de limpieza',
            descripcion: 'Robot de limpieza con navegación inteligente y función de mapeo.',
            imagen: 'http://localhost:5000/imgProduct/Robot-Limpieza.jpeg',
            precio: 800.0,
            usuario: idUsers[3].toString(),
            existencia: 6,
            categoria: ['Tecnología', 'Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Cuadro decorativo',
            descripcion: 'Cuadro decorativo de lienzo con impresión de paisaje y marco de madera.',
            imagen: 'http://localhost:5000/imgProduct/Cuadro-Decorativo.jpg',
            precio: 420.0,
            usuario: idUsers[3].toString(),
            existencia: 5,
            categoria: ['Decoración'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Purificador de aire',
            descripcion: 'Purificador de aire con filtro HEPA y temporizador programable.',
            imagen: 'http://localhost:5000/imgProduct/Purificador-Aire.jpg',
            precio: 820.0,
            usuario: idUsers[3].toString(),
            existencia: 2,
            categoria: ['Hogar', 'Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Pelota de fútbol',
            descripcion: 'Pelota de fútbol profesional con diseño aerodinámico y construcción de alta calidad.',
            imagen: 'http://localhost:5000/imgProduct/Pelota-Futbol.jpg',
            precio: 130.0,
            usuario: idUsers[3].toString(),
            existencia: 3,
            categoria: ['Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Kit de pinturas',
            descripcion: 'Kit de pinturas acrílicas con 24 colores y pinceles de diferentes tamaños.',
            imagen: 'http://localhost:5000/imgProduct/Kit-Pinturas.jpg',
            precio: 140.0,
            usuario: idUsers[3].toString(),
            existencia: 24,
            categoria: ['Hogar', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Libro de poesía',
            descripcion: 'Libro de poesía con selección de poemas de autores clásicos y contemporáneos.',
            imagen: 'http://localhost:5000/imgProduct/Libro-Poesia.jpg',
            precio: 215.0,
            usuario: idUsers[3].toString(),
            existencia: 10,
            categoria: ['Literatura'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Cámara instantánea',
            descripcion: 'Cámara instantánea con impresión de fotos en papel y lente de alta calidad.',
            imagen: 'http://localhost:5000/imgProduct/Camara-Instantanea.jpg',
            precio: 700.0,
            usuario: idUsers[4].toString(),
            existencia: 1,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Cafetera',
            descripcion: 'Cafetera automática con capacidad para 10 tazas y función de programación.',
            imagen: 'http://localhost:5000/imgProduct/Cafetera.jpg',
            precio: 380.0,
            usuario: idUsers[4].toString(),
            existencia: 8,
            categoria: ['Hogar', 'Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Juego de mesa',
            descripcion: 'Juego de mesa de estrategia para 2 jugadores con piezas de madera y tablero de alta calidad.',
            imagen: 'http://localhost:5000/imgProduct/Juego-Mesa.jpg',
            precio: 35.0,
            usuario: idUsers[4].toString(),
            existencia: 2,
            categoria: ['Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Telescopio astronómico',
            descripcion: 'Telescopio astronómico con apertura de 70mm y aumento de hasta 150x.',
            imagen: 'http://localhost:5000/imgProduct/Telescopio-Astronomico.jpg',
            precio: 2200.0,
            usuario: idUsers[4].toString(),
            existencia: 6,
            categoria: ['Tecnología', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Lámpara de mesa',
            descripcion: 'Lámpara de mesa con diseño moderno y regulador de intensidad.',
            imagen: 'http://localhost:5000/imgProduct/Lampara-Mesa.jpg',
            precio: 135.0,
            usuario: idUsers[4].toString(),
            existencia: 4,
            categoria: ['Decoración'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Juego de toallas',
            descripcion: 'Juego de toallas de baño de algodón 100% con 3 piezas y diseño suave.',
            imagen: 'http://localhost:5000/imgProduct/Juego-Toallas.jpg',
            precio: 230.0,
            usuario: idUsers[4].toString(),
            existencia: 6,
            categoria: ['Hogar'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Mochila para portátil',
            descripcion: 'Mochila para portátil con varios compartimentos y diseño ergonómico.',
            imagen: 'http://localhost:5000/imgProduct/Mochila-Portatil.jpg',
            precio: 350.0,
            usuario: idUsers[4].toString(),
            existencia: 1,
            categoria: ['Tecnología', 'Otros'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Cámara de seguridad',
            descripcion: 'Cámara de seguridad con resolución Full HD y visión nocturna.',
            imagen: 'http://localhost:5000/imgProduct/Camara-Seguridad.jpg',
            precio: 870.0,
            usuario: idUsers[4].toString(),
            existencia: 2,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Lápices de colores',
            descripcion: 'Lápices de colores de alta calidad y variedad de tonos.',
            imagen: 'http://localhost:5000/imgProduct/Lapices-Colores.jpg',
            precio: 85.0,
            usuario: idUsers[4].toString(),
            existencia: 4,
            categoria: ['Académico'],
            estado: 'ACEPTADO'
        },
        {
            nombre_producto: 'Termómetro infrarrojo',
            descripcion: 'Termómetro infrarrojo para medir la temperatura corporal sin contacto.',
            imagen: 'http://localhost:5000/imgProduct/Termometro-Infrarrojo.jpg',
            precio: 225.0,
            usuario: idUsers[4].toString(),
            existencia: 3,
            categoria: ['Tecnología'],
            estado: 'ACEPTADO'
        }
    ]
)
