<template>
    <div class="container">
        <table>
            <thead>
            <tr>
                <td></td>
                <td v-for="car in getCars"></td>
                <td>Сумма</td>
            </tr>
            <tr>
                <td>Название</td>
                <td v-for="car in getCars">{{ car.car_name }}</td>
                <td></td>
            </tr>
            <tr>
                <td>Уровень</td>
                <td v-for="car in getCars">{{ car.car_level }}</td>
                <td></td>
            </tr>
            <tr>
                <td>Вес вагона</td>
                <td v-for="car in getCars">{{ car.car_weight }}</td>
                <td></td>
            </tr>
            <tr>
                <td>Цена</td>
                <td v-for="car in getCars">{{ car.car_price }}</td>
                <td></td>
            </tr>
            <tr>
                <td>Количество вагонов</td>
                <td v-for="car in getCars">
                    <input type="number" min=0 value=0 v-model="quantity" @input="calcCarsCargos(car.car_name)">
                </td>
                <td></td>
            </tr>
            </thead>

            <tbody>
            <template v-for="(cargo, index) in getCargos">
                <tr class="tr-top">
                    <td colspan="100" class="td-center">{{ cargo.cargo_name }}</td>
                </tr>
                <tr>
                    <td>Цена</td>
                    <template v-for="car in getCars" :key="car.car_name">
                        <td>
                            <template v-for="a in car.car_cargos_price">
                                <template v-if="a.cargo_type == cargo.cargo_id">{{a.cargo_price}}</template>
                            </template>
                        </td>
                    </template>
                </tr>
                <tr>
                    <td>Количество</td>
                    <template v-for="car in getCars" :key="car.car_name">
                        <td>
                            <template v-for="a in car.car_cargos_price">
                                <template v-if="a.cargo_type == cargo.cargo_id">{{a.cargo_number_of_units}}</template>
                            </template>
                        </td>
                    </template>
                </tr>
                <tr>
                    <td>Вес</td>
                    <template v-for="car in getCars" :key="car.car_name">
                        <td>
                            <template v-for="a in car.car_cargos_price">
                                <template v-if="a.cargo_type == cargo.cargo_id">{{a.cargo_weight}}</template>
                            </template>
                        </td>
                    </template>
                </tr>
            </template>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'PageCalculator',
    computed: {
        getCargos() {
            return this.$store.getters.getCargos
        },
        getCars() {
            return this.$store.getters.getСalcCarsCargos
        },
    },
    methods: {
        calcCarsCargos(car_name) {
            let quantity = this.quantity
            this.$store.dispatch('calcCarsCargos', {quantity, car_name})
            this.$store.getters.getСalcCarsCargos
        },
        // setCarQuantiy(e) {
        //     console.log(e.target.value)
        // }
    }
}
</script>

<style scope>
* {
  --c-border: #ccc;
  --c-border-2: #eeeeee;
}
thead {
    border-bottom: 4px solid var(--c-border);
}
td {
    padding: 5px;
    border-bottom: 1px solid var(--c-border-2);
}
td:not(:first-child) {
    text-align: center;
}
td:not(:last-child) {
    border-right: 1px solid var(--c-border-2);
}
td:first-child {
    border-right: 2px solid var(--c-border);
}
.tr-top {
    border-top: 2px solid var(--c-border);

}
.tr-top td {
    border-right: unset;
}
.td-center {
    text-align: center;
}

</style>