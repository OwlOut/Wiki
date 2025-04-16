---

sidebar_position: 2  
---

# Créer un document

Les documents sont des **groupes de pages** reliées entre elles via :

- une **barre latérale**  
- une **navigation précédente/suivante**  
- un **système de versions**

## Créez votre premier document

Créez un fichier markdown à l’emplacement `docs/hello.md` :

```md title="docs/hello.md"
# Bonjour

Ceci est mon **premier document Docusaurus** !
```

Un nouveau document est maintenant disponible à l’adresse `http://localhost:3000/docs/hello`.

## Configurer la barre latérale

Docusaurus **crée automatiquement une barre latérale** à partir du dossier `docs`.

Ajoutez des métadonnées pour personnaliser le libellé et la position dans la barre latérale :

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Salut !'
sidebar_position: 3
---

# Bonjour

Ceci est mon **premier document Docusaurus** !
```

Il est également possible de créer la barre latérale explicitement dans `sidebars.js` :

```diff title="sidebars.js"
module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutoriel',
-     items: [...],
+     items: ['hello'],
    },
  ],
};
```