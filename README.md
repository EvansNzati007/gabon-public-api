# OpenGabon API

> API publique et open source sur les données administratives et géographiques du Gabon.

OpenGabon est une API REST construite avec NestJS qui expose les données administratives du Gabon — provinces, départements, et à terme villes, communes et bien plus. L'objectif est de fournir une ressource fiable, gratuite et documentée pour les développeurs, chercheurs et citoyens gabonais.

---

## Stack technique

- **Framework** : NestJS (Node.js / TypeScript)
- **ORM** : TypeORM
- **Base de données** : SQLite (dev) → PostgreSQL (prod)
- **Runtime** : Node.js 18+

---

## Installation

```bash
git clone https://github.com/EvansNzati007/gabon-api-public.git
cd gabon-api-public
npm install
```

Créer un fichier `.env.development` :

```env
DB_NAME=gabon.sqlite
```

Lancer le seed (peupler la base) :

```bash
npm run seed
```

Démarrer le serveur :

```bash
npm run start:dev
```

L'API tourne sur `http://localhost:3000`.

---

## Endpoints disponibles

### Provinces

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/provinces` | Liste toutes les provinces |
| GET | `/provinces/:code` | Récupère une province par son code administratif (ex: `G1`) |
| GET | `/provinces/:code/departements` | Récupère une province avec ses départements |

### Départements

| Méthode | Endpoint | Description |
|---|---|---|
| GET | `/departements` | Liste tous les départements (paginé) |
| GET | `/departements/:id` | Récupère un département par son ID |

#### Pagination

```
GET /departements?limit=10&offset=0
```

---

## Format des réponses

Toutes les réponses suivent un format uniforme :

```json
{
  "statusCode": 200,
  "message": "success",
  "data": { ... }
}
```

En cas d'erreur :

```json
{
  "statusCode": 404,
  "message": "Province with code G99 not found",
  "error": "Not Found"
}
```

---

## Codes administratifs des provinces

| Code | Province | Chef-lieu |
|---|---|---|
| G1 | Estuaire | Libreville |
| G2 | Haut-Ogooué | Franceville |
| G3 | Moyen-Ogooué | Lambaréné |
| G4 | Ngounié | Mouila |
| G5 | Nyanga | Tchibanga |
| G6 | Ogooué-Ivindo | Makokou |
| G7 | Ogooué-Lolo | Koulamoutou |
| G8 | Ogooué-Maritime | Port-Gentil |
| G9 | Woleu-Ntem | Oyem |

---

## Roadmap

- [x] Provinces (9)
- [x] Départements (49)
- [ ] Communes et cantons
- [ ] Villes avec coordonnées GPS
- [ ] Données démographiques (recensement)
- [ ] Données géographiques (GeoJSON)
- [ ] Documentation Swagger

---

## Contribution

Les données sont issues de Wikipedia et du site du Ministère de l'Intérieur du Gabon. Si vous constatez une erreur ou souhaitez enrichir les données, les contributions sont les bienvenues via Pull Request.

---

## Licence

MIT — libre d'utilisation, de modification et de distribution.

---

*Construit avec 🇬🇦 pour le Gabon et la diaspora africaine.*