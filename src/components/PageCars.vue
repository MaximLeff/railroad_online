<template>
    <div class="container">
        <h1>Вагоны</h1>
    </div>
    <div class="cards container">
        <CarItem/>
    </div>

</template>

<script>
import CarItem from "@/components/cars/CarItem.vue";

export default {
    name: 'PageCars',
    components: {
        CarItem
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