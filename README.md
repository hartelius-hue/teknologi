# SkoleGPT Lab – Teknologiforståelse

20 missioner med tre sværhedsgrader i hver: Begynder, Øvet, Udvidet og Vibe coding. Sitet har quizzer, prompts, assistenter, tale- og skriveopgaver, kodeværksted, højtlæsning og portfolio.

## Udgivelse
Aktivér GitHub Pages under **Settings → Pages → Deploy from a branch → main → /(root)**.

Google Sites kan indlejre HTML/CSS/JavaScript under **Indsæt → Integrer → Integrer kode**. Skoletube er en separat medieplatform; adgang til Google Sites direkte via Skoletube er ikke bekræftet.

Undervisningsmaterialet er uafhængigt af SkoleGPT.

## Julekodekalender 2026

24 interaktive kodeopgaver. En ny låge åbner kl. 07.00 dansk tid fra 1. til 24. december 2026. Kalenderen og dens link skjules den 26. december 2026. Hver løst opgave giver et bogstav, og alle 24 bogstaver åbner en afsluttende julehilsen. Julemusik, højtlæsning og lokale fremskridt er inkluderet.

Datolåsen er baseret på browserens JavaScript og kan omgås af teknisk kyndige elever.

## Nye 3D-illustrationer – installation af én ZIP

De 24 nye, individuelle og detaljerede 3D-billeder har stierne
`assets/3d/level-1.webp`–`level-4.webp` samt
`assets/3d/mission-01.webp`–`mission-20.webp`.

**Installér hele billedpakken:**

1. Download `skolegpt-3d-assets.zip` fra den relevante ChatGPT-besked.
2. Åbn [Upload files til main](https://github.com/hartelius-hue/teknologi/upload/main).
3. Upload **selve ZIP-filen** (ikke udpakket) med præcis navnet `skolegpt-3d-assets.zip` til repositoryets rod.
4. Vælg **Commit changes**. GitHub Actions-kørslen **Import SkoleGPT 3D-bannere** pakker automatisk de 24 WebP-billeder ud og gemmer dem i `assets/3d/`.
5. Tjek **Actions**, og åbn derefter GitHub Pages-siden.

**Bemærk:** Hvis workflowet ikke har tilladelse til at skrive, kan det kræve, at **Settings → Actions → General → Workflow permissions** tillader skriveadgang. Hvis deployment ikke starter automatisk efter billedimport, skal GitHub Pages genudgives.

Alle billedstier har fallback til det tidligere design, indtil ZIP-filen er installeret. Uddannelsesopgaver, niveauprøver og lokale elevfremskridt ændres ikke.
