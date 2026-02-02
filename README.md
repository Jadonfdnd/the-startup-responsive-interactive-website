Ontwerp en maak een responsive website voor een startup.


# PostNl Prototype
Dit is een responsive, interactieve en toegankelijke prototype van de PostNl homepagina, ontwikkeld als onderdeel van de opleiding FDND. Het doel van deze opdracht is het vertalen van een complexe interface naar een responsive en toegankelijke webpagina.

## Beschrijving

Deze website is een functioneel prototype van de PostNl omgeving.

**Responsive**
Er is gewerkt met een **mobile first** strategie, waar alle sections onder elkaar komen te staan voor duidelijkheid en effictiente manier van scrollen op kleine, smalle devices zoals een iphone se. Hier zijn een hamburger menu en accordion styled footer gebruikt.
Vanuit een iets breder scherm (tablet scherm) veranderen de info cards van een one column layout naar grid waar ze naast elkaar komen te staan. 
Op **desktop** waar de volledige breedte wordt gebruikt, heb je een 3 column grid voor de content blokken en een uitgebreid navigatiemenu in de header.
<img width="499" height="371" alt="image" src="https://github.com/user-attachments/assets/33ec3aab-c8c2-4d1f-9025-352c10b8032b" />

<img width="525" height="438" alt="image" src="https://github.com/user-attachments/assets/5e8569c6-b835-493c-8a64-ee67d3e54f2d" />

<img width="1373" height="604" alt="image" src="https://github.com/user-attachments/assets/4428e9c1-2970-477b-924a-554a67166aee" />

**Toegankelijkheid**
Toegankelijkheid is zeer belangrijk in dit project. Hier zijn de volgende richtlijnen van WCAG toegepast:
* Contrast: Kleurgebruik is gecontroleerd op contrastratio's (bijv. PostNL blauw op wit).
* Focus-states: Duidelijke visuele indicatoren voor toetsenbordgebruikers.
* Screenreaders: Een logische kop-structuur (h1 t/m h4).
* Interactie: Alle interactieve elementen zijn groot genoeg (minimaal 48px hoog) voor gebruikers met een motorische beperking.

  **Huisstijl**
De iconische PostNL huisstijl is verwerkt door:
* Het gebruik van het specifieke kleurenpalet: PostNL Orange (#ED6B00) voor actie en PostNL Blue (#3E32E3) voor navigatie.
* Afgeronde hoeken van 4px tot 8px die passen bij de vriendelijke uitstraling van het merk.
* Typografie die de leesbaarheid verbetert door ruime witregels en duidelijke lettertypes.

** Interactie & Animatie**
De interface bevat diverse interacties:
* Hamburger Menu: Maakt gebruik van een subtiele transformatie (de streepjes veranderen in een 'X') voor directe feedback.
* Footer Accordion: Geeft de gebruiker feedforward door middel van een draaiend pijltje, zodat men weet dat de sectie uitgeklapt kan worden.

## Kenmerken
**HTML & CSS**
* Structuur: Semantische HTML (gebruik van `<header>`, `<main>`, `<section>`, `<footer>`).
* CSS Grid & Flexbox: De layout is opgebouwd met CSS Grid voor de grote structuren en Flexbox voor de uitlijning binnen componenten.
* Code Conventies: Ik heb gewerkt met overzichtelijke CSS-nesting en duidelijke commentaren per sectie om de onderhoudbaarheid te vergroten.

Voorbeeld hiervan:

https://github.com/Jadonfdnd/the-startup-responsive-interactive-website/blob/be52374f1113a9dae58295b7d74f203c14625423/index.html#L35-L40

**JavaScript**
* Menu toggler: Een script dat de .open class toevoegt aan de navigatie.
* Footer Logic: Een forEach loop die zorgt dat de accordion-secties onafhankelijk van elkaar open en dicht kunnen klappen.


<img width="1481" height="831" alt="image" src="https://github.com/user-attachments/assets/b52c0321-5fb5-4777-a038-ecbcb1b08261" />

<img width="741" height="843" alt="image" src="https://github.com/user-attachments/assets/9f2efc18-ad37-4855-90c0-4feed24178cd" />

<img width="924" height="837" alt="image" src="https://github.com/user-attachments/assets/b071f024-ae2a-4d89-8289-f012d88f27f5" />


https://jadonfdnd.github.io/the-startup-responsive-interactive-website/

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


