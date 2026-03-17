# Référentiel RGAA 4.1.2
## 1. Images [Thématique Images](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1 "Thématique Images")

### 1.1Chaque  [image porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  a-t-elle une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ?  [Critère 1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1 "Critère 1.1")

Tests et références du critère 1.1

#### 1.1.1

Chaque image (balise  `<img>`  ou balise possédant l’attribut WAI-ARIA  `role="img"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  a-t-elle une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ? [Test 1.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.1 "Test 1.1.1")

Méthodologie du test 1.1.1

1.  Retrouver dans le document les images structurées au moyen d’un élément  `<img>`  ou d’un élément possédant l’attribut WAI-ARIA  `role="img"` ;
2.  Pour chaque image, déterminer si l’image est porteuse d’information ;
3.  Dans le cas où il s’agit d’un élément  `<img>`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label` ;
    -   Contenu de l’attribut  `alt` ;
    -   Contenu de l’attribut  `title`.
4.  Dans le cas où il s’agit d’un élément possédant l’attribut WAI-ARIA  `role="img"`, vérifier que l’image est pourvue au moins d’une alternative textuelle parmi les suivantes :
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label`.
5.  Si au moins une alternative textuelle est trouvée,  **le test est validé**.

#### 1.1.2

Chaque  [zone](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-d-une-image-reactive)  d’une  [image réactive](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-reactive)  (balise  `<area>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  a-t-elle une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ? [Test 1.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.2 "Test 1.1.2")

Méthodologie du test 1.1.2

1.  Retrouver dans le document les éléments  `<area>` ;
2.  Pour chaque élément  `<area>`, déterminer si la zone réactive est porteuse d’information ;
3.  Vérifier que la zone réactive est pourvue au moins d’une alternative textuelle parmi les suivantes :
    -   Contenu de l’attribut WAI-ARIA  `aria-label` ;
    -   Contenu de l’attribut  `alt` ;
4.  Si au moins une alternative textuelle est trouvée,  **le test est validé**.

#### 1.1.3

Chaque bouton de type  `image`  (balise  `<input>`  avec l’attribut  `type="image"`) a-t-il une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ? [Test 1.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.3 "Test 1.1.3")

Méthodologie du test 1.1.3

1.  Retrouver dans le document les éléments  `<input>`  pourvus de l’attribut  `type="image"` ;
2.  Pour chaque élément  `<input>`  pourvu de l’attribut type="image", déterminer si l’image utilisée est porteuse d’information ;
3.  Vérifier que l’élément  `<input>`  est pourvu au moins d’une alternative textuelle parmi les suivantes :
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label` ;
    -   Contenu de l’attribut  `alt` ;
    -   Contenu de l’attribut  `title`.
4.  Si au moins une alternative textuelle est trouvée,  **le test est validé**.

#### 1.1.4

Chaque  [zone cliquable](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-cliquable)  d’une image réactive côté serveur est-elle doublée d’un mécanisme utilisable quel que soit le dispositif de pointage utilisé et permettant d’accéder à la même destination ? [Test 1.1.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.4 "Test 1.1.4")

Méthodologie du test 1.1.4

1.  Retrouver dans le document les éléments  `<img>`  pourvus de l’attribut  `ismap` ;
2.  Pour chaque élément  `<img>`  pourvu de l’attribut  `ismap`, vérifier la présence d’un lien ou d’un ensemble de liens (ou bien d’un autre type de composant d’interface qui jouerait un rôle similaire comme une liste de sélection, par exemple) permettant d’accéder aux mêmes ressources que lorsque l’image fait l’objet d’un clic.
3.  Si c’est le cas,  **le test est validé**.

#### 1.1.5

Chaque image vectorielle (balise  `<svg>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), vérifie-t-elle ces conditions ? [Test 1.1.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.5 "Test 1.1.5")

-   La balise  `<svg>`  possède un attribut WAI-ARIA  `role="img"` ;
-   La balise  `<svg>`  a une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image).

Méthodologie du test 1.1.5

1.  Retrouver dans le document les éléments  `<svg>` ;
2.  Pour chaque élément  `<svg>`, déterminer si l’image est porteuse d’information ;
3.  S’assurer que l’élément  `<svg>`  est pourvu d’un attribut WAI-ARIA  `role="img"` ;
4.  Si ce n’est pas le cas, le test est invalidé.
5.  Le cas échéant, vérifier que l’élément  `<svg>`  est pourvu au moins d’une alternative textuelle parmi les suivantes :
    -   Contenu de l’élément  `<title>`  ;
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label` ;
6.  Si au moins une alternative textuelle est trouvée,  **le test est validé**.

#### 1.1.6

Chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  (balise  `<object>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), vérifie-t-elle une de ces conditions ? [Test 1.1.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.6 "Test 1.1.6")

-   La balise  `<object>`  possède une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  et un attribut  `role="img"` ;
-   L’élément  `<object>`  est immédiatement suivi d’un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif) ;
-   Un mécanisme permet à l’utilisateur de remplacer l’élément  `<object>`  par un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif).

Méthodologie du test 1.1.6

1.  Retrouver dans le document les balises ouvrantes  `<object>`  pourvues de l’attribut  `type=“image/…”` ;
2.  Pour chaque balise ouvrante  `<object>`  pourvue de l’attribut  `type=“image/…”`, déterminer si l’image utilisée est porteuse d’information ;
3.  Vérifier que l’élément  `<object>`  est pourvu d’un attribut WAI-ARIA  `role=“img”`  ;
4.  Vérifier que l’élément  `<object>`  est pourvu au moins d’une alternative textuelle parmi les suivantes :
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label` ;
    -   Contenu de l’attribut  `title`.
5.  Si au moins une alternative textuelle est trouvée,  **le test est validé** ;
6.  Sinon, vérifier que l’élément  `<object>`  est :
    -   Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
    -   Soit un mécanisme permet à l’utilisateur de remplacer l’élément  `<object>`  par un contenu alternatif.
7.  Si c’est le cas,  **le test est validé**.

#### 1.1.7

Chaque image embarquée (balise  `<embed>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), vérifie-t-elle une de ces conditions ? [Test 1.1.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.7 "Test 1.1.7")

-   La balise  `<embed>`  possède une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  et un attribut  `role="img"` ;
-   L’élément  `<embed>`  est immédiatement suivi d’un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif) ;
-   Un mécanisme permet à l’utilisateur de remplacer l’élément  `<embed>`  par un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif).

Méthodologie du test 1.1.7

1.  Pour chaque élément  `<embed>`  pourvu de l’attribut  `type="image/…"`, déterminer si l’image utilisée est porteuse d’information ;
2.  Vérifier que l’élément  `<embed>`  est pourvu d’un attribut WAI-ARIA  `role="img"`  ;
3.  Vérifier que l’élément  `<embed>`  est pourvu au moins d’une alternative textuelle parmi les suivantes :
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label` ;
    -   Contenu de l’attribut  `title`.
4.  Si au moins une alternative textuelle est trouvée,  **le test est validé** ;
5.  Sinon, vérifier que l’élément  `<embed>`  est :
    -   Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
    -   Soit un mécanisme permet à l’utilisateur de remplacer l’élément  `<embed>`  par un contenu alternatif.
6.  Si c’est le cas,  **le test est validé**.

#### 1.1.8

Chaque image bitmap (balise  `<canvas>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), vérifie-t-elle une de ces conditions ? [Test 1.1.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.1.8 "Test 1.1.8")

-   La balise  `<canvas>`  possède une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  et un attribut  `role="img"` ;
-   Un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est présent entre les balises  `<canvas>`  et  `</canvas>` ;
-   L’élément  `<canvas>`  est immédiatement suivi d’un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif) ;
-   Un mécanisme permet à l’utilisateur de remplacer l’élément  `<canvas>`  par un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif).

Méthodologie du test 1.1.8

1.  Retrouver dans le document les éléments  `<canvas>` ;
2.  Pour chaque élément  `<canvas>`, déterminer si l’image utilisée est porteuse d’information ;
3.  Vérifier que l’élément  `<canvas>`  est pourvu d’un attribut WAI-ARIA  `role=“img”`  ;
4.  Vérifier que la balise ouvrante  `<canvas>`  est pourvue au moins d’une alternative textuelle parmi les suivantes :
    -   Passage de texte associé via l’attribut WAI-ARIA  `aria-labelledby` ;
    -   Contenu de l’attribut WAI-ARIA  `aria-label`.
5.  Si au moins une alternative textuelle est trouvée,  **le test est validé**.
6.  Si les étapes 3 et 4 ne sont pas satisfaites, vérifier que l’élément  `<canvas>`  est :
    -   Soit pourvu d’un contenu alternatif présent entre les balises  `<canvas>`  et  `</canvas>` ;
    -   Soit immédiatement suivi d’un lien ou bouton adjacent permettant d’accéder à un contenu alternatif ;
    -   Soit un mécanisme permet à l’utilisateur de remplacer l’élément  `<canvas>`  par un contenu alternatif.
7.  Si c’est le cas,  **le test est validé**.

