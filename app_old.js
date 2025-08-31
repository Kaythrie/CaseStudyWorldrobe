<script>

  const app = Vue.createApp({
    data() {
      return {
            Oberteile: [
                {item: "Top", anzahl: 0},
                {item: "T-Shirt", anzahl: 0},
                {item: "Bluse", anzahl: 0},
                {item: "Hemd", anzahl: 0},
                {item: "Pullover", anzahl: 0}
        ],
            Hosen: [
                {item: "Jeans", anzahl: ""},
                {item: "Leggin", anzahl: ""},
                {item: "Shorts", anzahl: ""},
                {item: "Rock", anzahl: ""},
                {item: "Shorts", anzahl: ""},
                {item: "andere Hose", anzahl: ""},
        ],
            Oberbekleidung: [
                {item: "Kleid", anzahl: ""},
                {item: "Anzug", anzahl: ""},
        ],
        Jacken: [
                {item: "Blazer", anzahl: ""},
                {item: "Jacke", anzahl: ""},
                {item: "Mantel", anzahl: ""},
        ],
        Schuhe: [
                {item: "Stiefel", anzahl: ""},
                {item: "Schuhe", anzahl: ""},
                {item: "Sandalen", anzahl: ""},
        ],
        Kopfbedeckung: [
                {item: "Mütze", anzahl: ""},
                {item: "Hut", anzahl: ""},
        ],
        Sonstiges: [
                {item: "Kravatte", anzahl: ""},
                {item: "Schal", anzahl: ""},
                {item: "Handschuhe", anzahl: ""},
                {item: "Gürtel", anzahl: ""},
                {item: "Tasche", anzahl: ""},
                {item: "Accessoires", anzahl: ""},
                {item: "Sonstiges", anzahl: ""},
        ]
        }
    }

        }).mount('#app')

</script>  
