export type Organizer = {
  name: string;
  affiliation: string;
  /** Path under /public/organizers (JPEG) or null for initials placeholder */
  imageSrc: string | null;
};

/** Order: hosting entities (GSE → MiTeri → …) per organizing team; `imageSrc` null uses initials fallback */
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
  { name: 'Nabin Poudel', affiliation: "Harvard '25", imageSrc: '/organizers/nabinpoudel.jpeg' },
  { name: 'Ang Sonam Sherpa', affiliation: "Harvard '23", imageSrc: '/organizers/angsonamsherpa.jpeg' },
  { name: 'Dr Pradish Poudel', affiliation: "Harvard MS '25", imageSrc: '/organizers/pradishpoudel.jpeg' },
  { name: 'Sam Adhikari', affiliation: "HBS '28", imageSrc: '/organizers/samadhikari.jpeg' },
  { name: 'Ashmita Gautam', affiliation: "HKS '26", imageSrc: '/organizers/ashmitagautam.jpeg' },
  { name: 'Bibek Raj Kandel', affiliation: "HKS '24", imageSrc: '/organizers/bibekrajkandel.jpeg' },
  { name: 'Samrat Dhungana', affiliation: "Harvard '27", imageSrc: '/organizers/samratdhungana.jpeg' },
  {
    name: 'Prajjawal Jung Pratap Singh',
    affiliation: "Northeastern '26",
    imageSrc: '/organizers/prajjawaljungpratapsingh.jpeg',
  },
];
