<template>
    <div class="container">
        <h1>Вагон</h1>
        <div class="cards">
            <CarItemDetail/>
        </div>
    </div>

    <LocomotiveAccessible/>
</template>

<script>
import CarItemDetail from "@/components/cars/CarItemDetail.vue";
import LocomotiveAccessible from "@/components/locomotives/LocomotiveAccessible.vue";

export default {
    name: 'PageCar',
    components: {
        CarItemDetail,
        LocomotiveAccessible
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