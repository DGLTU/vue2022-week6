<template>
<div class="container">
  <nav class="mt-3">
    <ul class="pagination pagination-lg">
      <li class="page-item">
        <a class="page-link"><i class="fa-solid fa-backward-step"></i></a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"><span>今日</span></a>
      </li>
      <li class="page-item" v-for="day in date" :key="day">
        <a class="page-link" href="#">
          <span class="d-block">{{day}}</span>
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"><i class="fa-solid fa-forward-step"></i></a>
      </li>
    </ul>
  </nav>
  <div class="row mb-3 movie" v-for="item in movie" :key="item.id">
    <div class="col-3">
      <div class="card" style="width: 18rem;">
        <img :src="item.imageUrl" class="card-img-top" alt="">
        <div class="card-body">
          <div class="card-text d-flex justify-content-between">
            <p>片長: {{item.content}}</p>
            <p><img src="@/assets/img-class/class0.gif" alt=""></p>
          </div>
        </div>
      </div>
    </div>
    <div class="col-9 p-3 movie-time">
      <h4 class="fw-bold">{{item.title}}</h4>
      <p>{{item.description}}</p>
      <button type="button" class="btn btn-outline-danger" @click="booking(item.id)">訂票去</button>
    </div>
  </div>
</div>
</template>

<script>
import { api } from '../views/function/api.js'
const ApiPath = process.env.VUE_APP_API_PATH
export default {
  name: 'Schedule',
  data () {
    return {
      movie: [],
      date: []
    }
  },
  mounted () {
    api('get', `api/${ApiPath}/products`).then((res) => {
      this.movie = res.data.products
    })
    for (let i = 1; i <= 3; i++) {
      let day = new Date().setDate(new Date().getDate() + i)
      day = `${new Date(day).getMonth() + 1}/${new Date(day).getDate()}`
      this.date.push(day)
    }
  },
  methods: {
    booking (id) {
      const data = {
        product_id: id,
        qty: 1
      }
      api('post', `api/${ApiPath}/cart`, data).then(() => {
        this.$router.push({ path: '/booking' })
      })
    }
  }
}
</script>
