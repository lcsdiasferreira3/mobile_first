<template>
  <div class="general">
    <div class="section1">
      <strong><center>Escolha seu Restaurador!</center></strong>
    </div>

    <center>
      <div class="section2">
        <img
          class="image"
          src="https://i2.wp.com/blog.mundomidia.com/wp-content/uploads/2018/06/como-contratar-um-bom-mecanico.jpg?resize=696%2C696&ssl=1"
        />
      </div>
    </center>

    <div class="section3">
      <div class="section3-1 text-center">
        <img
          class="image"
          src="https://contagemmotorpecas.com.br/blog/wp-content/uploads/sites/3/2019/07/mec.jpg"
        />
      </div>
      <div class="section3-2">
        <img
          class="image"
          src="https://st2.depositphotos.com/1158045/5432/i/600/depositphotos_54320635-stock-photo-mechanic-working-on-car-engine.jpg"
        />
      </div>
    </div>
    <div class="box">
      <div class="section4">
        <img
          class="image"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpdi30ENuWXY-cYKIq3USCOKLuphLnGuPVFw&usqp=CAU"
        />
      </div>

      <div class="section5">
        <img
          class="image"
          src="https://www.centersystem.com.br/wp-content/uploads/2021/02/happy-mechanic-standing-by-car-1200x675.jpg"
        />
      </div>
    </div>
    <div class="section6 white--text text-center">
      Temos os melhores restauradores do Brasil!
    </div>
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
  background-color: rgb(166, 255, 0);
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
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
