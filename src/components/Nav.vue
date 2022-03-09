<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
        <a class="navbar-brand" href="#"><img src="@/assets/logo.png" alt=""></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item ">
                <router-link to="/" class="nav-link">首頁</router-link>
            </li>
            <!-- <li class="nav-item">
                <router-link to="/today" class="nav-link">今日電影</router-link>
            </li> -->
            <li class="nav-item">
                <router-link to="/schedule" class="nav-link">電影時刻表</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/booking" class="nav-link">訂票中心</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin" class="nav-link">後台</router-link>
            </li>
            </ul>
        </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'Nav'
}
</script>
