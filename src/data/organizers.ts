export type Organizer = {
  name: string;
  affiliation: string;
  /** Path under /public/organizers or null for initials placeholder */
  imageSrc: string | null;
};

/** Hosting cohort first; from Regan, order per lead-team sequence; then remaining members */
export const organizers: Organizer[] = [
  { name: 'Salome Bhatta', affiliation: "Harvard GSE '24", imageSrc: '/organizers/salomebhatta.jpeg' },
  { name: 'Utsav Kharel', affiliation: "Harvard GSE '26", imageSrc: '/organizers/utsavkharel.jpeg' },
  { name: 'Alina Nepal', affiliation: "Harvard GSE '26", imageSrc: '/organizers/alinanepal.jpeg' },
  { name: 'Ruchee Bhatta', affiliation: "MIT '26", imageSrc: '/organizers/rucheebhatta.jpeg' },
  {
    name: 'Asmi Pokharel',
    affiliation: "Harvard ES '27",
    imageSrc: '/organizers/asmipokharel.jpeg',
  },
  { name: 'Nirupama Roka Magar', affiliation: "Harvard '24", imageSrc: '/organizers/nirupamarokamagar.jpeg' },
  { name: 'Regan Maharjan', affiliation: "UMich '25", imageSrc: '/organizers/reganmaharjan.jpeg' },
  { name: 'Ang Sonam Sherpa', affiliation: "Harvard '23", imageSrc: '/organizers/angsonamsherpa.jpeg' },
  { name: 'Dr. Bibas Guragai', affiliation: "The University of Tokyo '17", imageSrc: '/organizers/drbibasguragai.png' },
  { name: 'Dr Pradish Poudel', affiliation: "Harvard MS '25", imageSrc: '/organizers/pradishpoudel.jpeg' },
  { name: 'Bibek Raj Kandel', affiliation: "HKS '24", imageSrc: '/organizers/bibekrajkandel.jpeg' },
  { name: 'Aayushma Gautam', affiliation: "Tufts University '24", imageSrc: '/organizers/aayushmagautam.jpg' },
  { name: 'Samrat Dhungana', affiliation: "Harvard '27", imageSrc: '/organizers/samratdhungana.jpeg' },
  { name: 'Ashmita Gautam', affiliation: "HKS '26", imageSrc: '/organizers/ashmitagautam.jpeg' },
  {
    name: 'Prajjawal Jung Pratap Singh',
    affiliation: "Northeastern '26",
    imageSrc: '/organizers/prajjawaljungpratapsingh.jpeg',
  },
  { name: 'Yumi Parajuli', affiliation: "Idaho State University '21", imageSrc: '/organizers/yumiparajuli.png' },
  { name: 'Sudan Duwadi', affiliation: "Boston University '26", imageSrc: '/organizers/sudanduwadi.png' },
  { name: 'Nabin Poudel', affiliation: "Harvard '25", imageSrc: '/organizers/nabinpoudel.jpeg' },
  { name: 'Sam Adhikari', affiliation: "HBS '28", imageSrc: '/organizers/samadhikari.jpeg' },
  {
    name: 'Simran Tamang',
    affiliation: "Harvard '28",
    imageSrc: '/organizers/simrantamang.png',
  },
];
