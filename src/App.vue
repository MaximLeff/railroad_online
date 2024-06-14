<template>
    <header>
        <div class="container">
            <nav>
                <router-link to="/">Главная</router-link>
                <router-link to="/cars">Вагоны</router-link>
                <router-link to="/locomotives">Локомотивы</router-link>
                <router-link to="/constructor">Конструктор</router-link>
                <router-link to="/сalculator">Калькулятор</router-link>
            </nav>
        </div>
    </header>

    <router-view></router-view>


    <footer></footer>
</template>

<script>
export default {}
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    padding: 20px;
}
</style>
