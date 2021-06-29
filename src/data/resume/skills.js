// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 5,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 3,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Bash',
    competency: 4,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Batch',
    competency: 3,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Autodesk Inventor',
    competency: 4,
    category: ['Design'],
  },
  {
    title: 'Autodesk Sketchbook',
    competency: 5,
    category: ['Design'],
  },
  {
    title: 'Blender',
    competency: 3,
    category: ['Design'],
  },
  {
    title: 'Adobe Photoshop',
    competency: 4,
    category: ['Design'],
  },
  {
    title: 'Ubuntu (Linux)',
    competency: 5,
    category: ['System Administration', 'Linux Security'],
  },
  {
    title: 'Debian (Linux)',
    competency: 4,
    category: ['System Administration', 'Linux Security'],
  },
  {
    title: 'Windows Systems',
    competency: 3,
    category: ['System Administration'],
  },
  {
    title: 'Computer Networks (on Cisco PacketTracer)',
    competency: 3,
    category: ['System Administration'],
  },
  {
    title: 'OpenSSH',
    competency: 5,
    category: ['Linux Security'],
  },
  {
    title: 'AIDE',
    competency: 3,
    category: ['Linux Security'],
  },
  {
    title: 'Apache2',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'Apparmor',
    competency: 2,
    category: ['Linux Security'],
  },
  {
    title: 'AuditD',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'Fail2Ban',
    competency: 2,
    category: ['Linux Security'],
  },
  {
    title: 'Firefox',
    competency: 5,
    category: ['Linux Security'],
  },
  {
    title: 'GDM',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'Grub',
    competency: 2,
    category: ['Linux Security'],
  },
  {
    title: 'IPTable',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'LightDM',
    competency: 5,
    category: ['Linux Security'],
  },
  {
    title: 'MySQL',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'Nginx',
    competency: 2,
    category: ['Linux Security'],
  },
  {
    title: 'PostgreSQL',
    competency: 2,
    category: ['Linux Security'],
  },
  {
    title: 'ProFTPd',
    competency: 3,
    category: ['Linux Security'],
  },
  {
    title: 'Pure-FTPd',
    competency: 3,
    category: ['Linux Security'],
  },
  {
    title: 'Samba',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'Kernel Security',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'OS Security',
    competency: 4,
    category: ['Linux Security'],
  },
  {
    title: 'Mandarin',
    competency: 5,
    category: ['Languages'],
  },
  {
    title: 'Latin',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Artistic Swimming',
    competency: 5,
    category: ['Athletics'],
  },
  {
    title: 'Piano',
    competency: 5,
    category: ['Music'],
  },
  {
    title: 'Oboe',
    competency: 3,
    category: ['Music'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#999999',
  '#888888',
  '#777777',
  '#666666',
  '#b2b2b2',
  '#555555',
  '#cdcdcd',
  '#555555',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
