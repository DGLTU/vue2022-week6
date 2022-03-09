<template>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="@/assets/beforemidnight.jpg" class="w-100 d-block" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>愛在午夜希臘時  <span>片長:108分鐘</span></h1>
        <div class="my-3 star">
          <i class="fa-solid fa-star" v-for="star in 10" :key="star"></i>
        </div>
        <button class="btn btn-danger">立即訂票<i class="ms-3 fa-solid fa-ticket"></i></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/forrestgump.jpg" class="w-100 d-block" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>阿甘正傳  <span>片長:142分鐘</span></h1>
        <div class="my-3 star">
          <i class="fa-solid fa-star" v-for="star in 10" :key="star"></i>
        </div>
        <button class="btn btn-danger">立即訂票<i class="ms-3 fa-solid fa-ticket"></i></button>
      </div>
    </div>
    <div class="carousel-item">
      <img src="@/assets/https___cdn.cnn.com_cnnnext_dam_assets_200320084342-life-is-beautiful.jpg" class="w-100 d-block" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>美麗人生  <span>片長:116分鐘</span></h1>
        <div class="my-3 star">
          <i class="fa-solid fa-star" v-for="star in 10" :key="star"></i>
        </div>
        <button class="btn btn-danger">立即訂票<i class="ms-3 fa-solid fa-ticket"></i></button>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home'
}
</script>
