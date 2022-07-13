<template>
  <div class="general">
    <div class="section1">
      <strong
        ><center>Escolha a Loja para restaurar sua Ferrari!</center></strong
      >
    </div>

    <center>
      <div class="section2">
        <img
          class="image"
          src="https://st3.depositphotos.com/34890602/37743/i/1600/depositphotos_377430800-stock-photo-inside-the-workshop-large-workbench.jpg"
        />
      </div>
    </center>

    <div class="section3">
      <div class="section3-1 text-center">
        <img
          class="image"
          src="https://cdn.pixabay.com/photo/2016/10/06/19/50/workshop-1719872_960_720.jpg"
        />
      </div>
      <div class="section3-2">
        <img
          class="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsr8NJaTiTWhF5ROj-_tS62W6LC25JvabJGQ&usqp=CAU"
        />
      </div>
    </div>
    <div class="box">
      <div class="section4">
        <img
          class="image"
          src="https://i.ytimg.com/vi/mMgIPdzsz5M/maxresdefault.jpg"
        />
      </div>

      <div class="section5">
        <img
          class="image"
          src="https://st3.depositphotos.com/8536802/14548/i/1600/depositphotos_145484439-stock-photo-car-preparing-for-repairing-garage.jpg"
        />
      </div>
    </div>
    <div class="section6 white--text text-center">Escolha e fique Feliz!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Oswald&family=Pacifico&display=swap");

.general {
  font-family: "Oswald", sans-serif;
}

.section1 {
  width: 100%;
  height: 100px;
  background-color: rgb(255, 166, 0);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
}
.section2 {
  width: 310px;
  height: 240px;
  margin-top: 10px;
}

.section3 {
  width: 100%;
  height: 120px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
}

.section3-1 {
  width: 49%;
  height: 100%;
}

.section3-2 {
  width: 49%;
  height: 100%;
}

.section4 {
  width: 49%;
  height: 100px;
  margin-top: 10px;
  background-color: red;
}

.section5 {
  width: 49%;
  height: 100px;
  margin-top: 10px;
  background-color: red;
}

.image {
  width: 100%;
  height: 100%;
}

.box {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.section6 {
  height: 50px;
  background-color: rgb(112, 14, 14);
  margin-bottom: 10px;
  padding-left: 1px;
  padding-right: 1px;
  margin-top: 5px;
}

/* Media Query */

@media (min-width: 500px) {
  .section1 {
    font-size: 25px;
  }
  .section2 {
    width: 500px;
    height: 340px;
    margin-top: 10px;
  }
  .section3 {
    width: 100%;
    height: 190px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .section3-1 {
    width: 50%;
    height: 100%;
    font-size: 25px;
  }
  .box {
    width: 100%;
    height: 180px;
    display: flex;
    justify-content: space-between;
  }
  .section4 {
    width: 45%;
    height: 150px;
    margin-top: 10px;
    background-color: red;
  }

  .section5 {
    width: 45%;
    height: 150px;
    margin-top: 10px;
    background-color: red;
  }
  .section6 {
    height: 50px;
    background-color: rgb(112, 14, 14);
    margin-bottom: 10px;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 5px;
    font-size: 20px;
  }
}

@media (min-width: 800px) {
  .section1 {
    font-size: 30px;
  }
  .section2 {
    width: 600px;
    height: 360px;
    margin-top: 10px;
  }
  .section3 {
    width: 100%;
    height: 250px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .section3-1 {
    width: 50%;
    height: 100%;
    font-size: 36px;
  }
  .box {
    width: 100%;
    height: 230px;
    display: flex;
    justify-content: space-between;
  }
  .section4 {
    width: 45%;
    height: 190px;
    margin-top: 10px;
    background-color: red;
  }

  .section5 {
    width: 45%;
    height: 190px;
    margin-top: 10px;
    background-color: red;
  }
  .section6 {
    height: 70px;
    background-color: rgb(112, 14, 14);
    margin-bottom: 10px;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 5px;
    font-size: 30px;
  }
}

@media (min-width: 1000px) {
  .section1 {
    font-size: 40px;
  }
  .section2 {
    width: 800px;
    height: 500px;
    margin-top: 10px;
  }
  .section3 {
    width: 100%;
    height: 300px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .section3-1 {
    width: 50%;
    height: 100%;
    font-size: 45px;
  }
  .box {
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: space-between;
  }
  .section4 {
    width: 45%;
    height: 260px;
    margin-top: 10px;
    background-color: red;
  }

  .section5 {
    width: 45%;
    height: 260px;
    margin-top: 10px;
    background-color: red;
  }
  .section6 {
    height: 100px;
    background-color: rgb(112, 14, 14);
    margin-bottom: 10px;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 5px;
    font-size: 40px;
  }
}

@media (min-width: 1400px) {
  .section1 {
    font-size: 45px;
    height: 130px;
  }
  .section2 {
    width: 900px;
    height: 600px;
    margin-top: 10px;
  }
  .section3 {
    width: 100%;
    height: 400px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }
  .section3-1 {
    width: 50%;
    height: 100%;
    font-size: 60px;
  }
  .box {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: space-between;
  }
  .section4 {
    width: 45%;
    height: 330px;
    margin-top: 10px;
    background-color: red;
  }

  .section5 {
    width: 45%;
    height: 330px;
    margin-top: 10px;
    background-color: red;
  }
  .section6 {
    height: 100px;
    background-color: rgb(112, 14, 14);
    margin-bottom: 10px;
    padding-left: 1px;
    padding-right: 1px;
    margin-top: 5px;
    font-size: 45px;
  }
}
</style>
