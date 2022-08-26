export const mainRoutes = [
  { name: 'Home', route: '/' },
  { name: 'About', route: '/about' },
  {
    name: 'Projects',
    route: '/projects-list',
  },
];

export const projectsData = [
  {
    name: 'Todolist',
    description: {
      concept: [
        'CRUD',
        'state management',
        'custom hooks',
        'localStorage',
        'contextAPI and useReducer',
      ],
      library: ['React'],
    },
    route: '/projects/todolist',
  },
  {
    name: 'PokemonDB',
    description: {
      concept: ['data fetching', 'asynchronous JS', 'state management'],
      library: [
        'React',
        'React Redux',
        'Redux Toolkit',
        'React Router',
        'Axios',
      ],
    },
    route: '/projects/pokemondb',
  },
];

export const sortData = {
  gen1: [1, 151],
  gen2: [152, 251],
  gen3: [252, 386],
  gen4: [387, 493],
  gen5: [494, 649],
  gen6: [650, 721],
  gen7: [722, 809],
  gen8: [810, 905],
};

export const pokemonDBRoutes = [
  { name: 'All Pokemon', route: '/projects/pokemondb' },
  { name: 'Generation 1', route: '/projects/pokemondb/gen1' },
  { name: 'Generation 2', route: '/projects/pokemondb/gen2' },
  { name: 'Generation 3', route: '/projects/pokemondb/gen3' },
  { name: 'Generation 4', route: '/projects/pokemondb/gen4' },
  { name: 'Generation 5', route: '/projects/pokemondb/gen5' },
  { name: 'Generation 6', route: '/projects/pokemondb/gen6' },
  { name: 'Generation 7', route: '/projects/pokemondb/gen7' },
  { name: 'Generation 8', route: '/projects/pokemondb/gen8' },
];

export const pokemonTypesColor = {
  Normal: '#A8A77A',
  Fire: '#EE8130',
  Water: '#6390F0',
  Electric: '#F7D02C',
  Grass: '#7AC74C',
  Ice: '#96D9D6',
  Fighting: '#C22E28',
  Poison: '#A33EA1',
  Ground: '#E2BF65',
  Flying: '#A98FF3',
  Psychic: '#F95587',
  Bug: '#A6B91A',
  Rock: '#B6A136',
  Ghost: '#735797',
  Dragon: '#6F35FC',
  Dark: '#705746',
  Steel: '#B7B7CE',
  Fairy: '#D685AD',
};

export const contactEls = [
  {
    name: 'GitHub',
    route: 'https://github.com/skullzado',
    icon: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZdJREFUSEu1lYExBVEMRe+vABWgAlSAClABKkAFqAAdUMGnAlSADuiACpgzk+zkZ7L735rZzOzs7puXe5P7kryZJrbZxPhqITiUdCBp2x5ierfnRdLDUJBDBADfSNpYkuWnpAtJj9W+PoIrSZcj5bs1ogW3iuA/4A56J+k8MmSCPUnPtuFJEmQnks5s7cPeW/ZG/3vbc2xrR1GuTICe67bx2gj4XZX0nSSLazFrMDZ9byTgUOcBhOiIvsWyrKeW2UKZkqqnCei+JMqwxSjhtyq4mAFgu0FrnMZY9KdPdnCOBGi8YoivkjjwMRYJOuxI8BvQJiGIEZDN2pjwrcpcgS+fADGDfMi0P93ZYjQXY8Wtq8C+Mv2x86D86M7cAw5EL1B5OZCyTHGiSUiTEiUqL1u6mp5wIoDJmKrjO1onT64i/n1UAESZOUjsagfLkvr6Qv9Uw871LKdjCLUaikuHnfs7CQ1DNj7UohSZoMpy8EZDLmRg+FXOToDmnE85VlquTIjIgmyiMUq47cqbzDe2ELT0Qe+eyQn+AIklVhnz1DvpAAAAAElFTkSuQmCC"
        alt="GitHub Icon"
      />
    ),
  },
  {
    name: 'LinkedIn',
    route: 'https://linkedin.com/skullzado',
    icon: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAO1JREFUSEvtldERwUAQhr9UgBJUgArQgRJ0QAl0QAVKMDqgAzrQASpgfrNnLjeZRC5uvOSeLpvd/9vd20syEq8ssT5FgK5B77+Ah4ANsDDhNbBqCvEByvzmCaqCXkqAtAVo1KqyFm2B5S8rcFpJD3kCPI30AM62HwKdwK5EBoBi5HcBrmHFYYucuPxOFqz9ERhbsOyarj3gqnW6smv6PisGoCwlHIo70akl9H6OAVSd+wGYOadYgC8yB3YeVRX2mwJG3gBIS3fFDUGuM7EVhHH+ELSAwulrW5T7VBRd0K9bVHVLa7//y0+/dpZlAS8ZgkgZgf59vgAAAABJRU5ErkJggg=="
        alt="LinkedIn Icon"
      />
    ),
  },
  {
    name: 'Gmail',
    route: 'mailto:pafcalzado@gmail.com',
    icon: (
      <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQhJREFUSEvtldERwUAURU8qoAN0oAM6QAdUgApQASqgBDqgAyUogQqYa3bN2tlkk4wYH7k/ycjuPfvue4mEipVU7E8NiCbsRjQGdsANWALb6O7PBdq/Nj/Ngb3uXcAVaDl7DsDEALNYTWMsgJW8Oj7gEXDRwhFwSSF0TdW6+nod3q0gBLCbZoHIbCSqIKRCABnYyHSvXg0jPSoMkJ8ik9o5BqAUIIfve0kUcAT6QCPiegdOwMBbFwWsgI3JvpcCOZteaAgWZQB64SRdfQMdIOt5rgqsgSCKS5MkaYIUi1XoAIUBMrMzr8+Jq68B0vr9HwBNzNQ5otvE2Pz7FehLrMmq/9Fiyf0goide8TgZZ2khYwAAAABJRU5ErkJggg=="
        alt="Gmail Icon"
      />
    ),
  },
];

export const accordionData = [
  {
    heading: "Libraries/Frameworks I'm familiar with:",
    content: [
      'React',
      'React Redux',
      'React Router',
      'Redux Toolkit',
      'Sass',
      'Express',
      'TypeScript',
    ],
  },
  {
    heading: 'Library/Framework I want to learn:',
    content: ['TypeScript with React', 'SvelteKit', 'Jest'],
  },
  {
    heading: 'Project I will be working on:',
    content: ['Simple blog app using MERN stack (practice project)'],
  },
];
