Esercizio di oggi: *Vue Slider*
nome repo: vue-slider
*Descrizione:*
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
*Bonus:*
1- al click su una thumb, visualizzare in grande l'immagine corrispondente
2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce
*Consigli del giorno:*
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe 

SCOMPOSIZIONE PROBLEMA
>Creo l'app vue
    >>inserisco as suo interno l'array di oggetti che ci è stato fornito
>Definisco la destinazione delle informazioni nel dom 
    >>Definisoc active image e le attribuisco 0
    >>metto a vista gli elementi attivi nel dom 
>Attribuisco le funzionalità ai pulsanti next e prev con dei metodi vue
>utilizzo v-for per aggiungere i thumbnails 
    >faccio un binding sulla classe per rendere ll'opacità ad 1 alle immagini attive

