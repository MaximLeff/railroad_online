<template>
    <div class="container">
        <h1>Вагон</h1>
    </div>
    <div class="cards container">
        <CarItemDetail/>
    </div>

</template>

<script>
import CarItemDetail from "@/components/cars/CarItemDetail.vue";

export default {
    name: 'PageCar',
    components: {
        CarItemDetail
    },
}
</script>

<style scoped>
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, 400px);
    gap: 20px;
}
</style>