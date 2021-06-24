// Descrizione: Stampare a schermo un messaggio 
// all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue(
    {
        el: '#app',
        data: {
            text: 'ciao mondo',
            contentClass: 'hidden',
            buttonText: 'Show me!',
        },
        methods: {
            showElement: function () {
                if (this.contentClass === 'hidden') {
                    this.buttonText = 'Hide me!'
                    this.contentClass = 'show';
                } else {
                    this.buttonText = 'Show me!'
                    this.contentClass = 'hidden';
                }
            }    
        }
    }
 );
  