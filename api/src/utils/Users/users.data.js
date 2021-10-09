const { User } = require("../../db");
const bcrypt = require('bcrypt');

const getInfoUsers = async () => {
  const hashedPassword = await bcrypt.hash("Password123", 12);
  try {
    await User.create({
    username: "TERRI",
    profilePicture:
      "https://image.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg",
    name: "Terri",
    lastName: "Shiavo",
    email: "terrishiavo@gmail.com",
    password: hashedPassword,
    phoneNumber: 478965321,
    dateOfBirth: 20 / 10 / 1960,
    nacionality: "Usa",
    languagesSpoken: "English",
    description:
      "I am Terri from Miami, United States, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    //2
    username: "JAQUELINE",
    profilePicture:
      "https://image.freepik.com/foto-gratis/empresaria-confiada-sonriente-que-presenta-brazos-cruzados_1262-20950.jpg",
    name: "Jaqueline",
    lastName: "Carvalho",
    email: "jaquicarvalho@gmail.com",
    password: hashedPassword,
    phoneNumber: 478965322,
    dateOfBirth: 04 / 12 / 1980,
    nacionality: "Brazilian",
    languagesSpoken: "Portuguese",
    description:
      "I am Jaqueline from Rio de Janeiro, Brazil, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    //3
    username: "WHALTHER",
    profilePicture:
      "https://image.freepik.com/foto-gratis/hombre-haciendo-gesto-ok_1149-1143.jpg",
    name: "Whalter",
    lastName: "White",
    email: "whalter@gmail.com",
    password: hashedPassword,
    phoneNumber: 478968821,
    dateOfBirth: 29 / 10 / 1969,
    nacionality: "Dutch",
    languagesSpoken: "Dutch",
    description:
      "I am Whalther from Amsterdam, Netherlands, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    //4
    username: "NADINA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/mujer-celebrando-ser-ganador_155003-38247.jpg",
    name: "Nadina",
    lastName: "Shiapov",
    email: "nadishiapov@gmail.com",
    password: hashedPassword,
    phoneNumber: 978965321,
    dateOfBirth: 20 / 10 / 1984,
    nacionality: "Russian",
    languagesSpoken: "Russian",
    description:
      "I am Nadina from Moscow, Russia, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    //5
    username: "MICHAEL",
    profilePicture:
      "https://image.freepik.com/foto-gratis/retrato-joven-apuesto-hace-buen-gesto-demuestra-que-acuerdo-gusta-idea-sonrie-felizmente-usa-gafas-opticas-sombrero-amarillo-camiseta-modelos-interior-bien-gracias-signo-mano_273609-30676.jpg",
    name: "Michael",
    lastName: "Page",
    email: "mikepage@gmail.com",
    password: hashedPassword,
    phoneNumber: 478985321,
    dateOfBirth: 15 / 11 / 1986,
    nacionality: "Indonesian",
    languagesSpoken: "Indonesian",
    description:
      "I am Michael from Bali, Indonesia, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    //6
    username: "GEERT",
    profilePicture:
      "https://image.freepik.com/foto-gratis/mira-captura-recortada-atractivo-joven-apuesto-emocionado-camiseta-azul-que-senala-dedos-arriba-despues-haber-mirado-sorprendido-expresion-alegre-feliz-cara-broadley-sonriendo_176420-10316.jpg",
    name: "Geert",
    lastName: "Lukaku",
    email: "gluka@gmail.com",
    password: hashedPassword,
    phoneNumber: 478888321,
    dateOfBirth: 20 / 04 / 1989,
    nacionality: "Belgium",
    languagesSpoken: "Dutch",
    description:
      "I am Geert from Brusells, Belgium, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "ANA, VANINA I NEO",
    profilePicture:
      "https://image.freepik.com/foto-gratis/chica-atractiva-curiosa-e-intrigada-encuentra-promocion-interesante-apuntando-esquina-superior-derecha_176420-27738.jpg",
    name: "Ana",
    lastName: "Suker",
    email: "anasuker@gmail.com",
    password: hashedPassword,
    phoneNumber: 478965321,
    dateOfBirth: 20 / 10 / 1984,
    nacionality: "Croatian",
    languagesSpoken: "Croatian",
    description:
      "I am Ana from Zagreb, Croatia, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "IVY",
    profilePicture:
      "https://image.freepik.com/foto-gratis/retrato-hermosa-mujer-joven-sonrisa-blanca-pie-blusa-tocar-pelo-corto-pie-sobre-pared-blanca_176420-34063.jpg",
    name: "Ivy",
    lastName: "Latimer",
    email: "latimerivy@gmail.com",
    password: hashedPassword,
    phoneNumber: 471234321,
    dateOfBirth: 20 / 04 / 1980,
    nacionality: "Australian",
    languagesSpoken: "English",
    description:
      "I am Ivy from Melbourne, Australia, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "PALOMA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/mujer-joven-mostrando-doble-pulgar-arriba-camisa-verde-mirando-contento-vista-frontal_176474-103360.jpg",
    name: "Paloma",
    lastName: "Campos",
    email: "palomac@gmail.com",
    password: hashedPassword,
    phoneNumber: 4789653421,
    dateOfBirth: 02 / 11 / 1984,
    nacionality: "Mexican",
    languagesSpoken: "Spanish",
    description:
      "I am Paloma from Ciudad de Mexico, Mexico, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "YENY",
    profilePicture:
      "https://image.freepik.com/foto-gratis/joven-mujer-pensativa-anteojos-pensando-nuevas-ideas-creativas-mientras-sentado-junto-mesa-cafeteria-u-oficina_274679-5752.jpg",
    name: "Yeny",
    lastName: "Browm",
    email: "tenybrown@gmail.com",
    password: hashedPassword,
    phoneNumber: 98478965321,
    dateOfBirth: 20 / 10 / 1980,
    nacionality: "Usa",
    languagesSpoken: "English",
    description:
      "I am Yeny from Miami, United States, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "ALMA DIAZ",
    profilePicture:
      "https://image.freepik.com/foto-gratis/mujer-levantando-manos-mientras-toma-selfie_23-2148293874.jpghttps://image.freepik.com/foto-gratis/mujer-levantando-manos-mientras-toma-selfie_23-2148293874.jpg",
    name: "Alma",
    lastName: "Diaz",
    email: "almadiaz@gmail.com",
    password: hashedPassword,
    phoneNumber: 478525321,
    dateOfBirth: 20 / 01 / 1958,
    nacionality: "Spanish",
    languagesSpoken: "Spanish",
    description:
      "I am Alma from Madrid, Spain, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "ANDREA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/estudiante-universitario-femenino-feliz-mostrando-pulgares-arriba-aislado_231208-10405.jpg",
    name: "Andrea",
    lastName: "Gonzalez",
    email: "andregon@gmail.com",
    password: hashedPassword,
    phoneNumber: 4789265321,
    dateOfBirth: 17 / 09 / 1984,
    nacionality: "Spanish",
    languagesSpoken: "Spanish",
    description:
      "I am Andrea from Barcelona, Spain, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "SONJA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/hermosa-joven-apuntando-arriba-sobre-fondo-blanco_1301-7744.jpg",
    name: "Sonja",
    lastName: "Berluschoni",
    email: "sonjab@gmail.com",
    password: hashedPassword,
    phoneNumber: 478965321,
    dateOfBirth: 30 / 04 / 1981,
    nacionality: "Italian",
    languagesSpoken: "Italian",
    description:
      "I am Sonja from Milano, Italy, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "VANESSA",
    profilePicture:
      "https://img.freepik.com/foto-gratis/asistente-rubia-anteojos-sonriendo-dando-poses-profesionales_144627-58758.jpg?size=338&ext=jpg",
    name: "Vanessa",
    lastName: "Federer",
    email: "vanefederer@gmail.com",
    password: hashedPassword,
    phoneNumber: 478968721,
    dateOfBirth: 20 / 06 / 1983,
    nacionality: "Swiss",
    languagesSpoken: "Romansh",
    description:
      "I am Vanessa from Zurich, Switzerland, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "LONE",
    profilePicture:
      "https://image.freepik.com/foto-gratis/hombre-joven-feliz-que-senala-su-dedo-contra-contexto-amarillo_23-2148119753.jpg",
    name: "Lone",
    lastName: "Laupdrup",
    email: "lonelaup@gmail.com",
    password: hashedPassword,
    phoneNumber: 478968721,
    dateOfBirth: 20 / 02 / 1988,
    nacionality: "Danish",
    languagesSpoken: "Danish",
    description:
      "I am Lone from Copenhagen, Denmark, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "DIEGO",
    profilePicture:
      "https://img.freepik.com/foto-gratis/hombre-joven-camiseta-posando-mientras-pie-mirando-confiado_176474-83807.jpg?size=338&ext=jpg",
    name: "Diego",
    lastName: "Suarez",
    email: "dsuarez@gmail.com",
    password: hashedPassword,
    phoneNumber: 478696721,
    dateOfBirth: 05 / 01 / 1985,
    nacionality: "Uruguayan",
    languagesSpoken: "Spanish",
    description:
      "I am Diego from Montevideo, Uruguay, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "NORMA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/retrato-feliz-mediados-mujer-adulta-abrazando-su-madre-senior_1262-18557.jpg",
    name: "Norma",
    lastName: "Romero",
    email: "normarome@gmail.com",
    password: hashedPassword,
    phoneNumber: 478968721,
    dateOfBirth: 20 / 08 / 1970,
    nacionality: "Paraguayan",
    languagesSpoken: "Spanish",
    description:
      "I am Norma from Asuncion, Paraguay, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "LASSE",
    profilePicture:
      "https://image.freepik.com/foto-gratis/cliente-masculino-complacido-muestra-bien-firmar-recomendar-producto_176420-19055.jpg",
    name: "Lasse",
    lastName: "Halland",
    email: "lashalland@gmail.com",
    password: hashedPassword,
    phoneNumber: 478518721,
    dateOfBirth: 23 / 02 / 1988,
    nacionality: "Norwegian",
    languagesSpoken: "Norwegian",
    description:
      "I am Lasee from Oslo, Norway, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "JOANA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/atractiva-mujer-sonriente-telefono-movil-mensajes-texto-redes-sociales-desplazamiento_176420-21819.jpg",
    name: "Joana",
    lastName: "Conzenciao",
    email: "joaconze@gmail.com",
    password: hashedPassword,
    phoneNumber: 478518721,
    dateOfBirth: 93 / 08 / 1986,
    nacionality: "Portuguese",
    languagesSpoken: "Portuguese",
    description:
      "I am Joana from Lisbon, Portugal, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "PAULA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/entusiasta-mujer-sonriente-rizos-brillantes-posando-delante-pared-vieja_197531-5427.jpg",
    name: "Paula",
    lastName: "Vidal",
    email: "paulavidal@gmail.com",
    password: hashedPassword,
    phoneNumber: 478518721,
    dateOfBirth: 24 / 08 / 1989,
    nacionality: "Chilean",
    languagesSpoken: "Spanish",
    description:
      "I am Paula from Santiago, Chile, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "HECTOR",
    profilePicture:
      "https://image.freepik.com/foto-gratis/hombre-mayor-fresco_53876-88401.jpg",
    name: "Hector",
    lastName: "Perez",
    email: "hectorperez@gmail.com",
    password: hashedPassword,
    phoneNumber: 478405321,
    dateOfBirth: 21 / 11 / 1961,
    nacionality: "Spanish",
    languagesSpoken: "Spanish",
    description:
      "I am Hector from Madrid, Spain, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "BEDANI",
    profilePicture:
      "https://img.freepik.com/foto-gratis/hombre-negocios-pensamiento_1368-9314.jpg?size=338&ext=jpg",
    name: "Bedani",
    lastName: "Paez",
    email: "bedanip@gmail.com",
    password: hashedPassword,
    phoneNumber: 478965390,
    dateOfBirth: 04 / 01 / 1981,
    nacionality: "Spanish",
    languagesSpoken: "Spanish",
    description:
      "I am Bedani from Barcelona, Spain, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "JOSE MANUEL",
    profilePicture:
      "https://img.freepik.com/foto-gratis/hombre-negocios-positivo-que-usa-computadora-portatil_23-2147800028.jpg?size=338&ext=jpg",
    name: "Jose Manuel",
    lastName: "Dominguez",
    email: "jmdominguez@gmail.com",
    password: hashedPassword,
    phoneNumber: 478966621,
    dateOfBirth: 20 / 02 / 1975,
    nacionality: "Spanish",
    languagesSpoken: "Spanish",
    description:
      "I am Jose Manuel from Valencia, Spain, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "IVO",
    profilePicture:
      "https://image.freepik.com/foto-gratis/pensativo-ceo-milenario-que-suena-exito_1163-5329.jpg",
    name: "Ivo",
    lastName: "Black",
    email: "iblanck@gmail.com",
    password: hashedPassword,
    phoneNumber: 978965321,
    dateOfBirth: 20 / 10 / 1984,
    nacionality: "French",
    languagesSpoken: "French",
    description:
      "I am Ivo from Paris, France, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "BARBARA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/retrato-mujer-negocios-trabajando-computadora-portatil_1303-9731.jpg",
    name: "Barbara",
    lastName: "Dominico",
    email: "barbiedominico@gmail.com",
    password: hashedPassword,
    phoneNumber: 256985321,
    dateOfBirth: 15 / 06 / 1982,
    nacionality: "Italian",
    languagesSpoken: "Italian",
    description:
      "I am Barbara from Rome, Italy, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "BJORN",
    profilePicture:
      "https://img.freepik.com/foto-gratis/retrato-hombre-sonriente-modelo-pie-mirando-feliz_144627-61993.jpg?size=338&ext=jpg",
    name: "Bjorn",
    lastName: "Svennson",
    email: "bjorns@gmail.com",
    password: hashedPassword,
    phoneNumber: 478888321,
    dateOfBirth: 23 / 08 / 1986,
    nacionality: "Icelander",
    languagesSpoken: "Islandic",
    description:
      "I am Bjorn from Reikiavik, Iceland, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "NICO & ERLEND",
    profilePicture:
      "https://image.freepik.com/foto-gratis/retrato-pareja-feliz-usando-telefono-movil_23-2147892038.jpg",
    name: "Nicollas",
    lastName: "Koemann",
    email: "nicokoeman@gmail.com",
    password: hashedPassword,
    phoneNumber: 478965321,
    dateOfBirth: 09 / 07 / 1983,
    nacionality: "Dutch",
    languagesSpoken: "Dutch",
    description:
      "I am Nicollas from Amsterdam, Netherlands, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "CHIEL",
    profilePicture:
      "https://image.freepik.com/foto-gratis/hombre-joven-barbudo-sorprendido-ojos-abiertos-tiene-expresion-asombro-apunta-lado-espacio-copia-blanco_273609-15492.jpg",
    name: "Chiel",
    lastName: "Van der SAr",
    email: "chielvdsar@gmail.com",
    password: hashedPassword,
    phoneNumber: 471234321,
    dateOfBirth: 18 / 06 / 1984,
    nacionality: "Dutch",
    languagesSpoken: "Dutch",
    description:
      "I am Ivy from Amsterdam, Netherlands, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "SUSAN",
    profilePicture:
      "https://image.freepik.com/foto-gratis/modelo-mujer-morena-pie-posando-contra-pared-amarilla_144627-67999.jpg",
    name: "Susan",
    lastName: "McBride",
    email: "susymcbride@gmail.com",
    password: hashedPassword,
    phoneNumber: 1117896532,
    dateOfBirth: 16 / 05 / 1962,
    nacionality: "Usa",
    languagesSpoken: "English",
    description:
      "I am Susan from Miami, United States, I really like to travel and I would like to change houses with you",
    });
    await User.create({
    username: "VALERIIA",
    profilePicture:
      "https://image.freepik.com/foto-gratis/retrato-hermosa-modelo-rubia-sonriente-vestida-ropa-hipster-verano_158538-5482.jpg",
    name: "Valeriia",
    lastName: "Komanesky",
    email: "valekoma@gmail.com",
    password: hashedPassword,
    phoneNumber: 8529653421,
    dateOfBirth: 06 / 11 / 1981,
    nacionality: "Russian",
    languagesSpoken: "Russian",
    description:
      "I am Valeriia from Moscow, Russia, I really like to travel and I would like to change houses with you",
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getInfoUsers,
};