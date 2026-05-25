
import { DataSource } from 'typeorm';
import { Province } from './province/province.entity';
import { Departement } from './departement/departement.entity';
import * as dotenv from 'dotenv';



async function runSeed() {

}

runSeed().catch((err) => {
  console.error('❌ Erreur lors du seeding :', err);
  process.exit(1);
});