Note : si l’élément  `<canvas>`  dispose d’un rôle  `img`, son alternative ne peut être fournie que par les techniques listées à l’étape 4.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H36](https://www.w3.org/WAI/WCAG21/Techniques/html/H36 "H36 - nouvelle fenêtre")
-   [H37](https://www.w3.org/WAI/WCAG21/Techniques/html/H37 "H37 - nouvelle fenêtre")
-   [H53](https://www.w3.org/WAI/WCAG21/Techniques/html/H53 "H53 - nouvelle fenêtre")
-   [F65](https://www.w3.org/WAI/WCAG21/Techniques/failures/F65 "F65 - nouvelle fenêtre")
-   [H24](https://www.w3.org/WAI/WCAG21/Techniques/html/H24 "H24 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 1.2Chaque  [image de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration)  est-elle correctement ignorée par les technologies d’assistance ?  [Critère 1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2 "Critère 1.2")

Tests et références du critère 1.2

#### 1.2.1

Chaque image (balise  `<img>`)  [de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration), sans  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image), vérifie-t-elle une de ces conditions ? [Test 1.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2.1 "Test 1.2.1")

-   La balise  `<img>`  possède un attribut  `alt`  vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ;
-   La balise  `<img>`  possède un attribut WAI-ARIA  `aria-hidden="true"`  ou  `role="presentation"`.

Méthodologie du test 1.2.1

1.  Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément  `<img>` ;
2.  Pour chaque image, vérifier que l’image ne possède pas d’attributs  `aria-labelledby`,  `aria-label`  ou  `title`  et qu’elle possède :
    -   Soit un attribut  `alt`  vide (`alt=""`) ;
    -   Soit un attribut WAI-ARIA  `aria-hidden="true"`  ou  `role="presentation"`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.2.2

Chaque  [zone non cliquable](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-non-cliquable)  (balise  `<area>`  sans attribut  `href`)  [de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration), vérifie-t-elle une de ces conditions ? [Test 1.2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2.2 "Test 1.2.2")

-   La balise  `<area>`  possède un attribut  `alt`  vide (`alt=""`) et est dépourvue de tout autre attribut permettant de fournir une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ;
-   La balise  `<area>`  possède un attribut WAI-ARIA  `aria-hidden="true"`  ou  `role="presentation"`.

Méthodologie du test 1.2.2

1.  Retrouver dans le document les images décoratives structurées au moyen d’un élément  `<area>`  (sans attribut  `href`) ;
2.  Pour chaque image, vérifier que l’élément  `<area>`  ne possède pas d’attributs  `aria-labelledby`,  `aria-label`  ou  `title`  et qu’il possède :
    -   Soit un attribut  `alt`  vide (`alt=""`) ;
    -   Soit un attribut WAI-ARIA  `aria-hidden="true"`  ou  `role="presentation"`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.2.3

Chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  (balise  `<object>`  avec l’attribut  `type="image/…"`)  [de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration), sans  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image), vérifie-t-elle ces conditions ? [Test 1.2.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2.3 "Test 1.2.3")

-   La balise  `<object>`  possède un attribut WAI-ARIA  `aria-hidden="true"` ;
-   La balise  `<object>`  est dépourvue d’alternative textuelle ;
-   Il n’y a aucun texte faisant office d’alternative textuelle entre  `<object>`  et  `</object>`.

Méthodologie du test 1.2.3

1.  Retrouver dans le document les images décoratives structurées dépourvues de légende au moyen d’un élément  `<object>`  (avec un attribut  `type="image/…"`) ;
2.  Pour chaque image, vérifier que la balise ouvrante  `<object>`  ne possède pas d’attributs  `aria-labelledby`,  `aria-label`  ou  `title`  et qu’elle :
    -   Possède un attribut WAI-ARIA  `aria-hidden="true"` ;
    -   Et est dépourvue d’alternative textuelle ;
    -   Et est dépourvue d’un contenu alternatif présent entre les balises  `<object>`  et  `</object>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.2.4

Chaque image vectorielle (balise  `<svg>`)  [de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration), sans  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image), vérifie-t-elle ces conditions ? [Test 1.2.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2.4 "Test 1.2.4")

-   La balise  `<svg>`  possède un attribut WAI-ARIA  `aria-hidden="true"` ;
-   La balise  `<svg>`  et ses enfants sont dépourvus d’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ;
-   Les balises  `<title>`  et  `<desc>`  sont absentes ou vides ;
-   La balise  `<svg>`  et ses enfants sont dépourvus d’attribut  `title`.

Méthodologie du test 1.2.4

1.  Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément  `<svg>` ;
2.  Pour chaque image, vérifier que l’élément  `<svg>`  ne possède pas d’attributs  `aria-labelledby`  ou  `aria-label`  et qu’il :
    -   Possède un attribut WAI-ARIA  `aria-hidden="true"` ;
    -   Et est dépourvu d’alternative textuelle (ainsi que ses éléments enfants) ;
    -   Et ne contient pas d’éléments  `<title>`  et  `<desc>`  à moins que vides de contenu ;
    -   Et est dépourvu d’attribut  `title`  (ainsi que ses éléments enfants).
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.2.5

Chaque image bitmap (balise  `<canvas>`)  [de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration), sans  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image), vérifie-t-elle ces conditions ? [Test 1.2.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2.5 "Test 1.2.5")

-   La balise  `<canvas>`  possède un attribut WAI-ARIA  `aria-hidden="true"` ;
-   La balise  `<canvas>`  et ses enfants sont dépourvus d’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image) ;
-   Il n’y a aucun texte faisant office d’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  entre  `<canvas>`  et  `</canvas>`.

Méthodologie du test 1.2.5

1.  Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément  `<canvas>` ;
2.  Pour chaque image, vérifier que l’élément  `<canvas>`  ne possède pas d’attributs  `aria-labelledby`,  `aria-label`  ou  `title`  et qu’il :
    -   Possède un attribut WAI-ARIA  `aria-hidden="true"` ;
    -   Et est dépourvu d’alternative textuelle ;
    -   Et est dépourvu d’un contenu alternatif présent entre les balises  `<canvas>`  et  `</canvas>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.2.6

Chaque image embarquée (balise  `<embed>`  avec l’attribut  `type="image/…"`)  [de décoration](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-de-decoration), sans  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image), vérifie-t-elle ces conditions ? [Test 1.2.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.2.6 "Test 1.2.6")

-   La balise  `<embed>`  possède un attribut WAI-ARIA  `aria-hidden="true"` ;
-   La balise  `<embed>`  et ses enfants sont dépourvus d’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image).

Méthodologie du test 1.2.6

1.  Retrouver dans le document les images décoratives dépourvues de légende structurées au moyen d’un élément  `<embed>`  (avec un attribut  `type="image/…"`) ;
2.  Pour chaque image, vérifier que l’élément  `<embed>`  ne possède pas d’attributs  `aria-labelledby`,  `aria-label`  ou  `title`  et qu’il :
    -   Possède un attribut WAI-ARIA  `aria-hidden="true"` ;
    -   Et est dépourvu d’alternative textuelle ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Note technique

Lorsqu'une image est associée à une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image), la note technique WCAG recommande de prévoir systématiquement une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  (cf. critère 1.9). Dans ce cas le critère 1.2 est non applicable.

Dans le cas d'une image vectorielle (balise  `<svg>`) de décoration qui serait affichée au travers d'un élément  `<use href="…">`  enfant de l'élément  `<svg>`, le test 1.2.4 s'appliquera également à l'élément  `<svg>`  associée par le biais de l'élément  `<use>`.

Un attribut WAI-ARIA  `role="presentation"`  peut être utilisé sur les images de décoration et les zones non cliquables de décoration. Le rôle  `"none"`  introduit en ARIA 1.1 et synonyme du rôle  `"presentation"`  peut être aussi utilisé. Il reste préférable cependant d'utiliser le rôle  `"presentation"`  en attendant un support satisfaisant du rôle  `"none"`.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H67](https://www.w3.org/WAI/WCAG21/Techniques/html/H67 "H67 - nouvelle fenêtre")
-   [G196](https://www.w3.org/WAI/WCAG21/Techniques/general/G196 "G196 - nouvelle fenêtre")
-   [C9](https://www.w3.org/WAI/WCAG21/Techniques/css/C9 "C9 - nouvelle fenêtre")
-   [F39](https://www.w3.org/WAI/WCAG21/Techniques/failures/F39 "F39 - nouvelle fenêtre")
-   [F38](https://www.w3.org/WAI/WCAG21/Techniques/failures/F38 "F38 - nouvelle fenêtre")
-   [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4 "ARIA4 - nouvelle fenêtre")
-   [ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10 "ARIA10 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 1.3Pour chaque image  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ?  [Critère 1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3 "Critère 1.3")

Tests et références du critère 1.3

#### 1.3.1

Chaque image (balise  `<img>`  ou balise possédant l’attribut WAI-ARIA  `role="img"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.1 "Test 1.3.1")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.3.1

1.  Retrouver dans le document les images structurées au moyen d’un élément  `<img>`  (ou d’un élément possédant l’attribut WAI-ARIA  `role="img"`) pourvues d’une alternative textuelle ;
2.  Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.2

Pour chaque  [zone](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-d-une-image-reactive)  (balise  `<area>`) d’une  [image réactive](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-reactive)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.2 "Test 1.3.2")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.3.2

1.  Retrouver dans le document les éléments  `<area>`  pourvus d’une alternative textuelle ;
2.  Pour chaque élément  `<area>`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.3

Pour chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  de type  `image`  (balise  `<input>`  avec l’attribut  `type="image"`), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.3 "Test 1.3.3")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.3.3

1.  Retrouver dans le document les éléments  `<input>`  pourvus de l’attribut  `type="image"`  et d’une alternative textuelle ;
2.  Pour chaque élément  `<input>`  pourvu de l’attribut  `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.4

Pour chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  (balise  `<object>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  ou un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.4 "Test 1.3.4")

-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent le  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est pertinent.

Méthodologie du test 1.3.4

1.  Retrouver dans le document les éléments  `<object>`  pourvus de l’attribut  `type="image/…"`  et d’une alternative textuelle ;
2.  Pour chaque élément  `<object>`  pourvu de l’attribut  `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.5

Pour chaque image embarquée (balise  `<embed>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  ou un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.5 "Test 1.3.5")

-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent le  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est pertinent.

Méthodologie du test 1.3.5

1.  Retrouver dans le document les éléments  `<embed>`  pourvus de l’attribut  `type="image/…"`  et d’une alternative textuelle ;
2.  Pour chaque élément  `<embed>`  pourvu de l’attribut  `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.6

Pour chaque image vectorielle (balise  `<svg>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.6 "Test 1.3.6")

-   S’il est présent, le contenu de l’élément  `<title>`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.3.6

1.  Retrouver dans le document les éléments  `<svg>`  pourvus d’une alternative textuelle ;
2.  Pour chaque élément  `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.7

Pour chaque image bitmap (balise  `<canvas>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  ou un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif), cette alternative est-elle pertinente (hors cas particuliers) ? [Test 1.3.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.7 "Test 1.3.7")

-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent le  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est pertinent.

Méthodologie du test 1.3.7

1.  Retrouver dans le document les éléments  `<canvas>`  pourvus d’une alternative textuelle ;
2.  Pour chaque élément  `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.8

Pour chaque image bitmap (balise  `<canvas>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  et ayant un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  entre  `<canvas>`  et  `</canvas>`, ce  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est-il  [correctement restitué par les technologies d’assistance](https://accessibilite.numerique.gouv.fr/methode/glossaire/#correctement-restitue-par-les-technologies-d-assistance) ? [Test 1.3.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.8 "Test 1.3.8")

Méthodologie du test 1.3.8

1.  Retrouver dans le document les éléments  `<canvas>`  pourvus d’un contenu alternatif entre les balises  `<canvas>`  et  `</canvas>` ;
2.  Pour chaque élément  `<canvas>`, vérifier que le contenu alternatif est correctement restitué par les technologies d’assistance ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.3.9

Pour chaque image  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  et ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est-elle  [courte et concise](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-courte-et-concise)  (hors cas particuliers) ? [Test 1.3.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.3.9 "Test 1.3.9")

Méthodologie du test 1.3.9

1.  Retrouver dans le document les images pourvues d’une alternative textuelle ;
2.  Pour chaque image, vérifier l’alternative textuelle est courte et concise ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particuliers lorsque l’image est utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test). Dans cette situation, où il n’est pas possible de donner une alternative pertinente sans détruire l’objet du CAPTCHA ou du test, le critère est non applicable.

Note : le cas des CAPTCHA et des images-test est traité de manière spécifique par le critère 1.4.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G94](https://www.w3.org/WAI/WCAG21/Techniques/general/G94 "G94 - nouvelle fenêtre")
-   [G95](https://www.w3.org/WAI/WCAG21/Techniques/general/G95 "G95 - nouvelle fenêtre")
-   [F30](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30 "F30 - nouvelle fenêtre")
-   [F71](https://www.w3.org/WAI/WCAG21/Techniques/failures/F71 "F71 - nouvelle fenêtre")
-   [G196](https://www.w3.org/WAI/WCAG21/Techniques/general/G196 "G196 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")
-   [ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9 "ARIA9 - nouvelle fenêtre")
-   [ARIA10](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA10 "ARIA10 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 1.4Pour chaque image utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative permet-elle d’identifier la nature et la fonction de l’image ?  [Critère 1.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4 "Critère 1.4")

Tests et références du critère 1.4

#### 1.4.1

Pour chaque image (balise  `<img>`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente ? [Test 1.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.1 "Test 1.4.1")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.4.1

1.  Retrouver dans le document les images structurées au moyen d’un élément  `<img>`  pourvues d’une alternative textuelle et utilisées comme CAPTCHA ou comme image-test ;
2.  Pour chaque image, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.4.2

Pour chaque zone (balise  `<area>`) d’une image réactive utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente ? [Test 1.4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.2 "Test 1.4.2")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.4.2

1.  Retrouver dans le document les éléments  `<area>`  pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque élément  `<area>`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.4.3

Pour chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  de type image (balise  `<input>`  avec l’attribut  `type="image"`) utilisé comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente ? [Test 1.4.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.3 "Test 1.4.3")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.4.3

1.  Retrouver dans le document les éléments  `<input>`  pourvus de l’attribut  `type="image"`  et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque élément  `<input>`  pourvu de l’attribut  `type="image"`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.4.4

Pour chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  (balise  `<object>`  avec l’attribut  `type="image/…"`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  ou un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif), cette alternative est-elle pertinente ? [Test 1.4.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.4 "Test 1.4.4")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent le  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est pertinent.

Méthodologie du test 1.4.4

1.  Retrouver dans le document les éléments  `<object>`  pourvus de l’attribut  `type="image/…"`  et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque élément  `<object>`  pourvu de l’attribut  `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.4.5

Pour chaque image embarquée (balise  `<embed>`  avec l’attribut  `type="image/…"`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  ou un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif), cette alternative est-elle pertinente ? [Test 1.4.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.5 "Test 1.4.5")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent le  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est pertinent.

Méthodologie du test 1.4.5

1.  Retrouver dans le document les éléments  `<embed>`  pourvus de l’attribut  `type="image/…"`  et d’une alternative textuelle, et utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque élément  `<embed>`  pourvu de l’attribut  `type="image/…"`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.4.6

Pour chaque image vectorielle (balise  `<svg>`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image), cette alternative est-elle pertinente ? [Test 1.4.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.6 "Test 1.4.6")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent.

Méthodologie du test 1.4.6

1.  Retrouver dans le document les éléments  `<svg>`  pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque élément  `<svg>`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.4.7

Pour chaque image bitmap (balise  `<canvas>`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  ou comme  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test), ayant une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  ou un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif), cette alternative est-elle pertinente ? [Test 1.4.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.4.7 "Test 1.4.7")

-   S’il est présent, le contenu de l’attribut  `alt`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent ;
-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent le  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  est pertinent.

Méthodologie du test 1.4.7

1.  Retrouver dans le document les éléments  `<canvas>`  pourvus d’une alternative textuelle et utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque élément  `<canvas>`, vérifier que l’alternative textuelle est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G100](https://www.w3.org/WAI/WCAG21/Techniques/general/G100 "G100 - nouvelle fenêtre")
-   [G143](https://www.w3.org/WAI/WCAG21/Techniques/general/G143 "G143 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 1.5Pour chaque image utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha), une solution d’accès alternatif au contenu ou à la fonction du CAPTCHA est-elle présente ?  [Critère 1.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.5 "Critère 1.5")

Tests et références du critère 1.5

#### 1.5.1

Chaque image (balises  `<img>`,  `<area>`,  `<object>`,  `<embed>`,  `<svg>`,  `<canvas>`  ou possédant un attribut WAI-ARIA  `role="img"`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  vérifie-t-elle une de ces conditions ? [Test 1.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.5.1 "Test 1.5.1")

-   Il existe une autre forme de  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  non graphique, au moins ;
-   Il existe une autre solution d’accès à la fonctionnalité qui est sécurisée par le  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha).

Méthodologie du test 1.5.1

1.  Retrouver dans le document les images (éléments  `<img>`,  `<area>`,  `<object>`,  `<embed>`,  `<svg>`,  `<canvas>`  ou possédant un attribut WAI-ARIA  `role="img"`) utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque image, vérifier qu’il existe :
    -   Soit une autre forme de CAPTCHA non graphique, au moins ;
    -   Soit une autre solution d’accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.5.2

Chaque bouton associé à une image (balise  `input`  avec l’attribut  `type="image"`) utilisée comme  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  vérifie-t-il une de ces conditions ? [Test 1.5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.5.2 "Test 1.5.2")

-   Il existe une autre forme de  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha)  non graphique, au moins ;
-   Il existe une autre solution d’accès à la fonctionnalité sécurisée par le  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha).

Méthodologie du test 1.5.2

1.  Retrouver dans le document les boutons associés à une image (éléments  `<input>`  avec l’attribut  `type="image"`) utilisés comme CAPTCHA ou comme image-test ;
2.  Pour chaque bouton associé à une image, vérifier qu’il existe :
    -   Soit une autre forme de CAPTCHA non graphique, au moins ;
    -   Soit une autre solution d’accès à la fonctionnalité qui est sécurisée par le CAPTCHA.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G144](https://www.w3.org/WAI/WCAG21/Techniques/general/G144 "G144 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 1.6Chaque image  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  a-t-elle, si nécessaire, une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ?  [Critère 1.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6 "Critère 1.6")

Tests et références du critère 1.6

#### 1.6.1

Chaque image (balise  `<img>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle une de ces conditions ? [Test 1.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.1 "Test 1.6.1")

-   Il existe un attribut  `longdesc`  qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  contenant la référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image ;
-   Il existe un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.1

1.  Retrouver dans le document les images structurées au moyen d’un élément  `<img>`  (ou d’un élément possédant l’attribut WAI-ARIA  `role="img"`) porteuses d’information qui nécessitent une description détaillée ;
2.  Pour chaque image, vérifier qu’il existe :
    -   Soit un attribut longdesc qui donne l’adresse (url) d’une page ou d’un emplacement dans la page contenant la description détaillée ;
    -   Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.6.2

Chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  (balise  `<object>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle une de ces conditions ? [Test 1.6.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.2 "Test 1.6.2")

-   Il existe un attribut  `longdesc`  qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  contenant la référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image ;
-   Il existe un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.2

1.  Retrouver dans le document les éléments  `<object>`  pourvus de l’attribut  `type="image/…"`, porteurs d’information qui nécessitent une description détaillée ;
2.  Pour chaque élément  `<object>`  pourvu de l’attribut  `type="image/…"`, vérifier qu’il existe :
    -   Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3.  Si c’est le cas pour chaque élément  `<object>`  pourvu de l’attribut  `type="image/…"`,  **le test est validé**.

#### 1.6.3

Chaque image embarquée (balise  `<embed>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle une de ces conditions ? [Test 1.6.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.3 "Test 1.6.3")

-   Il existe un attribut  `longdesc`  qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  contenant la référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image ;
-   Il existe un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.3

1.  Retrouver dans le document les éléments  `<embed>`  pourvus de l’attribut  `type="image/…"`, porteurs d’information qui nécessitent une description détaillée ;
2.  Pour chaque élément  `<embed>`  pourvu de l’attribut  `type="image/…"`, vérifier qu’il existe :
    -   Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3.  Si c’est le cas pour chaque élément  `<embed>`  pourvu de l’attribut  `type="image/…"`,  **le test est validé**.

#### 1.6.4

Chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  de type image (balise  `<input>`  avec l’attribut  `type="image"`)  [porteur d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-il une de ces conditions ? [Test 1.6.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.4 "Test 1.6.4")

-   Il existe un attribut  `longdesc`  qui donne l’adresse (URL) d’une page ou d’un emplacement dans la page contenant la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe une  [alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  contenant la référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image ;
-   Il existe un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.4

1.  Retrouver dans le document les éléments  `<input>`  pourvus de l’attribut  `type="image"`, porteurs d’information qui nécessitent une description détaillée ;
2.  Pour chaque élément  `<input>`  pourvu de l’attribut  `type="image"`, vérifier qu’il existe :
    -   Soit une alternative textuelle contenant la référence à une description détaillée adjacente à l’image ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée ;
    -   Soit un attribut WAI-ARIA aria-describedby associant un passage de texte faisant office de description détaillée.
3.  Si c’est le cas pour chaque élément  `<input>`  pourvu de l’attribut  `type="image"`,  **le test est validé**.

#### 1.6.5

Chaque image vectorielle (balise  `<svg>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle une de ces conditions ? [Test 1.6.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.5 "Test 1.6.5")

-   Il existe un attribut WAI-ARIA  `aria-label`  contenant l’alternative textuelle et une référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente ;
-   Il existe un attribut WAI-ARIA  `aria-labelledby`  associant un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  faisant office d’alternative textuelle et un autre faisant office de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe un attribut WAI-ARIA  `aria-describedby`  associant un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  faisant office de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.5

1.  Retrouver dans le document les éléments  `<svg>`  porteurs d’information qui nécessitent une description détaillée ;
2.  Pour chaque élément  `<svg>`, vérifier qu’il existe :
    -   Soit un attribut WAI-ARIA  `aria-label`  contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
    -   Soit un attribut WAI-ARIA  `aria-labelledby`  associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
    -   Soit un attribut WAI-ARIA  `aria-describedby`  associant un passage de texte faisant office de description détaillée ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3.  Si c’est le cas pour chaque élément  `<svg>`,  **le test est validé**.

#### 1.6.6

Pour chaque image vectorielle (balise  `<svg>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), la référence éventuelle à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans l’attribut WAI-ARIA  `aria-label`  et la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  associée par l’attribut WAI-ARIA  `aria-labelledby`  ou  `aria-describedby`  sont-elles correctement restituées par les technologies d’assistance ? [Test 1.6.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.6 "Test 1.6.6")

Méthodologie du test 1.6.6

1.  Retrouver dans le document les éléments  `<svg>`  porteurs d’information dont la description détaillée est fournie au moyen d’un attribut  `aria-label`,  `aria-labelledby`  ou  `aria-describedby` ;
2.  Pour chaque élément  `<svg>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3.  Si c’est le cas pour chaque élément  `<svg>`,  **le test est validé**.

#### 1.6.7

Chaque image bitmap (balise  `<canvas>`),  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle une de ces conditions ? [Test 1.6.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.7 "Test 1.6.7")

-   Il existe un attribut WAI-ARIA  `aria-label`  contenant l’alternative textuelle et une référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente ;
-   Il existe un attribut WAI-ARIA  `aria-labelledby`  associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe un contenu textuel entre  `<canvas>`  et  `</canvas>`  faisant référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image bitmap ;
-   Il existe un contenu textuel entre  `<canvas>`  et  `</canvas>`  faisant office de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.7

1.  Retrouver dans le document les éléments  `<canvas>`  porteurs d’information qui nécessitent une description détaillée ;
2.  Pour chaque élément  `<canvas>`, vérifier qu’il existe :
    -   Soit un attribut WAI-ARIA aria-label contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
    -   Soit un attribut WAI-ARIA aria-labelledby associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
    -   Soit un contenu textuel entre  `<canvas>`  et  `</canvas>`  faisant référence à une description détaillée adjacente à l’image bitmap ;
    -   Soit un contenu textuel entre  `<canvas>`  et  `</canvas>`  faisant office de description détaillée ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3.  Si c’est le cas pour chaque élément  `<canvas>`,  **le test est validé**.

#### 1.6.8

Pour chaque image bitmap (balise  `<canvas>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui implémente une référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente, cette référence est-elle correctement restituée par les technologies d’assistance ? [Test 1.6.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.8 "Test 1.6.8")

Méthodologie du test 1.6.8

1.  Retrouver dans le document les éléments  `<canvas>`  porteurs d’information dont la description détaillée est fournie au moyen d’un attribut  `aria-label`,  `aria-labelledby`  ou  `aria-describedby` ;
2.  Pour chaque élément  `<canvas>`, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3.  Si c’est le cas pour chaque élément  `<canvas>`,  **le test est validé**.

#### 1.6.9

Pour chaque image (balise  `<img>`,  `<input>`  avec l’attribut  `type="image"`,  `<area>`,  `<object>`,  `<embed>`,  `<svg>`,  `<canvas>`, ou possédant un attribut WAI-ARIA  `role="img"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui est accompagnée d’une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  et qui utilise un attribut WAI-ARIA  `aria-describedby`, l’attribut WAI-ARIA  `aria-describedby`  associe-t-il la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ? [Test 1.6.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.9 "Test 1.6.9")

Méthodologie du test 1.6.9

1.  Retrouver dans le document les images (éléments  `<img>`,  `<input>`  avec l’attribut  `type="image"`,  `<area>`,  `<object>`,  `<embed>`,  `<svg>`,  `<canvas>`  ou possédant un attribut WAI-ARIA  `role="img"`) porteuses d’information dont la description détaillée utilise un attribut WAI-ARIA  `aria-describedby` ;
2.  Pour chaque image, vérifier que le contenu de la description détaillée est correctement restitué par les technologies d’assistance ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.6.10

Chaque balise possédant un attribut WAI-ARIA  `role="img"`  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), qui nécessite une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle une de ces conditions ? [Test 1.6.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.6.10 "Test 1.6.10")

-   Il existe un attribut WAI-ARIA  `aria-label`  contenant l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  et une référence à une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente ;
-   Il existe un attribut WAI-ARIA  `aria-labelledby`  associant un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  faisant office d’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  et un autre faisant office de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe un attribut WAI-ARIA  `aria-describedby`  associant un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  faisant office de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image) ;
-   Il existe un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  permettant d’accéder à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

Méthodologie du test 1.6.10

1.  Retrouver dans le document les éléments pourvus d’un attribut WAI-ARIA  `role="img"`  porteurs d’information qui nécessitent une description détaillée ;
2.  Pour chaque élément  `role="img"`, vérifier qu’il existe :
    -   Soit un attribut WAI-ARIA  `aria-label`  contenant l’alternative textuelle et une référence à une description détaillée adjacente ;
    -   Soit un attribut WAI-ARIA  `aria-labelledby`  associant un passage de texte faisant office d’alternative textuelle et un autre faisant office de description détaillée ;
    -   Soit un attribut WAI-ARIA  `aria-describedby`  associant un passage de texte faisant office de description détaillée ;
    -   Soit un lien ou un bouton adjacent permettant d’accéder à la description détaillée.
3.  Si c’est le cas pour chaque élément  `role="img"`,  **le test est validé**.

#### Notes techniques

Dans le cas du SVG, le manque de support de l’élément  `<title>`  et  `<desc>`  par les technologies d’assistance crée une difficulté dans le cas de l’implémentation de l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  de l’image et de sa  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image). Dans ce cas, il est recommandé d’utiliser l’attribut WAI-ARIA  `aria-label`  pour implémenter à la fois l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  courte et la référence à la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente ou l’attribut WAI-ARIA  `aria-labelledby`  pour associer les passages de texte faisant office d’alternative courte et de  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

L’utilisation de l’attribut WAI-ARIA aria-describedby n’est pas recommandée pour lier une image (`<img>`,  `<object>`,  `<embed>`,  `<canvas>`) à sa  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), par manque de support des technologies d’assistance. Néanmoins, lorsqu’il est utilisé, l’attribut devra nécessairement faire référence à l’`id`  de la zone contenant la  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image).

La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente peut être implémentée via une balise  `<figcaption>`, dans ce cas le critère 1.9 doit être vérifié (utilisation de  `<figure>`  et des attributs WAI-ARIA  `role="figure"`  et  `aria-label`, notamment).

L'attribut  `longdesc`  qui constitue une des conditions du test 1.6.1 (et dont la pertinence est vérifiée avec le test 1.7.1) est désormais considéré comme obsolète par la spécification HTML en cours. La vérification de cet attribut ne sera donc requise que pour les versions de la spécification HTML antérieure à HTML 5.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92 "G92 - nouvelle fenêtre")
-   [G74](https://www.w3.org/WAI/WCAG21/Techniques/general/G74 "G74 - nouvelle fenêtre")
-   [G73](https://www.w3.org/WAI/WCAG21/Techniques/general/G73 "G73 - nouvelle fenêtre")
-   [H45](https://www.w3.org/WAI/WCAG21/Techniques/html/H45 "H45 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 1.7Pour chaque image  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), cette description est-elle pertinente ?  [Critère 1.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7 "Critère 1.7")

Tests et références du critère 1.7

#### 1.7.1

Chaque image (balise  `<img>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle ces conditions ? [Test 1.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7.1 "Test 1.7.1")

-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via l’adresse référencée dans l’attribut  `longdesc`  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est pertinente ;
-   Le passage de texte associé via l’attribut WAI-ARIA  `aria-describedby`  est pertinent.

Méthodologie du test 1.7.1

1.  Retrouver dans le document les images structurées au moyen d’un élément  `<img>`  qui possèdent une description détaillée ;
2.  Pour chaque image, vérifier que la description détaillée est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.7.2

Chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  de type image (balise  `<input>`  avec l’attribut  `type="image"`)  [porteur d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-il ces conditions ? [Test 1.7.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7.2 "Test 1.7.2")

-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est pertinente ;
-   Le passage de texte associé via l’attribut WAI-ARIA  `aria-describedby`  est pertinent.

Méthodologie du test 1.7.2

1.  Retrouver dans le document les éléments  `<input>`  pourvus de l’attribut  `type="image"`  qui possèdent une description détaillée ;
2.  Pour chaque élément  `<input>`  pourvu de l’attribut  `type="image"`, vérifier que la description détaillée est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.7.3

Chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  (balise  `<object>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle ces conditions ? [Test 1.7.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7.3 "Test 1.7.3")

-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’[image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est pertinente ;
-   Le passage de texte associé via l’attribut WAI-ARIA  `aria-describedby`  est pertinent.

Méthodologie du test 1.7.3

1.  Retrouver dans le document les éléments  `<object>`  pourvus de l’attribut  `type="image/…"`  qui possèdent une description détaillée ;
2.  Pour chaque élément  `<object>`  pourvu de l’attribut  `type="image/…"`, vérifier que la description détaillée est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.7.4

Chaque image embarquée (balise  `<embed>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle ces conditions ? [Test 1.7.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7.4 "Test 1.7.4")

-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image embarquée est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est pertinente ;
-   Le passage de texte associé via l’attribut WAI-ARIA  `aria-describedby`  est pertinent.

Méthodologie du test 1.7.4

1.  Retrouver dans le document les éléments  `<embed>`  pourvus de l’attribut  `type="image/…"`  qui possèdent une description détaillée ;
2.  Pour chaque élément  `<embed>`  pourvu de l’attribut  `type="image/…"`, vérifier que la description détaillée est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.7.5

Chaque image vectorielle (balise  `<svg>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle ces conditions ? [Test 1.7.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7.5 "Test 1.7.5")

-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par le texte contenu dans la balise  `<desc>`  ou  `<title>`  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente contenue dans la balise  `<desc>`  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est pertinente ;
-   Le passage de texte associé via l’attribut WAI-ARIA  `aria-describedby`  est pertinent.

Méthodologie du test 1.7.5

1.  Retrouver dans le document les éléments  `<svg>`  qui possèdent une description détaillée ;
2.  Pour chaque élément  `<svg>`, vérifier que la description détaillée est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.7.6

Chaque image bitmap (balise  `<canvas>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), ayant une  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image), vérifie-t-elle ces conditions ? [Test 1.7.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.7.6 "Test 1.7.6")

-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  dans la page et signalée par le texte contenu entre  `<canvas>`  et  `</canvas>`  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  contenue entre  `<canvas>`  et  `</canvas>`  est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  adjacente à l’image bitmap est pertinente ;
-   La  [description détaillée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#description-detaillee-image)  via un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est pertinente ;
-   Le passage de texte associé via l’attribut WAI-ARIA  `aria-describedby`  est pertinent.

Méthodologie du test 1.7.6

1.  Retrouver dans le document les éléments  `<canvas>`  qui possèdent une description détaillée ;
2.  Pour chaque élément  `<canvas>`, vérifier que la description détaillée est pertinente ;
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G92](https://www.w3.org/WAI/WCAG21/Techniques/general/G92 "G92 - nouvelle fenêtre")
-   [F67](https://www.w3.org/WAI/WCAG21/Techniques/failures/F67 "F67 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 1.8Chaque  [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacée par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ?  [Critère 1.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8 "Critère 1.8")

Tests et références du critère 1.8

#### 1.8.1

Chaque  [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte)  (balise  `<img>`  ou possédant un attribut WAI-ARIA  `role="img"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacée par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ? [Test 1.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8.1 "Test 1.8.1")

Méthodologie du test 1.8.1

1.  Retrouver dans le document les images texte structurées au moyen d’un élément  `<img>`  (ou d’un élément possédant l’attribut WAI-ARIA  `role="img"`) ;
2.  Pour chaque image, vérifier que :
    -   Soit il existe un mécanisme de remplacement ;
    -   Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.8.2

Chaque bouton « [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte) » (balise  `<input>`  avec l’attribut  `type="image"`)  [porteur d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacé par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ? [Test 1.8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8.2 "Test 1.8.2")

Méthodologie du test 1.8.2

1.  Retrouver dans le document les boutons “images texte” (élément  `<input>`  avec l’attribut  `type="image"`) ;
2.  Pour chaque image, vérifier que :
    -   Soit il existe un mécanisme de remplacement ;
    -   Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.8.3

Chaque  [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte)  objet (balise  `<object>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacée par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ? [Test 1.8.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8.3 "Test 1.8.3")

Méthodologie du test 1.8.3

1.  Retrouver dans le document les images texte objet (élément  `<object>`  avec l’attribut  `type="image/…"`) ;
2.  Pour chaque image, vérifier que :
    -   Soit il existe un mécanisme de remplacement ;
    -   Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.8.4

Chaque  [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte)  embarquée (balise  `<embed>`  avec l’attribut  `type="image/…"`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacée par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ? [Test 1.8.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8.4 "Test 1.8.4")

Méthodologie du test 1.8.4

1.  Retrouver dans le document les images texte embarquées (élément  `<embed>`  avec l’attribut  `type="image/…"`) ;
2.  Pour chaque image, vérifier que :
    -   Soit il existe un mécanisme de remplacement ;
    -   Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.8.5

Chaque  [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte)  bitmap (balise  `<canvas>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information), en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacée par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ? [Test 1.8.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8.5 "Test 1.8.5")

Méthodologie du test 1.8.5

1.  Retrouver dans le document les images texte bitmap (élément  `<canvas>`) ;
2.  Pour chaque image, vérifier que :
    -   Soit il existe un mécanisme de remplacement ;
    -   Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.8.6

Chaque  [image texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-texte)  SVG (balise  `<svg>`)  [porteuse d’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-porteuse-d-information)  et dont le texte n’est pas complètement structuré au moyen d’éléments  `<text>`, en l’absence d’un  [mécanisme de remplacement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-de-remplacement), doit si possible être remplacée par du  [texte stylé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#texte-style). Cette règle est-elle respectée (hors cas particuliers) ? [Test 1.8.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.8.6 "Test 1.8.6")

Méthodologie du test 1.8.6

1.  Retrouver dans le document les images texte vectorielle (élément  `<svg>`) porteuse d’information et dont le texte n’est pas complètement structuré au moyen d’éléments  `<text>` ;
2.  Pour chaque image, vérifier que :
    -   Soit il existe un mécanisme de remplacement ;
    -   Soit l’image contient un texte qui fait appel à un effet graphique qui ne peut pas être reproduit en CSS.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Cas particuliers

Pour ce critère, il existe une gestion de cas particulier lorsque le texte fait partie du logo, d’une dénomination commerciale, d’un  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha), d’une  [image-test](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-test)  ou d’une image dont l’exactitude graphique serait considérée comme essentielle à la bonne transmission de l’information véhiculée par l’image. Dans ces situations, le critère est non applicable pour ces éléments.

#### Notes techniques

Le texte dans les images vectorielles étant du texte réel, il n’est pas concerné par ce critère.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#images-of-text "critère 1.4.5 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136 "G136 - nouvelle fenêtre")
-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [C22](https://www.w3.org/WAI/WCAG21/Techniques/css/C22 "C22 - nouvelle fenêtre")
-   [C30](https://www.w3.org/WAI/WCAG21/Techniques/css/C30 "C30 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.5  Images of Text  (AA)

### 1.9Chaque  [légende d’image](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  est-elle, si nécessaire, correctement reliée à l’image correspondante ?  [Critère 1.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9 "Critère 1.9")

Tests et références du critère 1.9

#### 1.9.1

Chaque image pourvue d’une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  (balise  `<img>`,  `<input>`  avec l’attribut  `type="image"`  ou possédant un attribut WAI-ARIA  `role="img"`  associée à une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente), vérifie-t-elle, si nécessaire, ces conditions ? [Test 1.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9.1 "Test 1.9.1")

-   L’image (balise  `<img>`,  `<input>`  avec l’attribut  `type="image"`  ou possédant un attribut WAI-ARIA  `role="img"`) et sa  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente sont contenues dans une balise  `<figure>` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `role="figure"`  ou  `role="group"` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image) ;
-   La  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  est contenue dans une balise  `<figcaption>`.

Méthodologie du test 1.9.1

1.  Retrouver dans le document les images pourvues d’une légende structurées au moyen d’élément  `<img>`, d’un élément  `<input>`  avec l’attribut  `type="image"`  ou d’un élément possédant l’attribut WAI-ARIA  `role="img"` ;
2.  Pour chaque image, vérifier que :
    -   L’image et sa légende sont contenues dans une balise  `<figure>` ;
    -   La balise  `<figure>`  possède une propriété WAI-ARIA  `role="figure"`  ou  `role="group"` ;
    -   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la légende ;
    -   La légende est contenue dans une balise  `<figcaption>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.9.2

Chaque  [image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  pourvue d’une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  (balise  `<object>`  avec l’attribut  `type="image/…"`  associée à une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente), vérifie-t-elle, si nécessaire, ces conditions ? [Test 1.9.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9.2 "Test 1.9.2")

-   L’[image objet](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-objet)  et sa  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente sont contenues dans une balise  `<figure>` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `role="figure"`  ou  `role="group"` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image) ;
-   La  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  est contenue dans une balise  `<figcaption>`.

Méthodologie du test 1.9.2

1.  Retrouver dans le document les images objet pourvues d’une légende (élément  `<object>`  avec l’attribut  `type="image/…"`) ;
2.  Pour chaque image, vérifier que :
    -   L’image et sa légende sont contenues dans une balise  `<figure>` ;
    -   La balise  `<figure>`  possède une propriété WAI-ARIA  `role="figure`" ou  `role="group"` ;
    -   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la légende ;
    -   La légende est contenue dans une balise  `<figcaption>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.9.3

Chaque image embarquée pourvue d’une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  (balise  `<embed>`  associée à une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente), vérifie-t-elle, si nécessaire, ces conditions ? [Test 1.9.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9.3 "Test 1.9.3")

-   L’image embarquée (balise  `<embed>`) et sa  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente sont contenues dans une balise  `<figure>` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `role="figure"`  ou  `role="group"` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image) ;
-   La  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  est contenue dans une balise  `<figcaption>`.

Méthodologie du test 1.9.3

1.  Retrouver dans le document les images embarquées pourvues d’une légende (élément  `<embed>`  avec l’attribut  `type="image/…"`) ;
2.  Pour chaque image, vérifier que :
    -   L’image et sa légende sont contenues dans une balise  `<figure>` ;
    -   La balise  `<figure>`  possède une propriété WAI-ARIA  `role="figure"`  ou  `role="group"` ;
    -   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la légende ;
    -   La légende est contenue dans une balise  `<figcaption>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.9.4

Chaque image vectorielle pourvue d’une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  (balise  `<svg>`  associée à une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente), vérifie-t-elle, si nécessaire, ces conditions ? [Test 1.9.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9.4 "Test 1.9.4")

-   L’image vectorielle (balise  `<svg>`) et sa  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente sont contenues dans une balise  `<figure>` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `role="figure"`  ou  `role="group"` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image) ;
-   La  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  est contenue dans une balise  `<figcaption>`.

Méthodologie du test 1.9.4

1.  Retrouver dans le document les images vectorielles pourvues d’une légende (élément  `<svg>`) ;
2.  Pour chaque image, vérifier que :
    -   L’image et sa légende sont contenues dans une balise  `<figure>` ;
    -   La balise  `<figure>`  possède une propriété WAI-ARIA  `role="figure"`  ou  `role="group"` ;
    -   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la légende ;
    -   La légende est contenue dans une balise  `<figcaption>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### 1.9.5

Chaque image bitmap pourvue d’une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  (balise  `<canvas>`  associée à une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente), vérifie-t-elle, si nécessaire, ces conditions ? [Test 1.9.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#1.9.5 "Test 1.9.5")

-   L’image bitmap (balise  `<canvas>`) et sa  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  adjacente sont contenues dans une balise  `<figure>` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `role="figure"`  ou  `role="group"` ;
-   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image) ;
-   La  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  est contenue dans une balise  `<figcaption>`.

Méthodologie du test 1.9.5

1.  Retrouver dans le document les images bitmap (élément  `<canvas>`) ;
2.  Pour chaque image, vérifier que :
    -   L’image et sa légende sont contenues dans une balise  `<figure>` ;
    -   La balise  `<figure>`  possède une propriété WAI-ARIA  `role="figure"`  ou  `role="group"` ;
    -   La balise  `<figure>`  possède un attribut WAI-ARIA  `aria-label`  dont le contenu est identique au contenu de la légende ;
    -   La légende est contenue dans une balise  `<figcaption>`.
3.  Si c’est le cas pour chaque image,  **le test est validé**.

#### Note technique

L’implémentation d’un attribut WAI-ARIA  `role="group"`  ou  `role="figure"`  sur l’élément parent  `<figure>`  est destiné à pallier le manque de support actuel des éléments  `<figure>`  par les technologies d’assistance. L’utilisation d’un élément  `<figcaption>`  pour associer une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende-d-image)  à une image impose au minimum l’utilisation d’un attribut WAI-ARIA  `aria-label`  sur l’élément parent  `<figure>`  dont le contenu sera identique au contenu de l’élément  `<figcaption>`. Pour s’assurer d’un support optimal, il peut également être fait une association explicite entre le contenu de l’[alternative textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-textuelle-image)  de l’image et le contenu de l’élément  `<figcaption>`, par exemple :

`<img src="image.png" alt="Photo : soleil couchant" /><figcaption>Photo : crédit xxx</figcaption>`

Les attributs WAI-ARIA  `aria-labelledby`  et  `aria-describedby`  ne peuvent pas être utilisés actuellement par manque de support par les technologies d’assistance.

Note : les images légendées doivent par ailleurs respecter le critère 1.1 et le critère 1.3 relatifs aux images porteuses d’information.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4 "ARIA4 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.4.1.2  Name, Role, Value  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 2. Cadres [Thématique Cadres](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2 "Thématique Cadres")

### 2.1Chaque  [cadre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#cadre)  a-t-il un  [titre de cadre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre-de-cadre) ?  [Critère 2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.1 "Critère 2.1")

Tests et références du critère 2.1

#### 2.1.1

Chaque cadre (balise  `<iframe>`  ou  `<frame>`) a-t-il un attribut  `title` ? [Test 2.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.1.1 "Test 2.1.1")

Méthodologie du test 2.1.1

1.  Retrouver dans le document les cadres (élément  `<iframe>`  ou  `<frame>`) ;
2.  Pour chaque cadre, vérifier qu’il possède un attribut  `title` ;
3.  Si c’est le cas pour chaque cadre,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H64](https://www.w3.org/WAI/WCAG21/Techniques/html/H64 "H64 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.4.1.2  Name, Role, Value  (A)

### 2.2Pour chaque  [cadre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#cadre)  ayant un  [titre de cadre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre-de-cadre), ce titre de cadre est-il pertinent ?  [Critère 2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.2 "Critère 2.2")

Tests et références du critère 2.2

#### 2.2.1

Pour chaque cadre (balise  `<iframe>`  ou  `<frame>`) ayant un attribut  `title`, le contenu de cet attribut est-il pertinent ? [Test 2.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#2.2.1 "Test 2.2.1")

Méthodologie du test 2.2.1

1.  Retrouver dans le document les cadres (élément  `<iframe>`  ou  `<frame>`) ;
2.  Pour chaque cadre pourvu d’un attribut  `title`, vérifier que son contenu est pertinent ;
3.  Si c’est le cas pour chaque cadre,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H64](https://www.w3.org/WAI/WCAG21/Techniques/html/H64 "H64 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.4.1.2  Name, Role, Value  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 3. Couleurs [Thématique Couleurs](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3 "Thématique Couleurs")

### 3.1Dans chaque page web, l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ?  [Critère 3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1 "Critère 3.1")

Tests et références du critère 3.1

#### 3.1.1

Pour chaque mot ou ensemble de mots dont la mise en couleur est porteuse d’information, l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? [Test 3.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1.1 "Test 3.1.1")

Méthodologie du test 3.1.1

1.  Retrouver dans le document les informations données par la couleur dans un mot ou un ensemble de mots ;
2.  Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 3.1.2

Pour chaque indication de couleur donnée par un texte, l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? [Test 3.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1.2 "Test 3.1.2")

Méthodologie du test 3.1.2

1.  Retrouver dans le document les informations données par la couleur dans un texte ;
2.  Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 3.1.3

Pour chaque image  [véhiculant une information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? [Test 3.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1.3 "Test 3.1.3")

Méthodologie du test 3.1.3

1.  Retrouver dans le document les informations données par la couleur dans une image ;
2.  Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 3.1.4

Pour chaque  [propriété CSS déterminant une couleur](https://accessibilite.numerique.gouv.fr/methode/glossaire/#propriete-css-determinant-une-couleur)  et  [véhiculant une information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? [Test 3.1.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1.4 "Test 3.1.4")

Méthodologie du test 3.1.4

1.  Retrouver dans le document les informations données par la couleur dans une propriété CSS ;
2.  Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 3.1.5

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  [véhiculant une information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? [Test 3.1.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1.5 "Test 3.1.5")

Méthodologie du test 3.1.5

1.  Retrouver dans le document les informations données par la couleur dans un média temporel ;
2.  Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 3.1.6

Pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  [véhiculant une information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#image-vehiculant-une-information-donnee-par-la-couleur), l’[information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#information-donnee-par-la-couleur)  ne doit pas être donnée uniquement par la couleur. Cette règle est-elle respectée ? [Test 3.1.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.1.6 "Test 3.1.6")

Méthodologie du test 3.1.6

1.  Retrouver dans le document les informations données par la couleur dans un média non temporel ;
2.  Pour chacune de ces informations, vérifier qu’il existe un autre moyen de récupérer cette information (présence d’un attribut title, d’une icône ou d’un effet graphique de forme ou de position, un effet typographique…) ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [1.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color "critère 1.4.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G14](https://www.w3.org/WAI/WCAG21/Techniques/general/G14 "G14 - nouvelle fenêtre")
-   [G182](https://www.w3.org/WAI/WCAG21/Techniques/general/G182 "G182 - nouvelle fenêtre")
-   [G111](https://www.w3.org/WAI/WCAG21/Techniques/general/G111 "G111 - nouvelle fenêtre")
-   [G117](https://www.w3.org/WAI/WCAG21/Techniques/general/G117 "G117 - nouvelle fenêtre")
-   [G138](https://www.w3.org/WAI/WCAG21/Techniques/general/G138 "G138 - nouvelle fenêtre")
-   [G205](https://www.w3.org/WAI/WCAG21/Techniques/general/G205 "G205 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.1.4.1  Use of color  (A)

### 3.2Dans chaque page web, le  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  entre la couleur du texte et la couleur de son arrière-plan est-il suffisamment élevé (hors cas particuliers) ?  [Critère 3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2 "Critère 3.2")

Tests et références du critère 3.2

#### 3.2.1

Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée inférieure à 24px vérifient-ils une de ces conditions (hors cas particuliers) ? [Test 3.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2.1 "Test 3.2.1")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  entre le texte et son arrière-plan est de 4.5:1, au moins ;
-   Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 4.5:1, au moins.

Méthodologie du test 3.2.1

1.  Retrouver dans le document les textes et les textes en image sans effet de graisse d’une taille restituée inférieure à 24px qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces textes, vérifier que :
    -   Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 4.5:1, au moins.
3.  Si c’est le cas pour chaque texte,  **le test est validé**.

#### 3.2.2

Dans chaque page web, le texte et le texte en image en gras d’une taille restituée inférieure à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ? [Test 3.2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2.2 "Test 3.2.2")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  entre le texte et son arrière-plan est de 4.5:1, au moins ;
-   Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 4.5:1, au moins.

Méthodologie du test 3.2.2

1.  Retrouver dans le document les textes et les textes en image en gras d’une taille restituée inférieure à 18,5px qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces textes, vérifier que :
    -   Soit le rapport de contraste entre le texte et son arrière-plan est de 4.5:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 4.5:1, au moins.
3.  Si c’est le cas pour chaque texte,  **le test est validé**.

#### 3.2.3

Dans chaque page web, le texte et le texte en image sans effet de graisse d’une taille restituée supérieure ou égale à 24px vérifient-ils une de ces conditions (hors cas particuliers) ? [Test 3.2.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2.3 "Test 3.2.3")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  entre le texte et son arrière-plan est de 3:1, au moins ;
-   Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 3:1, au moins.

Méthodologie du test 3.2.3

1.  Retrouver dans le document les textes et les textes en image sans effet de graisse d’une taille restituée supérieure ou égale à 24px qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces textes, vérifier que :
    -   Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 3:1, au moins.
3.  Si c’est le cas pour chaque texte,  **le test est validé**.

#### 3.2.4

Dans chaque page web, le texte et le texte en image en gras d’une taille restituée supérieure ou égale à 18,5px vérifient-ils une de ces conditions (hors cas particuliers) ? [Test 3.2.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2.4 "Test 3.2.4")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  entre le texte et son arrière-plan est de 3:1, au moins ;
-   Un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 3:1, au moins.

Méthodologie du test 3.2.4

1.  Retrouver dans le document les textes et les textes en image en gras d’une taille restituée supérieure ou égale à 18,5px qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces textes, vérifier que :
    -   Soit le rapport de contraste entre le texte et son arrière-plan est de 3:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher le texte avec un rapport de contraste de 3:1, au moins.
3.  Si c’est le cas pour chaque texte,  **le test est validé**.

#### 3.2.5

Dans le  [mécanisme qui permet d’afficher un rapport de contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme)  conforme, le rapport de contraste entre le texte et la couleur d’arrière-plan est-il suffisamment élevé ? [Test 3.2.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.2.5 "Test 3.2.5")

Méthodologie du test 3.2.5

1.  Retrouver dans le document les mécanismes qui permettent d’afficher un rapport de contraste conforme ;
2.  Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre le texte et la couleur d’arrière-plan est suffisamment élevé ;
3.  Si c’est le cas pour chaque mécanisme,  **le test est validé**.

#### Cas particuliers

Dans ces situations, les critères sont non applicables pour ces éléments :

-   Le texte fait partie d’un logo ou d’un nom de marque d’un organisme ou d’une société ;
-   Le texte ou l’image de texte est purement décoratif ;
-   Le texte fait partie d’une image véhiculant une information mais le texte lui-même n’apporte aucune information essentielle ;
-   Le texte ou l’image de texte fait partie d’un élément d’interface sur lequel aucune action n’est possible (par exemple un bouton avec l’attribut  `disabled`).

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum "critère 1.4.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G18](https://www.w3.org/WAI/WCAG21/Techniques/general/G18 "G18 - nouvelle fenêtre")
-   [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136 "G136 - nouvelle fenêtre")
-   [G148](https://www.w3.org/WAI/WCAG21/Techniques/general/G148 "G148 - nouvelle fenêtre")
-   [G174](https://www.w3.org/WAI/WCAG21/Techniques/general/G174 "G174 - nouvelle fenêtre")
-   [G145](https://www.w3.org/WAI/WCAG21/Techniques/general/G145 "G145 - nouvelle fenêtre")
-   [C29](https://www.w3.org/WAI/WCAG21/Techniques/css/C29 "C29 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.3  Contrast (Minimum)  (AA)

### 3.3Dans chaque page web, les couleurs utilisées dans les  [composants d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  ou les éléments graphiques porteurs d’informations sont-elles suffisamment contrastées (hors cas particuliers) ?  [Critère 3.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3 "Critère 3.3")

Tests et références du critère 3.3

#### 3.3.1

Dans chaque page web, le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  entre les couleurs d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  dans ses différents états et la  [couleur d’arrière-plan contiguë](https://accessibilite.numerique.gouv.fr/methode/glossaire/#couleur-d-arriere-plan-contigue-et-couleur-contigue)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 3.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3.1 "Test 3.3.1")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  est de 3:1, au moins ;
-   Un  [mécanisme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme)  permet un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 3:1, au moins.

Méthodologie du test 3.3.1

1.  Retrouver dans le document les composants d’interface qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces composants, vérifier que :
    -   Soit le rapport de contraste entre les couleurs du composant dans ses différents états et la couleur d’arrière-plan contiguë est de 3:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher le composant avec un rapport de contraste de 3:1, au moins.
3.  Si c’est le cas pour chaque composant,  **le test est validé**.

#### 3.3.2

Dans chaque page web, le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  des différentes couleurs composant un  [élément graphique](https://accessibilite.numerique.gouv.fr/methode/glossaire/#element-graphique), lorsqu’elles sont nécessaires à sa compréhension, et la  [couleur d’arrière-plan contiguë](https://accessibilite.numerique.gouv.fr/methode/glossaire/#couleur-d-arriere-plan-contigue-et-couleur-contigue), vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 3.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3.2 "Test 3.3.2")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  est de 3:1, au moins ;
-   Un  [mécanisme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme)  permet un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 3:1, au moins.

Méthodologie du test 3.3.2

1.  Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces éléments, vérifier que :
    -   Soit le rapport de contraste entre les couleurs de l’élément graphique nécessaires à sa compréhension et la couleur d’arrière-plan contiguë est de 3:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher l’élément graphique avec un rapport de contraste de 3:1, au moins.
3.  Si c’est le cas pour chaque composant,  **le test est validé**.

#### 3.3.3

Dans chaque page web, le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  des différentes  [couleurs contiguës](https://accessibilite.numerique.gouv.fr/methode/glossaire/#couleur-d-arriere-plan-contigue-et-couleur-contigue)  entre elles d’un  [élément graphique](https://accessibilite.numerique.gouv.fr/methode/glossaire/#element-graphique), lorsqu’elles sont nécessaires à sa compréhension, vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 3.3.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3.3 "Test 3.3.3")

-   Le rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  est de 3:1, au moins ;
-   Un  [mécanisme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme)  permet un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  de 3:1, au moins.

Méthodologie du test 3.3.3

1.  Retrouver dans le document les éléments graphiques qui pourraient poser des problèmes de contraste ;
2.  Pour chacun de ces éléments, vérifier que :
    -   Soit le rapport de contraste des différentes couleurs contiguës de l’élément graphique entre elles, lorsqu’elles sont nécessaires à sa compréhension, est de 3:1, au moins ;
    -   Soit un mécanisme permet à l’utilisateur d’afficher l’élément graphique avec un rapport de contraste de 3:1, au moins.
3.  Si c’est le cas pour chaque élément graphique,  **le test est validé**.

#### 3.3.4

Dans le  [mécanisme qui permet d’afficher un rapport de contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#mecanisme-qui-permet-d-afficher-un-rapport-de-contraste-conforme)  conforme, les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent, sont-elles suffisamment contrastées ? [Test 3.3.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#3.3.4 "Test 3.3.4")

Méthodologie du test 3.3.4

1.  Retrouver dans le document les mécanismes qui permettent d’afficher un rapport de contraste conforme ;
2.  Pour chacun de ces mécanismes, vérifier que le rapport de contraste entre les couleurs du composant ou des éléments graphiques porteurs d’informations qui le composent est suffisamment élevé ;
3.  Si c’est le cas pour chaque mécanisme,  **le test est validé**.

Note : le critère est non applicable dans ces situations :

-   Composant d’interface inactif (par exemple, un bouton avec un attribut  `disabled`) sur lequel aucune action n’est possible ;
-   Composant d’interface pour lequel l’apparence est gérée par les styles natifs du navigateur sans aucune modification par l’auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;
-   Composant d’interface pour lequel la couleur n’est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu’il s’agit de liens même si la couleur du soulignement des liens avec le fond blanc n’a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;
-   Élément graphique ou parties d’élément graphique non porteur d’information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;
-   Élément graphique ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société ;
-   Élément graphique ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (exemple drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs) ;
-   Élément graphique ou parties d’élément graphique dynamiques dont le contraste au survol / focus est suffisant.

#### Cas particuliers

Les cas suivants sont non applicables pour ce critère :

-   Composant d’interface inactif (par exemple, un bouton avec un attribut  `disabled`) sur lequel aucune action n’est possible ;
-   Composant d’interface pour lequel l’apparence est gérée par les styles natifs du navigateur sans aucune modification par l’auteur (par exemple, le style au focus natif dans Chrome ou Firefox) ;
-   Composant d’interface pour lequel la couleur n’est pas nécessaire pour identifier le composant ou son état (par exemple, un groupe de liens faisant office de navigation dont la position dans la page, la taille et la couleur du texte permettent de comprendre qu’il s’agit de liens même si la couleur du soulignement des liens avec le fond blanc n’a pas un ratio de 3:1 et que le texte lui a un ratio de 4.5:1) ;
-   [Élément graphique](https://accessibilite.numerique.gouv.fr/methode/glossaire/#element-graphique)  ou parties d’élément graphique non porteur d’information ou ayant une alternative (description longue, informations identiques visibles dans la page) ;
-   [Élément graphique](https://accessibilite.numerique.gouv.fr/methode/glossaire/#element-graphique)  ou parties d’élément graphique faisant partie d’un logo ou du nom de marque d’un organisme ou d’une société ;
-   [Élément graphique](https://accessibilite.numerique.gouv.fr/methode/glossaire/#element-graphique)  ou parties d’élément graphique dont la présentation est essentielle à l’information véhiculée (par exemple, drapeaux, logotypes, photos de personnes ou de scènes, captures d’écran, diagrammes médicaux, carte de chaleurs) ;
-   [Élément graphique](https://accessibilite.numerique.gouv.fr/methode/glossaire/#element-graphique)  ou parties d’élément graphique dynamiques dont le contraste au survol / focus est suffisant.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.11 (AA)](https://www.w3.org/Translations/WCAG21-fr/#non-text-contrast "critère 1.4.11 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G18](https://www.w3.org/WAI/WCAG21/Techniques/general/G18 "G18 - nouvelle fenêtre")
-   [G195](https://www.w3.org/WAI/WCAG21/Techniques/general/G195 "G195 - nouvelle fenêtre")
-   [G207](https://www.w3.org/WAI/WCAG21/Techniques/general/G207 "G207 - nouvelle fenêtre")
-   [G174](https://www.w3.org/WAI/WCAG21/Techniques/general/G174 "G174 - nouvelle fenêtre")
-   [G145](https://www.w3.org/WAI/WCAG21/Techniques/general/G145 "G145 - nouvelle fenêtre")
-   [G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183 "G183 - nouvelle fenêtre")
-   [F78](https://www.w3.org/WAI/WCAG21/Techniques/failures/F78 "F78 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.11  Non-text Contrast  (AA)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 4. Multimédia [Thématique Multimédia](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4 "Thématique Multimédia")

### 4.1Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré a-t-il, si nécessaire, une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  ou une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  (hors cas particuliers) ?  [Critère 4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.1 "Critère 4.1")

Tests et références du critère 4.1

#### 4.1.1

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré seulement audio, vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ? [Test 4.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.1.1 "Test 4.1.1")

-   Il existe une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent) ;
-   Il existe une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  adjacente clairement identifiable.

Méthodologie du test 4.1.1

1.  Retrouver dans le document les médias temporels (éléments  `<audio>`,  `<video>`  ou  `<object>`) seulement audio qui nécessitent une transcription textuelle ;
2.  Pour chaque média temporel seulement audio, vérifier la présence d’une transcription textuelle :
    -   Soit accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre) ;
    -   Soit adjacente clairement identifiable.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.1.2

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ? [Test 4.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.1.2 "Test 4.1.2")

-   Il existe une  [version alternative « audio seulement »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#version-alternative-audio-seulement)  accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent) ;
-   Il existe une  [version alternative « audio seulement »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#version-alternative-audio-seulement)  adjacente clairement identifiable ;
-   Il existe une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent) ;
-   Il existe une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  adjacente clairement identifiable ;
-   Il existe une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée ;
-   Il existe une version alternative avec une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent).

Méthodologie du test 4.1.2

1.  Retrouver dans le document les médias temporels (éléments  `<video>`  ou  `<object>`) seulement vidéo qui nécessitent une transcription textuelle ;
2.  Pour chaque média temporel seulement vidéo, vérifier la présence :
    -   Soit d’une version alternative audio seulement accessible au moyen d’un lien ou bouton adjacent (une URL ou une ancre) ;
    -   Soit d’une version alternative audio seulement adjacente ;
    -   Soit d’une transcription textuelle accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre) ;
    -   Soit d’une transcription textuelle adjacente clairement identifiable ;
    -   Soit d’une audiodescription synchronisée ;
    -   Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre).
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.1.3

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ? [Test 4.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.1.3 "Test 4.1.3")

-   Il existe une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent) ;
-   Il existe une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  adjacente clairement identifiable ;
-   Il existe une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée ;
-   Il existe une version alternative avec une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent).

Méthodologie du test 4.1.3

1.  Retrouver dans le document les médias temporels (éléments  `<video>`  ou  `<object>`) synchronisés qui nécessitent une transcription textuelle ;
2.  Pour chaque média temporel synchronisé, vérifier la présence :
    -   Soit d’une transcription textuelle accessible au moyen d’un lien ou bouton adjacent (une URL ou une ancre) ;
    -   Soit d’une transcription textuelle adjacente clairement identifiable ;
    -   Soit d’une audiodescription synchronisée ;
    -   Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre).
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particulier lorsque :

-   Le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;
-   Le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est lui-même une alternative à un contenu de la page (une vidéo en langue des signes ou la vocalisation d’un texte, par exemple) ;
-   Le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est utilisé pour accéder à une version agrandie ;
-   Le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est utilisé comme un  [CAPTCHA](https://accessibilite.numerique.gouv.fr/methode/glossaire/#captcha) ;
-   Le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  fait partie d’un test qui deviendrait inutile si la  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel), les  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia)  ou l’[audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  étaient communiqués ;
-   Pour les services de l’État, les collectivités territoriales et leurs établissements : si le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  a été publié entre le 23 septembre 2019 et le 23 septembre 2020 sur un site internet, intranet ou extranet créé depuis le 23 septembre 2018, il est exempté de l’obligation d’accessibilité ;
-   Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  a été publié avant le 23 septembre 2020, il est exempté de l’obligation d’accessibilité.

Dans ces situations, le critère est non applicable.

Ce cas particulier s’applique également aux critères 4.2, 4.3, 4.5.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.2.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-only-and-video-only-prerecorded "critère 1.2.1 (A) - nouvelle fenêtre")
-   [1.2.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-description-or-media-alternative-prerecorded "critère 1.2.3 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G58](https://www.w3.org/WAI/WCAG21/Techniques/general/G58 "G58 - nouvelle fenêtre")
-   [G69](https://www.w3.org/WAI/WCAG21/Techniques/general/G69 "G69 - nouvelle fenêtre")
-   [G78](https://www.w3.org/WAI/WCAG21/Techniques/general/G78 "G78 - nouvelle fenêtre")
-   [G158](https://www.w3.org/WAI/WCAG21/Techniques/general/G158 "G158 - nouvelle fenêtre")
-   [G159](https://www.w3.org/WAI/WCAG21/Techniques/general/G159 "G159 - nouvelle fenêtre")
-   [G173](https://www.w3.org/WAI/WCAG21/Techniques/general/G173 "G173 - nouvelle fenêtre")
-   [G8](https://www.w3.org/WAI/WCAG21/Techniques/general/G8 "G8 - nouvelle fenêtre")
-   [G166](https://www.w3.org/WAI/WCAG21/Techniques/general/G166 "G166 - nouvelle fenêtre")
-   [H96](https://www.w3.org/WAI/WCAG21/Techniques/html/H96 "H96 - nouvelle fenêtre")
-   [SM6](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6 "SM6 - nouvelle fenêtre")
-   [SM7](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7 "SM7 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.2.1  Audio-only and Video-only (Prerecorded)  (A)
-   9.1.2.3  Audio Description or Media Alternative (Prerecorded)  (A)

### 4.2Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré ayant une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  ou une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée, celles-ci sont-elles pertinentes (hors cas particuliers) ?  [Critère 4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.2 "Critère 4.2")

Tests et références du critère 4.2

#### 4.2.1

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré seulement audio, ayant une  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel), celle-ci est-elle pertinente (hors cas particuliers) ? [Test 4.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.2.1 "Test 4.2.1")

Méthodologie du test 4.2.1

1.  Retrouver dans le document les médias temporels pré-enregistrés seulement audio qui possèdent une transcription textuelle ;
2.  Pour chaque média temporel seulement audio, vérifier que transcription textuelle est pertinente ;
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.2.2

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré seulement vidéo vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 4.2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.2.2 "Test 4.2.2")

-   La  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  est pertinente ;
-   L’[audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée est pertinente ;
-   L’[audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée de la version alternative est pertinente ;
-   La version alternative audio seulement est pertinente.

Méthodologie du test 4.2.2

1.  Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui possèdent une transcription textuelle ;
2.  Pour chaque média temporel seulement vidéo, vérifier la pertinence :
    -   Soit de la transcription textuelle ;
    -   Soit de l’audiodescription synchronisée ;
    -   Soit de l’audiodescription synchronisée de la version alternative ;
    -   Soit de la version alternative audio seulement.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.2.3

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 4.2.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.2.3 "Test 4.2.3")

-   La  [transcription textuelle](https://accessibilite.numerique.gouv.fr/methode/glossaire/#transcription-textuelle-media-temporel)  est pertinente ;
-   L’[audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée est pertinente ;
-   L’[audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée de la version alternative est pertinente.

Méthodologie du test 4.2.3

1.  Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2.  Pour chaque média temporel synchronisé, vérifier la pertinence :
    -   Soit de la transcription textuelle ;
    -   Soit de l’audiodescription synchronisée ;
    -   Soit de l’audiodescription synchronisée de la version alternative.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### Cas particuliers

Voir cas particuliers critère 4.1.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.2.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-only-and-video-only-prerecorded "critère 1.2.1 (A) - nouvelle fenêtre")
-   [1.2.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-description-or-media-alternative-prerecorded "critère 1.2.3 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F30](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30 "F30 - nouvelle fenêtre")
-   [F67](https://www.w3.org/WAI/WCAG21/Techniques/failures/F67 "F67 - nouvelle fenêtre")
-   [SM6](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6 "SM6 - nouvelle fenêtre")
-   [SM7](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7 "SM7 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.2.1  Audio-only and Video-only (Prerecorded)  (A)
-   9.1.2.3  Audio Description or Media Alternative (Prerecorded)  (A)

### 4.3Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré a-t-il, si nécessaire, des  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia)  (hors cas particuliers) ?  [Critère 4.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.3 "Critère 4.3")

Tests et références du critère 4.3

#### 4.3.1

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré vérifie-t-il, si nécessaire, l’une de ces conditions (hors cas particuliers) ? [Test 4.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.3.1 "Test 4.3.1")

-   Le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé possède des  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia) ;
-   Il existe une version alternative possédant des  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia)  accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent).

Méthodologie du test 4.3.1

1.  Retrouver dans le document les médias temporels pré-enregistrés synchronisés ;
2.  Pour chaque média temporel synchronisé, vérifier la présence :
    -   Soit de sous-titres synchronisés ;
    -   Soit d’une version alternative possédant des sous-titres synchronisés accessible au moyen d’un lien ou d’un bouton adjacent.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.3.2

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré possédant des  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia)  diffusés via une balise  `<track>`, la balise  `<track>`  possède-t-elle un attribut  `kind="captions"` ? [Test 4.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.3.2 "Test 4.3.2")

Méthodologie du test 4.3.2

1.  Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés au moyen d’un élément  `<track>` ;
2.  Pour chaque média temporel synchronisé, vérifier que la balise  `<track>`  possède un attribut  `kind="caption"` ;
3.  Si c’est le cas pour chaque média temporel synchronisé,  **le test est validé**.

#### Cas particuliers

Voir cas particuliers critère 4.1.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.2.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#captions-prerecorded "critère 1.2.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G58](https://www.w3.org/WAI/WCAG21/Techniques/general/G58 "G58 - nouvelle fenêtre")
-   [G93](https://www.w3.org/WAI/WCAG21/Techniques/general/G93 "G93 - nouvelle fenêtre")
-   [G87](https://www.w3.org/WAI/WCAG21/Techniques/general/G87 "G87 - nouvelle fenêtre")
-   [H95](https://www.w3.org/WAI/WCAG21/Techniques/html/H95 "H95 - nouvelle fenêtre")
-   [SM11](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11 "SM11 - nouvelle fenêtre")
-   [SM12](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12 "SM12 - nouvelle fenêtre")
-   [F74](https://www.w3.org/WAI/WCAG21/Techniques/failures/F74 "F74 - nouvelle fenêtre")
-   [F75](https://www.w3.org/WAI/WCAG21/Techniques/failures/F75 "F75 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.2.2  Captions (Prerecorded)  (A)

### 4.4Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré ayant des  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia), ces sous-titres sont-ils pertinents ?  [Critère 4.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.4 "Critère 4.4")

Tests et références du critère 4.4

#### 4.4.1

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré ayant des  [sous-titres synchronisés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sous-titres-synchronises-objet-multimedia), ces sous-titres sont-ils pertinents ? [Test 4.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.4.1 "Test 4.4.1")

Méthodologie du test 4.4.1

1.  Retrouver dans le document les médias temporels synchronisés possédant des sous-titres synchronisés ;
2.  Pour chaque média temporel synchronisé, vérifier que les sous-titres sont :
    -   Pertinents (toutes les informations sonores importantes sont présentes, les dialogues notamment) ;
    -   Et correctement synchronisés.
3.  Si c’est le cas pour chaque média temporel synchronisé,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.2.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#captions-prerecorded "critère 1.2.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G93](https://www.w3.org/WAI/WCAG21/Techniques/general/G93 "G93 - nouvelle fenêtre")
-   [G87](https://www.w3.org/WAI/WCAG21/Techniques/general/G87 "G87 - nouvelle fenêtre")
-   [SM11](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11 "SM11 - nouvelle fenêtre")
-   [SM12](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12 "SM12 - nouvelle fenêtre")
-   [F8](https://www.w3.org/WAI/WCAG21/Techniques/failures/F8 "F8 - nouvelle fenêtre")
-   [F74](https://www.w3.org/WAI/WCAG21/Techniques/failures/F74 "F74 - nouvelle fenêtre")
-   [F75](https://www.w3.org/WAI/WCAG21/Techniques/failures/F75 "F75 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.2.2  Captions (Prerecorded)  (A)

### 4.5Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré a-t-il, si nécessaire, une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée (hors cas particuliers) ?  [Critère 4.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.5 "Critère 4.5")

Tests et références du critère 4.5

#### 4.5.1

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré seulement vidéo vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ? [Test 4.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.5.1 "Test 4.5.1")

-   Il existe une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée ;
-   Il existe une version alternative avec une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée.

Méthodologie du test 4.5.1

1.  Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo qui nécessitent une audiodescription ;
2.  Pour chaque média temporel seulement vidéo, vérifier la présence :
    -   Soit d’une audiodescription synchronisée ;
    -   Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre).
3.  Si c’est le cas pour chaque média temporel seulement vidéo,  **le test est validé**.

#### 4.5.2

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé pré-enregistré vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ? [Test 4.5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.5.2 "Test 4.5.2")

-   Il existe une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée ;
-   Il existe une version alternative avec une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée.

Méthodologie du test 4.5.2

1.  Retrouver dans le document les médias temporels pré-enregistrés synchronisés qui nécessitent une audiodescription ;
2.  Pour chaque média temporel synchronisé, vérifier la présence :
    -   Soit d’une audiodescription synchronisée ;
    -   Soit d’une version alternative avec une audiodescription synchronisée accessible au moyen d’un bouton ou d’un lien adjacent (une URL ou une ancre).
3.  Si c’est le cas pour chaque média temporel synchronisé,  **le test est validé**.

#### Cas particuliers

Voir cas particuliers critère 4.1.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.2.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#audio-description-prerecorded "critère 1.2.5 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G8](https://www.w3.org/WAI/WCAG21/Techniques/general/G8 "G8 - nouvelle fenêtre")
-   [G58](https://www.w3.org/WAI/WCAG21/Techniques/general/G58 "G58 - nouvelle fenêtre")
-   [G78](https://www.w3.org/WAI/WCAG21/Techniques/general/G78 "G78 - nouvelle fenêtre")
-   [G173](https://www.w3.org/WAI/WCAG21/Techniques/general/G173 "G173 - nouvelle fenêtre")
-   [H96](https://www.w3.org/WAI/WCAG21/Techniques/html/H96 "H96 - nouvelle fenêtre")
-   [SM1](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1 "SM1 - nouvelle fenêtre")
-   [SM2](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2 "SM2 - nouvelle fenêtre")
-   [SM6](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6 "SM6 - nouvelle fenêtre")
-   [SM7](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7 "SM7 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.2.5  Audio Description (Prerecorded)  (AA)

### 4.6Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré ayant une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée, celle-ci est-elle pertinente ?  [Critère 4.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.6 "Critère 4.6")

Tests et références du critère 4.6

#### 4.6.1

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  pré-enregistré seulement vidéo ayant une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée, celle-ci est-elle pertinente ? [Test 4.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.6.1 "Test 4.6.1")

Méthodologie du test 4.6.1

1.  Retrouver dans le document les médias temporels seulement vidéo qui possèdent une audiodescription ;
2.  Pour chaque média temporel, vérifier que l’audiodescription synchronisée est pertinente (toutes les informations visuelles qu’il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;
3.  Si c’est le cas pour chaque média temporel seulement vidéo,  **le test est validé**.

#### 4.6.2

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  synchronisé ayant une  [audiodescription](https://accessibilite.numerique.gouv.fr/methode/glossaire/#audiodescription-synchronisee-media-temporel)  synchronisée, celle-ci est-elle pertinente ? [Test 4.6.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.6.2 "Test 4.6.2")

Méthodologie du test 4.6.2

1.  Retrouver dans le document les médias temporels synchronisés qui possèdent une audiodescription ;
2.  Pour chaque média temporel, vérifier que l’audiodescription synchronisée est pertinente (toutes les informations visuelles qu’il est possible de vocaliser dans les blancs de la bande son principale sont présentes, les textes incrustés notamment) ;
3.  Si c’est le cas pour chaque média temporel synchronisé,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.2.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#audio-description-prerecorded "critère 1.2.5 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [SM1](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM1 "SM1 - nouvelle fenêtre")
-   [SM2](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM2 "SM2 - nouvelle fenêtre")
-   [SM6](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM6 "SM6 - nouvelle fenêtre")
-   [SM7](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM7 "SM7 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.2.5  Audio Description (Prerecorded)  (AA)

### 4.7Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est-il clairement identifiable (hors cas particuliers) ?  [Critère 4.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.7 "Critère 4.7")

Tests et références du critère 4.7

#### 4.7.1

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  seulement son, seulement vidéo ou synchronisé, le contenu textuel adjacent permet-il d’identifier clairement le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  (hors cas particuliers) ? [Test 4.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.7.1 "Test 4.7.1")

Méthodologie du test 4.7.1

1.  Retrouver dans le document les médias temporels pré-enregistrés seulement vidéo, audio ou synchronisés ;
2.  Pour chaque média temporel, vérifier que :
    -   Un passage de texte (un titre ou un paragraphe, par exemple) qui précède ou suit immédiatement le média temporel, permet de l’identifier ;
    -   Et le passage de texte est situé à l’extérieur du lecteur de contenu multimédia si ce dernier fait appel à la technologie Flash.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particulier lorsque le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information). Dans cette situation, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G68](https://www.w3.org/WAI/WCAG21/Techniques/general/G68 "G68 - nouvelle fenêtre")
-   [G100](https://www.w3.org/WAI/WCAG21/Techniques/general/G100 "G100 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 4.8Chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  a-t-il, si nécessaire, une alternative (hors cas particuliers) ?  [Critère 4.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.8 "Critère 4.8")

Tests et références du critère 4.8

#### 4.8.1

Chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  vérifie-t-il, si nécessaire, une de ces conditions (hors cas particuliers) ? [Test 4.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.8.1 "Test 4.8.1")

-   Un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent), clairement identifiable, permet d’accéder à une page contenant une alternative ;
-   Un  [lien ou un bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent), clairement identifiable, permet d’accéder à une alternative dans la page.

Méthodologie du test 4.8.1

1.  Retrouver dans le document les médias non temporels ;
2.  Pour chaque média non temporel, vérifier qu’un lien ou un bouton adjacent, clairement identifiable :
    -   Soit contient l’adresse (url) d’une page contenant une alternative ;
    -   Soit permet d’accéder à une alternative dans la page.
3.  Si c’est le cas pour chaque média non temporel,  **le test est validé**.

#### 4.8.2

Chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  associé à une alternative vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 4.8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.8.2 "Test 4.8.2")

-   La page référencée par le  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent)  est accessible ;
-   L’alternative dans la page, référencée par le  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent), est accessible.

Méthodologie du test 4.8.2

1.  Retrouver dans le document les médias non temporels associés à une alternative ;
2.  Pour chaque média non temporel, vérifier que :
    -   La page référencée par le lien ou le bouton adjacent est accessible ;
    -   L’alternative dans la page, référencée par le lien ou le bouton adjacent, est accessible.
3.  Si c’est le cas pour chaque média non temporel,  **le test est validé**.

Note : le critère est non applicable dans les situations où :

-   Le média non temporel est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;
-   Le média non temporel est diffusé dans un environnement maîtrisé ;
-   Le média non temporel est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d’un contenu alternatif déjà présent.

#### Cas particuliers

Il existe une gestion de cas particulier lorsque :

-   Le  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information) ;
-   Le  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  est diffusé dans un  [environnement maîtrisé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#environnement-maitrise) ;
-   Le  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  est inséré via JavaScript en vérifiant la présence et la version du plug-in, en remplacement d’un  [contenu alternatif](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-alternatif)  déjà présent.

Dans ces situations, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H35](https://www.w3.org/WAI/WCAG21/Techniques/html/H35 "H35 - nouvelle fenêtre")
-   [H46](https://www.w3.org/WAI/WCAG21/Techniques/html/H46 "H46 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 4.9Pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  ayant une alternative, cette alternative est-elle pertinente ?  [Critère 4.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.9 "Critère 4.9")

Tests et références du critère 4.9

#### 4.9.1

Pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  ayant une alternative, cette alternative permet-elle d’accéder au même contenu et à des fonctionnalités similaires ? [Test 4.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.9.1 "Test 4.9.1")

Méthodologie du test 4.9.1

1.  Retrouver dans le document les médias non temporels associés à une alternative ;
2.  Pour chaque média non temporel, vérifier que l’alternative est pertinente (elle permet d’accéder au même contenu et à des fonctionnalités similaires) ;
3.  Si c’est le cas pour chaque média non temporel,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H46](https://www.w3.org/WAI/WCAG21/Techniques/html/H46 "H46 - nouvelle fenêtre")
-   [F30](https://www.w3.org/WAI/WCAG21/Techniques/failures/F30 "F30 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 4.10Chaque son déclenché automatiquement est-il  [contrôlable](https://accessibilite.numerique.gouv.fr/methode/glossaire/#controle-son-declenche-automatiquement)  par l’utilisateur ?  [Critère 4.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.10 "Critère 4.10")

Tests et références du critère 4.10

#### 4.10.1

Chaque séquence sonore déclenchée automatiquement via une balise  `<object>`,  `<video>`,  `<audio>`,  `<embed>`,  `<bgsound>`  ou un code JavaScript vérifie-t-elle une de ces conditions ? [Test 4.10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.10.1 "Test 4.10.1")

-   La séquence sonore a une durée inférieure ou égale à 3 secondes ;
-   La séquence sonore peut être stoppée sur action de l’utilisateur ;
-   Le volume de la séquence sonore peut être contrôlé par l’utilisateur indépendamment du contrôle de volume du système.

Méthodologie du test 4.10.1

1.  Au chargement du document, si un son se déclenche automatiquement, vérifier que :
    -   Soit la séquence sonore a une durée inférieure ou égale à 3 secondes ;
    -   Soit un dispositif (un bouton par exemple), sur l’élément ayant déclenché le son (voir note), ou dans la page, permet de le stopper ;
    -   Soit le volume de la séquence peut être contrôlé par l’utilisateur, indépendamment du contrôle de volume du système.
2.  Si c’est le cas,  **le test est validé**.

Note : les éléments suivants sont susceptibles de déclencher des sons au chargement de la page : éléments  `<audio>`,  `<video>`,  `<object>`,  `<embed>`,  `<bgsound>`  ou un code JavaScript (utilisation de la Web Audio API, par exemple).

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#audio-control "critère 1.4.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G60](https://www.w3.org/WAI/WCAG21/Techniques/general/G60 "G60 - nouvelle fenêtre")
-   [G170](https://www.w3.org/WAI/WCAG21/Techniques/general/G170 "G170 - nouvelle fenêtre")
-   [G171](https://www.w3.org/WAI/WCAG21/Techniques/general/G171 "G171 - nouvelle fenêtre")
-   [F23](https://www.w3.org/WAI/WCAG21/Techniques/failures/F23 "F23 - nouvelle fenêtre")
-   [F93](https://www.w3.org/WAI/WCAG21/Techniques/failures/F93 "F93 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.2  Audio Control  (A)

### 4.11La consultation de chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  est-elle, si nécessaire,  [contrôlable par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ?  [Critère 4.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.11 "Critère 4.11")

Tests et références du critère 4.11

#### 4.11.1

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  a-t-il, si nécessaire, les fonctionnalités de  [contrôle de sa consultation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#controle-de-la-consultation-d-un-media-temporel) ? [Test 4.11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.11.1 "Test 4.11.1")

Méthodologie du test 4.11.1

1.  Retrouver dans le document les médias temporels ;
2.  Pour chaque média temporel, vérifier la présence des fonctionnalités obligatoires de contrôle de la consultation :
    -   Au minimum : lecture, pause ou stop ;
    -   Si le média a du son, il doit avoir une fonctionnalité d’activation / désactivation du son ;
    -   Si le média a des sous-titres, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition des sous-titres ;
    -   Si le média a une audiodescription, il doit avoir une fonctionnalité de contrôle de l’apparition/disparition de l’audiodescription.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.11.2

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise), chaque fonctionnalité vérifie-t-elle une de ces conditions ? [Test 4.11.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.11.2 "Test 4.11.2")

-   La fonctionnalité est  [accessible par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;
-   Une fonctionnalité  [accessible par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage)  permettant de réaliser la même action est présente dans la page.

Méthodologie du test 4.11.2

1.  Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;
2.  Pour chaque média temporel, vérifier que :
    -   Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
    -   Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### 4.11.3

Pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise), chaque fonctionnalité vérifie-t-elle une de ces conditions ? [Test 4.11.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.11.3 "Test 4.11.3")

-   La fonctionnalité est  [activable par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;
-   Une fonctionnalité  [activable par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage)  permettant de réaliser la même action est présente dans la page.

Méthodologie du test 4.11.3

1.  Retrouver dans le document les médias temporels pourvus de fonctionnalités de contrôle ;
2.  Pour chaque média temporel, vérifier que :
    -   Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;
    -   Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3.  Si c’est le cas pour chaque média temporel,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard "critère 2.1.1 (A) - nouvelle fenêtre")
-   [2.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#no-keyboard-trap "critère 2.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G4](https://www.w3.org/WAI/WCAG21/Techniques/general/G4 "G4 - nouvelle fenêtre")
-   [G90](https://www.w3.org/WAI/WCAG21/Techniques/general/G90 "G90 - nouvelle fenêtre")
-   [G202](https://www.w3.org/WAI/WCAG21/Techniques/general/G202 "G202 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.1.1  Keyboard  (A)
-   9.2.1.2  No Keyboard Trap  (A)

### 4.12La consultation de chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  est-elle  [contrôlable par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ?  [Critère 4.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.12 "Critère 4.12")

Tests et références du critère 4.12

#### 4.12.1

Pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel), chaque fonctionnalité vérifie-t-elle une de ces conditions ? [Test 4.12.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.12.1 "Test 4.12.1")

-   La fonctionnalité est  [accessible par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;
-   Une fonctionnalité  [accessible par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage)  permettant de réaliser la même action est présente dans la page.

Méthodologie du test 4.12.1

1.  Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;
2.  Pour chaque média non temporel, vérifier que :
    -   Soit la fonctionnalité est accessible par le clavier et tout dispositif de pointage ;
    -   Soit une fonctionnalité accessible par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3.  Si c’est le cas pour chaque média non temporel,  **le test est validé**.

#### 4.12.2

Pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel), chaque fonctionnalité vérifie-t-elle une de ces conditions ? [Test 4.12.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.12.2 "Test 4.12.2")

-   La fonctionnalité est  [activable par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;
-   Une fonctionnalité  [activable par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage)  permettant de réaliser la même action est présente dans la page.

Méthodologie du test 4.12.2

1.  Retrouver dans le document les médias non temporels pourvus de fonctionnalités de contrôle ;
2.  Pour chaque média non temporel, vérifier que :
    -   Soit la fonctionnalité est activable par le clavier et tout dispositif de pointage ;
    -   Soit une fonctionnalité activable par le clavier et tout dispositif de pointage permettant de réaliser la même action est présente dans la page.
3.  Si c’est le cas pour chaque média non temporel,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard "critère 2.1.1 (A) - nouvelle fenêtre")
-   [2.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#no-keyboard-trap "critère 2.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G4](https://www.w3.org/WAI/WCAG21/Techniques/general/G4 "G4 - nouvelle fenêtre")
-   [G90](https://www.w3.org/WAI/WCAG21/Techniques/general/G90 "G90 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.1.1  Keyboard  (A)
-   9.2.1.2  No Keyboard Trap  (A)

### 4.13Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  et  [non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  est-il  [compatible avec les technologies d’assistance](https://accessibilite.numerique.gouv.fr/methode/glossaire/#compatible-avec-les-technologies-d-assistance)  (hors cas particuliers) ?  [Critère 4.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.13 "Critère 4.13")

Tests et références du critère 4.13

#### 4.13.1

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  et  [non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 4.13.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.13.1 "Test 4.13.1")

-   Le nom, le rôle, la valeur, le paramétrage et les changements d’états des composants d’interfaces sont accessibles aux technologies d’assistance via une API d’accessibilité ;
-   Une alternative  [compatible avec une API d’accessibilité](https://accessibilite.numerique.gouv.fr/methode/glossaire/#compatible-avec-les-technologies-d-assistance)  permet d’accéder aux mêmes fonctionnalités.

Méthodologie du test 4.13.1

1.  Retrouver dans le document les médias temporels et non temporels ;
2.  Pour chaque média, vérifier que :
    -   Soit le nom, le rôle, la valeur, le paramétrage et les changements d’états des composants d’interfaces sont accessibles aux technologies d’assistance via une API d’accessibilité (par exemple, les zones mises à jour dynamiquement dans un lecteur vidéo sont correctement restituées) ;
    -   Soit une alternative compatible avec une API d’accessibilité permet d’accéder aux mêmes fonctionnalités.
3.  Si c’est le cas pour chaque média temporel ou non temporel,  **le test est validé**.

#### 4.13.2

Chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  et  [non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  qui possède une alternative  [compatible avec les technologies d’assistance](https://accessibilite.numerique.gouv.fr/methode/glossaire/#compatible-avec-les-technologies-d-assistance), vérifie-t-il une de ces conditions ? [Test 4.13.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#4.13.2 "Test 4.13.2")

-   L’alternative est adjacente au  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  ou  [non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel) ;
-   L’alternative est accessible via un  [lien ou bouton adjacent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-ou-bouton-adjacent) ;
-   Un mécanisme permet de remplacer le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  ou  [non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  par son alternative.

Méthodologie du test 4.13.2

1.  Retrouver dans le document les médias temporels et non temporels qui possèdent une alternative compatible avec les technologies d’assistance ;
2.  Pour chaque média, vérifier que :
    -   Soit l’alternative est adjacente au média temporel ou non temporel ;
    -   Soit l’alternative est accessible au moyen d’un lien ou d’un bouton adjacent ;
    -   Soit un mécanisme permet de remplacer le média temporel ou non temporel par son alternative.
3.  Si c’est le cas pour chaque média temporel ou non temporel,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particulier lorsque le  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise)  ou  [non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel)  est utilisé à des fins décoratives (c’est-à-dire qu’il n’apporte aucune information).

Dans ces situations, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G10](https://www.w3.org/WAI/WCAG21/Techniques/general/G10 "G10 - nouvelle fenêtre")
-   [G135](https://www.w3.org/WAI/WCAG21/Techniques/general/G135 "G135 - nouvelle fenêtre")
-   [F15](https://www.w3.org/WAI/WCAG21/Techniques/failures/F15 "F15 - nouvelle fenêtre")
-   [F54](https://www.w3.org/WAI/WCAG21/Techniques/failures/F54 "F54 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.4.1.2  Name, role, Value  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 5. Tableaux [Thématique Tableaux](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5 "Thématique Tableaux")

### 5.1Chaque  [tableau de données complexe](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-complexe)  a-t-il un  [résumé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#resume-de-tableau) ?  [Critère 5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.1 "Critère 5.1")

Tests et références du critère 5.1

#### 5.1.1

Pour chaque  [tableau de données complexe](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-complexe), un  [résumé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#resume-de-tableau)  est-il disponible ? [Test 5.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.1.1 "Test 5.1.1")

Méthodologie du test 5.1.1

1.  Retrouver dans le document les tableaux de données complexes (tableau de données - élément  `<table>`  ou élément pourvu d’un attribut WAI-ARIA  `role="table"`  - contenant des en-têtes qui ne sont pas répartis uniquement sur la première ligne et/ou la première colonne de la grille ou dont la portée n’est pas valable pour l’ensemble de la colonne ou de la ligne) ;
2.  Pour chaque tableau de données complexe, vérifier qu’un passage de texte permettant de comprendre la nature et la structure du tableau, est présent :
    -   Soit dans l’élément  `<caption>` ;
    -   Soit dans l’attribut  `summary`  de l’élément  `<table>`  (dans les versions de HTML et de XHTML antérieures à HTML 5) ;
    -   Soit dans un passage de texte lié au tableau avec l’attribut `aria-describedby`.
3.  Si c’est le cas pour chaque tableau de données complexe,  **le test est validé**.

#### Notes techniques

La spécification HTML propose plusieurs  [méthodes pour lier un résumé à un tableau](https://accessibilite.numerique.gouv.fr/methode/glossaire/#table-descriptions-techniques)  (tableau lié à un passage de texte avec l’attribut  `aria-describedby`, tableau groupé dans un élément  `figure`  avec un résumé présent dans un élément  `figcaption`  ou un élément  `p`, résumé présent dans un élément  `details`  contenu dans l’élément  `caption`). Ces méthodes n’ont pas un support suffisant pour être utilisées actuellement.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H73](https://www.w3.org/WAI/WCAG21/Techniques/html/H73 "H73 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 5.2Pour chaque  [tableau de données complexe](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-complexe)  ayant un  [résumé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#resume-de-tableau), celui-ci est-il pertinent ?  [Critère 5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.2 "Critère 5.2")

Tests et références du critère 5.2

#### 5.2.1

Pour chaque  [tableau de données complexe](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-complexe)  ayant un  [résumé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#resume-de-tableau), celui-ci est-il pertinent ? [Test 5.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.2.1 "Test 5.2.1")

Méthodologie du test 5.2.1

1.  Retrouver dans le document les résumés de tableaux de données complexes (tels que déterminés par le test 5.1.1) ;
2.  Pour chaque résumé, vérifier que son contenu est pertinent ;
3.  Si c’est le cas pour chaque résumé de tableaux de données complexes,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H73](https://www.w3.org/WAI/WCAG21/Techniques/html/H73 "H73 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 5.3Pour chaque  [tableau de mise en forme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-mise-en-forme), le contenu linéarisé reste-t-il compréhensible ?  [Critère 5.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.3 "Critère 5.3")

Tests et références du critère 5.3

#### 5.3.1

Chaque  [tableau de mise en forme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-mise-en-forme)  vérifie-t-il ces conditions ? [Test 5.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.3.1 "Test 5.3.1")

-   Le contenu linéarisé reste compréhensible ;
-   La balise  `<table>`  possède un attribut  `role="presentation"`.

Méthodologie du test 5.3.1

1.  Retrouver dans le document les tableaux de mise en forme ;
2.  Pour chaque tableau de mise en forme, vérifier que :
    -   L’ordre d’accès aux cellules est cohérent avec le contenu ;
    -   L’élément  `<table>`  est pourvu d’un attribut WAI-ARIA  `role="presentation"`.
3.  Si c’est le cas pour chaque tableau de mise en forme,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F49](https://www.w3.org/WAI/WCAG21/Techniques/failures/F49 "F49 - nouvelle fenêtre")
-   [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4 "ARIA4 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.2  Meaningful Sequence  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 5.4Pour chaque  [tableau de données ayant un titre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-ayant-un-titre), le titre est-il correctement associé au tableau de données ?  [Critère 5.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.4 "Critère 5.4")

Tests et références du critère 5.4

#### 5.4.1

Pour chaque  [tableau de données ayant un titre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-ayant-un-titre), le titre est-il correctement associé au tableau de données ? [Test 5.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.4.1 "Test 5.4.1")

Méthodologie du test 5.4.1

1.  Retrouver dans le document les tableaux de données pourvus d’un titre ;
2.  Pour chaque titre, vérifier qu’il est fourni au moyen :
    -   Soit d’un élément  `<caption>` ;
    -   Soit d’un attribut  `title` ;
    -   Soit d’un attribut WAI-ARIA  `aria-label` ;
    -   Soit d’un attribut WAI-ARIA  `aria-labelledby`  référençant un passage de texte.
3.  Si c’est le cas pour chaque titre de tableau de données,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H39](https://www.w3.org/WAI/WCAG21/Techniques/html/H39 "H39 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 5.5Pour chaque  [tableau de données ayant un titre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-ayant-un-titre), celui-ci est-il pertinent ?  [Critère 5.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.5 "Critère 5.5")

Tests et références du critère 5.5

#### 5.5.1

Pour chaque  [tableau de données ayant un titre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees-ayant-un-titre), ce titre permet-il d’identifier le contenu du  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees)  de manière claire et concise ? [Test 5.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.5.1 "Test 5.5.1")

Méthodologie du test 5.5.1

1.  Retrouver dans le document les tableaux de données pourvus d’un titre ;
2.  Pour chaque titre, vérifier qu’il est pertinent ;
3.  Si c’est le cas pour chaque titre de tableau de données,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H39](https://www.w3.org/WAI/WCAG21/Techniques/html/H39 "H39 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 5.6Pour chaque  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees), chaque  [en-tête de colonne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  et chaque  [en-tête de ligne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  sont-ils correctement déclarés ?  [Critère 5.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6 "Critère 5.6")

Tests et références du critère 5.6

#### 5.6.1

Pour chaque  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees), chaque  [en-tête de colonne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  s’appliquant à la totalité de la colonne vérifie-t-il une de ces conditions ? [Test 5.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6.1 "Test 5.6.1")

-   L’[en-tête de colonnes](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  est structuré au moyen d’une balise  `<th>` ;
-   L’[en-tête de colonnes](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  est structuré au moyen d’une balise pourvue d’un attribut WAI-ARIA  `role="columnheader"`.

Méthodologie du test 5.6.1

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête de colonnes s’appliquant à la totalité de la colonne, vérifier que l’en-tête de colonne est structuré au moyen :
    -   Soit d’un élément  `<th>` ;
    -   Soit d’un élément pourvu d’un attribut WAI-ARIA  `role="columnheader"`.
3.  Si c’est le cas pour chaque en-tête de colonne s’appliquant à la totalité de la colonne,  **le test est validé**.

#### 5.6.2

Pour chaque  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees), chaque  [en-tête de ligne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  s’appliquant à la totalité de la ligne vérifie-t-il une de ces conditions ? [Test 5.6.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6.2 "Test 5.6.2")

-   L’[en-tête de lignes](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  est structuré au moyen d’une balise  `<th>` ;
-   L’[en-tête de lignes](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  est structuré au moyen d’une balise pourvue d’un attribut WAI-ARIA  `role="rowheader"`.

Méthodologie du test 5.6.2

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête de ligne s’appliquant à la totalité de la ligne, vérifier que l’en-tête de ligne est structuré au moyen :
    -   Soit d’un élément  `<th>` ;
    -   Soit d’un élément pourvu d’un attribut WAI-ARIA  `role="rowheader"`.
3.  Si c’est le cas pour chaque en-tête de ligne s’appliquant à la totalité de la ligne,  **le test est validé**.

#### 5.6.3

Pour chaque  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees), chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne est-il structuré au moyen d’une balise  `<th>` ? [Test 5.6.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6.3 "Test 5.6.3")

Méthodologie du test 5.6.3

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l’en-tête de ligne est structuré au moyen d’un élément  `<th>` ;
3.  Si c’est le cas pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne,  **le test est validé**.

#### 5.6.4

Pour chaque  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees), chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise  `<td>`  ou  `<th>` ? [Test 5.6.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.6.4 "Test 5.6.4")

Méthodologie du test 5.6.4

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque cellule associée à plusieurs en-têtes est-elle structurée au moyen d’une balise  `<th>`  ou  `<td>` ;
3.  Si c’est le cas pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H51](https://www.w3.org/WAI/WCAG21/Techniques/html/H51 "H51 - nouvelle fenêtre")
-   [F91](https://www.w3.org/WAI/WCAG21/Techniques/failures/F91 "F91 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 5.7Pour chaque  [tableau de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees), la technique appropriée permettant d’associer chaque cellule avec ses  [en-têtes](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  est-elle utilisée (hors cas particuliers) ?  [Critère 5.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7 "Critère 5.7")

Tests et références du critère 5.7

#### 5.7.1

Pour chaque contenu de balise  `<th>`  s’appliquant à la totalité de la ligne ou de la colonne, la balise  `<th>`  respecte-t-elle une de ces conditions (hors cas particuliers) ? [Test 5.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7.1 "Test 5.7.1")

-   La balise  `<th>`  possède un attribut  `id`  unique ;
-   La balise  `<th>`  possède un attribut  `scope` ;
-   La balise  `<th>`  possède un attribut WAI-ARIA  `role="rowheader"`  ou  `role="columnheader"`.

Méthodologie du test 5.7.1

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête (élément  `<th>`) s’appliquant à la totalité de la ligne ou de la colonne, vérifier que l’élément  `<th>`  possède :
    -   Soit un attribut  `id`  unique ;
    -   Soit un attribut scope ;
    -   Soit un attribut WAI-ARIA  `role="rowheader"`  ou  `"columnheader"`.
3.  Si c’est le cas pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne,  **le test est validé**.

#### 5.7.2

Pour chaque contenu de balise  `<th>`  s’appliquant à la totalité de la ligne ou de la colonne et possédant un attribut  `scope`, la balise  `<th>`  vérifie-t-elle une de ces conditions ? [Test 5.7.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7.2 "Test 5.7.2")

-   La balise  `<th>`  possède un attribut  `scope`  avec la valeur  `"row"`  pour les  [en-têtes de ligne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne) ;
-   La balise  `<th>`  possède un attribut  `scope`  avec la valeur  `"col"`  pour les  [en-têtes de colonne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne).

Méthodologie du test 5.7.2

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête (élément  `<th>`) s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut  `scope`, vérifier que l’attribut  `scope`  possède :
    -   Soit une valeur  `"row"`  pour les en-têtes de ligne ;
    -   Soit une valeur  `"col"`  pour les en-têtes de colonne.
3.  Si c’est le cas pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut  `scope`,  **le test est validé**.

#### 5.7.3

Pour chaque contenu de balise  `<th>`  ne s’appliquant pas à la totalité de la ligne ou de la colonne, la balise  `<th>`  vérifie-t-elle ces conditions ? [Test 5.7.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7.3 "Test 5.7.3")

-   La balise  `<th>`  ne possède pas d’attribut  `scope` ;
-   La balise  `<th>`  ne possède pas d’attribut WAI-ARIA  `role="rowheader"`  ou  `role="columnheader"` ;
-   La balise  `<th>`  possède un attribut  `id`  unique.

Méthodologie du test 5.7.3

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête (élément  `<th>`) ne s’appliquant pas à la totalité de la ligne ou de la colonne, vérifier que l’élément  `<th>` :
    -   Possède un attribut  `id`  unique ;
    -   Et ne possède pas d’attribut  `scope` ;
    -   Et ne possède pas d’attribut WAI-ARIA  `role="rowheader"`  ou  `"columnheader"`.
3.  Si c’est le cas pour chaque en-tête ne s’appliquant pas à la totalité de la ligne ou de la colonne,  **le test est validé**.

#### 5.7.4

Pour chaque contenu de balise  `<td>`  ou  `<th>`  associée à un ou plusieurs en-têtes possédant un attribut  `id`, la balise vérifie-t-elle ces conditions ? [Test 5.7.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7.4 "Test 5.7.4")

-   La balise possède un attribut  `headers` ;
-   L’attribut  `headers`  possède la liste des valeurs d’attribut  `id`  des  [en-têtes](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne)  associés.

Méthodologie du test 5.7.4

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque élément  `<td>`  ou  `<th>`  associé à un ou plusieurs en-têtes possédant un attribut  `id`, vérifier que :
    -   L’élément  `<td>`  ou  `<th>`  possède un attribut  `headers` ;
    -   Et l’attribut  `headers`  possède la liste des valeurs d’attribut  `id`  des en-têtes associés.
3.  Si c’est le cas pour chaque élément  `<td>`  ou  `<th>`  associé à un ou plusieurs en-têtes possédant un attribut  `id`,  **le test est validé**.

#### 5.7.5

Pour chaque balise pourvue d’un attribut WAI-ARIA  `role="rowheader"`  ou  `role="columnheader"`  dont le contenu s’applique à la totalité de la ligne ou de la colonne, la balise vérifie-t-elle une de ces conditions ? [Test 5.7.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.7.5 "Test 5.7.5")

-   La balise possède un attribut WAI-ARIA  `role="rowheader"`  pour les  [en-têtes de ligne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne) ;
-   La balise possède un attribut WAI-ARIA  `role="columnheader"`  pour les  [en-têtes de colonne](https://accessibilite.numerique.gouv.fr/methode/glossaire/#en-tete-de-colonne-ou-de-ligne).

Méthodologie du test 5.7.5

1.  Retrouver dans le document les tableaux de données ;
2.  Pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut WAI-ARIA  `role="rowheader"`  ou  `"columnheader"`, vérifier que l’élément possède :
    -   Soit un attribut WAI-ARIA  `role="rowheader"`  pour les en-têtes de ligne ;
    -   Soit un attribut WAI-ARIA  `role="columnheader"`  pour les en-têtes de colonne.
3.  Si c’est le cas pour chaque en-tête s’appliquant à la totalité de la ligne ou de la colonne et pourvu d’un attribut WAI-ARIA  `role="rowheader"`  ou  `"columnheader"`,  **le test est validé**.

#### Cas particuliers

Dans le cas de tableaux de données ayant des en-têtes sur une seule ligne ou une seule colonne, les en-têtes peuvent être structurés à l’aide de balise  `<th>`  sans attribut  `scope`.

#### Notes techniques

Si l’attribut  `headers`  est implémenté sur une cellule déjà reliée à un en-tête (de ligne ou de colonne) avec l’attribut  `scope`  (avec la valeur  `col`  ou  `row`), c’est l’en-tête ou les en-têtes référencés par l’attribut  `headers`  qui seront restitués aux technologies d’assistance. Les en-têtes reliés avec l’attribut  `scope`  seront ignorés.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H43](https://www.w3.org/WAI/WCAG21/Techniques/html/H43 "H43 - nouvelle fenêtre")
-   [H63](https://www.w3.org/WAI/WCAG21/Techniques/html/H63 "H63 - nouvelle fenêtre")
-   [F90](https://www.w3.org/WAI/WCAG21/Techniques/failures/F90 "F90 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 5.8Chaque  [tableau de mise en forme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-mise-en-forme)  ne doit pas utiliser d’éléments propres aux  [tableaux de données](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-donnees). Cette règle est-elle respectée ?  [Critère 5.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.8 "Critère 5.8")

Tests et références du critère 5.8

#### 5.8.1

Chaque  [tableau de mise en forme](https://accessibilite.numerique.gouv.fr/methode/glossaire/#tableau-de-mise-en-forme)  (balise  `<table>`) vérifie-t-il ces conditions ? [Test 5.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#5.8.1 "Test 5.8.1")

-   Le tableau de mise en forme (balise  `<table>`) n’a pas d’attribut  `summary`  (sinon vide) et ne contient pas de balises  `<caption>`,  `<th>`,  `<thead>`,  `<tfoot>`  ou de balises ayant un attribut WAI-ARIA  `role="rowheader"`,  `role="columnheader"` ;
-   Les cellules du tableau de mise en forme (balises  `<td>`) ne possèdent pas d’attributs  `scope`,  `headers`  et  `axis`.

Méthodologie du test 5.8.1

1.  Retrouver dans le document les tableaux de mise en forme ;
2.  Pour chaque tableau de mise en forme, vérifier que :
    -   L’élément  `<table>`  ne possède pas d’attribut  `summary`, d’éléments enfant  `<caption>`,  `<thead>`,  `<th>`,  `<tfoot>`  ou d’éléments pourvus d’un attribut WAI-ARIA  `role=“rowheader”`  ou  `role=“columnheader”` ;
    -   Les éléments  `<td>`  ne possèdent pas d’attributs  `scope`,  `headers`  et  `axis`.
3.  Si c’est le cas pour chaque tableau de mise en forme,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F46](https://www.w3.org/WAI/WCAG21/Techniques/failures/F46 "F46 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 6. Liens [Thématique Liens](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6 "Thématique Liens")

### 6.1Chaque  [lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien)  est-il explicite (hors cas particuliers) ?  [Critère 6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1 "Critère 6.1")

Tests et références du critère 6.1

#### 6.1.1

Chaque  [lien texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-texte)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 6.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1.1 "Test 6.1.1")

-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  seul permet d’en comprendre la fonction et la destination ;
-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  additionné au  [contexte du lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contexte-du-lien)  permet d’en comprendre la fonction et la destination.

Méthodologie du test 6.1.1

1.  Retrouver dans le document les liens texte ;
2.  Pour chaque lien texte, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
    -   Soit l’intitulé du lien seul ;
    -   Soit le contexte du lien.
3.  Si c’est le cas pour chaque lien texte,  **le test est validé**.

#### 6.1.2

Chaque  [lien image](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-image)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 6.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1.2 "Test 6.1.2")

-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  seul permet d’en comprendre la fonction et la destination ;
-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  additionné au  [contexte du lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contexte-du-lien)  permet d’en comprendre la fonction et la destination.

Méthodologie du test 6.1.2

1.  Retrouver dans le document les liens image (lien avec pour contenu un élément  `<img>`  ou un élément ayant l’attribut WAI-ARIA  `role="img"`, un élément  `<area>`  possédant un attribut  `href`, un élément  `<object>`, un élément  `<canvas>`  ou un élément  `<svg>`) ;
2.  Pour chaque lien image, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
    -   Soit l’intitulé du lien seul, fourni par l’alternative textuelle de l’image ;
    -   Soit le contexte du lien.
3.  Si c’est le cas pour chaque lien image,  **le test est validé**.

#### 6.1.3

Chaque  [lien composite](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-composite)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 6.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1.3 "Test 6.1.3")

-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  seul permet d’en comprendre la fonction et la destination ;
-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  additionné au  [contexte du lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contexte-du-lien)  permet d’en comprendre la fonction et la destination.

Méthodologie du test 6.1.3

1.  Retrouver dans le document les liens composites (lien composé à la fois de contenu texte et d’éléments de type image) ;
2.  Pour chaque lien composite, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
    -   Soit l’intitulé du lien seul, fourni par la combinaison du contenu texte et de l’alternative textuelle de l’image ;
    -   Soit le contexte du lien.
3.  Si c’est le cas pour chaque lien composite,  **le test est validé**.

#### 6.1.4

Chaque  [lien SVG](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-svg)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 6.1.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1.4 "Test 6.1.4")

-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  seul permet d’en comprendre la fonction et la destination ;
-   L’[intitulé de lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  additionné au  [contexte du lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contexte-du-lien)  permet d’en comprendre la fonction et la destination.

Méthodologie du test 6.1.4

1.  Retrouver dans le document les liens SVG (élément  `<svg>`  qui possède un élément  `<a>`  pourvu d’un attribut  `xlink-href`  (SVG 1.1) ou  `href`  (SVG 2)) ;
2.  Pour chaque lien SVG, vérifier que ce qui permet d’en comprendre la fonction et la destination est :
    -   Soit l’intitulé du lien seul, fourni par le nom accessible de l’élément  `<svg>`  (résolu généralement à partir du contenu d’un élément  `<text>`) ;
    -   Soit le contexte du lien.
3.  Si c’est le cas pour chaque lien SVG,  **le test est validé**.

#### 6.1.5

Pour chaque  [lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien)  ayant un  [intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible), le  [nom accessible du lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  contient-il au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible)  (hors cas particuliers) ? [Test 6.1.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.1.5 "Test 6.1.5")

Méthodologie du test 6.1.5

1.  Retrouver dans le document les liens autres que SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d’un attribut title ou d’un attribut  `aria-label`  ou d’un attribut  `aria-labelledby` ;
2.  Pour chaque lien, vérifier que le contenu de l’attribut  `title`  ou de l’attribut  `aria-label`  ou de l’attribut  `aria-labelledby`  contient l’intitulé visible ;
3.  Si c’est le cas pour chaque lien,  **le test est validé**  pour les liens autres que SVG.
4.  Retrouver dans le document les liens SVG dont le contenu est fourni à la fois par un intitulé visible et par le contenu soit d’un attribut  `aria-labelledby`, ou d’un attribut  `aria-label`  ou d’un élément title (enfant direct de l’élément  `<svg>`) ou d’un attribut x-link:title (SVG 1.1) ou d’un ou plusieurs éléments  `<text>`;
5.  Pour chaque lien SVG, vérifier que le contenu de l’attribut  `aria-labelledby`  ou de l’attribut  `aria-label`  ou de l’élément  `<title>`  ou de l’attribut  `x-link:title`  ou d’un ou plusieurs éléments  `<text>`  contient l’intitulé visible ;
6.  Si c’est le cas pour chaque lien SVG,  **le test est validé**  pour les liens SVG.
7.  Si le test est validé à la fois pour les liens non SVG et pour les liens SVG, le test est globalement validé.

Note : considérant la détermination du nom accessible, il existe deux cas particuliers et une particularité liée aux expressions mathématiques :

-   La ponctuation et les lettres majuscules présentes dans le texte de l’intitulé visible peuvent être ignorées dans le nom accessible sans porter à conséquence.
-   Si le texte de l’intitulé visible sert de symbole, il ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir le point ci-dessous).
-   Si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (par exemple, “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

#### Cas particuliers

Il existe une gestion de cas particuliers pour les tests 6.1.1, 6.1.2, 6.1.3 et 6.1.4 lorsque le lien est  [ambigu pour tout le monde](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ambigu-pour-tout-le-monde). Dans cette situation, où il n’est pas possible de rendre le lien explicite dans son contexte, le critère est non applicable.

Il existe une gestion de cas particuliers pour le test 6.1.5 lorsque :

-   La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
-   Le texte de l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible)  sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

#### Notes techniques

Lorsque l’intitulé visible est complété par une autre expression dans le nom accessible :

-   WCAG insiste sur le placement de l’intitulé visible au début du nom accessible sans toutefois réserver l’exclusivité de cet emplacement ;
-   WCAG considère comme un cas d’échec une correspondance non exacte de la chaîne de caractères de l’intitulé visible au sein du nom accessible.

Par exemple, si l’on considère l’intitulé visible « Commander maintenant » complété dans le nom accessible par l’expression « produit X », on peut avoir les différents cas suivants :

-   « Commander maintenant produit X » est valide (bonne pratique) ;
-   « Produit X : commander maintenant » est valide ;
-   « Commander produit X maintenant » est non valide.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [2.4.4 (A)](https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context "critère 2.4.4 (A) - nouvelle fenêtre")
-   [2.5.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name "critère 2.5.3 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H30](https://www.w3.org/WAI/WCAG21/Techniques/html/H30 "H30 - nouvelle fenêtre")
-   [H78](https://www.w3.org/WAI/WCAG21/Techniques/html/H78 "H78 - nouvelle fenêtre")
-   [H79](https://www.w3.org/WAI/WCAG21/Techniques/html/H79 "H79 - nouvelle fenêtre")
-   [H80](https://www.w3.org/WAI/WCAG21/Techniques/html/H80 "H80 - nouvelle fenêtre")
-   [H81](https://www.w3.org/WAI/WCAG21/Techniques/html/H81 "H81 - nouvelle fenêtre")
-   [G53](https://www.w3.org/WAI/WCAG21/Techniques/general/G53 "G53 - nouvelle fenêtre")
-   [G91](https://www.w3.org/WAI/WCAG21/Techniques/general/G91 "G91 - nouvelle fenêtre")
-   [F63](https://www.w3.org/WAI/WCAG21/Techniques/failures/F63 "F63 - nouvelle fenêtre")
-   [F89](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89 "F89 - nouvelle fenêtre")
-   [ARIA7](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA7 "ARIA7 - nouvelle fenêtre")
-   [ARIA8](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8 "ARIA8 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.2.4.4  Link Purpose (In Context)  (A)
-   9.2.5.3  Label in Name  (A)

### 6.2Dans chaque page web, chaque  [lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien)  a-t-il un  [intitulé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien) ?  [Critère 6.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2 "Critère 6.2")

Tests et références du critère 6.2

#### 6.2.1

Dans chaque page web, chaque  [lien](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien)  a-t-il un  [intitulé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-ou-nom-accessible-de-lien)  entre  `<a>`  et  `</a>` ? [Test 6.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#6.2.1 "Test 6.2.1")

Méthodologie du test 6.2.1

1.  Retrouver dans le document les liens quels qu’ils soient ;
2.  Pour chaque lien, vérifier que le contenu de l’élément  `<a>`  (ou d’un élément pourvu d’un attribut WAI-ARIA  `role=link`) contient un intitulé (texte ou alternative) ;
3.  Si c’est le cas pour chaque lien,  **le test est validé**.

#### Notes techniques

Une ancre n’est pas un lien même si pendant longtemps l’élément  `<a>`  a servi de support à cette technique. Elle n’est donc pas concernée par le présent critère.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [2.4.4 (A)](https://www.w3.org/Translations/WCAG21-fr/#link-purpose-in-context "critère 2.4.4 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H30](https://www.w3.org/WAI/WCAG21/Techniques/html/H30 "H30 - nouvelle fenêtre")
-   [G91](https://www.w3.org/WAI/WCAG21/Techniques/general/G91 "G91 - nouvelle fenêtre")
-   [F89](https://www.w3.org/WAI/WCAG21/Techniques/failures/F89 "F89 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.2.4.4  Link Purpose (In Context)  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 7. Scripts [Thématique Scripts](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7 "Thématique Scripts")

### 7.1Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  est-il, si nécessaire,  [compatible avec les technologies d’assistance](https://accessibilite.numerique.gouv.fr/methode/glossaire/#compatible-avec-les-technologies-d-assistance) ?  [Critère 7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1 "Critère 7.1")

Tests et références du critère 7.1

#### 7.1.1

Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  qui génère ou contrôle un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  vérifie-t-il, si nécessaire, une de ces conditions ? [Test 7.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1.1 "Test 7.1.1")

-   Le  [nom, le rôle, la valeur, le paramétrage et les changements d’états](https://accessibilite.numerique.gouv.fr/methode/glossaire/#le-nom-le-role-la-valeur-le-parametrage-et-les-changements-d-etats)  sont accessibles aux technologies d’assistance via une API d’accessibilité ;
-   Un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  accessible permettant d’accéder aux mêmes fonctionnalités est présent dans la page ;
-   Une  [alternative](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-a-script)  accessible permet d’accéder aux mêmes fonctionnalités.

Méthodologie du test 7.1.1

1.  Retrouver dans le document tous les composants d’interface générés ou contrôlés au moyen de JavaScript ;
2.  Vérifier que :
    -   Le composant possède un rôle cohérent avec son usage (généralement un bouton ou un lien) ;
    -   Le composant possède un nom explicite ;
    -   Le nom du composant est cohérent avec l’état de la fonctionnalité ou des contenus contrôlés (par exemple pour une fonctionnalité permettant d’afficher ou de masquer une zone de contenu).
3.  Sinon, vérifier la présence d’un composant d’interface accessible permettant d’accéder aux mêmes fonctionnalités ;
4.  Sinon, vérifier la présence d’une alternative accessible permettant d’accéder aux mêmes fonctionnalités.
5.  Si c’est le cas,  **le test est validé**.

#### 7.1.2

Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  qui génère ou contrôle un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  respecte-t-il une de ces conditions ? [Test 7.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1.2 "Test 7.1.2")

-   Le  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  est  [correctement restitué](https://accessibilite.numerique.gouv.fr/methode/glossaire/#correctement-restitue-par-les-technologies-d-assistance)  par les technologies d’assistance ;
-   Une  [alternative](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-a-script)  accessible permet d’accéder aux mêmes fonctionnalités.

Méthodologie du test 7.1.2

1.  Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface est correctement restitué par les technologies d’assistance ;
2.  Sinon, vérifier qu’une alternative accessible au composant d’interface permet d’accéder aux mêmes fonctionnalités ;
3.  Si c’est le cas,  **le test est validé**.

#### 7.1.3

Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  qui génère ou contrôle un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  vérifie-t-il ces conditions (hors cas particuliers) ? [Test 7.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.1.3 "Test 7.1.3")

-   Le composant possède un nom pertinent ;
-   Le nom accessible du composant contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   Le composant possède un rôle pertinent.

Méthodologie du test 7.1.3

1.  Pour chacun des composants d’interface ayant validé le test 7.1.1, vérifier que le composant d’interface possède :
    -   Un nom pertinent (intitulé visible) ;
    -   Un rôle pertinent.
2.  Si le composant d’interface possède un nom accessible, vérifier que ce nom est pertinent et contient au moins l’intitulé visible.
3.  Si c’est le cas,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particuliers pour le test 7.1.3 lorsque :

-   La ponctuation et les lettres majuscules sont présentes dans le texte de l’intitulé visible : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
-   Le texte de l’intitulé visible sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

#### Notes techniques

Le critère 7.1 implémente la notion de « compatible avec les technologies d’assistance » telle que définie par les WCAG, ainsi que le recours à WAI-ARIA pour rendre un composant ou une fonctionnalité accessible. Le bon usage de WAI-ARIA est vérifié via les tests 7.1.1, 7.1.2, 7.1.3.

Note importante : dans un environnement HTML5, beaucoup de composants peuvent nécessiter JavaScript pour fonctionner ; en conséquence la fourniture d’une alternative à un composant JavaScript qui ne pourrait pas être rendu accessible devra bénéficier d’une méthode spécifique au composant en cause, permettant de le remplacer par une alternative accessible (et de le réactiver). Cela signifie que la désactivation de JavaScript pour l’ensemble de la page ne sera pas acceptée comme une méthode valable, à moins qu’elle ne remette pas en cause l’utilisation des autres composants.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.5.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name "critère 2.5.3 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G10](https://www.w3.org/WAI/WCAG21/Techniques/general/G10 "G10 - nouvelle fenêtre")
-   [G135](https://www.w3.org/WAI/WCAG21/Techniques/general/G135 "G135 - nouvelle fenêtre")
-   [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136 "G136 - nouvelle fenêtre")
-   [F15](https://www.w3.org/WAI/WCAG21/Techniques/failures/F15 "F15 - nouvelle fenêtre")
-   [F19](https://www.w3.org/WAI/WCAG21/Techniques/failures/F19 "F19 - nouvelle fenêtre")
-   [F20](https://www.w3.org/WAI/WCAG21/Techniques/failures/F20 "F20 - nouvelle fenêtre")
-   [F42](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42 "F42 - nouvelle fenêtre")
-   [F59](https://www.w3.org/WAI/WCAG21/Techniques/failures/F59 "F59 - nouvelle fenêtre")
-   [F79](https://www.w3.org/WAI/WCAG21/Techniques/failures/F79 "F79 - nouvelle fenêtre")
-   [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4 "ARIA4 - nouvelle fenêtre")
-   [ARIA5](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA5 "ARIA5 - nouvelle fenêtre")
-   [ARIA18](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA18 "ARIA18 - nouvelle fenêtre")
-   [ARIA19](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19 "ARIA19 - nouvelle fenêtre")
-   [SCR21](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR21 "SCR21 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.5.3  Label in Name  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 7.2Pour chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  ayant une  [alternative](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-a-script), cette alternative est-elle pertinente ?  [Critère 7.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2 "Critère 7.2")

Tests et références du critère 7.2

#### 7.2.1

Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  débutant par la balise  `<script>`  et ayant une  [alternative](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-a-script)  vérifie-t-il une de ces conditions ? [Test 7.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2.1 "Test 7.2.1")

-   L’[alternative](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-a-script)  entre  `<noscript>`  et  `</noscript>`  permet d’accéder à des contenus et des fonctionnalités similaires ;
-   La page affichée, lorsque JavaScript est désactivé, permet d’accéder à des contenus et des fonctionnalités similaires ;
-   La page alternative permet d’accéder à des contenus et des fonctionnalités similaires ;
-   Le langage de script côté serveur permet d’accéder à des contenus et des fonctionnalités similaires ;
-   L’alternative présente dans la page permet d’accéder à des contenus et des fonctionnalités similaires.

Méthodologie du test 7.2.1

1.  Retrouver les alternatives aux fonctionnalités JavaScript :
2.  Chercher dans la page, les alternatives à un composant ou une fonctionnalité JavaScript mises à disposition.
3.  Désactiver JavaScript dans le document et retrouver les alternatives proposées.
4.  Pour chacune des alternatives proposées, vérifier qu’elle permet d’accéder aux mêmes contenus et à des fonctionnalités similaires.
5.  Si c’est le cas,  **le test est validé**.

#### 7.2.2

Chaque élément non textuel mis à jour par un  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  (dans la page, ou dans un  [cadre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#cadre)) et ayant une  [alternative](https://accessibilite.numerique.gouv.fr/methode/glossaire/#alternative-a-script)  vérifie-t-il ces conditions ? [Test 7.2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.2.2 "Test 7.2.2")

-   L’alternative de l’élément non textuel est mise à jour ;
-   L’alternative mise à jour est pertinente.

Méthodologie du test 7.2.2

1.  Retrouver dans le document tous les éléments non textuels mis à jour par une fonctionnalité JavaScript.
2.  Si l’élément non textuel a une alternative, vérifier que :
    -   L’alternative est mise à jour lorsque le contenu non textuel est mis à jour ;
    -   L’alternative mise à jour est pertinente.
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G136](https://www.w3.org/WAI/WCAG21/Techniques/general/G136 "G136 - nouvelle fenêtre")
-   [F19](https://www.w3.org/WAI/WCAG21/Techniques/failures/F19 "F19 - nouvelle fenêtre")
-   [F20](https://www.w3.org/WAI/WCAG21/Techniques/failures/F20 "F20 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 7.3Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  est-il  [contrôlable par le clavier et par tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage)  (hors cas particuliers) ?  [Critère 7.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.3 "Critère 7.3")

Tests et références du critère 7.3

#### 7.3.1

Chaque élément possédant un gestionnaire d’événement contrôlé par un script vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 7.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.3.1 "Test 7.3.1")

-   L’élément est  [accessible par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage) ;
-   Un élément  [accessible par le clavier et tout dispositif de pointage](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accessible-et-activable-par-le-clavier-et-tout-dispositif-de-pointage)  permettant de réaliser la même action est présent dans la page.

Méthodologie du test 7.3.1

1.  Retrouver dans le document, tous les éléments sur lesquels est implémenté un gestionnaire d’événements JavaScript (par exemple click, focus, mouseover, blur, keydown, touch…).
2.  Vérifier que l’élément est accessible au moyen du clavier :
    -   Il est atteignable avec la touche de tabulation (tab) ;
    -   Si l’élément gère une action simple, il est activable au clavier avec la touche entrée (Entrée) ;
    -   Si l’élément gère une action complexe, il est utilisable avec le clavier (généralement avec les touches de direction).
3.  Sinon, vérifier qu’un élément accessible par le clavier permettant de réaliser la même action est présent dans la page.
4.  Vérifier que l’élément est accessible par tout dispositif de pointage (souris, toucher, stylet…).
5.  Sinon, vérifier qu’un élément accessible au moyen d’un dispositif de pointage et permettant de réaliser la même action est présent dans la page.
6.  Si c’est le cas,  **le test est validé**.

#### 7.3.2

Un  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  ne doit pas supprimer le focus d’un élément qui le reçoit. Cette règle est-elle respectée (hors cas particuliers) ? [Test 7.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.3.2 "Test 7.3.2")

Méthodologie du test 7.3.2

1.  Activer, l’un après l’autre, tous les éléments capables de recevoir le focus.
2.  Vérifier que le focus n’est pas supprimé via une fonctionnalité JavaScript.
3.  Si c’est le cas,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particuliers lorsque la fonctionnalité dépend de l’utilisation d’un gestionnaire d’événement sans équivalent universel ; par exemple, une application de dessin à main levée ne pourra pas être rendue contrôlable au clavier. Dans ces situations, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [2.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard "critère 2.1.1 (A) - nouvelle fenêtre")
-   [2.4.7 (AA)](https://www.w3.org/Translations/WCAG21-fr/#focus-visible "critère 2.4.7 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G90](https://www.w3.org/WAI/WCAG21/Techniques/general/G90 "G90 - nouvelle fenêtre")
-   [G202](https://www.w3.org/WAI/WCAG21/Techniques/general/G202 "G202 - nouvelle fenêtre")
-   [F42](https://www.w3.org/WAI/WCAG21/Techniques/failures/F42 "F42 - nouvelle fenêtre")
-   [F54](https://www.w3.org/WAI/WCAG21/Techniques/failures/F54 "F54 - nouvelle fenêtre")
-   [F55](https://www.w3.org/WAI/WCAG21/Techniques/failures/F55 "F55 - nouvelle fenêtre")
-   [SCR2](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR2 "SCR2 - nouvelle fenêtre")
-   [SCR20](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR20 "SCR20 - nouvelle fenêtre")
-   [SCR29](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR29 "SCR29 - nouvelle fenêtre")
-   [SCR35](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR35 "SCR35 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.2.1.1  Keyboard  (A)
-   9.2.4.7  Focus Visible  (AA)

### 7.4Pour chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  qui initie un  [changement de contexte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-de-contexte), l’utilisateur est-il averti ou en a-t-il le contrôle ?  [Critère 7.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4 "Critère 7.4")

Tests et références du critère 7.4

#### 7.4.1

Chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  qui initie un  [changement de contexte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-de-contexte)  vérifie-t-il une de ces conditions ? [Test 7.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.4.1 "Test 7.4.1")

-   L’utilisateur est averti par un texte de l’action du script et du type de changement avant son déclenchement ;
-   Le changement de contexte est initié par un bouton (input de type  `submit`,  `button`  ou  `image`  ou balise  `<button>`) explicite ;
-   Le changement de contexte est initié par un lien explicite.

Méthodologie du test 7.4.1

1.  Retrouver dans le document tous les événements JavaScript qui initient un changement de contexte, par exemple :
    -   Une mise à jour dynamique de champs de formulaire ;
    -   L’ouverture d’une nouvelle page à l’activation d’une option d’une liste de sélection (élément  `<select>`) ;
    -   La mise à jour, via un procédé AJAX d’une partie essentielle de la page ;
    -   Le lancement automatique d’un lecteur vidéo suite à la sélection d’une playlist ;
    -   La manipulation du focus ayant pour résultat de modifier la position courante de l’utilisateur dans la page.
2.  Vérifier que :
    -   L’utilisateur est averti par un message de l’action du script et du type de changement avant son déclenchement ;
    -   Ou bien le changement de contexte est initié par un bouton (input de type submit, button ou image ou la balise button) explicite ;
    -   Ou bien le changement de contexte est initié par un lien explicite.
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.2.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#on-focus "critère 3.2.1 (A) - nouvelle fenêtre")
-   [3.2.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#on-input "critère 3.2.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G13](https://www.w3.org/WAI/WCAG21/Techniques/general/G13 "G13 - nouvelle fenêtre")
-   [G76](https://www.w3.org/WAI/WCAG21/Techniques/general/G76 "G76 - nouvelle fenêtre")
-   [G80](https://www.w3.org/WAI/WCAG21/Techniques/general/G80 "G80 - nouvelle fenêtre")
-   [G107](https://www.w3.org/WAI/WCAG21/Techniques/general/G107 "G107 - nouvelle fenêtre")
-   [H32](https://www.w3.org/WAI/WCAG21/Techniques/html/H32 "H32 - nouvelle fenêtre")
-   [H84](https://www.w3.org/WAI/WCAG21/Techniques/html/H84 "H84 - nouvelle fenêtre")
-   [F9](https://www.w3.org/WAI/WCAG21/Techniques/failures/F9 "F9 - nouvelle fenêtre")
-   [F22](https://www.w3.org/WAI/WCAG21/Techniques/failures/F22 "F22 - nouvelle fenêtre")
-   [F36](https://www.w3.org/WAI/WCAG21/Techniques/failures/F36 "F36 - nouvelle fenêtre")
-   [F37](https://www.w3.org/WAI/WCAG21/Techniques/failures/F37 "F37 - nouvelle fenêtre")
-   [F41](https://www.w3.org/WAI/WCAG21/Techniques/failures/F41 "F41 - nouvelle fenêtre")
-   [SCR19](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR19 "SCR19 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.2.1  On Focus  (A)
-   9.3.2.2  On Input  (A)

### 7.5Dans chaque page web, les  [messages de statut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#message-de-statut)  sont-ils correctement restitués par les technologies d’assistance ?  [Critère 7.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5 "Critère 7.5")

Tests et références du critère 7.5

#### 7.5.1

Chaque  [message de statut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#message-de-statut)  qui informe de la réussite, du résultat d’une action ou bien de l’état d’une application utilise-t-il l’attribut WAI-ARIA  `role="status"` ? [Test 7.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5.1 "Test 7.5.1")

Méthodologie du test 7.5.1

1.  Retrouver dans le document les messages qui valent pour message de statut.
2.  Pour chacun de ces messages, déterminer la nature de l’information dont est porteur le message :
3.  Si le message informe de la réussite, du résultat d’une action ou bien de l’état d’une application, vérifier que l’élément qui contient le message :
    -   Soit utilise l’attribut WAI-ARIA  `role=”status”` ;
    -   Soit utilise les attributs WAI-ARIA  `aria-live=”polite”`  et  `aria-atomic=”true”`.
4.  Si le message présente une suggestion, ou avertit de l’existence d’une erreur, vérifier que l’élément qui contient le message :
    -   Soit utilise l’attribut WAI-ARIA  `role=”alert”` ;
    -   Soit utilise les attributs  `aria-live=”assertive”`  et  `aria-atomic=”true”`.
5.  Si le message indique la progression d’un processus, vérifier que l’élément qui contient le message :
    -   Soit utilise l’un des attributs WAI-ARIA  `role=”log”`,  `role=”progressbar”`  ou  `role=”status”` ;
    -   Soit utilise l’attribut WAI-ARIA  `aria-live=”polite”`  si l’intention est de signaler l’équivalent d’un  `rôle “log”` ;
    -   Soit utilise les attributs WAI-ARIA  `aria-live=”polite”`  et aria-atomic=”true si l’intention est de signaler l’équivalent d’un rôle “status”.
6.  Si c’est le cas,  **le test est validé**.

#### 7.5.2

Chaque  [message de statut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#message-de-statut)  qui présente une suggestion, ou avertit de l’existence d’une erreur utilise-t-il l’attribut WAI-ARIA  `role="alert"` ? [Test 7.5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5.2 "Test 7.5.2")

Méthodologie du test 7.5.2

Tests identiques à 7.5.1

#### 7.5.3

Chaque  [message de statut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#message-de-statut)  qui indique la progression d’un processus utilise-t-il l’un des attributs WAI-ARIA  `role="log"`,  `role="progressbar"`  ou  `role="status"` ? [Test 7.5.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#7.5.3 "Test 7.5.3")

Méthodologie du test 7.5.3

Tests identiques à 7.5.1

#### Notes techniques

Les rôles WAI-ARIA  `log`,  `status`  et  `alert`  ont implicitement une valeur d’attribut WAI-ARIA  `aria-live`  et  `aria-atomic`. On pourra donc considérer (conformément à la spécification WAI-ARIA 1.1) que :

-   Un attribut WAI-ARIA  `aria-live="polite"`  associé à un message de statut peut valoir pour un rôle WAI-ARIA  `log` ;
-   Un attribut WAI-ARIA  `aria-live="polite"`  et un attribut WAI-ARIA  `aria-atomic="true"`  associés à un message de statut peuvent valoir pour un rôle WAI-ARIA  `status` ;
-   Un attribut WAI-ARIA  `aria-live="assertive"`  et un attribut WAI-ARIA  `aria-atomic="true"`  associés à un message de statut peuvent valoir pour un rôle WAI-ARIA  `alert`.

C’est sous réserve que la nature du message de statut satisfasse bien à la correspondance implicitement établie. Dans le cas d’un message de statut indiquant la progression d’un processus et matérialisé graphiquement par une barre de progression, un rôle WAI-ARIA  `progressbar`  explicite est nécessaire.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [4.1.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#status-messages "critère 4.1.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [ARIA19](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA19 "ARIA19 - nouvelle fenêtre")
-   [ARIA22](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA22 "ARIA22 - nouvelle fenêtre")
-   [ARIA23](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA23 "ARIA23 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.4.1.3  Status Messages  (AA)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 8. Éléments obligatoires [Thématique Éléments obligatoires](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8 "Thématique Éléments obligatoires")

### 8.1Chaque page web est-elle définie par un  [type de document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#type-de-document) ?  [Critère 8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1 "Critère 8.1")

Tests et références du critère 8.1

#### 8.1.1

Pour chaque page web, le  [type de document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#type-de-document)  (balise  `doctype`) est-il présent ? [Test 8.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1.1 "Test 8.1.1")

Méthodologie du test 8.1.1

1.  Retrouver dans le document la balise DOCTYPE (par exemple  `<!DOCTYPE html>`) ;
2.  Vérifier que :
    -   La balise DOCTYPE est placée avant la balise  `<html>` ;
    -   Le type de document est valide.
3.  Si c’est le cas,  **le test est validé**.

#### 8.1.2

Pour chaque page web, le  [type de document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#type-de-document)  (balise  `doctype`) est-il valide ? [Test 8.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1.2 "Test 8.1.2")

Méthodologie du test 8.1.2

Tests identiques à 8.1.1

#### 8.1.3

Pour chaque page web possédant une déclaration de  [type de document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#type-de-document), celle-ci est-elle située avant la balise  `<html>`  dans le code source ? [Test 8.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.1.3 "Test 8.1.3")

Méthodologie du test 8.1.3

Tests identiques à 8.1.1

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [4.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#parsing "critère 4.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G134](https://www.w3.org/WAI/WCAG21/Techniques/general/G134 "G134 - nouvelle fenêtre")
-   [G192](https://www.w3.org/WAI/WCAG21/Techniques/general/G192 "G192 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.4.1.1  Parsing  (A)

### 8.2Pour chaque page web, le code source généré est-il valide selon le  [type de document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#type-de-document)  spécifié ?  [Critère 8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.2 "Critère 8.2")

Tests et références du critère 8.2

#### 8.2.1

Pour chaque déclaration de  [type de document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#type-de-document), le code source généré de la page vérifie-t-il ces conditions ? [Test 8.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.2.1 "Test 8.2.1")

-   Les balises, attributs et valeurs d’attributs respectent les  [règles d’écriture](https://accessibilite.numerique.gouv.fr/methode/glossaire/#regles-d-ecriture) ;
-   L’imbrication des balises est conforme ;
-   L’ouverture et la fermeture des balises sont conformes ;
-   Les valeurs d’attribut id sont uniques dans la page ;
-   Les attributs ne sont pas doublés sur un même élément.

Méthodologie du test 8.2.1

1.  Dans le menu « Check », activer l’option « W3C Nu markup checker (all frames) ».
2.  Dans la page de résultats, vérifier que :
    -   Les balises, attributs et valeurs d’attributs respectent les règles d’écriture ;
    -   L’imbrication des balises est conforme ;
    -   L’ouverture et la fermeture des balises sont conformes ;
    -   Les valeurs d’attribut id sont uniques dans la page ;
    -   Les attributs ne sont pas doublés sur un même élément.
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [4.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#parsing "critère 4.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H74](https://www.w3.org/WAI/WCAG21/Techniques/html/H74 "H74 - nouvelle fenêtre")
-   [H93](https://www.w3.org/WAI/WCAG21/Techniques/html/H93 "H93 - nouvelle fenêtre")
-   [H94](https://www.w3.org/WAI/WCAG21/Techniques/html/H94 "H94 - nouvelle fenêtre")
-   [F70](https://www.w3.org/WAI/WCAG21/Techniques/failures/F70 "F70 - nouvelle fenêtre")
-   [F77](https://www.w3.org/WAI/WCAG21/Techniques/failures/F77 "F77 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.4.1.1  Parsing  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 8.3Dans chaque page web, la  [langue par défaut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#langue-par-defaut)  est-elle présente ?  [Critère 8.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.3 "Critère 8.3")

Tests et références du critère 8.3

#### 8.3.1

Pour chaque page web, l’indication de langue par défaut vérifie-t-elle une de ces conditions ? [Test 8.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.3.1 "Test 8.3.1")

-   L’indication de la langue de la page (attribut  `lang`  et/ou  `xml:lang`) est donnée pour l’élément  `html` ;
-   L’indication de la langue de la page (attribut  `lang`  et/ou  `xml:lang`) est donnée sur chaque élément de texte ou sur l’un des éléments parents.

Méthodologie du test 8.3.1

1.  Retrouver dans le document l’indication de langue par défaut ;
2.  Vérifier la présence d’une indication de langue :
    -   Soit au moyen de l’attribut lang sur la balise html si le code est du HTML5 ou du HTML4 ;
    -   Soit au moyen des attributs lang et xml:lang sur la balise html si le code est du XHTML 1.0 ;
    -   Soit au moyen de l’attribut xml:lang sur la balise html si le code est du XHTML 1.1 ;
    -   Sinon, vérifier la présence d’une indication de langue sur chaque élément de texte ou l’un de ses parents.
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#language-of-page "critère 3.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H57](https://www.w3.org/WAI/WCAG21/Techniques/html/H57 "H57 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.1.1  Language of Page  (A)

### 8.4Pour chaque page web ayant une  [langue par défaut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#langue-par-defaut), le  [code de langue](https://accessibilite.numerique.gouv.fr/methode/glossaire/#code-de-langue)  est-il pertinent ?  [Critère 8.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.4 "Critère 8.4")

Tests et références du critère 8.4

#### 8.4.1

Pour chaque page web ayant une langue par défaut, le code de langue vérifie-t-il ces conditions ? [Test 8.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.4.1 "Test 8.4.1")

-   Le code de langue est valide ;
-   Le code de langue est pertinent.

Méthodologie du test 8.4.1

1.  Retrouver dans le document l’indication de langue par défaut ;
2.  Vérifier la présence d’un code de langue :
    -   Valide (conforme à la norme ISO 639-1 ou ISO 639-2 et suivantes) ;
    -   Et pertinent (qui indique la langue principale du document).
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#language-of-page "critère 3.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H57](https://www.w3.org/WAI/WCAG21/Techniques/html/H57 "H57 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.1.1  Language of Page  (A)

### 8.5Chaque page web a-t-elle un  [titre de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre-de-page) ?  [Critère 8.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.5 "Critère 8.5")

Tests et références du critère 8.5

#### 8.5.1

Chaque page web a-t-elle un  [titre de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre-de-page)  (balise  `<title>`) ? [Test 8.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.5.1 "Test 8.5.1")

Méthodologie du test 8.5.1

Test 8.5.1

1.  Retrouver dans le document le titre structuré au moyen d’un élément  `<title>` ;
2.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#page-titled "critère 2.4.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G88](https://www.w3.org/WAI/WCAG21/Techniques/general/G88 "G88 - nouvelle fenêtre")
-   [G127](https://www.w3.org/WAI/WCAG21/Techniques/general/G127 "G127 - nouvelle fenêtre")
-   [H25](https://www.w3.org/WAI/WCAG21/Techniques/html/H25 "H25 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.2  Page Titled  (A)

### 8.6Pour chaque page web ayant un  [titre de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre-de-page), ce titre est-il pertinent ?  [Critère 8.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.6 "Critère 8.6")

Tests et références du critère 8.6

#### 8.6.1

Pour chaque page web ayant un  [titre de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre-de-page)  (balise  `<title>`), le contenu de cette balise est-il pertinent ? [Test 8.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.6.1 "Test 8.6.1")

Méthodologie du test 8.6.1

1.  Retrouver dans le document le titre structuré au moyen d’un élément  `<title>` ;
2.  Vérifier si le contenu de l’élément  `<title>`  est suffisamment pertinent (il permet de retrouver la page dans l’historique de navigation ou la liste des onglets).
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#page-titled "critère 2.4.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G88](https://www.w3.org/WAI/WCAG21/Techniques/general/G88 "G88 - nouvelle fenêtre")
-   [G127](https://www.w3.org/WAI/WCAG21/Techniques/general/G127 "G127 - nouvelle fenêtre")
-   [H25](https://www.w3.org/WAI/WCAG21/Techniques/html/H25 "H25 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.2  Page Titled  (A)

### 8.7Dans chaque page web, chaque  [changement de langue](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-de-langue)  est-il indiqué dans le code source (hors cas particuliers) ?  [Critère 8.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.7 "Critère 8.7")

Tests et références du critère 8.7

#### 8.7.1

Dans chaque page web, chaque texte écrit dans une langue différente de la  [langue par défaut](https://accessibilite.numerique.gouv.fr/methode/glossaire/#langue-par-defaut)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 8.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.7.1 "Test 8.7.1")

-   L’indication de langue est donnée sur l’élément contenant le texte (attribut  `lang`  et/ou  `xml:lang`) ;
-   L’indication de langue est donnée sur un des éléments parents (attribut  `lang`  et/ou  `xml:lang`)

Méthodologie du test 8.7.1

1.  Retrouver les passages de texte en langue étrangère, à l’exception :
    -   Des noms propres ;
    -   Des mots d’origine étrangère, présents dans le dictionnaire de la langue du document ;
    -   Des mots d’origine étrangère et d’usage courant dont la prononciation ne provoque pas d’incompréhension.
    -   Vérifier que chaque passage de texte retenu possède une indication de langue (attribut  `lang`  et/ou  `xml:lang`  sur l’élément lui-même ou l’un de ses parents).
2.  Si c’est le cas,  **le test est validé**.

#### Cas particuliers

Il y a une gestion de cas particuliers sur le changement de langue pour les cas suivants :

-   Nom propre, le critère est non applicable ;
-   Nom commun de langue étrangère présent dans le dictionnaire officiel de la langue (voir note 1 ci-dessous) par défaut de la page web, le critère est non applicable ;
-   Le terme de langue étrangère soumis, via un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  et rappelé dans la page (par exemple comme indication du terme recherché dans le cas d’un moteur de recherche), le critère est non applicable ;
-   Passage de texte dont la langue ne peut pas être déterminée : le critère est non applicable ;
-   Terme ou passage de texte issus d’une langue morte ou imaginaire pour laquelle il n’existe pas d’interprétation vocale : le critère est non applicable.

Note 1 : le dictionnaire officiel est celui recommandé par l’académie en charge de la langue en question. Pour la France, par exemple, le lien vers le dictionnaire officiel se trouve sur le site de l’Académie française à l’adresse suivante : http://www.academie-francaise.fr/le-dictionnaire/la-9e-edition. Pour toute demande auprès du service du dictionnaire de l’Académie française, utiliser le formulaire de contact du service du dictionnaire.

Note 2 : pour les noms communs de langue étrangère, absents dans le dictionnaire officiel de la langue par défaut de la page web, et qui sont passés dans le langage commun (exemple : newsletter) : le critère est applicable, uniquement lorsque l’absence d’indication de langue peut provoquer une incompréhension pour la restitution.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.1.2 (AA)](https://www.w3.org/Translations/WCAG21-fr/#language-of-parts "critère 3.1.2 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H58](https://www.w3.org/WAI/WCAG21/Techniques/html/H58 "H58 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.1.2  Language of Parts  (AA)

### 8.8Dans chaque page web, le code de langue de chaque  [changement de langue](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-de-langue)  est-il valide et pertinent ?  [Critère 8.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.8 "Critère 8.8")

Tests et références du critère 8.8

#### 8.8.1

Pour chaque page web, le code de langue de chaque  [changement de langue](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-de-langue)  vérifie-t-il ces conditions ? [Test 8.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.8.1 "Test 8.8.1")

-   Le code de langue est valide ;
-   Le code de langue est pertinent.

Méthodologie du test 8.8.1

1.  Pour chaque passage de texte validé au test 8.7.1, vérifier que :
    -   L’indication de langue est valide ;
    -   L’indication de langue est pertinente.
2.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.1.2 (AA)](https://www.w3.org/Translations/WCAG21-fr/#language-of-parts "critère 3.1.2 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H58](https://www.w3.org/WAI/WCAG21/Techniques/html/H58 "H58 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.1.2  Language of Parts  (AA)

### 8.9Dans chaque page web, les balises ne doivent pas être utilisées  [uniquement à des fins de présentation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ?  [Critère 8.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.9 "Critère 8.9")

Tests et références du critère 8.9

#### 8.9.1

Dans chaque page web les balises (à l’exception de  `<div>`,  `<span>`  et  `<table>`) ne doivent pas être utilisées  [uniquement à des fins de présentation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#uniquement-a-des-fins-de-presentation). Cette règle est-elle respectée ? [Test 8.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.9.1 "Test 8.9.1")

Méthodologie du test 8.9.1

1.  Retrouver dans le document l’ensemble des éléments sémantiques utilisés à des fins de présentation ;
2.  Pour chacun de ces éléments, vérifier que :
    -   L’élément est pourvu d’un attribut  `role=“presentation”` ;
    -   L’utilisation de cet élément à des fins de présentation reste justifée.
3.  Si c’est le cas,  **le test est validé**.

Note : Quelques exemples, non exhaustifs de détournement de balisage : un élément  `<div>`  utilisé comme paragraphe, un titre utilisé comme légende, un élément  `<blockquote>`  ou des paragraphes vides ou encore des espaces utilisés pour créer des effets de marges. L’utilisation d’un  `role=“presentation”`  est formellement déconseillée, mais peut toutefois se justifier dans de rares cas. Cela peut être acceptable sur un élément  `<blockquote>`  ou un paragraphe vide, mais sera considéré comme non-conforme sur un titre.

Le cas des tableaux : à noter que ce test aborde les tableaux de présentation qui ne devraient finalement pas apparaître au sein de la thématique Tableaux.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115 "G115 - nouvelle fenêtre")
-   [H88](https://www.w3.org/WAI/WCAG21/Techniques/html/H88 "H88 - nouvelle fenêtre")
-   [F43](https://www.w3.org/WAI/WCAG21/Techniques/failures/F43 "F43 - nouvelle fenêtre")
-   [F92](https://www.w3.org/WAI/WCAG21/Techniques/failures/F92 "F92 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 8.10Dans chaque page web, les changements du  [sens de lecture](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sens-de-lecture)  sont-ils signalés ?  [Critère 8.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.10 "Critère 8.10")

Tests et références du critère 8.10

#### 8.10.1

Dans chaque page web, chaque texte dont le sens de lecture est différent du  [sens de lecture](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sens-de-lecture)  par défaut est contenu dans une balise possédant un attribut  `dir` ? [Test 8.10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.10.1 "Test 8.10.1")

Méthodologie du test 8.10.1

1.  Retrouver dans le document les passages de textes qui utilisent une langue qui se lit dans le sens inverse de la langue du document (comme l’arabe ou l’hébreu pour le français par exemple).
2.  Pour chaque passage de texte, vérifier que le passage de texte est contenu dans une balise qui possède un attribut  `dir`.
3.  Si c’est le cas pour chaque passage de texte,  **le test est validé**.

#### 8.10.2

Dans chaque page web, chaque changement du  [sens de lecture](https://accessibilite.numerique.gouv.fr/methode/glossaire/#sens-de-lecture)  (attribut  `dir`) vérifie-t-il ces conditions ? [Test 8.10.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#8.10.2 "Test 8.10.2")

-   La valeur de l’attribut  `dir`  est conforme (`rtl`  ou  `ltr`) ;
-   La valeur de l’attribut  `dir`  est pertinente.

Méthodologie du test 8.10.2

1.  Pour chaque passage de texte validé au test 8.10.1, vérifier que :
    -   L’indication de sens de lecture est conforme (ltr, pour le sens « de gauche à droite » et rtl pour le sens « de droite à gauche ») ;
    -   L’indication de sens de lecture est pertinente.
2.  Si c’est le cas pour chaque passage de texte,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H56](https://www.w3.org/WAI/WCAG21/Techniques/html/H56 "H56 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.2  Meaningful Sequence  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 9. Structuration de l’information [Thématique Structuration de l’information](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9 "Thématique Structuration de l’information")

### 9.1Dans chaque page web, l’information est-elle structurée par l’utilisation appropriée de  [titres](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre) ?  [Critère 9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1 "Critère 9.1")

Tests et références du critère 9.1

#### 9.1.1

Dans chaque page web, la hiérarchie entre les  [titres](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre)  (balise  `<hx>`  ou balise possédant un attribut WAI-ARIA  `role="heading"`  associé à un attribut WAI-ARIA  `aria-level`) est-elle pertinente ? [Test 9.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1.1 "Test 9.1.1")

Méthodologie du test 9.1.1

1.  Retrouver dans le document les titres (balise  `<hx>`  ou balise possédant un attribut WAI-ARIA  `role="heading"`  associé à un attribut WAI-ARIA  `aria-level`) ;
2.  Vérifier que la hiérarchie entre les titres est pertinente ;
3.  Si c’est le cas,  **le test est validé**.

#### 9.1.2

Dans chaque page web, le contenu de chaque  [titre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre)  (balise  `<hx>`  ou balise possédant un attribut WAI-ARIA  `role="heading"`  associé à un attribut WAI-ARIA  `aria-level`) est-il pertinent ? [Test 9.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1.2 "Test 9.1.2")

Méthodologie du test 9.1.2

1.  Pour chaque titre identifié au test 9.1.1, vérifier que son contenu est pertinent ;
2.  Si c’est le cas pour chaque titre,  **le test est validé**.

#### 9.1.3

Dans chaque page web, chaque passage de texte constituant un  [titre](https://accessibilite.numerique.gouv.fr/methode/glossaire/#titre)  est-il structuré à l’aide d’une balise  `<hx>`  ou d’une balise possédant un attribut WAI-ARIA  `role="heading"`  associé à un attribut WAI-ARIA  `aria-level` ? [Test 9.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.1.3 "Test 9.1.3")

Méthodologie du test 9.1.3

1.  Pour chaque titre identifié au test 9.1.1, vérifier que :
    -   Soit il est structuré au moyen d’une balise  `<hx>`  (“x” désignant une valeur numérique comprise entre 1 et 6);
    -   Soit il est structuré au moyen d’une balise possédant un attribut WAI-ARIA  `role="heading"`  et un attribut WAI-ARIA  `aria-level=x`  (“x” désignant une valeur numérique).
2.  Si c’est le cas pour chaque titre,  **le test est validé**.

#### Notes techniques

WAI-ARIA permet de définir des titres via le rôle  `heading`  et l’attribut  `aria-level`  (indication du niveau de titre). Bien qu’il soit préférable d’utiliser l’élément de titre natif en HTML  `<hx>`, l’utilisation du rôle WAI-ARIA  `heading`  est compatible avec l’accessibilité.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [2.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks "critère 2.4.1 (A) - nouvelle fenêtre")
-   [2.4.6 (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels "critère 2.4.6 (AA) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115 "G115 - nouvelle fenêtre")
-   [G130](https://www.w3.org/WAI/WCAG21/Techniques/general/G130 "G130 - nouvelle fenêtre")
-   [H42](https://www.w3.org/WAI/WCAG21/Techniques/html/H42 "H42 - nouvelle fenêtre")
-   [G141](https://www.w3.org/WAI/WCAG21/Techniques/general/G141 "G141 - nouvelle fenêtre")
-   [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4 "ARIA4 - nouvelle fenêtre")
-   [ARIA12](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA12 "ARIA12 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.2.4.1  Bypass Blocks  (A)
-   9.2.4.6  Headings and Labels  (AA)
-   9.4.1.2  Name, Role, Value  (A)

### 9.2Dans chaque page web, la  [structure du document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#structure-du-document)  est-elle cohérente (hors cas particuliers) ?  [Critère 9.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.2 "Critère 9.2")

Tests et références du critère 9.2

#### 9.2.1

Dans chaque page web, la  [structure du document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#structure-du-document)  vérifie-t-elle ces conditions (hors cas particuliers) ? [Test 9.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.2.1 "Test 9.2.1")

-   La  [zone d’en-tête de la page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-d-en-tete)  est structurée via une balise  `<header>` ;
-   Les  [zones de navigation principales et secondaires](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  sont structurées via une balise  `<nav>` ;
-   La balise  `<nav>`  est réservée à la structuration des  [zones de navigation principales et secondaires](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation) ;
-   La  [zone de contenu principal](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-contenu-principal)  est structurée via une balise  `<main>` ;
-   La  [structure du document](https://accessibilite.numerique.gouv.fr/methode/glossaire/#structure-du-document)  utilise une balise  `<main>`  visible unique ;
-   La  [zone de pied de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-pied-de-page)  est structurée via une balise  `<footer>`.

Méthodologie du test 9.2.1

1.  Vérifier que la zone d’en-tête est structurée au moyen d’un élément  `<header>` ;
2.  Vérifier que les zones de navigation principales et secondaires sont structurées au moyen d’un élément  `<nav>` ;
3.  Vérifier que l’élément  `<nav>`  n’est pas utilisé en dehors de la structuration des zones de navigation principales et secondaires ;
4.  Vérifier que la zone de contenu principal est structurée au moyen d’un élément  `<main>` ;
5.  Si le document possède plusieurs éléments  `<main>`, vérifier qu’un seul de ces éléments est visible (les autres occurrences de l’élément sont pourvues d’un attribut  `hidden`) ;
6.  Vérifier que la zone de pied de page est structurée au moyen d’un élément  `<footer>`.
7.  Si c’est le cas pour chaque zone de contenu,  **le test est validé**.

#### Cas particuliers

Lorsque le doctype déclaré dans la page n’est pas le doctype HTML5, ce critère est non applicable.

#### Notes techniques

La balise  `<main>`  peut être utilisée plusieurs fois dans le même document HTML. Néanmoins, il ne peut y avoir en permanence qu’une seule balise visible et lisible par les technologies d’assistances, les autres devant disposer d’un attribut  `hidden`  ou d’un style permettant de les masquer aux technologies d’assistances. À noter cependant que l’utilisation d’un style seul restera insuffisante pour assurer l’unicité d’une balise  `<main>`  visible en cas de désactivation des feuilles de styles.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115 "G115 - nouvelle fenêtre")
-   [ARIA11](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11 "ARIA11 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 9.3Dans chaque page web, chaque  [liste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#listes)  est-elle correctement structurée ?  [Critère 9.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3 "Critère 9.3")

Tests et références du critère 9.3

#### 9.3.1

Dans chaque page web, les informations regroupées visuellement sous forme de  [liste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#listes)  non ordonnée vérifient-elles une de ces conditions ? [Test 9.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3.1 "Test 9.3.1")

-   La liste utilise les balises HTML  `<ul>`  et  `<li>` ;
-   La liste utilise les attributs WAI-ARIA  `role="list"`  et  `role="listitem"`.

Méthodologie du test 9.3.1

1.  Retrouver dans le document les éléments regroupés visuellement sous la forme d’une liste non ordonnée ;
2.  Pour chaque liste, vérifier que la liste est structurée :
    -   Soit au moyen des éléments  `<ul>`  et  `<li>` ;
    -   Soit au moyen d’éléments pourvus d’attributs WAI-ARIA  `role="list"`  et  `role="listitem"`.
3.  Si c’est le cas pour chaque liste non ordonnée,  **le test est validé**.

#### 9.3.2

Dans chaque page web, les informations regroupées visuellement sous forme de  [liste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#listes)  ordonnée vérifient-elles une de ces conditions ? [Test 9.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3.2 "Test 9.3.2")

-   La liste utilise les balises HTML  `<ol>`  et  `<li>` ;
-   La liste utilise les attributs WAI-ARIA  `role="list"`  et  `role="listitem"`.

Méthodologie du test 9.3.2

1.  Retrouver dans le document les éléments regroupés visuellement sous la forme d’une liste ordonnée ;
2.  Pour chaque liste, vérifier que la liste est structurée :
    -   Soit au moyen des éléments  `<ol>`  et  `<li>` ;
    -   Soit au moyen d’éléments pourvus d’attributs WAI-ARIA  `role="list"`  et  `role="listitem"`.
3.  Si c’est le cas pour chaque liste ordonnée,  **le test est validé**.

#### 9.3.3

Dans chaque page web, les informations regroupées sous forme de  [liste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#listes)  de description utilisent-elles les balises  `<dl>`  et  `<dt>/<dd>` ? [Test 9.3.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.3.3 "Test 9.3.3")

Méthodologie du test 9.3.3

1.  Retrouver dans le document les éléments regroupés visuellement sous la forme d’une liste de description ;
2.  Pour chaque liste, vérifier que la liste est structurée au moyen des éléments  `<dl>`,  `<dt>`  et  `<dd>` ;
3.  Si c’est le cas pour chaque liste de description,  **le test est validé**.

#### Notes techniques

Les attributs WAI-ARIA  `role="list"`  et  `role="listitem"`  peuvent nécessiter l’utilisation des attributs WAI-ARIA  `aria-setsize`  et  `aria-posinset`  dans le cas où l’ensemble de la liste n’est pas disponible via le DOM généré au moment de la consultation.

Les attributs WAI-ARIA  `role="tree"`,  `role="tablist"`,  `role="menu"`,  `role="combobox"`  et  `role="listbox"`  ne sont pas équivalents à une liste HTML  `<ul>`  ou  `<ol>`.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115 "G115 - nouvelle fenêtre")
-   [G153](https://www.w3.org/WAI/WCAG21/Techniques/general/G153 "G153 - nouvelle fenêtre")
-   [H40](https://www.w3.org/WAI/WCAG21/Techniques/html/H40 "H40 - nouvelle fenêtre")
-   [H48](https://www.w3.org/WAI/WCAG21/Techniques/html/H48 "H48 - nouvelle fenêtre")
-   [F2](https://www.w3.org/WAI/WCAG21/Techniques/failures/F2 "F2 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 9.4Dans chaque page web, chaque citation est-elle correctement indiquée ?  [Critère 9.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4 "Critère 9.4")

Tests et références du critère 9.4

#### 9.4.1

Dans chaque page web, chaque citation courte utilise-t-elle une balise  `<q>` ? [Test 9.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4.1 "Test 9.4.1")

Méthodologie du test 9.4.1

1.  Retrouver dans le document les citations courtes (ou en ligne) ;
2.  Pour chaque citation, vérifier que la citation est structurée au moyen d’un élément  `<q>` ;
3.  Si c’est le cas pour chaque citation courte,  **le test est validé**.

#### 9.4.2

Dans chaque page web, chaque bloc de citation utilise-t-il une balise  `<blockquote>` ? [Test 9.4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#9.4.2 "Test 9.4.2")

Méthodologie du test 9.4.2

1.  Retrouver dans le document les blocs de citation ;
2.  Pour chaque bloc de citation, vérifier que le bloc de citation est structuré au moyen d’un élément  `<blockquote>` ;
3.  Si c’est le cas pour chaque bloc de citation,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115 "G115 - nouvelle fenêtre")
-   [H49](https://www.w3.org/WAI/WCAG21/Techniques/html/H49 "H49 - nouvelle fenêtre")
-   [F2](https://www.w3.org/WAI/WCAG21/Techniques/failures/F2 "F2 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 10. Présentation de l’information [Thématique Présentation de l’information](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10 "Thématique Présentation de l’information")

### 10.1Dans le site web, des  [feuilles de styles](https://accessibilite.numerique.gouv.fr/methode/glossaire/#feuille-de-style)  sont-elles utilisées pour contrôler la  [présentation de l’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#presentation-de-l-information) ?  [Critère 10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.1 "Critère 10.1")

Tests et références du critère 10.1

#### 10.1.1

Dans chaque page web, les balises servant à la  [présentation de l’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#presentation-de-l-information)  ne doivent pas être présentes dans le code source généré des pages. Cette règle est-elle respectée ? [Test 10.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.1.1 "Test 10.1.1")

Méthodologie du test 10.1.1

1.  Vérifier l’absence des éléments de présentation  `<basefont>`,  `<big>`,  `<blink>`,  `<center>`,  `<font>`,  `<marquee>`,  `<s>`,  `<strike>`,  `<tt>`  ;
2.  Vérifier l’absence de l’élément  `<u>`  uniquement si le DOCTYPE du document ne correspond pas à HTML 5 ;
3.  Si c’est le cas,  **le test est validé**.

#### 10.1.2

Dans chaque page web, les attributs servant à la  [présentation de l’information](https://accessibilite.numerique.gouv.fr/methode/glossaire/#presentation-de-l-information)  ne doivent pas être présents dans le code source généré des pages. Cette règle est-elle respectée ? [Test 10.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.1.2 "Test 10.1.2")

Méthodologie du test 10.1.2

1.  Vérifier l’absence des attributs de présentation :  `align`,  `alink`,  `background`,  `bgcolor`,  `border`,  `cellpadding`,  `cellspacing`,  `char`,  `charoff`,  `clear`,  `color`,  `compact`,  `frameborder`,  `hspace`,  `link`,  `marginheight`,  `marginwidth`,  `text`,  `valign`,  `vlink`,  `vspace`,  `size`(exception faite de l’élément  `<select>`),  `width`  (exception faite des éléments  `<img>`,  `<object>`,  `<embed>`,  `<canvas>`  et  `<svg>`),  `height`  (exception faite des éléments  `<img>`,  `<object>`,  `<embed>`,  `<canvas>`  et  `<svg>`) ;
2.  Si c’est le cas,  **le test est validé**.

#### 10.1.3

Dans chaque page web, l’utilisation des espaces vérifie-t-elle ces conditions ? [Test 10.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.1.3 "Test 10.1.3")

-   Les espaces ne sont pas utilisées pour séparer les lettres d’un mot ;
-   Les espaces ne sont pas utilisées pour simuler des tableaux ;
-   Les espaces ne sont pas utilisées pour simuler des colonnes de texte.

Méthodologie du test 10.1.3

1.  Désactiver les styles (CSS) du document ;
2.  Vérifier l’absence d’espaces utilisées :
    -   Entre les lettres d’un mot ;
    -   Pour créer des effets de marges ou d’alignement ;
    -   Pour simuler des tableaux ou des colonnes.
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [F32](https://www.w3.org/WAI/WCAG21/Techniques/failures/F32 "F32 - nouvelle fenêtre")
-   [F33](https://www.w3.org/WAI/WCAG21/Techniques/failures/F33 "F33 - nouvelle fenêtre")
-   [F34](https://www.w3.org/WAI/WCAG21/Techniques/failures/F34 "F34 - nouvelle fenêtre")
-   [F48](https://www.w3.org/WAI/WCAG21/Techniques/failures/F48 "F48 - nouvelle fenêtre")
-   [C6](https://www.w3.org/WAI/WCAG21/Techniques/css/C6 "C6 - nouvelle fenêtre")
-   [C8](https://www.w3.org/WAI/WCAG21/Techniques/css/C8 "C8 - nouvelle fenêtre")
-   [C18](https://www.w3.org/WAI/WCAG21/Techniques/css/C18 "C18 - nouvelle fenêtre")
-   [C22](https://www.w3.org/WAI/WCAG21/Techniques/css/C22 "C22 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.1.3.2  Meaningful Sequence  (A)

### 10.2Dans chaque page web, le  [contenu visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-visible)  porteur d’information reste-t-il présent lorsque les  [feuilles de styles](https://accessibilite.numerique.gouv.fr/methode/glossaire/#feuille-de-style)  sont désactivées ?  [Critère 10.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.2 "Critère 10.2")

Tests et références du critère 10.2

#### 10.2.1

Dans chaque page web, l’information reste-t-elle présente lorsque les  [feuilles de styles](https://accessibilite.numerique.gouv.fr/methode/glossaire/#feuille-de-style)  sont désactivées ? [Test 10.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.2.1 "Test 10.2.1")

Méthodologie du test 10.2.1

1.  Désactiver les styles (CSS) du document ;
2.  Comparer le document dépourvu de styles avec le document mis en forme ;
3.  Vérifier si dans le document dépourvu de styles, les contenus visibles porteurs d’information restent présents ;
4.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [F3](https://www.w3.org/WAI/WCAG21/Techniques/failures/F3 "F3 - nouvelle fenêtre")
-   [F87](https://www.w3.org/WAI/WCAG21/Techniques/failures/F87 "F87 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.1.3.1  Info and Relationships  (A)

### 10.3Dans chaque page web, l’information reste-t-elle  [compréhensible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#comprehensible-ordre-de-lecture)  lorsque les  [feuilles de styles](https://accessibilite.numerique.gouv.fr/methode/glossaire/#feuille-de-style)  sont désactivées ?  [Critère 10.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.3 "Critère 10.3")

Tests et références du critère 10.3

#### 10.3.1

Dans chaque page web, l’information reste-t-elle  [compréhensible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#comprehensible-ordre-de-lecture)  lorsque les  [feuilles de styles](https://accessibilite.numerique.gouv.fr/methode/glossaire/#feuille-de-style)  sont désactivées ? [Test 10.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.3.1 "Test 10.3.1")

Méthodologie du test 10.3.1

1.  Désactiver les styles (CSS) du document ;
2.  Vérifier que l’ordre dans lequel les contenus sont implémentés ne pose pas de problème de compréhension ;
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")
-   [2.4.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order "critère 2.4.3 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G59](https://www.w3.org/WAI/WCAG21/Techniques/general/G59 "G59 - nouvelle fenêtre")
-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [F1](https://www.w3.org/WAI/WCAG21/Techniques/failures/F1 "F1 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.2  Meaningful Sequence  (A)
-   9.2.4.3  Focus Order  (A)

### 10.4Dans chaque page web, le texte reste-t-il lisible lorsque la  [taille des caractères](https://accessibilite.numerique.gouv.fr/methode/glossaire/#taille-des-caracteres)  est augmentée jusqu’à 200 %, au moins (hors cas particuliers) ?  [Critère 10.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.4 "Critère 10.4")

Tests et références du critère 10.4

#### 10.4.1

Dans chaque page web, l’augmentation de la  [taille des caractères](https://accessibilite.numerique.gouv.fr/methode/glossaire/#taille-des-caracteres)  jusqu’à 200 %, au moins, ne doit pas provoquer de perte d’information. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ? [Test 10.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.4.1 "Test 10.4.1")

-   Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;
-   Lors de l’utilisation des fonctions de zoom graphique du navigateur ;
-   Lors de l’utilisation d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  propre au site permettant d’agrandir le texte ou de zoomer.

Méthodologie du test 10.4.1

1.  Vérifier dans le document si les textes restent présents et lisibles lorsque :
    -   Le zoom texte du navigateur est réglé à 200 % ;
    -   Le zoom graphique du navigateur est réglé à 200 % ;
    -   Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.
2.  Si c’est le cas,  **le test est validé**.

#### 10.4.2

Dans chaque page web, l’augmentation de la taille des caractères jusqu’à 200 %, au moins, doit être possible pour l’ensemble du texte dans la page. Cette règle est-elle respectée selon une de ces conditions (hors cas particuliers) ? [Test 10.4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.4.2 "Test 10.4.2")

-   Lors de l’utilisation de la fonction d’agrandissement du texte du navigateur ;
-   Lors de l’utilisation des fonctions de zoom graphique du navigateur ;
-   Lors de l’utilisation d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  propre au site permettant d’agrandir le texte ou de zoomer.

Méthodologie du test 10.4.2

1.  Vérifier dans le document si les textes sont effectivement agrandis lorsque :
    -   Le zoom texte du navigateur est réglé à 200 % ;
    -   Le zoom graphique du navigateur est réglé à 200 % ;
    -   Les fonctionnalités de zoom personnalisées proposé par le document sont utilisés.
2.  Si c’est le cas,  **le test est validé**.

#### Cas particuliers

Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :

-   Les sous-titres incrustés dans une vidéo ;
-   Les textes en image ;
-   Le texte au sein d’une balise  `<canvas>`.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.4 (AA)](https://www.w3.org/Translations/WCAG21-fr/#resize-text "critère 1.4.4 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G146](https://www.w3.org/WAI/WCAG21/Techniques/general/G146 "G146 - nouvelle fenêtre")
-   [G179](https://www.w3.org/WAI/WCAG21/Techniques/general/G179 "G179 - nouvelle fenêtre")
-   [F69](https://www.w3.org/WAI/WCAG21/Techniques/failures/F69 "F69 - nouvelle fenêtre")
-   [F80](https://www.w3.org/WAI/WCAG21/Techniques/failures/F80 "F80 - nouvelle fenêtre")
-   [SCR34](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR34 "SCR34 - nouvelle fenêtre")
-   [C12](https://www.w3.org/WAI/WCAG21/Techniques/css/C12 "C12 - nouvelle fenêtre")
-   [C13](https://www.w3.org/WAI/WCAG21/Techniques/css/C13 "C13 - nouvelle fenêtre")
-   [C14](https://www.w3.org/WAI/WCAG21/Techniques/css/C14 "C14 - nouvelle fenêtre")
-   [C17](https://www.w3.org/WAI/WCAG21/Techniques/css/C17 "C17 - nouvelle fenêtre")
-   [C28](https://www.w3.org/WAI/WCAG21/Techniques/css/C28 "C28 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.4  Resize Text  (AA)

### 10.5Dans chaque page web, les déclarations CSS de couleurs de fond d’élément et de police sont-elles correctement utilisées ?  [Critère 10.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.5 "Critère 10.5")

Tests et références du critère 10.5

#### 10.5.1

Dans chaque page web, chaque déclaration CSS de couleurs de police (`color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de fond (`background`,  `background-color`), au moins, héritée d’un parent ? [Test 10.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.5.1 "Test 10.5.1")

Méthodologie du test 10.5.1

1.  Retrouver dans le document les textes mis en couleur, à l’exception des couleurs par défaut (par exemple les liens, etc.) ;
2.  Déterminer l’élément qui contient le texte et vérifier la présence d’une valeur calculée pour la propriété  `background-color`  de l’élément ;
3.  Si c’est le cas,  **le test est validé**.

#### 10.5.2

Dans chaque page web, chaque déclaration de couleur de fond (`background`,  `background-color`), d’un élément susceptible de contenir du texte, est-elle accompagnée d’une déclaration de couleur de police (`color`) au moins, héritée d’un parent ? [Test 10.5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.5.2 "Test 10.5.2")

Méthodologie du test 10.5.2

1.  Retrouver dans le document les textes mis en couleur, à l’exception des couleurs par défaut (par exemple les liens, etc.) ;
2.  Déterminer l’élément qui contient le texte et vérifier la présence d’une valeur calculée pour la propriété  `color`  de l’élément ;
3.  Si c’est le cas,  **le test est validé**.

#### 10.5.3

Dans chaque page web, chaque utilisation d’une image pour créer une couleur de fond d’un élément susceptible de contenir du texte, via CSS (`background`,  `background-image`), est-elle accompagnée d’une déclaration de couleur de fond (`background`,  `background-color`), au moins, héritée d’un parent ? [Test 10.5.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.5.3 "Test 10.5.3")

Méthodologie du test 10.5.3

1.  Retrouver dans le document les textes dont l’arrière-plan est constitué d’une image (propriété background-image) ;
2.  Déterminer l’élément qui contient le texte et vérifier que si l’image d’arrière-plan est absente, le texte reste lisible ;
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#contrast-minimum "critère 1.4.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F24](https://www.w3.org/WAI/WCAG21/Techniques/failures/F24 "F24 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.3  Contrast (Minimum)  (AA)

### 10.6Dans chaque page web, chaque  [lien dont la nature n’est pas évidente](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-dont-la-nature-n-est-pas-evidente)  est-il visible par rapport au texte environnant ?  [Critère 10.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.6 "Critère 10.6")

Tests et références du critère 10.6

#### 10.6.1

Dans chaque page web, chaque  [lien texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#lien-texte)  signalé uniquement par la couleur, et dont la nature n’est pas évidente, vérifie-t-il ces conditions ? [Test 10.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.6.1 "Test 10.6.1")

-   La couleur du lien a un rapport de  [contraste](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contraste)  supérieur ou égal à 3:1 par rapport au texte environnant ;
-   Le lien dispose d’une indication visuelle au survol autre qu’un changement de couleur ;
-   Le lien dispose d’une indication visuelle au focus autre qu’un changement de couleur.

Méthodologie du test 10.6.1

1.  Retrouver dans le document les éléments de type lien (élément  `<a>`  ou élément pourvu d’un attribut WAI-ARIA  `role="link"`) ;
2.  Pour chaque élément de type lien, s’il peut être confondu avec un texte normal lorsqu’il est signalé uniquement par la couleur, vérifier que le contraste entre la couleur de police du lien et la couleur de police du texte environnant est de 3:1, au moins ;
3.  Cette vérification doit être faite pour les différents états du lien s’ils sont présentés au moyen d’une couleur différente : l’état non visité, l’état visité, l’état activé, l’état au survol et l’état à la prise de focus ;
4.  Si c’est le cas pour chaque élément de type lien,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color "critère 1.4.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183 "G183 - nouvelle fenêtre")
-   [F73](https://www.w3.org/WAI/WCAG21/Techniques/failures/F73 "F73 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.1  Use of Color  (A)

### 10.7Dans chaque page web, pour chaque élément recevant le focus, la  [prise de focus](https://accessibilite.numerique.gouv.fr/methode/glossaire/#prise-de-focus)  est-elle visible ?  [Critère 10.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.7 "Critère 10.7")

Tests et références du critère 10.7

#### 10.7.1

Pour chaque élément recevant le focus, la  [prise de focus](https://accessibilite.numerique.gouv.fr/methode/glossaire/#prise-de-focus)  vérifie-t-elle une de ces conditions ? [Test 10.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.7.1 "Test 10.7.1")

-   Le style du focus natif du navigateur n’est pas supprimé ou dégradé ;
-   Un style du focus défini par l’auteur est visible.

Méthodologie du test 10.7.1

1.  Retrouver dans le document les éléments susceptibles de recevoir le focus (les éléments d’interface tels que les liens ou les contrôles de formulaire, ainsi que tout élément pourvu d’un attribut  `tabindex`  d’une valeur égale ou supérieure à 1) ;
2.  Pour chaque élément susceptible de recevoir le focus, vérifier que l’indication visuelle de la prise de focus est présente (en agissant sur le contour ou le fond ou les deux) et est suffisamment contrastée (ratio de contraste égal ou supérieur à 3:1) ;
3.  Si c’est le cas pour chaque élément susceptible de recevoir le focus,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color "critère 1.4.1 (A) - nouvelle fenêtre")
-   [2.4.7 (AA)](https://www.w3.org/Translations/WCAG21-fr/#focus-visible "critère 2.4.7 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G149](https://www.w3.org/WAI/WCAG21/Techniques/general/G149 "G149 - nouvelle fenêtre")
-   [G165](https://www.w3.org/WAI/WCAG21/Techniques/general/G165 "G165 - nouvelle fenêtre")
-   [G183](https://www.w3.org/WAI/WCAG21/Techniques/general/G183 "G183 - nouvelle fenêtre")
-   [G195](https://www.w3.org/WAI/WCAG21/Techniques/general/G195 "G195 - nouvelle fenêtre")
-   [F73](https://www.w3.org/WAI/WCAG21/Techniques/failures/F73 "F73 - nouvelle fenêtre")
-   [F78](https://www.w3.org/WAI/WCAG21/Techniques/failures/F78 "F78 - nouvelle fenêtre")
-   [SCR31](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR31 "SCR31 - nouvelle fenêtre")
-   [C15](https://www.w3.org/WAI/WCAG21/Techniques/css/C15 "C15 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.1  Use of Color  (A)
-   9.2.4.7  Focus Visible  (AA)

### 10.8Pour chaque page web, les  [contenus cachés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-cache)  ont-ils vocation à être ignorés par les technologies d’assistance ?  [Critère 10.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.8 "Critère 10.8")

Tests et références du critère 10.8

#### 10.8.1

Dans chaque page web, chaque contenu caché vérifie-t-il une de ces conditions ? [Test 10.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.8.1 "Test 10.8.1")

-   Le  [contenu caché](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-cache)  a vocation à être ignoré par les technologies d’assistance ;
-   Le  [contenu caché](https://accessibilite.numerique.gouv.fr/methode/glossaire/#contenu-cache)  n’a pas vocation à être ignoré par les technologies d’assistance et est rendu restituable par les technologies d’assistance suite à une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ou suite à un repositionnement du focus dessus.

Méthodologie du test 10.8.1

1.  Retrouver les contenus cachés (éléments pourvus de l’attribut hidden ou de l’attribut WAI-ARIA aria-hidden, ou bien d’une classe ou d’un ensemble de styles CSS susceptibles de masquer le contenu).
2.  Pour chaque contenu caché, vérifier que :
    -   Soit le contenu caché a vocation à être ignoré par les technologies d’assistance (un élément statistique de visites par exemple) ;
    -   Soit le contenu caché n’a pas vocation à être ignoré par les technologies d’assistance, et dans ce cas il est rendu restituable par les technologies d’assistance au moyen :
        -   Soit d’une action de l’utilisateur réalisable au clavier ou par tout dispositif de pointage sur un élément précédent le contenu caché ;
        -   Soit d’une fonction de programmation qui repositionne le focus sur le contenu.
3.  Si c’est le cas pour chaque contenu caché,  **le test est validé**.

#### Notes techniques

WAI-ARIA propose un attribut  `aria-hidden`  (`true`  ou  `false`) qui permet d’inhiber la restitution d’un contenu en direction des technologies d’assistance, sans action sur sa visibilité en direction des agents utilisateurs : un contenu avec  `aria-hidden="true"`  ne sera donc plus vocalisable, mais restera visible.

Sauf si le contenu contrôlé par  `aria-hidden`  n’a pas vocation à être restitué par les technologies d’assistance, la valeur de l’attribut  `aria-hidden`  doit être cohérente avec l’état affiché ou masqué du contenu à l’écran.

La spécification HTML5 propose un attribut  `hidden`  qui permet de rendre indisponible (quand l’attribut  `hidden`  est présent) un contenu dans le DOM généré (de manière similaire au  `type="hidden"`  sur un contrôle de formulaire).

Il est possible d’avoir des situations où un contenu contrôlé par  `hidden`  ou  `aria-hidden`  se trouve momentanément dans un état incohérent avec le statut affiché ou masqué du contenu, par exemple si l’on désire rendre disponible un élément, mais que son affichage à l’écran reste dépendant d’une action ultérieure. Dans ce cas, c’est l’état final du contenu qui doit être considéré.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G57](https://www.w3.org/WAI/WCAG21/Techniques/general/G57 "G57 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.2  Meaningful Sequence  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 10.9Dans chaque page web, l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ?  [Critère 10.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9 "Critère 10.9")

Tests et références du critère 10.9

#### 10.9.1

Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ? [Test 10.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9.1 "Test 10.9.1")

Méthodologie du test 10.9.1

1.  Retrouver dans le document les informations d’un texte données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 10.9.2

Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ? [Test 10.9.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9.2 "Test 10.9.2")

Méthodologie du test 10.9.2

1.  Retrouver dans le document les informations d’une image données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 10.9.3

Dans chaque page web, pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise), l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ? [Test 10.9.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9.3 "Test 10.9.3")

Méthodologie du test 10.9.3

1.  Retrouver dans le document les informations d’un média temporel données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 10.9.4

Dans chaque page web, pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel), l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle respectée ? [Test 10.9.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.9.4 "Test 10.9.4")

Méthodologie du test 10.9.4

1.  Retrouver dans le document les informations d’un média non temporel données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier qu’il existe un autre moyen de récupérer cette information ;
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#sensory-characteristics "critère 1.3.3 (A) - nouvelle fenêtre")
-   [1.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color "critère 1.4.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G96](https://www.w3.org/WAI/WCAG21/Techniques/general/G96 "G96 - nouvelle fenêtre")
-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [F14](https://www.w3.org/WAI/WCAG21/Techniques/failures/F14 "F14 - nouvelle fenêtre")
-   [F26](https://www.w3.org/WAI/WCAG21/Techniques/failures/F26 "F26 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.3  Sensory Characteristics  (A)
-   9.1.4.1  Use of Color  (A)

### 10.10Dans chaque page web, l’information ne doit pas être donnée  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position)  uniquement. Cette règle est-elle implémentée de façon pertinente ?  [Critère 10.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10 "Critère 10.10")

Tests et références du critère 10.10

#### 10.10.1

Dans chaque page web, pour chaque texte ou ensemble de textes, l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ? [Test 10.10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10.1 "Test 10.10.1")

Méthodologie du test 10.10.1

1.  Retrouver dans le document les informations d’un texte données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 10.10.2

Dans chaque page web, pour chaque image ou ensemble d’images, l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ? [Test 10.10.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10.2 "Test 10.10.2")

Méthodologie du test 10.10.2

1.  Retrouver dans le document les informations d’une image données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 10.10.3

Dans chaque page web, pour chaque  [média temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-temporel-type-son-video-et-synchronise), l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ? [Test 10.10.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10.3 "Test 10.10.3")

Méthodologie du test 10.10.3

1.  Retrouver dans le document les informations d’un média temporel données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### 10.10.4

Dans chaque page web, pour chaque  [média non temporel](https://accessibilite.numerique.gouv.fr/methode/glossaire/#media-non-temporel), l’information ne doit pas être donnée uniquement  [par la forme, taille ou position](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-donnee-par-la-forme-la-taille-ou-la-position). Cette règle est-elle implémentée de façon pertinente ? [Test 10.10.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.10.4 "Test 10.10.4")

Méthodologie du test 10.10.4

1.  Retrouver dans le document les informations d’un média non temporel données par la forme, la taille ou la position ;
2.  Pour chaque information donnée par la forme, la taille ou la position, vérifier que le moyen alternatif de récupérer cette information est pertinent, c’est-à-dire qu’il permet de transmettre l’information dans tous les contextes de consultation et pour tous les utilisateurs.
3.  Si c’est le cas pour chaque information,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#sensory-characteristics "critère 1.3.3 (A) - nouvelle fenêtre")
-   [1.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#use-of-color "critère 1.4.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G96](https://www.w3.org/WAI/WCAG21/Techniques/general/G96 "G96 - nouvelle fenêtre")
-   [G140](https://www.w3.org/WAI/WCAG21/Techniques/general/G140 "G140 - nouvelle fenêtre")
-   [F14](https://www.w3.org/WAI/WCAG21/Techniques/failures/F14 "F14 - nouvelle fenêtre")
-   [F26](https://www.w3.org/WAI/WCAG21/Techniques/failures/F26 "F26 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.3  Sensory Characteristics  (A)
-   9.1.4.1  Use of Color  (A)

### 10.11Pour chaque page web, les contenus peuvent-ils être présentés sans perte d’information ou de fonctionnalité et sans avoir recours soit à un défilement vertical pour une fenêtre ayant une hauteur de 256 px, soit à un défilement horizontal pour une fenêtre ayant une largeur de 320 px (hors cas particuliers) ?  [Critère 10.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.11 "Critère 10.11")

Tests et références du critère 10.11

#### 10.11.1

Pour chaque page web, lorsque le contenu dont le sens de lecture est horizontal est affiché dans une fenêtre réduite à une largeur de 320 px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement horizontal (hors cas particuliers) ? [Test 10.11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.11.1 "Test 10.11.1")

Méthodologie du test 10.11.1

1.  Retrouver dans le document si son contenu est conçu pour défiler verticalement (le sens de lecture du texte est horizontal), les informations et fonctionnalités ;
2.  Réduire la fenêtre d’affichage à une largeur de 320 px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement horizontal ;
3.  Si c’est le cas,  **le test est validé**.

#### 10.11.2

Pour chaque page web, lorsque le contenu dont le sens de lecture est vertical est affiché dans une fenêtre réduite à une hauteur de 256 px, l’ensemble des informations et des fonctionnalités sont-elles disponibles sans aucun défilement vertical (hors cas particuliers) ? [Test 10.11.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.11.2 "Test 10.11.2")

Méthodologie du test 10.11.2

1.  Retrouver dans le document si son contenu est conçu pour défiler horizontalement (le sens de lecture du texte est vertical), les informations et fonctionnalités ;
2.  Réduire la fenêtre d’affichage à une hauteur de 256 px et vérifier que les informations et les fonctionnalités restent disponibles sans aucun défilement vertical ;
3.  Si c’est le cas,  **le test est validé**.

#### Cas particuliers

L'objectif de ce critère est de garantir un défilement dans une unique direction pour une lecture facilitée selon le sens de l'écriture.

Font exception à ce critère, les contenus dont l'agencement requiert deux dimensions pour être compris ou utilisés comme :

-   Les images, les graphiques ou les vidéos ;
-   Les jeux (jeux de plateforme, par exemple) ;
-   Les présentations (type diaporama, par exemple) ;
-   Les tableaux de données ;
-   Les interfaces où il est nécessaire d'avoir un ascenseur horizontal lors de la manipulation de l'interface.

Note : la majorité des navigateurs sur les systèmes d'exploitation sur mobile (Android, iOS) ne gère pas correctement la redistribution en cas de zoom. Dans ce contexte, le critère sera considéré comme non applicable sur ces environnements.

#### Note technique

Lorsqu'il est ici question de pixel, il s'agit du pixel CSS tel que défini par le W3C https://www.w3.org/TR/css3-values/

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.10 (AA)](https://www.w3.org/Translations/WCAG21-fr/#reflow "critère 1.4.10 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [C34](https://www.w3.org/WAI/WCAG21/Techniques/css/C34 "C34 - nouvelle fenêtre")
-   [C37](https://www.w3.org/WAI/WCAG21/Techniques/css/C37 "C37 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.10  Reflow  (AA)

### 10.12Dans chaque page web, les propriétés d’espacement du texte peuvent-elles être redéfinies par l’utilisateur sans perte de contenu ou de fonctionnalité (hors cas particuliers) ?  [Critère 10.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.12 "Critère 10.12")

Tests et références du critère 10.12

#### 10.12.1

Dans chaque page web, le texte reste-t-il lisible lorsque l’affichage est modifié selon ces conditions (hors cas particuliers) ? [Test 10.12.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.12.1 "Test 10.12.1")

-   L’espacement entre les lignes (`line-height`) est augmenté jusqu’à 1,5 fois la taille de la police ;
-   L’espacement suivant les paragraphes (balise  `<p>`) est augmenté jusqu’à 2 fois la taille de la police ;
-   L’espacement des lettres (`letter-spacing`) est augmenté jusqu’à 0,12 fois la taille de la police ;
-   L’espacement des mots (`word-spacing`) est augmenté jusqu’à 0,16 fois la taille de la police.

Méthodologie du test 10.12.1

1.  Modifier les styles du document en donnant :
    -   Une valeur de 1.5 à la propriété  `line-height`  de tous les éléments du document ;
    -   Une valeur de 2em à la propriété  `margin-bottom`  des éléments  `<p>` ;
    -   Une valeur de 0.12em à la propriété  `letter-spacing`  de tous les éléments du document ;
    -   Une valeur de 0.16em à la propriété  `word-spacing`  de tous les éléments du document ;
2.  Pour chaque passage de texte, vérifier qu’il reste lisible, à l’exception :
    -   Des sous-titres directement intégrés à une vidéo ;
    -   Des images texte ;
    -   Des textes au sein d’une balise  `<canvas>`.
3.  Si c’est le cas pour chaque passage de texte,  **le test est validé**.

Note : une implémentation de ces règles de modification est disponible dans les ressources du critère de succès WCAG 1.4.12 ([https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js](https://github.com/alastc/adaptation-scripts/blob/master/scripts/text-adaptation.js)).

#### Cas particuliers

Font exception à ce critère, les contenus pour lesquels l’utilisateur n’a pas de possibilité de personnalisation :

-   Les sous-titres directement intégrés à une vidéo ;
-   Les images texte ;
-   Le texte au sein d’une balise  `<canvas>`.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.12 (AA)](https://www.w3.org/Translations/WCAG21-fr/#text-spacing "critère 1.4.12 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [C8](https://www.w3.org/WAI/WCAG21/Techniques/css/C8 "C8 - nouvelle fenêtre")
-   [C21](https://www.w3.org/WAI/WCAG21/Techniques/css/C21 "C21 - nouvelle fenêtre")
-   [C35](https://www.w3.org/WAI/WCAG21/Techniques/css/C35 "C35 - nouvelle fenêtre")
-   [C36](https://www.w3.org/WAI/WCAG21/Techniques/css/C36 "C36 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.12  Text Spacing  (AA)

### 10.13Dans chaque page web, les contenus additionnels apparaissant à la prise de focus ou au survol d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  sont-ils contrôlables par l’utilisateur (hors cas particuliers) ?  [Critère 10.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13 "Critère 10.13")

Tests et références du critère 10.13

#### 10.13.1

Chaque contenu additionnel devenant visible à la prise de focus ou au survol d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  peut-il être masqué par une action de l’utilisateur sans déplacer le focus ou le pointeur de la souris (hors cas particuliers) ? [Test 10.13.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13.1 "Test 10.13.1")

Méthodologie du test 10.13.1

1.  Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d’un composant d’interface, à l’exception :
    -   Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut  `title`  ou à la validation native d’un formulaire ;
    -   Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2.  Pour chaque contenu additionnel, vérifier que :
    -   Soit le contenu additionnel est positionné de façon à ce qu’il ne gêne pas la consultation des autres contenus informatifs sur lesquels il viendrait se superposer (y compris le composant d’interface qui a déclenché son apparition), quelles que soient les conditions de consultation (y compris lors de l’utilisation d’un mécanisme de zoom) ;
    -   Soit un mécanisme (au clavier) permet de faire disparaître le contenu additionnel (par exemple, la touche Echap).
3.  Si c’est le cas pour chaque contenu additionnel,  **le test est validé**.

#### 10.13.2

Chaque contenu additionnel qui apparait au survol d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  peut-il être survolé par le pointeur de la souris sans disparaître (hors cas particuliers) ? [Test 10.13.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13.2 "Test 10.13.2")

Méthodologie du test 10.13.2

1.  Retrouver dans le document les contenus additionnels devenant visible au survol d’un composant d’interface, à l’exception :
    -   Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut title ou à la validation native d’un formulaire) ;
    -   Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2.  Pour chaque contenu additionnel, vérifier qu’il peut être survolé par le pointeur de la souris sans disparaître ;
3.  Si c’est le cas pour chaque contenu additionnel,  **le test est validé**.

#### 10.13.3

Chaque contenu additionnel qui apparaît à la prise de focus ou au survol d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 10.13.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.13.3 "Test 10.13.3")

-   Le contenu additionnel reste visible jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel et du  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  ayant déclenché son apparition ;
-   Le contenu additionnel reste visible jusqu’à ce que l’utilisateur déclenche une action masquant ce contenu sans déplacer le focus ou le pointeur de la souris du  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  ayant déclenché son apparition ;
-   Le contenu additionnel reste visible jusqu’à ce qu’il ne soit plus valide.

Méthodologie du test 10.13.3

1.  Retrouver dans le document les contenus additionnels devenant visible à la prise de focus ou au survol d’un composant d’interface, à l’exception :
    -   Des contenus additionnels contrôlés par l’agent utilisateur (par exemple, les infobulles associées à l’attribut  `title`  ou à la validation native d’un formulaire) ;
    -   Des contenus additionnels devenant visibles par une activation de l’utilisateur (par exemple, une fenêtre de dialogue).
2.  Pour chaque contenu additionnel, vérifier qu’il reste visible :
    -   Jusqu’à ce que l’utilisateur retire le pointeur souris ou le focus du contenu additionnel ou du composant d’interface ayant déclenché son apparition ;
    -   Jusqu’à ce l’utilisateur déclenche le mécanisme prévu pour faire disparaître le contenu additionnel ;
    -   Jusqu’à ce que l’information proposée par le contenu additionnel ne soit plus valide (par exemple un contenu additionnel signalant l’état “occupé” du composant d’interface que l’utilisateur souhaite activer ou encore un message d’erreur signalé sous la forme d’un contenu additionnel tant que l’utilisateur n’a pas rectifié sa saisie).
3.  Si c’est le cas pour chaque contenu additionnel,  **le test est validé**.

#### Cas particuliers

Lorsque le contenu additionnel est contrôlé par l’agent utilisateur (par exemple, attribut  `title`  ou validation native de formulaire) ou correspond à une fenêtre modale conforme au  [motif de conception](https://accessibilite.numerique.gouv.fr/methode/glossaire/#motif-de-conception)  WAI-ARIA  `dialog`, le critère 10.13 est non applicable.

Lorsque le contenu additionnel ne masque ou ne remplace aucun contenu porteur d’information, le test 10.13.1 est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.4.13 (AA)](https://www.w3.org/Translations/WCAG21-fr/#content-on-hover-or-focus "critère 1.4.13 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F95](https://www.w3.org/WAI/WCAG21/Techniques/failures/F95 "F95 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.4.13  Content on Hover or Focus  (AA)

### 10.14Dans chaque page web, les contenus additionnels apparaissant via les styles CSS uniquement peuvent-ils être rendus visibles au clavier et par tout dispositif de pointage ?  [Critère 10.14](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.14 "Critère 10.14")

Tests et références du critère 10.14

#### 10.14.1

Dans chaque page web, les contenus additionnels apparaissant au survol d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  via les styles CSS respectent-ils si nécessaire une de ces conditions ? [Test 10.14.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.14.1 "Test 10.14.1")

-   Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;
-   Les contenus additionnels apparaissent également à la prise de focus du composant ;
-   Les contenus additionnels apparaissent également par le biais de l’activation ou de la prise de focus d’un autre composant.

Méthodologie du test 10.14.1

1.  Retrouver dans le document les contenus additionnels devenant visible au survol d’un composant d’interface au moyen d’un mécanisme CSS (`pseudo-classe :hover`) ;
2.  Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :
    -   À l’activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
    -   À la prise de focus du composant ;
    -   À l’activation ou à la prise de focus d’un autre composant.
3.  Si c’est le cas pour chaque contenu additionnel,  **le test est validé**.

#### 10.14.2

Dans chaque page web, les contenus additionnels apparaissant au focus d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  via les styles CSS respectent-ils si nécessaire une de ces conditions ? [Test 10.14.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#10.14.2 "Test 10.14.2")

-   Les contenus additionnels apparaissent également à l’activation du composant via le clavier et tout dispositif de pointage ;
-   Les contenus additionnels apparaissent également au survol du composant ;
-   Les contenus additionnels apparaissent également par le biais de l’activation ou du survol d’un autre composant.

Méthodologie du test 10.14.2

1.  Retrouver dans le document les contenus additionnels devenant visible à la prise de focus d’un composant d’interface au moyen d’un mécanisme CSS (`pseudo-classe :focus`) ;
2.  Pour chaque contenu additionnel, vérifier que les contenus additionnels apparaissent également :

-   À l’activation du composant au moyen du clavier ou de tout autre dispositif de pointage ;
-   Au survol du composant ;
-   À l’activation ou du survol d’un autre composant.

3.  Si c’est le cas pour chaque contenu additionnel,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard "critère 2.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G202](https://www.w3.org/WAI/WCAG21/Techniques/general/G202 "G202 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.1.1  Keyboard  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 11. Formulaires [Thématique Formulaires](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11 "Thématique Formulaires")

### 11.1Chaque  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  a-t-il une  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire) ?  [Critère 11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1 "Critère 11.1")

Tests et références du critère 11.1

#### 11.1.1

Chaque  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  vérifie-t-il une de ces conditions ? [Test 11.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1.1 "Test 11.1.1")

-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  possède un attribut WAI-ARIA  `aria-labelledby`  référençant un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  identifié ;
-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  possède un attribut WAI-ARIA  `aria-label` ;
-   Une balise  `<label>`  ayant un attribut  `for`  est associée au  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire) ;
-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  possède un attribut  `title` ;
-   Un bouton adjacent au  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  lui fournit une étiquette visible et un élément  `<label>`  visuellement caché ou un attribut WAI-ARIA  `aria-label`,  `aria-labelledby`  ou  `title`  lui fournit un nom accessible.

Méthodologie du test 11.1.1

1.  Retrouver dans le document les champs de formulaire ;
2.  Pour chaque champ de formulaire, vérifier que le champ de formulaire :
    -   Possède un attribut WAI-ARIA  `aria-labelledby`  référençant un passage de texte identifié ;
    -   Possède un attribut WAI-ARIA  `aria-label` ;
    -   Est associé à un élément  `<label>`  ayant un attribut  `for` ;
    -   Possède un attribut  `title` ;
    -   Un bouton adjacent au champ de formulaire lui fournit une étiquette visible et un élément  `<label>`  visuellement caché ou un attribut WAI-ARIA  `aria-label`,  `aria-labelledby`  ou  `title`  lui fournit un nom accessible.
3.  Si c’est le cas pour champ de formulaire,  **le test est validé**.

#### 11.1.2

Chaque  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  associé à une balise  `<label>`  ayant un attribut  `for`, vérifie-t-il ces conditions ? [Test 11.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1.2 "Test 11.1.2")

-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  possède un attribut  `id` ;
-   La valeur de l’attribut  `for`  est égale à la valeur de l’attribut  `id`  du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  associé.

Méthodologie du test 11.1.2

1.  Retrouver dans le document les champs de formulaire associé à un élément  `<label>` ;
2.  Pour chaque champ de formulaire, vérifier que :
    -   Le champ de formulaire possède un attribut  `id` ;
    -   La valeur de l’attribut  `for`  de l’élément  `<label>`  est égale à la valeur de l’attribut  `id`.
3.  Si c’est le cas pour champ de formulaire,  **le test est validé**.

#### 11.1.3

Chaque  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ayant une  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  dont le contenu n’est pas visible ou à proximité (masqué,  `aria-label`) ou qui n’est pas  [accolé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  au champ (`aria-labelledby`), vérifie-t-il une de ses conditions ? [Test 11.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.1.3 "Test 11.1.3")

-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  possède un attribut  `title`  dont le contenu permet de comprendre la nature de la saisie attendue ;
-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  est accompagné d’un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue ;
-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  est accompagné d’un  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  visible accolé au champ permettant de comprendre la nature de la saisie attendue.

Méthodologie du test 11.1.3

1.  Retrouver dans le document les champs de formulaire dont l’étiquette n’est pas visible ou à proximité (masquée, utilisation de l’attribut aria-label) ou n’est pas accolée au champ (utilisation de l’attribut  `aria-labelledby`) ;
2.  Pour chaque champ de formulaire, vérifier que le champ de formulaire :
    -   soit possède un attribut  `title`  dont le contenu permet de comprendre la nature de la saisie attendue ;
    -   est accompagné d’un passage de texte accolé au champ qui devient visible à la prise de focus permettant de comprendre la nature de la saisie attendue ;
    -   est accompagné d’un passage de texte visible accolé au champ permettant de comprendre la nature de la saisie attendue.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [2.4.6 (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels "critère 2.4.6 (AA) - nouvelle fenêtre")
-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G82](https://www.w3.org/WAI/WCAG21/Techniques/general/G82 "G82 - nouvelle fenêtre")
-   [G131](https://www.w3.org/WAI/WCAG21/Techniques/general/G131 "G131 - nouvelle fenêtre")
-   [H44](https://www.w3.org/WAI/WCAG21/Techniques/html/H44 "H44 - nouvelle fenêtre")
-   [H65](https://www.w3.org/WAI/WCAG21/Techniques/html/H65 "H65 - nouvelle fenêtre")
-   [F68](https://www.w3.org/WAI/WCAG21/Techniques/failures/F68 "F68 - nouvelle fenêtre")
-   [F82](https://www.w3.org/WAI/WCAG21/Techniques/failures/F82 "F82 - nouvelle fenêtre")
-   [F86](https://www.w3.org/WAI/WCAG21/Techniques/failures/F86 "F86 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")
-   [ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9 "ARIA9 - nouvelle fenêtre")
-   [ARIA14](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14 "ARIA14 - nouvelle fenêtre")
-   [ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16 "ARIA16 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.2.4.6  Headings and Labels  (AA)
-   9.3.3.2  Labels or Instructions  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 11.2Chaque  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  associée à un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  est-elle pertinente (hors cas particuliers) ?  [Critère 11.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2 "Critère 11.2")

Tests et références du critère 11.2

#### 11.2.1

Chaque balise  `<label>`  permet-elle de connaître la fonction exacte du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  auquel elle est associée ? [Test 11.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2.1 "Test 11.2.1")

Méthodologie du test 11.2.1

1.  Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un élément  `<label>` ;
2.  Pour chaque champ de formulaire, vérifier que le contenu de l’élément est pertinent ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.2.2

Chaque attribut  `title`  permet-il de connaître la fonction exacte du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  auquel il est associé ? [Test 11.2.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2.2 "Test 11.2.2")

Méthodologie du test 11.2.2

1.  Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un attribut  `title` ;
2.  Pour chaque champ de formulaire, vérifier que le contenu de l’attribut est pertinent ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.2.3

Chaque étiquette implémentée via l’attribut WAI-ARIA  `aria-label`  permet-elle de connaître la fonction exacte du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  auquel elle est associée ? [Test 11.2.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2.3 "Test 11.2.3")

Méthodologie du test 11.2.3

1.  Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un attribut WAI-ARIA  `aria-label` ;
2.  Pour chaque champ de formulaire, vérifier que le contenu de l’attribut est pertinent ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.2.4

Chaque  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé via l’attribut WAI-ARIA  `aria-labelledby`  permet-il de connaître la fonction exacte du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  auquel il est associé ? [Test 11.2.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2.4 "Test 11.2.4")

Méthodologie du test 11.2.4

1.  Retrouver dans le document les champs de formulaire dont l’étiquette est fournie par un attribut WAI-ARIA  `aria-labelledby` ;
2.  Pour chaque champ de formulaire, vérifier que le contenu du passage de texte référencé est pertinent ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.2.5

Chaque  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ayant un  [intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible)  vérifie-t-il ces conditions (hors cas particuliers) ? [Test 11.2.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2.5 "Test 11.2.5")

-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  lié au  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  via un attribut WAI-ARIA  `aria-labelledby`  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le contenu de l’attribut  `title`  du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent le contenu de la balise  `<label>`  associé au  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible).

Méthodologie du test 11.2.5

1.  Retrouver dans le document les champs de formulaire dont l’étiquette est fournie à la fois par un intitulé visible et par le contenu soit d’un élément  `<label>`, soit d’un attribut  `title`  ou d’un attribut  `aria-label`  ou d’un attribut  `aria-labelledby` ;
2.  Pour chaque champ de formulaire, vérifier que le contenu de l’élément  `<label>`  ou de l’attribut  `title`  ou de l’attribut  `aria-label`  ou de l’attribut  `aria-labelledby`  contient l’intitulé visible ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.2.6

Chaque bouton adjacent au  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  qui fournit une étiquette visible permet-il de connaître la fonction exacte du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  auquel il est associé ? [Test 11.2.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.2.6 "Test 11.2.6")

Méthodologie du test 11.2.6

1.  Retrouver dans le document les champs de formulaire dont l’étiquette visible est fournie par un bouton adjacent ;
2.  Pour chaque champ de formulaire, vérifier que le contenu visible du bouton est pertinent ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particuliers pour le test 11.2.5 lorsque :

-   La ponctuation et les lettres majuscules sont présentes dans le texte de l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible)  : elles peuvent être ignorées dans le nom accessible sans porter à conséquence ;
-   Le texte de l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible)  sert de symbole : le texte ne doit pas être interprété littéralement au niveau du nom accessible. Le nom doit exprimer la fonction véhiculée par le symbole (par exemple, “B” au niveau d’un éditeur de texte aura pour nom accessible “Mettre en gras”, le signe “>” en fonction du contexte signifiera “Suivant” ou “Lancer la vidéo”). Le cas des symboles mathématiques fait cependant exception (voir la note ci-dessous).

Note : si l’étiquette visible représente une expression mathématique, les symboles mathématiques peuvent être repris littéralement pour servir d’étiquette au nom accessible (ex. : “A>B”). Il est laissé à l’utilisateur le soin d’opérer la correspondance entre l’expression et ce qu’il doit épeler compte tenu de la connaissance qu’il a du fonctionnement de son logiciel de saisie vocale (“A plus grand que B” ou “A supérieur à B”).

Ce cas particulier s’applique également au test 11.9.2.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.6 (AA)](https://www.w3.org/Translations/WCAG21-fr/#headings-and-labels "critère 2.4.6 (AA) - nouvelle fenêtre")
-   [2.5.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name "critère 2.5.3 (A) - nouvelle fenêtre")
-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G82](https://www.w3.org/WAI/WCAG21/Techniques/general/G82 "G82 - nouvelle fenêtre")
-   [G131](https://www.w3.org/WAI/WCAG21/Techniques/general/G131 "G131 - nouvelle fenêtre")
-   [H44](https://www.w3.org/WAI/WCAG21/Techniques/html/H44 "H44 - nouvelle fenêtre")
-   [H65](https://www.w3.org/WAI/WCAG21/Techniques/html/H65 "H65 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")
-   [ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9 "ARIA9 - nouvelle fenêtre")
-   [ARIA14](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14 "ARIA14 - nouvelle fenêtre")
-   [ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16 "ARIA16 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.6  Headings and Labels  (AA)
-   9.2.5.3  Label in Name  (A)
-   9.3.3.2  Labels or Instructions  (A)

### 11.3Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), chaque  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  associée à un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ayant la même fonction et répétée plusieurs fois dans une même page ou dans un  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages)  est-elle  [cohérente](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquettes-coherentes) ?  [Critère 11.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3 "Critère 11.3")

Tests et références du critère 11.3

#### 11.3.1

Chaque  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  associée à un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ayant la même fonction et répétée plusieurs fois dans une même page est-elle  [cohérente](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquettes-coherentes) ? [Test 11.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3.1 "Test 11.3.1")

Méthodologie du test 11.3.1

1.  Retrouver dans le document les champs de formulaire ayant une même fonction (par exemple plusieurs champs d’adresse) ;
2.  Pour chaque champ de formulaire, vérifier que les étiquettes sont cohérentes (elles permettent de comprendre qu’il s’agit de saisies de natures identiques) ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.3.2

Chaque  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  associée à un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ayant la même fonction et répétée dans un ensemble de pages est-elle  [cohérente](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquettes-coherentes) ? [Test 11.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.3.2 "Test 11.3.2")

Méthodologie du test 11.3.2

1.  Retrouver dans l’ensemble des pages considérées les champs de formulaire ayant une même fonction (par exemple le champ de saisie d’un moteur de recherche ou le champ de saisie d’inscription à une newsletter) ;
2.  Pour chaque champ de formulaire, vérifier que les étiquettes sont cohérentes (elles permettent de comprendre qu’il s’agit de saisies de natures identiques) ;
3.  Si c’est le cas pour chaque champ de formulaire de l’ensemble des pages considérées,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.2.4 (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-identification "critère 3.2.4 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F31](https://www.w3.org/WAI/WCAG21/Techniques/failures/F31 "F31 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.2.4  Consistent Identification  (AA)

### 11.4Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), chaque  [étiquette de champ](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  et son champ associé sont-ils  [accolés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  (hors cas particuliers) ?  [Critère 11.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4 "Critère 11.4")

Tests et références du critère 11.4

#### 11.4.1

Chaque  [étiquette de champ](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  et son  [champ](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  associé sont-ils  [accolés](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles) ? [Test 11.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4.1 "Test 11.4.1")

Méthodologie du test 11.4.1

1.  Retrouver dans le document les champs de formulaire ;
2.  Pour chaque champ de formulaire, vérifier qu’il est accolé à son étiquette ;
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.4.2

Chaque  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  [accolée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  à un  [champ](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  (à l’exception des cases à cocher, bouton radio ou balises ayant un attribut WAI-ARIA  `role="checkbox"`,  `role="radio"`  ou  `role="switch"`), vérifie-t-elle ces conditions (hors cas particuliers) ? [Test 11.4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4.2 "Test 11.4.2")

-   L’étiquette est visuellement  [accolée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  immédiatement au-dessus ou à gauche du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
-   L’étiquette est visuellement  [accolée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  immédiatement au-dessus ou à droite du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.

Méthodologie du test 11.4.2

1.  Retrouver dans le document les champs de formulaire qui ne sont pas des éléments  `<input>`  de type  `checkbox`  ou de type  `radio`  ou des éléments ayant un attribut WAI-ARIA  `role="checkbox"`,  `role="radio"`  ou  `role="switch`";
2.  Pour chaque champ de formulaire, vérifier que l’étiquette est visuellement accolée :
    -   Immédiatement au-dessus ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
    -   Immédiatement au-dessus ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### 11.4.3

Chaque  [étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  [accolée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  à un  [champ](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  de type  `checkbox`  ou  `radio`  ou à une balise ayant un attribut WAI-ARIA  `role="checkbox"`,  `role="radio"`  ou  `role="switch"`, vérifie-t-elle ces conditions (hors cas particuliers) ? [Test 11.4.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.4.3 "Test 11.4.3")

-   L’étiquette est visuellement  [accolée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  immédiatement au-dessous ou à droite du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
-   L’étiquette est visuellement  [accolée](https://accessibilite.numerique.gouv.fr/methode/glossaire/#accoles-etiquette-et-champ-accoles)  immédiatement au-dessous ou à gauche du  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.

Méthodologie du test 11.4.3

1.  Retrouver dans le document les champs de formulaire qui sont  `<input>`  de type  `checkbox`  ou de type  `radio`  ou des éléments ayant un attribut WAI-ARIA  `role="checkbox"`,  `role="radio"`  ou  `role="switch`";
2.  Pour chaque champ de formulaire, vérifier que l’étiquette est visuellement accolée :
    -   Immédiatement au-dessous ou à droite du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de gauche à droite ;
    -   Immédiatement au-dessous ou à gauche du champ de formulaire lorsque le sens de lecture de la langue de l’étiquette est de droite à gauche.
3.  Si c’est le cas pour chaque champ de formulaire,  **le test est validé**.

#### Cas particuliers

Les tests 11.4.2 et 11.4.3 seront considérés comme non applicables :

-   Dans le cas où l’[étiquette](https://accessibilite.numerique.gouv.fr/methode/glossaire/#etiquette-de-champ-de-formulaire)  mélange une portion de texte qui se lit de droite à gauche avec une portion de texte qui se lit de gauche à droite ;
-   Dans le cas où un formulaire contient des labels de plusieurs langues qui se liraient de droite à gauche et inversement. Par exemple, un formulaire de commande en arabe qui propose une liste de cases à cocher de produit en langue française ou mixant des produits en langue arabe ou en langue française ;
-   Dans le cas où les champs de type  `radio`  ou  `checkbox`  et les balises ayant un attribut WAI-ARIA  `role="checkbox"`,  `role="radio"`  ou  `role="switch"`  ne sont pas visuellement présentés sous forme de bouton radio ou de case à cocher ;
-   Dans le cas où les champs seraient utilisés dans un contexte où il pourrait être légitime, du point de vue de l’expérience utilisateur, de placer les étiquettes de manière différente à celle requise dans les tests 11.4.2 et 11.4.3.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G162](https://www.w3.org/WAI/WCAG21/Techniques/general/G162 "G162 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.3.2  Labels or Instructions  (A)

### 11.5Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), les  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  sont-ils regroupés, si nécessaire ?  [Critère 11.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5 "Critère 11.5")

Tests et références du critère 11.5

#### 11.5.1

Les  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  vérifient-ils l’une de ces conditions, si nécessaire ? [Test 11.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.5.1 "Test 11.5.1")

-   Les  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  sont regroupés dans une balise  `<fieldset>` ;
-   Les  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  sont regroupés dans une balise possédant un attribut WAI-ARIA  `role="group"` ;
-   Les  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  de type radio (`<input type="radio">`) ou balises possédant un attribut WAI-ARIA  `role="radio"`) sont regroupés dans une balise possédant un attribut WAI-ARIA  `role="radiogroup"`  ou  `role="group"`.

Méthodologie du test 11.5.1

1.  Retrouver dans le document les champs de formulaire de même nature (par exemple un groupe de saisie d’informations d’identité, une série de cases à cocher, une saisie de date sur plusieurs champs successifs…) ;
2.  Pour chaque groupe de champs de formulaire de même nature, vérifier que ces champs de même nature sont regroupés :
    -   Soit dans un élément  `<fieldset>` ;
    -   Soit dans un élément possédant un attribut WAI-ARIA  `role="group"` ;
    -   Soit dans un élément possédant un attribut WAI-ARIA  `role="radiogroup"`  ou  `"group"`, s’il s’agit d’éléments  `<input>`  de type  `radio`  ( ou d’éléments possédant un attribut WAI-ARIA  `role="radio"`).
3.  Si c’est le cas pour chaque groupe de champs de formulaire de même nature,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H71](https://www.w3.org/WAI/WCAG21/Techniques/html/H71 "H71 - nouvelle fenêtre")
-   [ARIA17](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17 "ARIA17 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.3.3.2  Labels or Instructions  (A)

### 11.6Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), chaque regroupement de  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  a-t-il une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende) ?  [Critère 11.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.6 "Critère 11.6")

Tests et références du critère 11.6

#### 11.6.1

Chaque regroupement de  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  possède-t-il une  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende) ? [Test 11.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.6.1 "Test 11.6.1")

Méthodologie du test 11.6.1

1.  Retrouver dans le document les groupes de champs de formulaire de même nature ;
2.  Pour chaque groupe de champs de formulaire de même nature, vérifier que :
    -   Si le regroupement utilise un élément  `<fieldset>`, l’élément  `<fieldset>`  possède un élément  `<legend>` ;
    -   Si l’élément de regroupement utilise un attribut WAI-ARIA  `role="group"`  ou  `"radiogroup"`, il possède un attribut WAI-ARIA  `aria-label`  ou  `aria-labelledby`.
3.  Sinon, pour chacun des champs de même nature, vérifier la présence :
    -   Soit d’un attribut title permettant de déterminer l’appartenance du champ au groupement de champ ;
    -   Soit d’un attribut  `aria-label`  permettant de déterminer l’appartenance du champ au groupement de champ ;
    -   Soit d’un attribut  `aria-labelledby`  qui référence un passage de texte permettant de déterminer l’appartenance du champ au groupement de champ ;
    -   Soit d’un attribut  `aria-describedby`  qui référence un passage de texte permettant de déterminer l’appartenance du champ au groupement de champ.
4.  Si c’est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H71](https://www.w3.org/WAI/WCAG21/Techniques/html/H71 "H71 - nouvelle fenêtre")
-   [ARIA17](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17 "ARIA17 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.3.3.2  Labels or Instructions  (A)

### 11.7Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), chaque  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende)  associée à un regroupement de  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  est-elle pertinente ?  [Critère 11.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.7 "Critère 11.7")

Tests et références du critère 11.7

#### 11.7.1

Chaque  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende)  associée à un regroupement de  [champs de même nature](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champs-de-meme-nature)  est-elle pertinente ? [Test 11.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.7.1 "Test 11.7.1")

Méthodologie du test 11.7.1

1.  Retrouver dans le document les groupes de champs de formulaire de même nature ;
2.  Pour chaque groupe de champs de formulaire de même nature ou pour chacun des champs de même nature qui dispose d’une légende, vérifier que le texte de cette légende est pertinent ;
3.  Si c’est le cas pour chaque groupe de champs de formulaire ou pour chacun des champs de même nature,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H71](https://www.w3.org/WAI/WCAG21/Techniques/html/H71 "H71 - nouvelle fenêtre")
-   [ARIA17](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA17 "ARIA17 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.3.3.2  Labels or Instructions  (A)

### 11.8Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), les  [items de même nature d’une liste de choix](https://accessibilite.numerique.gouv.fr/methode/glossaire/#items-de-meme-nature-d-une-liste-de-choix)  sont-ils regroupés de manière pertinente ?  [Critère 11.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.8 "Critère 11.8")

Tests et références du critère 11.8

#### 11.8.1

Pour chaque balise  `<select>`, les  [items de même nature d’une liste de choix](https://accessibilite.numerique.gouv.fr/methode/glossaire/#items-de-meme-nature-d-une-liste-de-choix)  sont-ils regroupés avec une balise  `<optgroup>`, si nécessaire ? [Test 11.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.8.1 "Test 11.8.1")

Méthodologie du test 11.8.1

1.  Retrouver dans le document les listes de sélection (élément  `<select>`) ;
2.  Pour chaque liste de sélection proposant des groupes d’items de même nature, vérifier que ces items sont regroupés au moyen d’éléments  `<optgroup>` ;
3.  Si c’est le cas pour chaque liste de sélection proposant des groupes d’items de même nature,  **le test est validé**.

#### 11.8.2

Dans chaque balise  `<select>`, chaque balise  `<optgroup>`  possède-t-elle un attribut  `label` ? [Test 11.8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.8.2 "Test 11.8.2")

Méthodologie du test 11.8.2

1.  Retrouver dans le document les listes de sélection (élément  `<select>`) qui possèdent des éléments  `<optgroup>` ;
2.  Pour chaque élément  `<optgroup>`, vérifier qu’il possède un attribut  `label` ;
3.  Si c’est le cas pour chaque élément  `<optgroup>`,  **le test est validé**.

#### 11.8.3

Pour chaque balise  `<optgroup>`  ayant un attribut  `label`, le contenu de l’attribut  `label`  est-il pertinent ? [Test 11.8.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.8.3 "Test 11.8.3")

Méthodologie du test 11.8.3

1.  Retrouver dans le document les listes de sélection (élément  `<select>`) qui possèdent des éléments  `<optgroup>`  pourvus d’un attribut  `label` ;
2.  Pour chaque attribut  `label`, vérifier que son contenu est pertinent ;
3.  Si c’est le cas pour chaque attribut  `label`,  **le test est validé**.

#### Notes techniques

Il est possible d’utiliser une balise ayant un attribut WAI-ARIA  `role="listbox"`  en remplacement d’une balise  `<select>`. En revanche, il est impossible de créer des groupes d’options via l’utilisation de WAI-ARIA. De ce fait, une liste nécessitant un regroupement d’options structurée à l’aide d’une balise ayant un attribut WAI-ARIA  `role="listbox"`  sera considérée comme non conforme au critère 11.8.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H85](https://www.w3.org/WAI/WCAG21/Techniques/html/H85 "H85 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)

### 11.9Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), l’intitulé de chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  est-il pertinent (hors cas particuliers) ?  [Critère 11.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9 "Critère 11.9")

Tests et références du critère 11.9

#### 11.9.1

L’intitulé de chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  vérifie-t-il ces conditions (hors cas particuliers) ? [Test 11.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9.1 "Test 11.9.1")

-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label`  est pertinent ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  lié au bouton via un attribut WAI-ARIA  `aria-labelledby`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `value`  d’une balise  `<input>`  de type  `submit`,  `reset`  ou  `button`  est pertinent ;
-   S’il est présent, le contenu de la balise  `<button>`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `alt`  d’une balise  `<input>`  de type  `image`  est pertinent ;
-   S’il est présent, le contenu de l’attribut  `title`  est pertinent.

Méthodologie du test 11.9.1

1.  Retrouver dans le document les boutons présents au sein d’un formulaire ;
2.  Pour chaque bouton, vérifier que son intitulé visible et son nom accessible sont pertinents ;
3.  Si c’est le cas pour chaque bouton,  **le test est validé**.

#### 11.9.2

Chaque  [bouton](https://accessibilite.numerique.gouv.fr/methode/glossaire/#bouton-formulaire)  affichant un  [intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible)  vérifie-t-il ces conditions (hors cas particuliers) ? [Test 11.9.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.9.2 "Test 11.9.2")

-   S’il est présent, le contenu de l’attribut WAI-ARIA  `aria-label` contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  lié au bouton via un attribut WAI-ARIA  `aria-labelledby`  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le contenu de l’attribut value d’une balise  `<input>`  de type  `submit`,  `reset`  ou  `button`  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le contenu de la balise  `<button>`  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le contenu de l’attribut  `alt`  d’une balise  `<input>`  de type  `image`  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible) ;
-   S’il est présent, le contenu de l’attribut  `title`  contient au moins l’[intitulé visible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#intitule-visible).

Méthodologie du test 11.9.2

1.  Retrouver dans le document les boutons présents au sein d’un formulaire ;
2.  Pour chaque bouton, vérifier que son nom accessible contient au moins son intitulé visible ;
3.  Si c’est le cas pour chaque bouton,  **le test est validé**.

#### Cas particuliers

Pour le test 11.9.2, voir cas particuliers critère 11.2.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.5.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#label-in-name "critère 2.5.3 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H36](https://www.w3.org/WAI/WCAG21/Techniques/html/H36 "H36 - nouvelle fenêtre")
-   [H91](https://www.w3.org/WAI/WCAG21/Techniques/html/H91 "H91 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")
-   [ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9 "ARIA9 - nouvelle fenêtre")
-   [ARIA14](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA14 "ARIA14 - nouvelle fenêtre")
-   [ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16 "ARIA16 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.5.3  Label in Name  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 11.10Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), le  [contrôle de saisie](https://accessibilite.numerique.gouv.fr/methode/glossaire/#controle-de-saisie-formulaire)  est-il utilisé de manière pertinente (hors cas particuliers) ?  [Critère 11.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10 "Critère 11.10")

Tests et références du critère 11.10

#### 11.10.1

Les  [indications du caractère obligatoire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-de-champ-obligatoire)  de la saisie des champs vérifient-elles une de ces conditions (hors cas particuliers) ? [Test 11.10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.1 "Test 11.10.1")

-   Une  [indication de champ obligatoire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-de-champ-obligatoire)  est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire ;
-   Le champ obligatoire dispose de l’attribut  `aria-required="true"`  ou  `required`  préalablement à la validation du formulaire.

Méthodologie du test 11.10.1

1.  Retrouver dans le document les champs de formulaire obligatoires ;
2.  Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
    -   Soit une indication de champ obligatoire est visible et permet d’identifier nommément le champ concerné ;
    -   Soit le champ possède un attribut  `aria-required="true"`  ou  `required`.
3.  Si c’est le cas pour chaque champ de formulaire obligatoire,  **le test est validé**.

#### 11.10.2

Les champs obligatoires ayant l’attribut  `aria-required="true"`  ou  `required`  vérifient-ils une de ces conditions ? [Test 11.10.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.2 "Test 11.10.2")

-   Une  [indication de champ obligatoire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-de-champ-obligatoire)  est visible et située dans l’étiquette associée au champ préalablement à la validation du formulaire ;
-   Une  [indication de champ obligatoire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#indication-de-champ-obligatoire)  est visible et située dans le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé au champ préalablement à la validation du formulaire.

Méthodologie du test 11.10.2

1.  Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut  `aria-required="true"`  ou  `required` ;
2.  Pour chaque champ de formulaire, vérifier que préalablement à la validation du formulaire :
    -   Soit une indication de champ obligatoire est visible et située dans l’étiquette associée au champ ;
    -   Soit une indication de champ obligatoire est visible et située dans le passage de texte associé au champ.
3.  Si c’est le cas pour chaque champ de formulaire obligatoire qui possèdent un attribut  `aria-required="true"`  ou  `required`,  **le test est validé**.

#### 11.10.3

Les messages d’erreur indiquant l’absence de saisie d’un champ obligatoire vérifient-ils une de ces conditions ? [Test 11.10.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.3 "Test 11.10.3")

-   Le message d’erreur indiquant l’absence de saisie d’un champ obligatoire est visible et permet d’identifier nommément le champ concerné ;
-   Le champ obligatoire dispose de l’attribut  `aria-invalid="true"`.

Méthodologie du test 11.10.3

1.  Retrouver dans le document les messages d’erreur indiquant l’absence de saisie d’un champ obligatoire ;
2.  Pour chaque message d’erreur, vérifier que :
    -   Soit le message d’erreur est visible et permet d’identifier nommément le champ concerné ;
    -   Soit le champ obligatoire associé au message d’erreur possède un attribut  `aria-invalid="true"`.
3.  Si c’est le cas pour chaque message d’erreur indiquant l’absence de saisie d’un champ obligatoire,  **le test est validé**.

#### 11.10.4

Les champs obligatoires ayant l’attribut  `aria-invalid="true"`  vérifient-ils une de ces conditions ? [Test 11.10.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.4 "Test 11.10.4")

-   Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans l’étiquette associée au champ ;
-   Le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé au champ.

Méthodologie du test 11.10.4

1.  Retrouver dans le document les champs de formulaire obligatoires qui possèdent un attribut  `aria-invalid="true"` ;
2.  Pour chaque champ de formulaire, vérifier que :
    -   Soit le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans l’étiquette associée au champ ;
    -   Soit le message d’erreur indiquant le caractère invalide de la saisie est visible et situé dans le passage de texte associé au champ.
3.  Si c’est le cas pour chaque champ de formulaire obligatoire qui possède un attribut  `aria-invalid="true"`,  **le test est validé**.

#### 11.10.5

Les instructions et indications du type de données et/ou de format obligatoires vérifient-elles une de ces conditions ? [Test 11.10.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.5 "Test 11.10.5")

-   Une instruction ou une indication du type de données et/ou de format obligatoire est visible et permet d’identifier nommément le champ concerné préalablement à la validation du formulaire ;
-   Une instruction ou une indication du type de données et/ou de format obligatoire est visible dans l’étiquette ou le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé au champ préalablement à la validation du formulaire.

Méthodologie du test 11.10.5

1.  Retrouver dans le document les champs de formulaire obligatoires auxquels est associée une instruction ou une indication du type de données et/ou de format obligatoire ;
2.  Pour chaque champ de formulaire, vérifier que l’instruction ou l’indication du type de données et/ou de format obligatoire est préalablement à la validation du formulaire :
    -   Soit visible et permet d’identifier nommément le champ concerné ;
    -   Soit visible dans l’étiquette ou le passage de texte associé au champ.
3.  Si c’est le cas pour chaque champ de formulaire obligatoire auquel est associée une instruction ou une indication du type de données et/ou de format obligatoire,  **le test est validé**.

#### 11.10.6

Les messages d’erreurs fournissant une instruction ou une indication du type de données et/ou de format obligatoire des champs vérifient-ils une de ces conditions ? [Test 11.10.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.6 "Test 11.10.6")

-   Le message d’erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoires est visible et identifie le champ concerné ;
-   Le champ dispose de l’attribut  `aria-invalid="true"`.

Méthodologie du test 11.10.6

1.  Retrouver dans le document les messages d’erreur fournissant une instruction ou une indication du type de données et/ou de format obligatoire d’un champ ;
2.  Pour chaque message d’erreur, vérifier que :
    -   Soit le message d’erreur est visible et permet d’identifier nommément le champ concerné ;
    -   Soit le champ associé au message d’erreur possède un attribut  `aria-invalid="true"`.
3.  Si c’est le cas pour chaque message d’erreur indiquant l’absence de saisie d’un champ obligatoire,  **le test est validé**.

#### 11.10.7

Les champs ayant l’attribut  `aria-invalid="true"`  dont la saisie requiert un type de données et/ou de format obligatoires vérifient-ils une de ces conditions ? [Test 11.10.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.10.7 "Test 11.10.7")

-   Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans la balise  `<label>`  associée au champ ;
-   Une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le  [passage de texte](https://accessibilite.numerique.gouv.fr/methode/glossaire/#passage-de-texte-lie-par-aria-labelledby-ou-aria-describedby)  associé au champ.

Méthodologie du test 11.10.7

1.  Retrouver dans le document les champs de formulaire qui possèdent un attribut  `aria-invalid="true"` ;
2.  Pour chaque champ de formulaire, vérifier que :
    -   Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans l’élément  `<label>`  associé au champ ;
    -   Soit une instruction ou une indication du type de données et/ou de format obligatoire est visible et située dans le passage de texte associé au champ.
3.  Si c’est le cas pour chaque champ de formulaire qui possède un attribut  `aria-invalid="true"`,  **le test est validé**.

#### Cas particuliers

Le test 11.10.1 et le test 11.10.2 seront considérés comme non applicables lorsque le formulaire comporte un seul  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ou qu’il indique les champs optionnels de manière :

-   Visible ;
-   Dans la balise  `<label>`  ou dans la  [légende](https://accessibilite.numerique.gouv.fr/methode/glossaire/#legende)  associée au champ.

Dans le cas où l’ensemble des champs d’un formulaire sont obligatoires, les tests 11.10.1 et 11.10.2 restent applicables.

#### Notes techniques

Dans un long formulaire dont la majorité des champs sont obligatoires, on pourrait constater que ce sont les quelques champs restés facultatifs qui sont explicitement signalés comme tels. Dans ce cas, il faudrait s’assurer que :

-   Un message précise visuellement en haut de formulaire que “tous les champs sont obligatoires sauf ceux indiqués comme étant facultatifs” ;
-   Une mention “facultatif” est présente visuellement dans le libellé des champs facultatifs ou dans la légende d’un groupe de champs facultatifs ;
-   Un attribut  `required`  ou  `aria-required="true"`  reste associé à chaque champ qui n’est pas concerné par ce caractère facultatif.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#error-identification "critère 3.3.1 (A) - nouvelle fenêtre")
-   [3.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#labels-or-instructions "critère 3.3.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G83](https://www.w3.org/WAI/WCAG21/Techniques/general/G83 "G83 - nouvelle fenêtre")
-   [G84](https://www.w3.org/WAI/WCAG21/Techniques/general/G84 "G84 - nouvelle fenêtre")
-   [G85](https://www.w3.org/WAI/WCAG21/Techniques/general/G85 "G85 - nouvelle fenêtre")
-   [G89](https://www.w3.org/WAI/WCAG21/Techniques/general/G89 "G89 - nouvelle fenêtre")
-   [G184](https://www.w3.org/WAI/WCAG21/Techniques/general/G184 "G184 - nouvelle fenêtre")
-   [H44](https://www.w3.org/WAI/WCAG21/Techniques/html/H44 "H44 - nouvelle fenêtre")
-   [H81](https://www.w3.org/WAI/WCAG21/Techniques/html/H81 "H81 - nouvelle fenêtre")
-   [H89](https://www.w3.org/WAI/WCAG21/Techniques/html/H89 "H89 - nouvelle fenêtre")
-   [H90](https://www.w3.org/WAI/WCAG21/Techniques/html/H90 "H90 - nouvelle fenêtre")
-   [F81](https://www.w3.org/WAI/WCAG21/Techniques/failures/F81 "F81 - nouvelle fenêtre")
-   [SCR18](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR18 "SCR18 - nouvelle fenêtre")
-   [SCR32](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR32 "SCR32 - nouvelle fenêtre")
-   [ARIA1](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA1 "ARIA1 - nouvelle fenêtre")
-   [ARIA2](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA2 "ARIA2 - nouvelle fenêtre")
-   [ARIA6](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA6 "ARIA6 - nouvelle fenêtre")
-   [ARIA9](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA9 "ARIA9 - nouvelle fenêtre")
-   [ARIA16](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA16 "ARIA16 - nouvelle fenêtre")
-   [ARIA21](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA21 "ARIA21 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.3.1  Error Identification  (A)
-   9.3.3.2  Labels or Instructions  (A)

### 11.11Dans chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire), le  [contrôle de saisie](https://accessibilite.numerique.gouv.fr/methode/glossaire/#controle-de-saisie-formulaire)  est-il accompagné, si nécessaire, de suggestions facilitant la correction des erreurs de saisie ?  [Critère 11.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.11 "Critère 11.11")

Tests et références du critère 11.11

#### 11.11.1

Pour chaque erreur de saisie, les types et les formats de données sont-ils suggérés, si nécessaire ? [Test 11.11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.11.1 "Test 11.11.1")

Méthodologie du test 11.11.1

1.  Retrouver dans le document les messages d’erreur ;
2.  Pour chaque message d’erreur, vérifier que les types et les formats de données attendus sont suggérés ;
3.  Si c’est le cas pour chaque message d’erreur ,  **le test est validé**.

#### 11.11.2

Pour chaque erreur de saisie, des exemples de valeurs attendues sont-ils suggérés, si nécessaire ? [Test 11.11.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.11.2 "Test 11.11.2")

Méthodologie du test 11.11.2

1.  Retrouver dans le document les messages d’erreur ;
2.  Pour chaque message d’erreur, vérifier que des exemples de valeurs attendues sont suggérés ;
3.  Si c’est le cas pour chaque message d’erreur ,  **le test est validé**.

#### Notes techniques

Certains types de contrôles en HTML5 proposent des messages d’aide à la saisie automatique : par exemple le type  `email`  affiche un message du type « veuillez saisir une adresse e-mail valide » dans le cas où l’adresse e-mail saisie ne correspond pas au format attendu. Ces messages sont personnalisables via l’API Constraint Validation, ce qui permet de personnaliser les messages d’erreur et de valider le critère. L’attribut  `pattern`  permet d’effectuer automatiquement des contrôles de format (via des expressions régulières) et affiche un message d’aide personnalisable via l’attribut  `title` : ce dispositif valide également le critère.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.3.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-suggestion "critère 3.3.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G84](https://www.w3.org/WAI/WCAG21/Techniques/general/G84 "G84 - nouvelle fenêtre")
-   [G85](https://www.w3.org/WAI/WCAG21/Techniques/general/G85 "G85 - nouvelle fenêtre")
-   [G89](https://www.w3.org/WAI/WCAG21/Techniques/general/G89 "G89 - nouvelle fenêtre")
-   [G177](https://www.w3.org/WAI/WCAG21/Techniques/general/G177 "G177 - nouvelle fenêtre")
-   [H89](https://www.w3.org/WAI/WCAG21/Techniques/html/H89 "H89 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.3.3  Error Suggestion  (AA)

### 11.12Pour chaque  [formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#formulaire)  qui modifie ou supprime des données, ou qui transmet des réponses à un test ou à un examen, ou dont la validation a des conséquences financières ou juridiques, les données saisies peuvent-elles être modifiées, mises à jour ou récupérées par l’utilisateur ?  [Critère 11.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12 "Critère 11.12")

Tests et références du critère 11.12

#### 11.12.1

Pour chaque formulaire qui modifie ou supprime des données, ou qui transmet des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques, la saisie des données vérifie-t-elle une de ces conditions ? [Test 11.12.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12.1 "Test 11.12.1")

-   L’utilisateur peut  [modifier ou annuler les données et les actions effectuées](https://accessibilite.numerique.gouv.fr/methode/glossaire/#modifier-ou-annuler-les-donnees-et-les-actions-effectues)  sur ces données après la validation du formulaire ;
-   L’utilisateur peut vérifier et corriger les données avant la validation d’un formulaire en plusieurs étapes ;
-   Un mécanisme de confirmation explicite, via une case à cocher (balise  `<input>`  de type  `checkbox`  ou balise ayant un attribut WAI-ARIA  `role="checkbox"`) ou une étape supplémentaire, est présent.

Méthodologie du test 11.12.1

1.  Retrouver dans le document les formulaires qui modifient ou suppriment des données, ou qui transmettent des réponses à un test ou un examen, ou dont la validation a des conséquences financières ou juridiques ;
2.  Pour chaque formulaire, vérifier que l’utilisateur peut :
    -   Soit modifier ou annuler les données et les actions effectuées sur ces données après la validation du formulaire ;
    -   Soit vérifier et corriger les données avant la validation d’un formulaire en plusieurs étapes ;
    -   Soit disposer d’un mécanisme de confirmation explicite (par exemple, une case à cocher ou une étape supplémentaire).
3.  Si c’est le cas pour chaque formulaire retrouvé,  **le test est validé**.

#### 11.12.2

Chaque formulaire dont la validation modifie ou supprime des données à caractère financier, juridique ou personnel vérifie-t-il une de ces conditions ? [Test 11.12.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.12.2 "Test 11.12.2")

-   Un mécanisme permet de récupérer les données supprimées ou modifiées par l’utilisateur ;
-   Un mécanisme de demande de confirmation explicite de la suppression ou de la modification, via un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  ou une étape supplémentaire, est proposé.

Méthodologie du test 11.12.2

1.  Retrouver dans le document les formulaires qui modifient ou suppriment des données à caractère financier, juridique ou personnel ;
2.  Pour chaque formulaire, vérifier que l’utilisateur dispose :
    -   Soit d’un mécanisme qui permet de récupérer les données supprimées ou modifiées ;
    -   Soit d’un mécanisme de demande de confirmation explicite de la suppression ou de la modification (par exemple, une case à cocher ou une étape supplémentaire).
3.  Si c’est le cas pour chaque formulaire retrouvé,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.3.4 (AA)](https://www.w3.org/Translations/WCAG21-fr/#error-prevention-legal-financial-data "critère 3.3.4 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G98](https://www.w3.org/WAI/WCAG21/Techniques/general/G98 "G98 - nouvelle fenêtre")
-   [G99](https://www.w3.org/WAI/WCAG21/Techniques/general/G99 "G99 - nouvelle fenêtre")
-   [G155](https://www.w3.org/WAI/WCAG21/Techniques/general/G155 "G155 - nouvelle fenêtre")
-   [G164](https://www.w3.org/WAI/WCAG21/Techniques/general/G164 "G164 - nouvelle fenêtre")
-   [G168](https://www.w3.org/WAI/WCAG21/Techniques/general/G168 "G168 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.3.4  Error Prevention (Legal, Financial, Data)  (AA)

### 11.13La finalité d’un champ de saisie peut-elle être déduite pour faciliter le remplissage automatique des champs avec les données de l’utilisateur ?  [Critère 11.13](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.13 "Critère 11.13")

Tests et références du critère 11.13

#### 11.13.1

Chaque  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  dont l’objet se rapporte à une information concernant l’utilisateur vérifie-t-il ces conditions ? [Test 11.13.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#11.13.1 "Test 11.13.1")

-   Le  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire)  possède un attribut  `autocomplete` ;
-   L’attribut  `autocomplete`  est pourvu d’une valeur présente dans la  [liste des valeurs possibles pour l’attribut  `autocomplete`](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liste-des-valeurs-possibles-pour-l-attribut-autocomplete)  associés à un  [champ de formulaire](https://accessibilite.numerique.gouv.fr/methode/glossaire/#champ-de-saisie-de-formulaire) ;
-   La valeur indiquée pour l’attribut  `autocomplete`  est pertinente au regard du type d’information attendu.

Méthodologie du test 11.13.1

1.  Retrouver dans le document les champs de formulaire qui se rapportent à une information concernant l’utilisateur (nom, prénom, numéro de téléphone, etc.) ;
2.  Pour chaque champ de formulaire, vérifier que :
    -   Le champ de formulaire possède un attribut  `autocomplete` ;
    -   L’attribut  `autocomplete`  est pourvu d’une valeur présente dans la  [liste des valeurs possibles](https://www.w3.org/TR/html52/sec-forms.html#autofill-processing-model "liste des valeurs possibles - en anglais - nouvelle fenêtre") ;
    -   La valeur indiquée pour l’attribut  `autocomplete`  est pertinente au regard du type d’information attendu.
3.  Si c’est le cas pour chaque champ de formulaire retrouvé,  **le test est validé**.

#### Notes techniques

La  [liste des valeurs possibles pour l’attribut  `autocomplete`](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liste-des-valeurs-possibles-pour-l-attribut-autocomplete)  repose sur la liste des valeurs présentes dans la spécification WCAG2.1 qui reprend elle-même la liste des valeurs de type “field name” de la spécification HTML5.2. Le critère WCAG demande à ce que l’une de ces valeurs soit présente pour qualifier un champ de saisie concernant l’utilisateur.

Ce que le critère WCAG laisse implicite, ce sont les différentes règles de construction possibles pour obtenir une valeur (simple ou composée) pour l’attribut  `autocomplete`. C’est cependant l’affaire du développeur de fournir à l’attribut  `autocomplete`  une valeur ou un ensemble de valeurs valides au regard des exigences de l’algorithme fourni par la spécification HTML5.2. Ainsi, un attribut  `autocomplete`  ne peut contenir qu’une seule valeur de type  `“field name”`, comme  `"name"`  ou  `"street-address"`. On peut avoir également un ensemble composé de différentes valeurs comme, par exemple,  `autocomplete="shipping name"`  ou  `autocomplete="section-software shipping street-address"` :  `"section-software"`  renvoie à une valeur de type  “scope”  et  `"shipping"`  à une valeur de type  “hint set”, mais toujours une seule valeur de type  “field name”.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#identify-input-purpose "critère 1.3.5 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H98](https://www.w3.org/WAI/WCAG21/Techniques/html/H98 "H98 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.5  Identify Input Purpose  (AA)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 12. Navigation [Thématique Navigation](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12 "Thématique Navigation")

### 12.1Chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages)  dispose-t-il de deux  [systèmes de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#systeme-de-navigation)  différents, au moins (hors cas particuliers) ?  [Critère 12.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.1 "Critère 12.1")

Tests et références du critère 12.1

#### 12.1.1

Chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 12.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.1.1 "Test 12.1.1")

-   Un  [menu de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  et un  [plan du site](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  sont présents ;
-   Un  [menu de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  et un  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  sont présents ;
-   Un  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  et un  [plan du site](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  sont présents.

Méthodologie du test 12.1.1

1.  Pour chaque ensemble de pages du site, vérifier la présence :
    -   Soit d’un menu de navigation et d’un plan du site ;
    -   Soit d’un menu de navigation et d’un moteur de recherche ;
    -   Soit d’un moteur de recherche et d’un plan du site.
2.  Si c’est le cas pour chaque ensemble de pages du site,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particulier lorsque le site web est constitué d’une seule page ou d’un nombre très limité de pages (cf. note). Dans ce cas-là, le critère est non applicable.

Le critère est également non applicable pour les pages d’un ensemble de pages qui sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple).

Note : l’appréciation d’un nombre très limité de pages devrait être réservé à un site dont l’ensemble des pages sont atteignables depuis la page d’accueil.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#multiple-ways "critère 2.4.5 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G63](https://www.w3.org/WAI/WCAG21/Techniques/general/G63 "G63 - nouvelle fenêtre")
-   [G64](https://www.w3.org/WAI/WCAG21/Techniques/general/G64 "G64 - nouvelle fenêtre")
-   [G161](https://www.w3.org/WAI/WCAG21/Techniques/general/G161 "G161 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.5  Multiple Ways  (AA)

### 12.2Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), le  [menu et les barres de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  sont-ils toujours à la même place (hors cas particuliers) ?  [Critère 12.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.2 "Critère 12.2")

Tests et références du critère 12.2

#### 12.2.1

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), chaque page disposant d’un  [menu et les barres de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  vérifie-t-elle ces conditions (hors cas particuliers) ? [Test 12.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.2.1 "Test 12.2.1")

-   Le  [menu et les barres de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  sont toujours à la même place dans la présentation ;
-   Le  [menu et les barres de navigation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation)  se présentent toujours dans le même ordre relatif dans le code source.

Méthodologie du test 12.2.1

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer visuellement les deux pages et vérifier que le menu ou les barres de navigation sont toujours à la même place dans la présentation ;
3.  Comparer le code source (généré côté client) des deux pages et vérifier que le menu ou les barres de navigation se présentent toujours dans le même ordre relatif dans la structure ;
4.  Si c’est le cas,  **le test est validé**.

Note : le critère est non applicable dans les situations où :

-   Les pages d’un ensemble de pages sont le résultat ou une partie d’un processus (un processus de paiement ou de prise de commande, par exemple) ;
-   La page est la page d’accueil ;
-   Le site web est constitué d’une seule page.

#### Cas particuliers

Il existe une gestion de cas particuliers lorsque :

-   La page est la page d’accueil ;
-   Le site web est constitué d’une seule page ;
-   Le changement fait suite à une modification initiée par l’utilisateur.

Dans ces situations, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.2.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-navigation "critère 3.2.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G61](https://www.w3.org/WAI/WCAG21/Techniques/general/G61 "G61 - nouvelle fenêtre")
-   [F66](https://www.w3.org/WAI/WCAG21/Techniques/failures/F66 "F66 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.2.3  Consistent Navigation  (AA)

### 12.3La  [page « plan du site »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  est-elle pertinente ?  [Critère 12.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.3 "Critère 12.3")

Tests et références du critère 12.3

#### 12.3.1

La  [page « plan du site »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  est-elle représentative de l’architecture générale du site ? [Test 12.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.3.1 "Test 12.3.1")

Méthodologie du test 12.3.1

1.  Vérifier que le plan du site est représentatif de l’architecture générale du site (cf. note) ;
2.  Si c’est le cas,  **le test est validé**.

Note : Un plan du site trop complexe ou trop profond n’est pas recommandé pour aider à la navigation. Il n’est pas obligatoire que toutes les pages soient présentes dans le plan du site si elles peuvent être atteintes, par exemple, à partir de la page d’accueil d’une rubrique ou d’un catalogue.

#### 12.3.2

Les liens du  [plan du site](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  sont-ils fonctionnels ? [Test 12.3.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.3.2 "Test 12.3.2")

Méthodologie du test 12.3.2

1.  Pour tous les liens du plan du site, vérifier qu’ils sont fonctionnels ;
2.  Si c’est le cas,  **le test est validé**.

#### 12.3.3

Les liens du  [plan du site](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  renvoient-ils bien vers les pages indiquées par l’intitulé ? [Test 12.3.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.3.3 "Test 12.3.3")

Méthodologie du test 12.3.3

1.  Pour tous les liens du plan du site, vérifier qu’ils sont à jour (ni obsolètes ni en erreur) et conduisent à la page indiquée par leur intitulé ;
2.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#multiple-ways "critère 2.4.5 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G63](https://www.w3.org/WAI/WCAG21/Techniques/general/G63 "G63 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.5  Multiple Ways  (AA)

### 12.4Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), la  [page « plan du site »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  est-elle accessible à partir d’une fonctionnalité identique ?  [Critère 12.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.4 "Critère 12.4")

Tests et références du critère 12.4

#### 12.4.1

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), la  [page « plan du site »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  est-elle accessible à partir d’une fonctionnalité identique ? [Test 12.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.4.1 "Test 12.4.1")

Méthodologie du test 12.4.1

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au plan du site est toujours le même (un lien ou un bouton, par exemple) ;
3.  Si c’est le cas,  **le test est validé**.

#### 12.4.2

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), la fonctionnalité vers la  [page « plan du site »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  est-elle située à la même place dans la présentation ? [Test 12.4.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.4.2 "Test 12.4.2")

Méthodologie du test 12.4.2

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au plan du site est toujours à la même place dans la structure (par rapport à l’ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;
3.  Si c’est le cas,  **le test est validé**.

#### 12.4.3

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), la fonctionnalité vers la  [page « plan du site »](https://accessibilite.numerique.gouv.fr/methode/glossaire/#page-plan-du-site)  se présente-t-elle toujours dans le même ordre relatif dans le code source ? [Test 12.4.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.4.3 "Test 12.4.3")

Méthodologie du test 12.4.3

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer visuellement les deux pages et vérifier que le moyen d’accès au plan du site est toujours à la même place dans la présentation ;
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.5 (AA)](https://www.w3.org/Translations/WCAG21-fr/#multiple-ways "critère 2.4.5 (AA) - nouvelle fenêtre")
-   [3.2.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-navigation "critère 3.2.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G61](https://www.w3.org/WAI/WCAG21/Techniques/general/G61 "G61 - nouvelle fenêtre")
-   [G63](https://www.w3.org/WAI/WCAG21/Techniques/general/G63 "G63 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.5  Multiple Ways  (AA)
-   9.3.2.3  Consistent Navigation  (AA)

### 12.5Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), le  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  est-il atteignable de manière identique ?  [Critère 12.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.5 "Critère 12.5")

Tests et références du critère 12.5

#### 12.5.1

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), le  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  est-il accessible à partir d’une fonctionnalité identique ? [Test 12.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.5.1 "Test 12.5.1")

Méthodologie du test 12.5.1

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au moteur de recherche est toujours le même (un champ de formulaire, par exemple) ;
3.  Si c’est le cas,  **le test est validé**.

#### 12.5.2

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), la fonctionnalité vers le  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  est-elle située à la même place dans la présentation ? [Test 12.5.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.5.2 "Test 12.5.2")

Méthodologie du test 12.5.2

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer visuellement les deux pages et vérifier que le moyen d’accès au moteur de recherche est toujours à la même place dans la présentation ;
3.  Si c’est le cas,  **le test est validé**.

#### 12.5.3

Dans chaque  [ensemble de pages](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ensemble-de-pages), la fonctionnalité vers le  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  se présente-t-elle toujours dans le même ordre relatif dans le code source ? [Test 12.5.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.5.3 "Test 12.5.3")

Méthodologie du test 12.5.3

1.  Choisir une page de l’échantillon appartenant au même ensemble que la page en cours d’audit ;
2.  Comparer le code source (généré côté client) des deux pages et vérifier que le moyen d’accès au moteur de recherche est toujours à la même place dans la structure (par rapport à l’ordre relatif des éléments de la page, par exemple il est toujours en haut de page) ;
3.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.2.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-navigation "critère 3.2.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G61](https://www.w3.org/WAI/WCAG21/Techniques/general/G61 "G61 - nouvelle fenêtre")
-   [F66](https://www.w3.org/WAI/WCAG21/Techniques/failures/F66 "F66 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.2.3  Consistent Navigation  (AA)

### 12.6Les zones de regroupement de contenus présentes dans plusieurs pages web (zones d’[en-tête](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-d-en-tete), de  [navigation principale](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation), de  [contenu principal](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-contenu-principal), de  [pied de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-pied-de-page)  et de  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)) peuvent-elles être atteintes ou évitées ?  [Critère 12.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.6 "Critère 12.6")

Tests et références du critère 12.6

#### 12.6.1

Dans chaque page web où elles sont présentes, la zone d’[en-tête](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-d-en-tete), de  [navigation principale](https://accessibilite.numerique.gouv.fr/methode/glossaire/#menu-et-barre-de-navigation), de  [contenu principal](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-contenu-principal), de  [pied de page](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-pied-de-page)  et de  [moteur de recherche](https://accessibilite.numerique.gouv.fr/methode/glossaire/#moteur-de-recherche-interne-a-un-site-web)  respectent-elles au moins une de ces conditions ? [Test 12.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.6.1 "Test 12.6.1")

-   La zone possède un rôle WAI-ARIA de type  [landmark](https://accessibilite.numerique.gouv.fr/methode/glossaire/#landmarks)  correspondant à sa nature ;
-   La zone possède un titre dont le contenu permet de comprendre la nature du contenu de la zone ;
-   La zone peut être masquée par le biais d’un bouton précédent directement la zone dans l’ordre du code source ;
-   La zone peut être évitée par le biais d’un  [lien d’évitement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liens-d-evitement-ou-d-acces-rapide)  précédent directement la zone dans l’ordre du code source ;
-   La zone peut être atteinte par le biais d’un  [lien d’accès rapide](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liens-d-evitement-ou-d-acces-rapide)  visible ou, à défaut, visible à la prise de focus.

Méthodologie du test 12.6.1

1.  Retrouver dans le document les zones de regroupement de contenus (zones d’en-tête, de navigation principale, de contenu principal, de pied de page et de moteur de recherche) ;
2.  Pour chaque zone, vérifier que la zone :
    -   Soit possède un rôle WAI-ARIA de type landmark correspondant à sa nature ;
    -   Soit possède un titre de hiérarchie dont le contenu permet de comprendre la nature du contenu de la zone ;
    -   Soit peut être masquée au moyen d’un bouton précédant directement la zone dans l’ordre du code source ;
    -   Soit peut être évitée au moyen d’un lien d’évitement précédant directement la zone dans l’ordre du code source ;
    -   Soit peut être atteinte au moyen d’un lien d’accès rapide soit visible par défaut, soit visible à la prise de focus lors d’une tabulation.
3.  Si c’est le cas pour chaque zone de regroupement de contenus,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [2.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks "critère 2.4.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [H69](https://www.w3.org/WAI/WCAG21/Techniques/html/H69 "H69 - nouvelle fenêtre")
-   [G115](https://www.w3.org/WAI/WCAG21/Techniques/general/G115 "G115 - nouvelle fenêtre")
-   [ARIA4](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA4 "ARIA4 - nouvelle fenêtre")
-   [ARIA11](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA11 "ARIA11 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.1  Info and Relationships  (A)
-   9.2.4.1  Bypass Blocks  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 12.7Dans chaque page web, un  [lien d’évitement ou d’accès rapide](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liens-d-evitement-ou-d-acces-rapide)  à la  [zone de contenu principal](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-contenu-principal)  est-il présent (hors cas particuliers) ?  [Critère 12.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7 "Critère 12.7")

Tests et références du critère 12.7

#### 12.7.1

Dans chaque page web, un lien permet-il d’éviter la  [zone de contenu principal](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-contenu-principal)  ou d’y accéder (hors cas particuliers) ? [Test 12.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7.1 "Test 12.7.1")

Méthodologie du test 12.7.1

1.  Retrouver dans le document la zone de contenu principal (indiquée par l’élément main visible) ;
2.  Vérifier que la zone :
    -   Soit peut être évitée au moyen d’un lien d’évitement précédant directement la zone dans l’ordre du code source ;
    -   Soit peut être atteinte au moyen d’un lien d’accès rapide visible à la prise de focus lors d’une tabulation.
3.  Si c’est le cas,  **le test est validé**.

#### 12.7.2

Dans chaque ensemble de pages, le  [lien d’évitement ou d’accès rapide](https://accessibilite.numerique.gouv.fr/methode/glossaire/#liens-d-evitement-ou-d-acces-rapide)  à la  [zone de contenu principal](https://accessibilite.numerique.gouv.fr/methode/glossaire/#zone-de-contenu-principal)  vérifie-t-il ces conditions (hors cas particuliers) ? [Test 12.7.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.7.2 "Test 12.7.2")

-   Le lien est situé à la même place dans la présentation ;
-   Le lien se présente toujours dans le même ordre relatif dans le code source ;
-   Le lien est visible ou, à défaut, visible à la prise de focus ;
-   Le lien est fonctionnel.

Méthodologie du test 12.7.2

1.  Retrouver dans le document la zone de contenu principal (indiquée par l’élément main visible) ;
2.  Vérifier que le lien d’évitement ou d’accès rapide à la zone est :
    -   Situé à la même place dans la présentation ;
    -   Présent toujours dans le même ordre relatif dans le code source (généré côté client) ;
    -   Visible à la prise de focus lors d’une tabulation ;
    -   Fonctionnel.
3.  Si c’est le cas,  **le test est validé**.

Note : lorsque le site web est constitué d’une seule page, l’obligation de la présence d’un lien d’accès rapide est liée au contexte de la page (présence ou absence de navigation ou de contenus additionnels, par exemple). Le critère peut être considéré comme non applicable lorsqu’il est avéré qu’un lien d’accès rapide est inutile.

#### Cas particuliers

Il existe une gestion de cas particuliers lorsque le site web est constitué d’une seule page.

Dans ce cas de figure, l’obligation de la présence d’un lien d’accès rapide est liée au contexte de la page : présence ou absence de navigation ou de contenus additionnels, par exemple. Le critère peut être considéré comme non applicable lorsqu’il est avéré qu’un lien d’accès rapide est inutile.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks "critère 2.4.1 (A) - nouvelle fenêtre")
-   [2.4.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order "critère 2.4.3 (A) - nouvelle fenêtre")
-   [3.2.3 (AA)](https://www.w3.org/Translations/WCAG21-fr/#consistent-navigation "critère 3.2.3 (AA) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G1](https://www.w3.org/WAI/WCAG21/Techniques/general/G1 "G1 - nouvelle fenêtre")
-   [G59](https://www.w3.org/WAI/WCAG21/Techniques/general/G59 "G59 - nouvelle fenêtre")
-   [G123](https://www.w3.org/WAI/WCAG21/Techniques/general/G123 "G123 - nouvelle fenêtre")
-   [G124](https://www.w3.org/WAI/WCAG21/Techniques/general/G124 "G124 - nouvelle fenêtre")
-   [SCR28](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR28 "SCR28 - nouvelle fenêtre")
-   [F66](https://www.w3.org/WAI/WCAG21/Techniques/failures/F66 "F66 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.1  Bypass Blocks  (A)
-   9.2.4.3  Focus Order  (A)
-   9.3.2.3  Consistent Navigation  (AA)

### 12.8Dans chaque page web, l’[ordre de tabulation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ordre-de-tabulation)  est-il  [cohérent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#comprehensible-ordre-de-lecture) ?  [Critère 12.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.8 "Critère 12.8")

Tests et références du critère 12.8

#### 12.8.1

Dans chaque page web, l’[ordre de tabulation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ordre-de-tabulation)  dans le contenu est-il  [cohérent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#comprehensible-ordre-de-lecture) ? [Test 12.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.8.1 "Test 12.8.1")

Méthodologie du test 12.8.1

1.  Parcourir dans le document l’ensemble des contenus au moyen de la touche de tabulation vers l’avant (touche Tab) et vers l’arrière (touches Maj+Tab) ;
2.  Vérifier que l’ordre de déplacement du focus reste cohérent relativement au contenu considéré (par exemple, l’ordre de tabulation dans une fenêtre modale ne doit considérer que les éléments d’interface présents au sein de cette fenêtre) ;
3.  Si c’est le cas,  **le test est validé**.

Note : il n’est pas obligatoire que la tabulation suive l’ordre de lecture naturel (de gauche à droite et de haut en bas par exemple) tant que les éléments sont accessibles dans un ordre cohérent.

#### 12.8.2

Pour chaque  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  qui met à jour ou insère un contenu, l’[ordre de tabulation](https://accessibilite.numerique.gouv.fr/methode/glossaire/#ordre-de-tabulation)  reste-t-il  [cohérent](https://accessibilite.numerique.gouv.fr/methode/glossaire/#comprehensible-ordre-de-lecture) ? [Test 12.8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.8.2 "Test 12.8.2")

Méthodologie du test 12.8.2

1.  Retrouver dans le document l’ensemble des contenus insérés au moyen d’un script (affichage d’éléments masqués, mise jour de contenu via AJAX par exemple) ;
2.  Positionner la tabulation sur l’élément déclencheur et l’activer ;
3.  Après l’affichage du contenu mis à jour, vérifier que la tabulation reste cohérente (repositionnement correct du focus) ;
4.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.4.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order "critère 2.4.3 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G59](https://www.w3.org/WAI/WCAG21/Techniques/general/G59 "G59 - nouvelle fenêtre")
-   [H4](https://www.w3.org/WAI/WCAG21/Techniques/html/H4 "H4 - nouvelle fenêtre")
-   [F44](https://www.w3.org/WAI/WCAG21/Techniques/failures/F44 "F44 - nouvelle fenêtre")
-   [F85](https://www.w3.org/WAI/WCAG21/Techniques/failures/F85 "F85 - nouvelle fenêtre")
-   [SCR26](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR26 "SCR26 - nouvelle fenêtre")
-   [SCR27](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR27 "SCR27 - nouvelle fenêtre")
-   [SCR37](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR37 "SCR37 - nouvelle fenêtre")
-   [C27](https://www.w3.org/WAI/WCAG21/Techniques/css/C27 "C27 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.4.3  Focus Order  (A)

### 12.9Dans chaque page web, la navigation ne doit pas contenir de piège au clavier. Cette règle est-elle respectée ?  [Critère 12.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.9 "Critère 12.9")

Tests et références du critère 12.9

#### 12.9.1

Dans chaque page web, chaque  [élément recevant le focus](https://accessibilite.numerique.gouv.fr/methode/glossaire/#prise-de-focus)  vérifie-t-il une de ces conditions ? [Test 12.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.9.1 "Test 12.9.1")

-   Il est possible d’atteindre l’élément suivant ou précédent pouvant recevoir le focus avec la touche de tabulation ;
-   L’utilisateur est informé d’un mécanisme fonctionnel permettant d’atteindre au clavier l’élément suivant ou précédent pouvant recevoir le focus.

Méthodologie du test 12.9.1

1.  Retrouver dans le document l’ensemble des éléments d’interface susceptibles de recevoir le focus (au moyen de la tabulation ou au moyen d’un script) ;
2.  Pour chaque élément d’interface, vérifier que l’utilisateur peut atteindre l’élément suivant ou précédent pouvant recevoir le focus :
    -   Soit au moyen de la touche de tabulation (Tab ou Maj+Tab) ;
    -   Soit au moyen d’une autre interaction clavier dont l’utilisateur est informé (par exemple, les flèches de direction).
3.  Si c’est le cas pour chaque élément d’interface,  **le test est validé**.

Note : certains éléments d’interface complexes, comme un groupe de boutons radio, une liste de sélection et tous les composants développés avec WAI-ARIA font appel à des navigations optimisées qui utilisent généralement les flèches de direction pour passer d’une partie du composant à l’autre. Par exemple, dans un groupe de boutons radio les options sont navigables avec les flèches de direction. De même dans un système d’onglets l’utilisateur active les onglets avec les flèches de direction. Le test sur le piège au clavier se limite alors à vérifier que le composant est atteint avec la tabulation et qu’il est possible de passer au composant suivant ou revenir au composant précédent.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard "critère 2.1.1 (A) - nouvelle fenêtre")
-   [2.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#no-keyboard-trap "critère 2.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G21](https://www.w3.org/WAI/WCAG21/Techniques/general/G21 "G21 - nouvelle fenêtre")
-   [H91](https://www.w3.org/WAI/WCAG21/Techniques/html/H91 "H91 - nouvelle fenêtre")
-   [F10](https://www.w3.org/WAI/WCAG21/Techniques/failures/F10 "F10 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.1.1  Keyboard  (A)
-   9.2.1.2  No Keyboard Trap  (A)

### 12.10Dans chaque page web, les  [raccourcis clavier](https://accessibilite.numerique.gouv.fr/methode/glossaire/#raccourci-clavier)  n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) sont-ils contrôlables par l’utilisateur ?  [Critère 12.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.10 "Critère 12.10")

Tests et références du critère 12.10

#### 12.10.1

Dans chaque page web, chaque  [raccourci clavier](https://accessibilite.numerique.gouv.fr/methode/glossaire/#raccourci-clavier)  n’utilisant qu’une seule touche (lettre minuscule ou majuscule, ponctuation, chiffre ou symbole) vérifie-t-il l’une de ces conditions ? [Test 12.10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.10.1 "Test 12.10.1")

-   Un mécanisme est disponible pour désactiver le  [raccourci clavier](https://accessibilite.numerique.gouv.fr/methode/glossaire/#raccourci-clavier) ;
-   Un mécanisme est disponible pour configurer la touche de  [raccourci clavier](https://accessibilite.numerique.gouv.fr/methode/glossaire/#raccourci-clavier)  au moyen des touches de modification (Ctrl, Alt, Maj, etc.) ;
-   Dans le cas d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  utilisateur, le  [raccourci clavier](https://accessibilite.numerique.gouv.fr/methode/glossaire/#raccourci-clavier)  qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.

Méthodologie du test 12.10.1

1.  Retrouver dans le document l’ensemble des raccourcis clavier proposés à l’utilisateur ;
2.  Pour chaque raccourci clavier, vérifier que :
    -   Soit un mécanisme est disponible pour désactiver le raccourci clavier ;
    -   Soit un mécanisme est disponible pour configurer la touche de raccourci clavier au moyen des touches de modification (Ctrl, Alt, Maj, etc.) ;
    -   Soit, dans le cas d’un composant d’interface utilisateur, le raccourci clavier qui lui est associé ne peut être activé que si le focus clavier est sur ce composant.
3.  Si c’est le cas pour chaque raccourci clavier,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.1.4 (A)](https://www.w3.org/Translations/WCAG21-fr/#character-key-shortcuts "critère 2.1.4 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F99](https://www.w3.org/WAI/WCAG21/Techniques/failures/F99 "F99 - nouvelle fenêtre")
-   [G217](https://www.w3.org/WAI/WCAG21/Techniques/general/G217 "G217 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.1.4  Character Key Shortcuts  (A)

### 12.11Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  sont-ils si nécessaire atteignables au clavier ?  [Critère 12.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.11 "Critère 12.11")

Tests et références du critère 12.11

#### 12.11.1

Dans chaque page web, les contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un  [composant d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  sont-ils si nécessaire atteignables au clavier ? [Test 12.11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#12.11.1 "Test 12.11.1")

Méthodologie du test 12.11.1

1.  Retrouver dans le document l’ensemble des contenus additionnels apparaissant au survol, à la prise de focus ou à l’activation d’un composant d’interface ;
2.  Pour chaque contenu additionnel, s’il contient des composants d’interface avec lesquels l’utilisateur peut interagir au clavier (par exemple, une infobulle personnalisée qui propose un lien dans son contenu), vérifier que ces composants d’interface sont atteignables au clavier ;
3.  Si c’est le cas pour chaque contenu additionnel,  **le test est validé**.

#### Notes techniques

Ce critère adresse les situations où un contenu additionnel contient des  [composants d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  avec lesquels il doit être possible d’interagir au clavier. Par exemple, une infobulle personnalisée qui propose un lien dans son contenu.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#keyboard "critère 2.1.1 (A) - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.1.1  Keyboard  (A)


[Haut de page](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#contenu)

## 13. Consultation [Thématique Consultation](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13 "Thématique Consultation")

### 13.1Pour chaque page web, l’utilisateur a-t-il le contrôle de chaque limite de temps modifiant le contenu (hors cas particuliers) ?  [Critère 13.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1 "Critère 13.1")

Tests et références du critère 13.1

#### 13.1.1

Pour chaque page web, chaque  [procédé de rafraîchissement](https://accessibilite.numerique.gouv.fr/methode/glossaire/#procede-de-rafraichissement)  (balise  `<object>`, balise  `<embed>`, balise  `<svg>`, balise  `<canvas>`, balise  `<meta>`) vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 13.1.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1.1 "Test 13.1.1")

-   L’utilisateur peut arrêter ou relancer le rafraîchissement ;
-   L’utilisateur peut augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
-   L’utilisateur est averti de l’imminence du rafraîchissement et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant le prochain rafraîchissement ;
-   La limite de temps entre deux rafraîchissements est de vingt heures, au moins.

Méthodologie du test 13.1.1

1.  Retrouver dans le document les rafraîchissements initiés dans le contenu par un élément  `<object>`,  `<embed>`,  `<svg>`,  `<canvas>`  ou par un élément  `<meta http-equiv="refresh" content="[compteur]">`  (dans l’élément  `<head>`  de la page) ;
2.  Pour chaque rafraîchissement, vérifier que :
    -   Soit la présence d’un mécanisme permet à l’utilisateur de stopper et de relancer le rafraîchissement ;
    -   Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps entre deux rafraîchissements de dix fois, au moins ;
    -   Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, laisse 20 secondes, au moins, à l’utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
    -   Soit la limite de temps entre deux rafraîchissements est de vingt heures, au moins.
3.  Si c’est le cas,  **le test est validé**.

#### 13.1.2

Pour chaque page web, chaque procédé de  [redirection](https://accessibilite.numerique.gouv.fr/methode/glossaire/#redirection)  effectué via une balise  `<meta>`  est-il immédiat (hors cas particuliers) ? [Test 13.1.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1.2 "Test 13.1.2")

Méthodologie du test 13.1.2

1.  Retrouver dans le document une redirection automatique initiée par un élément  `<meta http-equiv=“refresh” content=“0;URL=‘[URL ciblée]’” />` ;
2.  Vérifier que la redirection est immédiate ;
3.  Si c’est le cas,  **le test est validé**.

#### 13.1.3

Pour chaque page web, chaque procédé de  [redirection](https://accessibilite.numerique.gouv.fr/methode/glossaire/#redirection)  effectué via un  [script](https://accessibilite.numerique.gouv.fr/methode/glossaire/#script)  vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 13.1.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1.3 "Test 13.1.3")

-   L’utilisateur peut arrêter ou relancer la redirection ;
-   L’utilisateur peut augmenter la limite de temps avant la redirection de dix fois, au moins ;
-   L’utilisateur est averti de l’imminence de la redirection et dispose de vingt secondes, au moins, pour augmenter la limite de temps avant la prochaine redirection ;
-   La limite de temps avant la redirection est de vingt heures, au moins.

Méthodologie du test 13.1.3

1.  Retrouver dans le document les redirections automatiques initiées par un script (sous la forme d’un décompte par exemple) ;
2.  Pour chaque redirection automatique, vérifier que :
    -   Soit la présence d’un mécanisme permet à l’utilisateur de stopper et relancer la redirection ;
    -   Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps avant le rafraîchissement de dix fois, au moins ;
    -   Soit la présence d’un mécanisme qui avertit l’utilisateur de l’imminence du rafraîchissement, laisse 20 secondes, au moins, à l’utilisateur, pour augmenter la limite de temps avant le prochain rafraîchissement ;
    -   Soit la limite de temps avant la redirection est de vingt heures, au moins.
3.  Si c’est le cas,  **le test est validé**.

#### 13.1.4

Pour chaque page web, chaque procédé limitant le temps d’une session vérifie-t-il une de ces conditions (hors cas particuliers) ? [Test 13.1.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.1.4 "Test 13.1.4")

-   L’utilisateur peut supprimer la limite de temps ;
-   L’utilisateur peut augmenter la limite de temps ;
-   La limite de temps avant la fin de la session est de vingt heures au moins.

Méthodologie du test 13.1.4

1.  Retrouver dans le document les procédés limitant le temps d’une session (par exemple, après une authentification) ;
2.  Pour chaque procédé, vérifier que :
    -   Soit la présence d’un mécanisme permet à l’utilisateur de supprimer la limite de temps ;
    -   Soit la présence d’un mécanisme permet à l’utilisateur d’augmenter la limite de temps ;
    -   Soit la limite de temps est de vingt heures, au moins.
3.  Si c’est le cas,  **le test est validé**.

Note : lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu, le critère est non applicable. Par exemple, le rafraîchissement d’un flux RSS dans une page n’est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d’une page à partir d’une url obsolète est essentielle ; le critère est non applicable.

#### Cas particuliers

Il existe une gestion de cas particuliers lorsque la limite de temps est essentielle, notamment lorsqu’elle ne pourrait pas être supprimée sans changer fondamentalement le contenu ou les fonctionnalités liées au contenu.

Dans ces situations, le critère est non applicable. Par exemple, le rafraîchissement d’un flux RSS dans une page n’est pas une limite de temps essentielle ; le critère est applicable. En revanche, une redirection automatique qui amène vers la nouvelle version d’une page à partir d’une URL obsolète est essentielle ; le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.2.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#timing-adjustable "critère 2.2.1 (A) - nouvelle fenêtre")
-   [2.2.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#pause-stop-hide "critère 2.2.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F40](https://www.w3.org/WAI/WCAG21/Techniques/failures/F40 "F40 - nouvelle fenêtre")
-   [F41](https://www.w3.org/WAI/WCAG21/Techniques/failures/F41 "F41 - nouvelle fenêtre")
-   [F58](https://www.w3.org/WAI/WCAG21/Techniques/failures/F58 "F58 - nouvelle fenêtre")
-   [F61](https://www.w3.org/WAI/WCAG21/Techniques/failures/F61 "F61 - nouvelle fenêtre")
-   [G75](https://www.w3.org/WAI/WCAG21/Techniques/general/G75 "G75 - nouvelle fenêtre")
-   [G76](https://www.w3.org/WAI/WCAG21/Techniques/general/G76 "G76 - nouvelle fenêtre")
-   [G110](https://www.w3.org/WAI/WCAG21/Techniques/general/G110 "G110 - nouvelle fenêtre")
-   [G133](https://www.w3.org/WAI/WCAG21/Techniques/general/G133 "G133 - nouvelle fenêtre")
-   [G180](https://www.w3.org/WAI/WCAG21/Techniques/general/G180 "G180 - nouvelle fenêtre")
-   [G186](https://www.w3.org/WAI/WCAG21/Techniques/general/G186 "G186 - nouvelle fenêtre")
-   [G198](https://www.w3.org/WAI/WCAG21/Techniques/general/G198 "G198 - nouvelle fenêtre")
-   [H76](https://www.w3.org/WAI/WCAG21/Techniques/html/H76 "H76 - nouvelle fenêtre")
-   [SCR1](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR1 "SCR1 - nouvelle fenêtre")
-   [SCR16](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR16 "SCR16 - nouvelle fenêtre")
-   [SCR36](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR36 "SCR36 - nouvelle fenêtre")
-   [SVR1](https://www.w3.org/WAI/WCAG21/Techniques/server-side-script/SVR1 "SVR1 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.2.1  Timing Adjustable  (A)
-   9.2.2.2  Pause, Stop, Hide  (A)

### 13.2Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ?  [Critère 13.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.2 "Critère 13.2")

Tests et références du critère 13.2

#### 13.2.1

Dans chaque page web, l’ouverture d’une nouvelle fenêtre ne doit pas être déclenchée sans action de l’utilisateur. Cette règle est-elle respectée ? [Test 13.2.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.2.1 "Test 13.2.1")

Méthodologie du test 13.2.1

1.  Vérifier qu’à l’ouverture du document, aucune nouvelle fenêtre (pop-up ou pop-under, par exemple) n’est ouverte.
2.  Si c’est le cas,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [3.2.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#on-focus "critère 3.2.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F55](https://www.w3.org/WAI/WCAG21/Techniques/failures/F55 "F55 - nouvelle fenêtre")
-   [G107](https://www.w3.org/WAI/WCAG21/Techniques/general/G107 "G107 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.3.2.1  On focus  (A)

### 13.3Dans chaque page web, chaque document bureautique en téléchargement possède-t-il, si nécessaire, une  [version accessible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#version-accessible-pour-un-document-en-telechargement)  (hors cas particuliers) ?  [Critère 13.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.3 "Critère 13.3")

Tests et références du critère 13.3

#### 13.3.1

Dans chaque page web, chaque fonctionnalité de téléchargement d’un document bureautique vérifie-t-elle une de ces conditions ? [Test 13.3.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.3.1 "Test 13.3.1")

-   Le document en téléchargement est compatible avec l’accessibilité ;
-   Il en existe une version alternative en téléchargement compatible avec l’accessibilité ;
-   Il en existe une version alternative au format HTML compatible avec l’accessibilité.

Méthodologie du test 13.3.1

1.  Retrouver dans le document les liens et les contrôles de formulaire (un bouton de formulaire ou un formulaire de téléchargement par exemple) permettant de télécharger un fichier au format bureautique ;
2.  Pour chaque fichier au format bureautique, vérifier la présence d’une version alternative présentée comme accessible :
    -   Pour les documents au format .pdf, analyser le fichier avec l’outil PAC (PDF Accessibility Checker) et vérifier l’absence d’erreur d’accessibilité dans le document (cf. note) ;
    -   Pour les documents au format .doc ou .docx, analyser le fichier avec l’outil de vérification d’accessibilité de Microsoft Office (à partir de la version 2010) et vérifier l’absence d’erreur d’accessibilité (cf. note) ;
    -   Pour les documents au format .odt, analyser le document avec l’éditeur OpenOffice et vérifier que l’ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement » (cf. note pour une méthode alternative) ;
    -   Pour les documents au format EPUB/DAISY, analyser le document avec un éditeur EPUB/DAISY et vérifier que l’ensemble des contenus est conforme avec la liste des critères « Liste document bureautique en téléchargement ».
    -   Pour les documents eux-mêmes au format .html, analyser l’accessibilité du document.
3.  Si c’est le cas pour chaque fichier au format bureautique,  **le test est validé**.

Note au sujet de l’outil PAC : l’outil analyse le document PDF du point de vue de l’accessibilité mais également de critères de qualité (par exemple la norme PDF/UA). Seules les erreurs relatives à des critères présents dans la liste des critères « Liste document bureautique en téléchargement » rendent le critère « Non conforme ». Par ailleurs, cet outil ne fonctionne que sur la plateforme Windows. Sur Mac, le contrôle doit se faire manuellement.

Note au sujet Microsoft Office : le logiciel offre un vérificateur d’accessibilité en standard, (accessible via le menu « Fichier > Informations > Vérifier la présence de problèmes > Vérifier l’accessibilité »). Ce vérificateur peut être considérablement amélioré via le plugin Word Accessibility Plug-in (voir dans la section Outils). Ce plugin ne fonctionne que sur Windows. Sur Mac, le contrôle doit se faire manuellement.

Note au sujet des documents au format .odt : OpenOffice et LibreOffice ne possèdent pas de vérificateur d’accessibilité. Une méthode plus rapide qu’une analyse manuelle peut consister à enregistrer le document au format .docx et le vérifier via le vérificateur d’accessibilité de Microsoft Office 2010. Attention cependant : cette méthode rapide est à réserver aux documents très simples car certaines informations liées à l’accessibilité ne sont pas correctement transcodées. C’est le cas des indications de langue, de certaines alternatives d’images ou d’en-têtes fusionnées sur les tableaux par exemple.

Note au sujet du format EPUB : l’utilitaire Ace by DAISY App permet d’effectuer le travail de validation d’un fichier EPUB 3 de manière efficace.

Note au sujet des documents dérogés : le référentiel propose un statut de dérogation dans certains cas (cf. guide d’accompagnement). Dans ce cas, les tests ne sont pas à réaliser, la version accessible étant fournie sur demande de l’utilisateur.

Note à l’attention des personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou LibreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l’organisme concerné), ils sont exemptés de l’obligation d’accessibilité.

#### Cas particuliers

Il existe une gestion de cas particuliers :

-   Pour les personnes de droit privé mentionnées aux 2° à 4° du I de l’article 47 de la loi du 11 février 2005 : si les fichiers bureautiques (ex : PDF, documents Microsoft ou LibreOffice, etc.) ont été publiés avant le 23 septembre 2018 (sauf si ce sont des documents nécessaires pour accomplir une démarche administrative relevant des tâches effectuées par l’organisme concerné), ils sont exemptés de l’obligation d’accessibilité.

Dans cette situation, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")
-   [2.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks "critère 2.4.1 (A) - nouvelle fenêtre")
-   [2.4.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order "critère 2.4.3 (A) - nouvelle fenêtre")
-   [3.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#language-of-page "critère 3.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F15](https://www.w3.org/WAI/WCAG21/Techniques/failures/F15 "F15 - nouvelle fenêtre")
-   [G10](https://www.w3.org/WAI/WCAG21/Techniques/general/G10 "G10 - nouvelle fenêtre")
-   [G135](https://www.w3.org/WAI/WCAG21/Techniques/general/G135 "G135 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.1.3.1  Info and Relationships  (A)
-   9.1.3.2  Meaningful Sequence  (A)
-   9.2.4.1  Bypass Blocks  (A)
-   9.2.4.3  Focus Order  (A)
-   9.3.1.1  Language of Page  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 13.4Pour chaque document bureautique ayant une  [version accessible](https://accessibilite.numerique.gouv.fr/methode/glossaire/#version-accessible-pour-un-document-en-telechargement), cette version offre-t-elle la même information ?  [Critère 13.4](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.4 "Critère 13.4")

Tests et références du critère 13.4

#### 13.4.1

Chaque document bureautique ayant une version accessible vérifie-t-il une de ces conditions ? [Test 13.4.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.4.1 "Test 13.4.1")

-   La version compatible avec l’accessibilité offre la même information ;
-   La version alternative au format HTML est pertinente et offre la même information.

Méthodologie du test 13.4.1

1.  Retrouver dans le document les fichiers en téléchargement au format bureautique accompagné de leur version alternative accessible ;
2.  Pour chaque couple de fichiers, ouvrir les deux documents (le document d’origine et le document accessible) et vérifier que les deux documents apportent la même information ;
3.  Si c’est le cas pour chaque couple de fichiers,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")
-   [1.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#info-and-relationships "critère 1.3.1 (A) - nouvelle fenêtre")
-   [1.3.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#meaningful-sequence "critère 1.3.2 (A) - nouvelle fenêtre")
-   [2.4.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#bypass-blocks "critère 2.4.1 (A) - nouvelle fenêtre")
-   [2.4.3 (A)](https://www.w3.org/Translations/WCAG21-fr/#focus-order "critère 2.4.3 (A) - nouvelle fenêtre")
-   [3.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#language-of-page "critère 3.1.1 (A) - nouvelle fenêtre")
-   [4.1.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#name-role-value "critère 4.1.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F15](https://www.w3.org/WAI/WCAG21/Techniques/failures/F15 "F15 - nouvelle fenêtre")
-   [G10](https://www.w3.org/WAI/WCAG21/Techniques/general/G10 "G10 - nouvelle fenêtre")
-   [G135](https://www.w3.org/WAI/WCAG21/Techniques/general/G135 "G135 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)
-   9.1.3.1  Info and Relationships  (A)
-   9.1.3.2  Meaningful Sequence  (A)
-   9.2.4.1  Bypass Blocks  (A)
-   9.2.4.3  Focus Order  (A)
-   9.3.1.1  Language of Page  (A)
-   9.4.1.2  Name, Role, Value  (A)

### 13.5Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) a-t-il une alternative ?  [Critère 13.5](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.5 "Critère 13.5")

Tests et références du critère 13.5

#### 13.5.1

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ? [Test 13.5.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.5.1 "Test 13.5.1")

-   Un attribut title est disponible ;
-   Une définition est donnée par le contexte adjacent.

Méthodologie du test 13.5.1

1.  Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;
2.  Pour chaque contenu cryptique, vérifier que :
    -   Soit une définition est disponible au moyen d’un attribut  `title`, sur un lien, un contrôle de formulaire, une abréviation (élément  `<abbr>`) par exemple ;
    -   Soit une définition est donnée dans le contexte adjacent (immédiatement avant ou après).
3.  Si c’est le cas pour chaque contenu cryptique,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F71](https://www.w3.org/WAI/WCAG21/Techniques/failures/F71 "F71 - nouvelle fenêtre")
-   [F70](https://www.w3.org/WAI/WCAG21/Techniques/failures/F70 "F70 - nouvelle fenêtre")
-   [G135](https://www.w3.org/WAI/WCAG21/Techniques/general/G135 "G135 - nouvelle fenêtre")
-   [H86](https://www.w3.org/WAI/WCAG21/Techniques/html/H86 "H86 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 13.6Dans chaque page web, pour chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) ayant une alternative, cette alternative est-elle pertinente ?  [Critère 13.6](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.6 "Critère 13.6")

Tests et références du critère 13.6

#### 13.6.1

Dans chaque page web, chaque contenu cryptique (art ASCII, émoticône, syntaxe cryptique) vérifie-t-il une de ces conditions ? [Test 13.6.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.6.1 "Test 13.6.1")

-   Le contenu de l’attribut  `title`  est pertinent ;
-   La définition donnée par le contexte adjacent est pertinente.

Méthodologie du test 13.6.1

1.  Retrouver dans le document les contenus cryptiques (art ASCII, émoticône, syntaxe cryptique) ;
2.  Pour chaque contenu cryptique, vérifier que la définition donnée est pertinente.
3.  Si c’est le cas pour chaque contenu cryptique,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.1.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#non-text-content "critère 1.1.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F71](https://www.w3.org/WAI/WCAG21/Techniques/failures/F71 "F71 - nouvelle fenêtre")
-   [F72](https://www.w3.org/WAI/WCAG21/Techniques/failures/F72 "F72 - nouvelle fenêtre")
-   [H86](https://www.w3.org/WAI/WCAG21/Techniques/html/H86 "H86 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.1.1  Non-text Content  (A)

### 13.7Dans chaque page web,  [les changements brusques de luminosité ou les effets de flash](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-brusque-de-luminosite-ou-effet-de-flash)  sont-ils correctement utilisés ?  [Critère 13.7](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.7 "Critère 13.7")

Tests et références du critère 13.7

#### 13.7.1

Dans chaque page web, chaque image ou élément multimédia (balise  `<video>`, balise  `<img>`, balise  `<svg>`, balise  `<canvas>`, balise  `<embed>`  ou balise  `<object>`) qui provoque un changement brusque de luminosité ou un effet de flash vérifie-t-il une de ces conditions ? [Test 13.7.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.7.1 "Test 13.7.1")

-   La fréquence de l’effet est inférieure à 3 par seconde ;
-   La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

Méthodologie du test 13.7.1

1.  Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash de type image animée, vidéo (cf. note) ou animation (éléments  `<img>`,  `<svg>`,  `<canvas>`,  `<embed>`,  `<object>`  ou  `<video>`) ;
2.  Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
    -   Soit la fréquence de l’effet est inférieur à 3 par seconde ;
    -   Soit la surface cumulée est inférieure à 21824 pixels.
3.  Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash,  **le test est validé**.

Note : l’évaluation de ce critère peut être complexe. Lorsque l’effet est géré par un script ou au moyen de CSS, l’analyse du code est suffisante. L’outil PEAT permet d’analyser les vidéos au format .avi, par exemple. Un exemple de vidéo ayant provoqué des crises d’épilepsie peut être consulté ici : London 2012 Olympics Seizure ([https://www.youtube.com/watch?v=vs0hfhSje9M](https://www.youtube.com/watch?v=vs0hfhSje9M)).

#### 13.7.2

Dans chaque page web, chaque script qui provoque  [un changement brusque de luminosité ou un effet de flash](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-brusque-de-luminosite-ou-effet-de-flash)  vérifie-t-il une de ces conditions ? [Test 13.7.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.7.2 "Test 13.7.2")

-   La fréquence de l’effet est inférieure à 3 par seconde ;
-   La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

Méthodologie du test 13.7.2

1.  Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d’un script ;
2.  Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
    -   Soit la fréquence de l’effet est inférieur à 3 par seconde ;
    -   Soit la surface cumulée est inférieure à 21824 pixels.
3.  Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash,  **le test est validé**.

#### 13.7.3

Dans chaque page web, chaque mise en forme CSS qui provoque  [un changement brusque de luminosité ou un effet de flash](https://accessibilite.numerique.gouv.fr/methode/glossaire/#changement-brusque-de-luminosite-ou-effet-de-flash)  vérifie-t-il une de ces conditions ? [Test 13.7.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.7.3 "Test 13.7.3")

-   La fréquence de l’effet est inférieure à 3 par seconde ;
-   La surface totale cumulée des effets est inférieure ou égale à 21824 pixels.

Méthodologie du test 13.7.3

1.  Retrouver dans le document les contenus clignotants ou qui provoquent des effets de flash obtenus au moyen d’une animation CSS ;
2.  Pour chaque contenu clignotant ou provoquant des effets de flash, vérifier que :
    -   Soit la fréquence de l’effet est inférieur à 3 par seconde ;
    -   Soit la surface cumulée est inférieure à 21824 pixels.
3.  Si c’est le cas pour chaque contenu clignotant ou provoquant des effets de flash,  **le test est validé**.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.3.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#three-flashes-or-below-threshold "critère 2.3.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G15](https://www.w3.org/WAI/WCAG21/Techniques/general/G15 "G15 - nouvelle fenêtre")
-   [G19](https://www.w3.org/WAI/WCAG21/Techniques/general/G19 "G19 - nouvelle fenêtre")
-   [G176](https://www.w3.org/WAI/WCAG21/Techniques/general/G176 "G176 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.3.1  Three Flashes or Below Threshold  (A)

### 13.8Dans chaque page web, chaque contenu en mouvement ou clignotant est-il  [contrôlable](https://accessibilite.numerique.gouv.fr/methode/glossaire/#controle-contenu-en-mouvement-ou-clignotant)  par l’utilisateur ?  [Critère 13.8](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.8 "Critère 13.8")

Tests et références du critère 13.8

#### 13.8.1

Dans chaque page web, chaque contenu en mouvement déclenché automatiquement, vérifie-t-il une de ces conditions ? [Test 13.8.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.8.1 "Test 13.8.1")

-   La durée du mouvement est inférieure ou égale à 5 secondes ;
-   L’utilisateur peut arrêter et relancer le mouvement ;
-   L’utilisateur peut afficher et masquer le contenu en mouvement ;
-   L’utilisateur peut afficher la totalité de l’information sans le mouvement.

Méthodologie du test 13.8.1

1.  Retrouver dans le document les contenus en mouvement (obtenus au moyen d’une image, d’un script ou d’un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l’affichage d’un contenu (cf. note) ;
2.  Pour chaque contenu, vérifier que :
    -   Soit la durée du mouvement est inférieure à 5 secondes ;
    -   Soit la présence d’un mécanisme (un bouton, par exemple) permet d’arrêter et de relancer le mouvement ;
    -   Soit la présence d’un mécanisme (un bouton, par exemple) permet de cacher et d’afficher à nouveau le contenu en mouvement ;
    -   Soit la présence d’un mécanisme (un bouton, par exemple) permet d’afficher la totalité du contenu sans mouvement.
3.  Si c’est le cas pour chaque contenu en mouvement,  **le test est validé**.

#### 13.8.2

Dans chaque page web, chaque contenu clignotant déclenché automatiquement, vérifie-t-il une de ces conditions ? [Test 13.8.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.8.2 "Test 13.8.2")

-   La durée du clignotement est inférieure ou égale à 5 secondes ;
-   L’utilisateur peut arrêter et relancer le clignotement ;
-   L’utilisateur peut afficher et masquer le contenu clignotant ;
-   L’utilisateur peut afficher la totalité de l’information sans le clignotement.

Méthodologie du test 13.8.2

1.  Retrouver dans le document les contenus clignotants (obtenus au moyen d’une image, d’un script ou d’un effet CSS) déclenchés automatiquement au chargement de la page ou lors de l’affichage d’un contenu (cf. note).
2.  Pour chaque contenu, vérifier que :
    -   Soit la durée du clignotement est inférieure à 5 secondes ;
    -   Soit la présence d’un mécanisme (un bouton, par exemple) permet d’arrêter et de relancer le clignotement ;
    -   Soit la présence d’un mécanisme (un bouton, par exemple) permet de cacher et d’afficher à nouveau le contenu clignotant ;
    -   Soit la présence d’un mécanisme (un bouton, par exemple) permet d’afficher la totalité du contenu clignotant.
3.  Si c’est le cas pour chaque contenu clignotant,  **le test est validé**.

Note : l’arrêt ou la mise en pause d’un contenu en mouvement ou clignotant au moyen de la prise de focus (par exemple, l’effet est suspendu uniquement pendant la prise de focus) n’est pas considéré comme un procédé conforme. Dans certains cas, le mouvement ne peut pas être arrêté, par exemple dans le cas d’une barre de progression, dans ce cas, le critère est non applicable.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.2.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#timing-adjustable "critère 2.2.1 (A) - nouvelle fenêtre")
-   [2.2.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#pause-stop-hide "critère 2.2.2 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [F4](https://www.w3.org/WAI/WCAG21/Techniques/failures/F4 "F4 - nouvelle fenêtre")
-   [F7](https://www.w3.org/WAI/WCAG21/Techniques/failures/F7 "F7 - nouvelle fenêtre")
-   [F16](https://www.w3.org/WAI/WCAG21/Techniques/failures/F16 "F16 - nouvelle fenêtre")
-   [F47](https://www.w3.org/WAI/WCAG21/Techniques/failures/F47 "F47 - nouvelle fenêtre")
-   [F50](https://www.w3.org/WAI/WCAG21/Techniques/failures/F50 "F50 - nouvelle fenêtre")
-   [G4](https://www.w3.org/WAI/WCAG21/Techniques/general/G4 "G4 - nouvelle fenêtre")
-   [G11](https://www.w3.org/WAI/WCAG21/Techniques/general/G11 "G11 - nouvelle fenêtre")
-   [G152](https://www.w3.org/WAI/WCAG21/Techniques/general/G152 "G152 - nouvelle fenêtre")
-   [G186](https://www.w3.org/WAI/WCAG21/Techniques/general/G186 "G186 - nouvelle fenêtre")
-   [G187](https://www.w3.org/WAI/WCAG21/Techniques/general/G187 "G187 - nouvelle fenêtre")
-   [G191](https://www.w3.org/WAI/WCAG21/Techniques/general/G191 "G191 - nouvelle fenêtre")
-   [SCR22](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR22 "SCR22 - nouvelle fenêtre")
-   [SCR33](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR33 "SCR33 - nouvelle fenêtre")
-   [SCR36](https://www.w3.org/WAI/WCAG21/Techniques/client-side-script/SCR36 "SCR36 - nouvelle fenêtre")
-   [SM11](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM11 "SM11 - nouvelle fenêtre")
-   [SM12](https://www.w3.org/WAI/WCAG21/Techniques/smil/SM12 "SM12 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.2.1  Timing Adjustable  (A)
-   9.2.2.2  Pause, Stop, Hide  (A)

### 13.9Dans chaque page web, le contenu proposé est-il consultable quelle que soit l’orientation de l’écran (portrait ou paysage) (hors cas particuliers) ?  [Critère 13.9](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.9 "Critère 13.9")

Tests et références du critère 13.9

#### 13.9.1

Dans chaque page web, chaque contenu vérifie-t-il ces conditions (hors cas particuliers) ? [Test 13.9.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.9.1 "Test 13.9.1")

-   La consultation est possible quel que soit le mode d’orientation de l’écran ;
-   Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran utilisé même si sa présentation et le moyen d’y accéder peut différer.

Méthodologie du test 13.9.1

1.  Consulter le document dans un mode d’orientation portrait puis dans un mode d’orientation paysage ;
2.  Vérifier que :
    -   La consultation est possible quel que soit le mode d’orientation de l’écran.
    -   Le contenu proposé reste le même quel que soit le mode d’orientation de l’écran utilisé même si sa présentation et le moyen d’y accéder peut différer.
3.  Si c’est le cas,  **le test est validé**.

Note : il existe des interfaces pour lesquelles l’orientation du périphérique est essentielle à leur utilisation. Dans ces situations, le critère est non applicable. Il peut s’agir d’interfaces de jeu, de piano, de dépôt de chèques bancaires, etc. Si l’interface est le seul moyen d’accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.

#### Cas particuliers

Il existe des interfaces pour lesquelles l’orientation du périphérique est essentielle à leur utilisation.

Dans ces situations, le critère est non applicable. Il peut s’agir d’interfaces de jeu, de piano, de dépôt de chèques bancaires, etc.

Si l’interface est le seul moyen d’accéder au service proposé, une alternative devrait être mise en place pour pallier cette carence.

#### Références documentaires

-   API JS : https://www.w3.org/TR/screen-orientation/
-   API Viewport : https://www.w3.org/TR/css-device-adapt-1/

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [1.3.4 (AA)](https://www.w3.org/Translations/WCAG21-fr/#orientation "critère 1.3.4 (AA) - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.1.3.4  Orientation  (AA)

### 13.10Dans chaque page web, les fonctionnalités utilisables ou disponibles au moyen d’un  [geste complexe](https://accessibilite.numerique.gouv.fr/methode/glossaire/#gestes-complexes-et-gestes-simples)  peuvent-elles être également disponibles au moyen d’un  [geste simple](https://accessibilite.numerique.gouv.fr/methode/glossaire/#gestes-complexes-et-gestes-simples)  (hors cas particuliers) ?  [Critère 13.10](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.10 "Critère 13.10")

Tests et références du critère 13.10

#### 13.10.1

Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un contact multipoint est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers). [Test 13.10.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.10.1 "Test 13.10.1")

Méthodologie du test 13.10.1

1.  Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d’une interaction au toucher de type contact multipoint ;
2.  Pour chaque fonctionnalité, vérifier qu’elle reste disponible au moyen d’une interaction au toucher de type contact en un point unique de l’écran (par exemple, la possibilité de consulter les éléments d’une liste par un mouvement de balayage horizontal droit ou gauche doit aussi être disponible au moyen de boutons “précédent” et “suivant” ou encore un geste de pincer et zoomer qui peut être alternativement réalisé au moyen de boutons “plus” et “moins”) ;
3.  Si c’est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d’une interaction au toucher de type contact multipoint,  **le test est validé**.

#### 13.10.2

Dans chaque page web, chaque fonctionnalité utilisable ou disponible suite à un geste basé sur le suivi d’une trajectoire sur l’écran est-elle également utilisable ou disponible suite à un contact en un point unique de l’écran (hors cas particuliers). [Test 13.10.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.10.2 "Test 13.10.2")

Méthodologie du test 13.10.2

1.  Retrouver dans le document les fonctionnalités utilisables ou disponibles au moyen d’une interaction au toucher qui implique le suivi d’une trajectoire sur l’écran ;
2.  Pour chaque fonctionnalité, vérifier qu’elle reste disponible au moyen d’une interaction au toucher de type contact en un point unique de l’écran (par exemple, la possibilité de composer son mot de passe en suivant une trajectoire sur un clavier virtuel doit aussi être disponible au moyen de pressions successives sur les touches du clavier) ;
3.  Si c’est le cas pour chaque fonctionnalité utilisable ou disponible au moyen d’une interaction au toucher qui implique le suivi d’une trajectoire sur l’écran,  **le test est validé**.

Il existe une gestion de cas particuliers dans deux types de situation :

-   Le critère ne s’applique qu’à des fonctionnalités mises en place par l’auteur du site. Il ne concerne donc pas les gestes requis par l’agent utilisateur ou le système d’exploitation.
-   Le critère ne s’applique pas aux fonctionnalités dont la réalisation d’un geste complexe est essentielle (exécuter le tracé d’une signature, par exemple).

#### Cas particuliers

Il existe une gestion de cas particuliers dans deux types de situation :

-   Le critère ne s’applique qu’à des fonctionnalités mises en place par l’auteur du site. Il ne concerne donc pas les gestes requis par l’agent utilisateur ou le système d’exploitation ;
-   Le critère ne s’applique pas aux fonctionnalités dont la réalisation d’un geste complexe est essentielle (exécuter le tracé d’une signature, par exemple).

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.5.1 (A)](https://www.w3.org/Translations/WCAG21-fr/#pointer-gestures "critère 2.5.1 (A) - nouvelle fenêtre")

###### Technique(s) suffisante(s) et/ou échec(s)  (en anglais) :

-   [G215](https://www.w3.org/WAI/WCAG21/Techniques/general/G215 "G215 - nouvelle fenêtre")
-   [G216](https://www.w3.org/WAI/WCAG21/Techniques/general/G216 "G216 - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.5.1  Pointer Gestures  (A)

### 13.11Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran peuvent-elles faire l’objet d’une annulation (hors cas particuliers) ?  [Critère 13.11](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.11 "Critère 13.11")

Tests et références du critère 13.11

#### 13.11.1

Dans chaque page web, les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran vérifient-elles l’une de ces conditions (hors cas particuliers) ? [Test 13.11.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.11.1 "Test 13.11.1")

-   L’action est déclenchée au moment où le dispositif de pointage est  [relâché ou relevé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#relache-ou-releve) ;
-   L’action est déclenchée au moment où le dispositif de pointage est  [pressé ou posé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#presse-ou-pose)  puis annulée lorsque le dispositif de pointage est  [relâché ou relevé](https://accessibilite.numerique.gouv.fr/methode/glossaire/#relache-ou-releve) ;
-   Un mécanisme est disponible pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action.

Méthodologie du test 13.11.1

1.  Retrouver dans le document les actions déclenchées au moyen d’un dispositif de pointage sur un point unique de l’écran ;
2.  Pour chaque action, vérifier que :
    -   Soit l’action est déclenchée au moment où le dispositif de pointage est relâché ou relevé ;
    -   Soit l’action est déclenchée au moment où le dispositif de pointage est pressé ou posé puis annulée lorsque le dispositif de pointage est relâché ou relevé ;
    -   Soit il existe un mécanisme pour abandonner (avant achèvement de l’action) ou annuler (après achèvement) l’exécution de l’action ; par exemple, lors d’une interaction de type glisser-déposer un relâchement du dispositif de pointage doit permettre d’abandonner l’interaction en cours et une fois la zone de dépôt atteinte, l’utilisateur doit rester en mesure d’annuler son opération de dépôt au moyen d’un dialogue de confirmation (choix de confirmer ou d’annuler le dépôt) ou par le fait de pouvoir replacer l’élément déposé à sa position initiale.
3.  Si c’est le cas pour chaque action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran,  **le test est validé**.

#### Cas particuliers

Il existe une gestion de cas particulier lorsque la fonctionnalité nécessite que le comportement attendu soit réalisé lors d’un événement descendant, par exemple, un émulateur de clavier dont les touches doivent s’activer à la pression comme sur un clavier physique. Dans ces situations, le critère est non applicable.

#### Notes techniques

Deux exemples de mécanisme mis en place pour annuler ou abandonner une action déclenchée au moyen d’un dispositif de pointage sur un point unique de l’écran :

-   Une fenêtre modale permettant d’annuler l’action après son achèvement ;
-   Pour une fonction de glisser/déposer, le fait d’abandonner l’action si l’utilisateur relâche l’élément en dehors de la zone cible.

#### Références

##### WCAG  2.1

###### Critère(s) de succès :

-   [2.5.2 (A)](https://www.w3.org/Translations/WCAG21-fr/#pointer-cancellation "critère 2.5.2 (A) - nouvelle fenêtre")

##### EN 301 549 V2.1.2 (2018-08)  (en anglais)

-   9.2.5.2  Pointer Cancellation  (A)

### 13.12Dans chaque page web, les fonctionnalités qui impliquent un mouvement de l’appareil ou vers l’appareil peuvent-elles être satisfaites de manière alternative (hors cas particuliers) ?  [Critère 13.12](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.12 "Critère 13.12")

Tests et références du critère 13.12

#### 13.12.1

Dans chaque page web, les fonctionnalités disponibles en bougeant l’appareil peuvent-elles être accomplies avec des  [composants d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  utilisateur (hors cas particuliers) ? [Test 13.12.1](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.12.1 "Test 13.12.1")

Méthodologie du test 13.12.1

1.  Retrouver dans le document les fonctionnalités disponibles en bougeant l’appareil ;
2.  Pour chaque fonctionnalité, vérifier qu’elle peut être accomplie au moyen de composants d’interface utilisateur ;
3.  Si c’est le cas pour chaque fonctionnalité disponible en bougeant l’appareil,  **le test est validé**.

#### 13.12.2

Dans chaque page web, les fonctionnalités disponibles en faisant un geste en direction de l’appareil peuvent-elles être accomplies avec des  [composants d’interface](https://accessibilite.numerique.gouv.fr/methode/glossaire/#composant-d-interface)  utilisateur (hors cas particuliers) ? [Test 13.12.2](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.12.2 "Test 13.12.2")

Méthodologie du test 13.12.2

1.  Retrouver dans le document les fonctionnalités disponibles en faisant un geste en direction de l’appareil ;
2.  Pour chaque fonctionnalité, vérifier qu’elle peut être accomplie au moyen de composants d’interface utilisateur ;
3.  Si c’est le cas pour chaque fonctionnalité disponible en faisant un geste en direction de l’appareil,  **le test est validé**.

#### 13.12.3

L’utilisateur a-t-il la possibilité de désactiver la détection du mouvement pour éviter un déclenchement accidentel de la fonctionnalité (hors cas particuliers) ? [Test 13.12.3](https://accessibilite.numerique.gouv.fr/methode/criteres-et-tests/#13.12.3 "Test 13.12.3")

Méthodologie du test 13.12.3

1.  Retrouver dans le document les fonctionnalités disponibles en mettant en mouvement l’appareil ;
2.  Vérifier si l’utilisateur à la possibilité de désactiver la détection du mouvement ;
3.  Si c’est le cas, pour chaque fonctionnalité, vérifier qu’elle ne peut pas être déclenchée ;
4.  Si c’est le cas pour chaque fonctionnalité disponible en mettant en mouvement l’appareil,  **le test est validé**.