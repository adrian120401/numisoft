interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: '1',
        title: 'La Misión',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
    },
    {
        id: '2',
        title: 'La Misión 2',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
    },
    {
        id: '3',
        title: 'Cafe CAI',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, justo ac lacinia ullamcorper, nunc nisl fringilla lectus, vitae consectetur nunc elit sed nisi.',
        image: '/projects/lamision-insc.png',
    },
];