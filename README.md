# Interaktiv Frontend - Oppgave 3: Preference Dashboard

Dette prosjektet er en React-applikasjon som demonstrerer håndtering av delt tilstand (state) på tvers av ulike ruter ved bruk av moderne React-prinsipper.

## Prosjektbeskrivelse
Applikasjonen lar brukeren tilpasse sin digitale arbeidsflate gjennom valg av tema (Lys/Mørk), "Mood" og en egen "Zen Mode". Som grafisk designer har jeg lagt ekstra vekt på det visuelle grensesnittet, med fokus på glassmorphism, typografi og flytende overganger.

## Oppfylte Krav (Kriterier)
* **React Router**: Implementert for navigasjon mellom "Dashboard" og "Customizer".
* **Custom Hook (`usePreferences`)**: Laget for å håndtere et strukturert state-objekt som inneholder tema, stemning og funksjonsinnstillinger.
* **Shared State / Context**: Bruker `Outlet context` for å dele data sømløst fra `Layout`-komponenten ned til alle under-ruter (`Preview` og `Settings`).
* **Visuell Refleksjon**: Valgte preferanser påvirker umiddelbart applikasjonens CSS-variabler og visuelle uttrykk (f.eks. animert gradient i Zen Mode).

## Teknologier Brukt
* **React** (Vite)
* **React Router Dom** (for ruting)
* **CSS Custom Properties** (for dynamisk styling)

## Hvordan kjøre prosjektet lokalt
1.  Installer avhengigheter:
    ```bash
    npm install
    ```
2.  Start utviklingsserveren:
    ```bash
    npm run dev
    ```
3.  Åpne `http://localhost:5173` i nettleseren.

## Refleksjon rundt løsningen
Valget om å bruke en Custom Hook sammen med `useOutletContext` ble gjort for å holde koden "DRY" (Don't Repeat Yourself). Dette gjør det enkelt å utvide applikasjonen med flere innstillinger i fremtiden uten å måtte endre på selve ruting-logikken.