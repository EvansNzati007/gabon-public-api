import { DataSource } from 'typeorm';
import { Province } from '../province/province.entity';
import { Departement } from '../departement/departement.entity';

const AppDataSource = new DataSource({
  type: 'sqlite',
  database: process.env.DB_NAME || 'db.sqlite',
  entities: [Province, Departement],
  synchronize: true,
});

const provincesData = [
  {
    codeAdministratif: 'G1',
    nom: 'Estuaire',
    code: 'ES',
    chefLieu: 'Akanda',
    population: 895689,
    superficie: 20740,
    departements: [
      {
        nom: 'Libreville',
        chefLieu: 'Libreville',
        population: 703940,
        superficie: 0,
      },
      {
        nom: 'Komo-Mondah',
        chefLieu: 'Ntoum',
        population: 90096,
        superficie: 0,
      },
      { nom: 'Komo', chefLieu: 'Kango', population: 17575, superficie: 0 },
      { nom: 'Noya', chefLieu: 'Cocobeach', population: 4225, superficie: 0 },
      {
        nom: 'Cap Estérias',
        chefLieu: 'Cap Estérias',
        population: 5744,
        superficie: 0,
      },
      {
        nom: 'Komo-Océan',
        chefLieu: 'Ndzomoe',
        population: 553,
        superficie: 0,
      },
    ],
  },
  {
    codeAdministratif: 'G2',
    nom: 'Haut-Ogooué',
    code: 'HO',
    chefLieu: 'Franceville',
    population: 250799,
    superficie: 36547,
    departements: [
      {
        nom: 'Mpassa',
        chefLieu: 'Franceville',
        population: 129694,
        superficie: 0,
      },
      {
        nom: 'Lemboumbi-Leyou',
        chefLieu: 'Moanda',
        population: 64569,
        superficie: 0,
      },
      {
        nom: 'Sébé-Brikolo',
        chefLieu: 'Okondja',
        population: 16443,
        superficie: 0,
      },
      { nom: 'Plateaux', chefLieu: 'Lékoni', population: 9054, superficie: 0 },
      {
        nom: 'Lékoni-Lékori',
        chefLieu: 'Akiéni',
        population: 10025,
        superficie: 0,
      },
      { nom: 'Lékoko', chefLieu: 'Bakoumba', population: 4920, superficie: 0 },
      {
        nom: 'Djouori-Agnili',
        chefLieu: 'Bongoville',
        population: 4210,
        superficie: 0,
      },
      { nom: 'Djoué', chefLieu: 'Onga', population: 2173, superficie: 0 },
      {
        nom: 'Bayi-Brikolo',
        chefLieu: 'Aboumi',
        population: 1998,
        superficie: 0,
      },
      {
        nom: 'Ondouboulou',
        chefLieu: 'Boumango',
        population: 2791,
        superficie: 0,
      },
      {
        nom: 'Lékabi-Léwolo',
        chefLieu: 'Ngouoni',
        population: 4922,
        superficie: 0,
      },
    ],
  },
  {
    codeAdministratif: 'G3',
    nom: 'Moyen-Ogooué',
    code: 'MO',
    chefLieu: 'Lambaréné',
    population: 69287,
    superficie: 18535,
    departements: [
      {
        nom: 'Ogooué et des Lacs',
        chefLieu: 'Lambaréné',
        population: 54346,
        superficie: 0,
      },
      {
        nom: 'Abanga-Bigné',
        chefLieu: 'Ndjolé',
        population: 14941,
        superficie: 0,
      },
    ],
  },
  {
    codeAdministratif: 'G4',
    nom: 'Ngounié',
    code: 'NG',
    chefLieu: 'Mouila',
    population: 100838,
    superficie: 37750,
    departements: [
      {
        nom: 'Mougoutsi',
        chefLieu: 'Mouila',
        population: 42243,
        superficie: 0,
      },
      {
        nom: 'Tsamba-Magotsi',
        chefLieu: 'Fougamou',
        population: 14875,
        superficie: 0,
      },
      {
        nom: 'Boumi-Louetsi',
        chefLieu: 'Mbigou',
        population: 13151,
        superficie: 0,
      },
      { nom: 'Dola', chefLieu: 'Ndendé', population: 7265, superficie: 0 },
      {
        nom: 'Douya-Onoye',
        chefLieu: 'Ndoutou',
        population: 3415,
        superficie: 0,
      },
      {
        nom: 'Louetsi-Wano',
        chefLieu: 'Lebamba',
        population: 9750,
        superficie: 0,
      },
      { nom: 'Ndolou', chefLieu: 'Mandji', population: 5403, superficie: 0 },
      { nom: 'Ogoulou', chefLieu: 'Mimongo', population: 8361, superficie: 0 },
      {
        nom: 'Louetsi-Bibaka',
        chefLieu: 'Malinga',
        population: 1375,
        superficie: 0,
      },
    ],
  },
  {
    codeAdministratif: 'G5',
    nom: 'Nyanga',
    code: 'NY',
    chefLieu: 'Tchibanga',
    population: 52854,
    superficie: 21285,
    departements: [
      {
        nom: 'Mougoutsi',
        chefLieu: 'Tchibanga',
        population: 31789,
        superficie: 0,
      },
      {
        nom: 'Basse-Banio',
        chefLieu: 'Mayumba',
        population: 7409,
        superficie: 0,
      },
      { nom: 'Douigny', chefLieu: 'Moabi', population: 5235, superficie: 0 },
      { nom: 'Doutsila', chefLieu: 'Mabanda', population: 4623, superficie: 0 },
      {
        nom: 'Haute-Banio',
        chefLieu: 'Ndindi',
        population: 1413,
        superficie: 0,
      },
      {
        nom: 'Mongo',
        chefLieu: 'Moulingui-Binza',
        population: 2385,
        superficie: 0,
      },
    ],
  },
  {
    codeAdministratif: 'G6',
    nom: 'Ogooué-Ivindo',
    code: 'OI',
    chefLieu: 'Makokou',
    population: 63293,
    superficie: 46075,
    departements: [
      { nom: 'Ivindo', chefLieu: 'Makokou', population: 31073, superficie: 0 },
      { nom: 'Zadié', chefLieu: 'Mékambo', population: 15816, superficie: 0 },
      { nom: 'Lopé', chefLieu: 'Booué', population: 12382, superficie: 0 },
      { nom: 'Mvoung', chefLieu: 'Ovan', population: 4022, superficie: 0 },
    ],
  },
  {
    codeAdministratif: 'G7',
    nom: 'Ogooué-Lolo',
    code: 'OL',
    chefLieu: 'Koulamoutou',
    population: 65771,
    superficie: 25380,
    departements: [
      {
        nom: 'Lolo-Bouénguidi',
        chefLieu: 'Koulamoutou',
        population: 30432,
        superficie: 0,
      },
      {
        nom: 'Mulundu',
        chefLieu: 'Lastoursville',
        population: 27750,
        superficie: 0,
      },
      {
        nom: 'Lombo-Bouénguidi',
        chefLieu: 'Pana',
        population: 4635,
        superficie: 0,
      },
      {
        nom: 'Offoué-Onoye',
        chefLieu: 'Iboundji',
        population: 2954,
        superficie: 0,
      },
    ],
  },
  {
    codeAdministratif: 'G8',
    nom: 'Ogooué-Maritime',
    code: 'OM',
    chefLieu: 'Port-Gentil',
    population: 157562,
    superficie: 22890,
    departements: [
      {
        nom: 'Bendjé',
        chefLieu: 'Port-Gentil',
        population: 141028,
        superficie: 0,
      },
      { nom: 'Ndougou', chefLieu: 'Gamba', population: 11092, superficie: 0 },
      { nom: 'Etimboué', chefLieu: 'Omboué', population: 5442, superficie: 0 },
    ],
  },
  {
    codeAdministratif: 'G9',
    nom: 'Woleu-Ntem',
    code: 'WT',
    chefLieu: 'Oyem',
    population: 154986,
    superficie: 38465,
    departements: [
      { nom: 'Woleu', chefLieu: 'Oyem', population: 74585, superficie: 0 },
      { nom: 'Ntem', chefLieu: 'Bitam', population: 49712, superficie: 0 },
      { nom: 'Okano', chefLieu: 'Mitzic', population: 16630, superficie: 0 },
      {
        nom: 'Haut-Ntem',
        chefLieu: 'Minvoul',
        population: 7612,
        superficie: 0,
      },
      {
        nom: 'Haut-Como',
        chefLieu: 'Medouneu',
        population: 6447,
        superficie: 0,
      },
    ],
  },
];

async function seed() {
  await AppDataSource.initialize();
  console.log('📦 Connexion DB établie');

  const provinceRepo = AppDataSource.getRepository(Province);
  const departementRepo = AppDataSource.getRepository(Departement);

  await departementRepo.clear();
  await provinceRepo.clear();
  console.log('🧹 Tables vidées');

  for (const data of provincesData) {
    const { departements, ...provinceFields } = data;

    const province = provinceRepo.create(provinceFields);
    await provinceRepo.save(province);

    for (const deptData of departements) {
      const dept = departementRepo.create({ ...deptData, province });
      await departementRepo.save(dept);
    }

    console.log(
      `✅ ${province.nom} (${province.codeAdministratif}) + ${departements.length} départements`,
    );
  }

  console.log('🎉 Seed terminé — 9 provinces, 50 départements');
  await AppDataSource.destroy();
}

seed().catch((err) => {
  console.error('❌ Erreur seed:', err);
  process.exit(1);
});
