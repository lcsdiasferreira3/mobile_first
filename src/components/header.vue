<template>
  <div class="header">
    <header class="box">
      <img @click="open()" class="image" src="../assets/menu.svg" />

      <strong class="name">Ferrari Store</strong>

      <img
        class="image2"
        src="https://upload.wikimedia.org/wikipedia/pt/thumb/f/fb/Logotipo_da_Scuderia_Ferrari.svg/1200px-Logotipo_da_Scuderia_Ferrari.svg.png"
      />
    </header>
    <nav class="hidden" id="navigation">
      <div class="block">
        <span class="images-nav">
          <img @click="close()" class="imageNav" src="../assets/menu.svg" />
          <img
            class="imageNav2"
            src="https://upload.wikimedia.org/wikipedia/pt/thumb/f/fb/Logotipo_da_Scuderia_Ferrari.svg/1200px-Logotipo_da_Scuderia_Ferrari.svg.png"
          />
        </span>

        <span
          class="itens-nav"
          v-for="(itens, index) in itens"
          :key="index"
          @click="toRouter(itens.to)"
        >
          <img class="imageNav3" :src="itens.url" />
          <strong>{{ itens.name }}</strong>
        </span>
      </div>
    </nav>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");

.block {
  width: 100%;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header {
  background-color: rgb(227, 8, 8);
  width: 100%;
  height: 80px;
  margin: 0;
  font-family: "Pacifico", cursive;
}
.image {
  width: 10%;
  padding-left: 10px;
  cursor: pointer;
}

.image2 {
  width: 13%;
  padding-right: 5px;
}

.imageNav {
  width: 15%;
  height: 6%;
  padding: 10px;
  cursor: pointer;
}

.imageNav2 {
  width: 15%;
  height: 7%;
  padding: 10px;
}

.imageNav3 {
  width: 20%;
  height: 6%;
  padding: 10px;
  cursor: pointer;
}

.images-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.itens-nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 30px;
  align-items: center;
  background-color: rgb(190, 73, 73);
  cursor: pointer;
}

.navigation {
  position: relative !important;
  display: flex;
  background-color: rgb(158, 45, 45);
  animation: open 1s forwards;
  top: -80px;
  height: 149vh;
}

.navigationClose {
  position: relative !important;
  display: flex;
  background-color: rgb(158, 45, 45);
  animation: close 1s forwards;
  top: -80px;
  height: 149vh;
}

.hidden {
  display: none !important;
}

.name {
  font-size: 30px;
}

@keyframes open {
  from {
    display: none !important;
    transform: translate3d(-400px, 0px, 0px);
  }
  to {
    transform: translate3d(0px, 0px, 0px);
  }
}

@keyframes close {
  from {
    transform: translate3d(0px, 0px, 0px);
  }
  to {
    transform: translate3d(-400px, 0px, 0px);
    display: none !important;
  }
}

/* Media Querys */

@media (min-width: 500px) {
  .image {
    width: 8%;
    padding-left: 10px;
    cursor: pointer;
  }
  .image2 {
    width: 7%;
    padding-right: 5px;
  }

  .navigation {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: open 1s forwards;
    top: -80px;
    height: 192.4vh;
    width: 300px;
  }

  .navigationClose {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: close 1s forwards;
    top: -80px;
    height: 192.4vh;
    width: 300px;
  }
  @keyframes open {
    from {
      display: none !important;
      transform: translate3d(-400px, 0px, 0px);
    }
    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes close {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(-400px, 0px, 0px);
      display: none !important;
    }
  }

  .imageNav {
    width: 20%;
    height: 6%;
    padding: 10px;
    cursor: pointer;
  }

  .imageNav2 {
    width: 17%;
    height: 7%;
    padding: 10px;
  }
}

@media (min-width: 800px) {
  .navigation {
    height: 219.5vh;
  }

  .navigationClose {
    height: 219.5vh;
  }
}

@media (min-width: 1000px) {
  .image {
    width: 6%;
    padding-left: 10px;
    cursor: pointer;
  }
  .image2 {
    width: 5%;
    padding-right: 5px;
  }

  .navigation {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: open 1s forwards;
    top: -80px;
    height: 271.8vh;
    width: 300px;
  }

  .navigationClose {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: close 1s forwards;
    top: -80px;
    height: 219.5vh;
    width: 300px;
  }
  @keyframes open {
    from {
      display: none !important;
      transform: translate3d(-400px, 0px, 0px);
    }
    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes close {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(-400px, 0px, 0px);
      display: none !important;
    }
  }

  .imageNav {
    width: 20%;
    height: 6%;
    padding: 10px;
    cursor: pointer;
  }

  .imageNav2 {
    width: 17%;
    height: 7%;
    padding: 10px;
  }
}

