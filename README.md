# Automat Intervju TypeScript

Utgangspunkt for intervju oppgave til utviklerstilling i Team Automat i Entur.
Oppgaven skal løses med Node.js og TypeScript.
Dette repoet inneholder grunnleggende oppsett for å komme i gang med oppgaven;
selve oppgaven vil bli gitt under intervjuet.
Utover Node og Typescript vil du få forklart andre verktøy som brukes.
Før intervjuet skal kandidaten ha satt opp dette prosjektet
som beskrevet i denne README-filen,
og verifisert at bygg og tester kjører.

## Oppsett

Du må ha Node installert, versjonen nevnt i `.tool-versions`
(kan f.eks. installeres vha [asdf](https://asdf-vm.com)).

1. Klon repoet
2. Installer avhengigheter med `npm install`

## Utvikling

Det er satt opp npm script for de viktigste oppgavene.

- `npm run build` - Bygger applikasjonen med tsc
- `npm run start` - Starter applikasjonen med tsx
- `npm run test` - Kjører testene med [jest](https://jestjs.io)
- `npm run lint` - Sjekker koden med [biome](https://biomejs.org/)
