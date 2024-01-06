import { Museum } from '../models/museum.model';

export const museumArticles: Museum[] = [
  {
    id: 'mat-interactivo',
    imgUrl: './assets/mat1_top.jpg',
    color: 'var(--color-blue)',
    headerTitle: 'MAT Interactivo',
    headerSubtitle:
      'Un museo original y único en Cajamarca, donde colocamos al juego, la interacción y la experimentación en el centro de nuestra propuesta. No hay barreras, no hay objetos intocables. Todo es útil para aprender. "Prohibido no tocar".',
    title: 'Un mundo por descubrir',
    body: `<p>El Museo Agua y Tierra Interactivo (MAT) es un proyecto de la Asociación Los Andes de Cajamarca (ALAC), organismo corporativo de Yanacocha, que ha sido creado para no perder el sentido del asombro, motivar el interés por la experimentación y proporcionarles a nuestros visitantes un entorno favorable para el descubrimiento.</p>

    <p>El MAT es un espacio de aprendizaje a través del juego y la interacción. Promueve la reflexión creativa y estimula la curiosidad a partir del encuentro entre la experiencia común y el conocimiento científico. Mediante un modelo de educación no formal, se busca que el visitante aprenda a hacerse preguntas y encuentre que la ciencia es divertida. Su experiencia es la protagonista y punto de partida; el museo es sólo un canal que le permite reflexionar sobre su realidad a partir del contenido que allí está dispuesto.</p>

    <p>El contenido museológico y museográfico está orientado a la relación entre el agua y el suelo, pero no existen límites. El visitante podrá adentrarse tanto como su curiosidad se lo permita, apoyándose, además, en una potente sinergia que le ofrece el MAT, esto es, el contenido, los módulos interactivos y el diálogo con los mediadores.Visítanos y no te pierdas nuestros interesantes espacios que provocan curiosidad e indagación.</p>`,
    banners: [
      {
        body: `<h3>Sala Interactiva: Donde proponemos experiencias relacionadas con el universo, el ciclo del agua, los sismos, la formación de montañas, el uso de los minerales en la vida diaria, entre otras.</h3>`,
        image: `./assets/mat1_1.jpg`,
        color: '#91d4f1'
      },
      {
        body: `<h3>Sala Mineralizados: Espacio que invita a un viaje a las entrañas de la tierra y propone reflexionar sobre la formación de los minerales y su uso.</h3>`,
        image: `./assets/mat1_2.jpg`,
        color: '#91d4f1'
      },
      {
        body: `<h3>Laboratorio experimental: Donde a través de los experimentos, descubriremos algunos de los procesos físicos, químicos y biológicos detrás de los eventos ambientales propios del entorno de los visitantes.</h3>`,
        image: `./assets/mat1_3.jpg`,
        color: '#91d4f1'
      }
    ],
    footerText: 'Un encuentro entre la experiencia común y el conocimiento científico'
  },
  {
    id: 'educacion-ambiental',
    imgUrl: './assets/mat2_top.jpg',
    color: 'var(--color-green)',
    headerTitle: 'Educación ambiental',
    headerSubtitle:
      'Contribuimos a incrementar la concienciación y el conocimiento de los ciudadanos sobre temáticas o problemas ambientales, promoviendo junto a los docentes de manera interactiva, lúdica y reflexiva, conocimientos y buenas prácticas, asi como herramientas necesarias para tomar decisiones informadas. ',
    title: 'Agua y tierra para la vida',
    subtitle: 'Cuidemos nuestro ambiente',
    body: `<p>El MAT, en acción conjunta con la Dirección Regional de Educación de Cajamarca (DRE), llegan a los docentes a través de un programa de capacitación en temas ambientales bajo la metodología del juego y la experimentación. Mediante el despliegue de recursos educativos novedosos, se fortalecen las herramientas y estrategias pedagógicas que pueden implementar los maestros en el aula para estimular la curiosidad y el aprendizaje en sus estudiantes. </p>`,
    banners: [
      {
        body: `<h3>Trabajamos con docentes la indagación científica que promueva la curiosidad en sus estudiantes</h3>`,
        image: `./assets/mat2_1.jpg`,
        color: '#98ec86'
      },
      {
        body: `<h3>Promovemos junto a los docentes, de manera asertiva, conocimientos y prácticas de promoción de la salud y manejo de los residuos sólidos</h3>`,
        image: `./assets/mat2_2.jpg`,
        color: '#98ec86'
      },
    ],
    footerText: 'De esta manera, el MAT contribuye con la educación ambiental en las comunidades educativas y más aún hoy, sensibilizando a las familias, con el único fin de cuidar juntos nuestro ambiente.'
  },

  {
    id: 'divulgacion-cientifica',
    color: 'var(--color-black)',
    imgUrl: './assets/mat3_top.jpg',
    headerTitle: 'Divulgación científica',
    headerSubtitle:
      'Contribuimos a la construcción de una ciudadanía con pensamiento crítico y responsable con su ambiente, a través de nuestras Charlas MAT y de actividades experimentales para grandes y chicos.',
    title: 'Incentivamos la reflexión creativa y estimulamos la curiosidad',
    body: `<p>Promovemos el conocimiento científico divulgando la ciencia. El MAT Interactivo ha dado el primer paso para incentivar la reflexión creativa, estimular la curiosidad y generar el encuentro entre la experiencia común y el conocimiento científico, a través de las charlas MAT, talleres científicos vacacionales, actividades experimentales, entre otras; generando así, que niños y jóvenes aprendan a hacerse preguntas y desarrollen un pensamiento crítico a partir del entendimiento de su entorno</p>`,
    body2: `<p>El MAT Interactivo es un espacio de encuentro social que favorece la formación de una opinión pública ligada a la ciencia, donde se fomenta la democratización del conocimiento y la educación no formal que proponga estímulos para reflexionar sobre la sociedad, el entorno inmediato y el planeta.  ¡Vinculamos lo educativo con la ciudadanía!</p>`,
    banners: [
      {
        body: `<h3>¡Sé parte de nuestras Charlas MAT! Acompáñanos a reflexionar sobre las personas y su entorno, en un espacio de encuentro entre el conocimiento científico y los ciudadanos.</h3>`,
        image: `./assets/mat3_1.jpg`,
        color: '#b0afb3'
      },
      {
        body: `<h3>En nuestros talleres, provocamos emociones que motivan el interés por la experimentación y proporcionan a nuestros niños y niñas un entorno favorable para el descubrimiento.</h3>`,
        image: `./assets/mat3_2.jpg`,
        color: '#b0afb3'
      },
      {
        body: `<h3>Experimentamos para entender el entorno que nos rodea, divulgando la ciencia con énfasis en los elementos agua, tierra y minerales.</h3>`,
        image: `./assets/mat3_3.jpg`,
        color: '#b0afb3'
      }
    ],
    footerText: 'La curiosidad de los niños y niñas es admirable, tienen una capacidad extraordinaria para asombrarse y sorprenderse con los detalles que forman parte de su día a día.'
  },
  {
    id: 'cienciamovil',
    color: 'var(--color-yellow)',
    imgUrl: './assets/mat4_top.jpg',
    headerTitle: 'Cienciamóvil',
    headerSubtitle:
      'Acercamos la ciencia a comunidades rurales y distantes, a través un vehículo acondicionado con módulos itinerantes y experimentos científicos sorprendentes.',
    title: 'Recorriendo caminos hacia la ciencia',
    body: `<p>Es un vehículo acondicionado con módulos interactivos y actividades experimentales que puede desplazarse a cualquier territorio. Es también una extensión del museo que se conecta con las comunidades lejanas. El Cienciamovil se instala en un espacio al aire libre y transforma el entorno en un lugar de juego, en un escenario donde se encuentran la experiencia común y el conocimiento científico.</p>`,
    banners: [
      {
        body: `<h3>A través de la itinerancia estamos acercando el conocimiento científico a comunidades alejadas. </h3>`,
        image: `./assets/mat4_1.jpg`,
        color: '#c99938'
      },
    ],
    footerText: 'Nuestro recorrido motiva la valoración por la biodiversidad, que surge a partir de dos elementos: el agua y la tierra, generando emociones que provocan reflexión y acción.'
  },
];
