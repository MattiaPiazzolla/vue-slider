const { createApp } = Vue;
// CREO L'APP
createApp({
    data(){
        return {
            // Definisci le slide con i dati dell'immagine, titolo e testo
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ],
            // DEFINISCO LA SLIDE ATTIVA
            active_slide: 0,
        };
    },
    methods: {
        // AGGIUNGO IL METODO PER GESTIRA IL PULSANTE NEXT
        nextSlide(){
            // VERIFICO CHE LA POSIZIONE DELLE SLIDE NON VADA MAI OLTRE LA LUNGHEZZA DELL'ARRAI CHE LE COSTITUISCE
            if (this.active_slide == this.slides.length -1) {
                // DISOC ALL'APP DI RINIZIARE DA ZERO
                this.active_slide = 0;
            } else {
                // ALTRIMENTI GLI DICO DI ANDARE AVANTI 
                this.active_slide++;
            }
        },
        // AGGIUNGO IL METODO PER GESTIRA IL PULSANTE PREV
        prevSlide(){
            // VERIFICO CHE LA POSIZIONE DELLE SLIDE NON VADA MAI A MENO DI 0
            if (this.active_slide == 0) {
                // DISOC ALL'APP DI RINIZIARE DAL'ULTIMO ELEMENTO DELL'ARRAY
                this.active_slide = this.slides.length -1;
            } else {
                // ALTRIMENTI GLI DICO DI TORNARE INDIETOR
                this.active_slide--;
            }
        }
        
    },
}).mount('#app');