@media (min-width: 1300px) {
  .image {
    width: 4%;
    padding-left: 10px;
    cursor: pointer;
  }
  .image2 {
    width: 3%;
    padding-right: 5px;
  }

  .navigation {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: open 1s forwards;
    top: -80px;
    height: 271.8vh;
    width: 300px;
  }

  .navigationClose {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: close 1s forwards;
    top: -80px;
    height: 271.8vh;
    width: 300px;
  }
  @keyframes open {
    from {
      display: none !important;
      transform: translate3d(-400px, 0px, 0px);
    }
    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes close {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(-400px, 0px, 0px);
      display: none !important;
    }
  }

  .imageNav {
    width: 20%;
    height: 6%;
    padding: 10px;
    cursor: pointer;
  }

  .imageNav2 {
    width: 17%;
    height: 7%;
    padding: 10px;
  }
}

@media (min-width: 1400px) {
  .image {
    width: 4%;
    padding-left: 10px;
    cursor: pointer;
  }
  .image2 {
    width: 3%;
    padding-right: 5px;
  }

  .navigation {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: open 1s forwards;
    top: -80px;
    height: 331.5vh;
    width: 300px;
  }

  .navigationClose {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: close 1s forwards;
    top: -80px;
    height: 149vh;
    width: 300px;
  }
  @keyframes open {
    from {
      display: none !important;
      transform: translate3d(-400px, 0px, 0px);
    }
    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes close {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(-400px, 0px, 0px);
      display: none !important;
    }
  }

  .imageNav {
    width: 20%;
    height: 6%;
    padding: 10px;
    cursor: pointer;
  }

  .imageNav2 {
    width: 17%;
    height: 7%;
    padding: 10px;
  }
}

@media (min-width: 1800px) {
  .image {
    width: 2%;
    padding-left: 10px;
    cursor: pointer;
  }
  .image2 {
    width: 2%;
    padding-right: 5px;
  }

  .navigation {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: open 1s forwards;
    top: -80px;
    height: 195.8vh;
    width: 300px;
  }

  .navigationClose {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: close 1s forwards;
    top: -80px;
    height: 93vh;
    width: 300px;
  }
  @keyframes open {
    from {
      display: none !important;
      transform: translate3d(-400px, 0px, 0px);
    }
    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes close {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(-400px, 0px, 0px);
      display: none !important;
    }
  }

  .imageNav {
    width: 20%;
    height: 6%;
    padding: 10px;
    cursor: pointer;
  }

  .imageNav2 {
    width: 17%;
    height: 7%;
    padding: 10px;
  }
}

@media (min-height: 721px) and (max-height: 722px) {
  .image {
    width: 4%;
    padding-left: 10px;
    cursor: pointer;
  }
  .image2 {
    width: 3%;
    padding-right: 5px;
  }

  .navigation {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: open 1s forwards;
    top: -80px;
    height: 254.2vh;
    width: 300px;
  }

  .navigationClose {
    position: relative !important;
    display: flex;
    background-color: rgb(158, 45, 45);
    animation: close 1s forwards;
    top: -80px;
    height: 254.2vh;
    width: 300px;
  }
  @keyframes open {
    from {
      display: none !important;
      transform: translate3d(-400px, 0px, 0px);
    }
    to {
      transform: translate3d(0px, 0px, 0px);
    }
  }

  @keyframes close {
    from {
      transform: translate3d(0px, 0px, 0px);
    }
    to {
      transform: translate3d(-400px, 0px, 0px);
      display: none !important;
    }
  }

  .imageNav {
    width: 20%;
    height: 6%;
    padding: 10px;
    cursor: pointer;
  }

  .imageNav2 {
    width: 17%;
    height: 7%;
    padding: 10px;
  }
}
</style>

<script>
export default {
  data() {
    return {
      itens: [
        {
          url: require("../assets/home.svg"),
          name: "Início",
          to: "Home",
        },
        {
          url: require("../assets/shopping_cart.svg"),
          name: "Comprar Ferrari",
          to: "Buy",
        },
        {
          url: require("../assets/engineering.svg"),
          name: "Manunteção para sua Ferrari",
          to: "Maintenance",
        },
        {
          url: require("../assets/autorenew.svg"),
          name: "Restaurar sua Ferrari",
          to: "Restore",
        },
      ],
    };
  },

  methods: {
    close() {
      document.getElementById("navigation").className = "navigationClose";
      setTimeout(() => {
        document.getElementById("navigation").className = "hidden";
      }, 700);
    },
    open() {
      document.getElementById("navigation").className = "navigation";
    },
    toRouter(item) {
      this.$router.push({ name: item });
      this.close();
    },
  },
};
</script>
