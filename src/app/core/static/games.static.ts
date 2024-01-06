import { Game } from '../models/games.model';

export const games: Game[] = [
  {
    id: '1',
    title: 'Arma tu paca',
    description:
      '¡Aprende a construir tu propia paca y contribuye con el ambiente!',
    detail:
      'Una paca es una técnica para reciclar residuos orgánicos, convirtiéndolos en un efectivo abono natural. ¡Aprende a construir tu propia paca y contribuye con el ambiente!',
    imgUrls: [
      './assets/game-armatupaca.png',
      './assets/game-armatupaca2.png',
      './assets/game-armatupaca3.png',
      './assets/game-armatupaca4.png',
    ],
    date: '2020-08-04T16:35:11.075Z',
    subtitle: 'DIVIÉRTETE<br>Y RECICLA',
    recommended: [],
    color: 'var(--color-yellow)',
    urlIframe: './games/ArmaTuPaca/WebBuild/index.html',
    urlApk: './games/ArmaTuPaca/Mobile/ArmaTuPaca.apk',
  },
  {
    id: '-1',
    description: '',
    recommended: [],
    title: '',
    urlApk: '',
    urlIframe: '',
    color: ''
  },
  {
    id: '2',
    title: 'Pukyu',
    detail:
      'Enfrenta las dificultades que impiden que exista mucha más agua limpia para todos y averigua cómo usar mejor este importante recurso.',
    description:
      'Enfrenta las dificultades que impiden que exista mucha más agua limpia para todos y averigua cómo usar mejor este importante recurso.',
    imgUrls: [
      './assets/pukyu1.png',
      './assets/pukyu2.png',
      './assets/pukyu3.png',
      './assets/pukyu4.png',
    ],
    date: '2020-08-04T16:35:11.075Z',
    subtitle: 'USA EL AGUA<br>CON RESPONSABILIDAD',
    recommended: [],
    color: 'var(--color-green)',
    urlIframe: './games/Pukyu/WebBuild11/index.html',
    urlApk: './games/Pukyu/Mobile/Pukyu.apk',
  },
];
