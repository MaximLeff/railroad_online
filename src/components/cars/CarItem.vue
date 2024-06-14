<template>
    <router-link
        :to="'/car/' + item.car_name.replaceAll(' ', '_').toLowerCase()"
        class="card"
        v-for="item in this.db"
        :key="item.car_name"
        @click="setCar(item)"
    >
        <div class="card-image">
            <img :src="item.car_image" alt="">
        </div>
        <div class="card-content">
            <div class="card-row">
                <span>Название: </span>
                <span>{{ item.car_name }}</span>
            </div>
            <div class="card-row">
                <span>Производитель: </span>
                <span>{{ item.car_manufacturer }}</span>
            </div>
            <div class="card-row">
                <span>Модель: </span>
                <span>{{ item.car_model }}</span>
            </div>
            <div class="card-row">
                <span>Год: </span>
                <span>{{ item.car_year }}</span>
            </div>
            <div class="card-row">
                <span>Масса: </span>
                <span>{{ item.car_weight }}</span>
            </div>
            <div class="card-row">
                <span>Цена: </span>
                <span>{{ item.car_price }}</span>
            </div>
            <div class="card-row">
                <span>Тип грузов: </span>
                <span class="card-type-cargo">
                    <template v-for="cargos in item.car_cargos_price" :key="item.key">
                        <p>{{cargos.cargo_type}}</p>
                    </template>
                </span>
            </div>
        </div>
    </router-link>
</template>

<script>
import db from "@/store/cars_mini.json"

export default {
    name: 'CarItem',
    data() {
        return {
            db: db,
        }
    },
    methods: {
        setCar(item){
            this.$store.dispatch('setCurrentCar',{item});
        }
    }
}
</script>

<style scoped>
.card {
    border: 1px solid #ccc;
    border-radius: 5px;
    max-width: 400px;
    overflow: hidden;
}
.card-content {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap:10px;
}
.card-type-cargo {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>