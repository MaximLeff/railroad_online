<template>
    <div class="card">
        <div v-for="item in getCurrentCar" :key="item.key">
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
                    <div v-for="item in item.car_type_of_cargo" :key="item.key">{{ item }}</div>
                </span>
                </div>
            </div>
            <div class="card-cargos-wrap">
                <div class="card-cargos" v-for="cargo in item.car_cargos_price">
                    <div class="card-row">
                        <span>Название груза</span>
                        <span>{{ cargo.cargo_type }}</span>
                    </div>
                    <div class="card-row">
                        <span>Цена доставки</span>
                        <span>{{ cargo.cargo_price }}</span>
                    </div>
                    <div class="card-row">
                        <span>Количестов</span>
                        <span>{{ cargo.cargo_number_of_units }}</span>
                    </div>
                    <div class="card-row">
                        <span>Вес, lbs</span>
                        <span>{{ cargo.cargo_weight_lbs }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CarItemDetail',

    data() {
        return {}
    },
    computed: {
        getCurrentCar() {
            return this.$store.getters.getCurrentCar
        }
    },
    mounted() {
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
    gap: 10px;
}

.card-type-cargo {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-cargos-wrap {
    padding: 10px;
    border-top: 1px solid #000;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}
.card-cargos {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.card-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>