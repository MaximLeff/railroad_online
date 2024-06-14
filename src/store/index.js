import {createStore} from 'vuex'

import carsMini from './cars_mini.json'
import cargos from './cargos.json'

const store = createStore({
    state() {
        return {
            current_car: [],
            cars_mini: carsMini,
            cargos: cargos,

            // нужно подумать
            car_cargos_calculation: []
        }
    },
    getters: {
        getCurrentCar(state) {
            return state.current_car
        },

        getCars(state) {
            return state.cars_mini
        },

        getCargos(state) {
            return state.cargos
        },

        // нужно подумать
        getСalcCarCargos(state) {
            return state.car_cargos_calculation
        }
    },
    mutations: {
        setCurrentCar(state, {currentCar}) {
            this.state.current_car = [currentCar]
            this.state.car_cargos_calculation = [currentCar]
        },


        // нужно подумать
        // calcCarsCargos(state, {quantity, getters}) {
        //     let car_arr = []
        //     let car_count = quantity
        //     console.log(car_count)
        //
        //     for (let car_item of state.cars_mini) {
        //         if (car_name === car_item.car_name) {
        //             let car_obj = {}
        //             for (let car_key in car_item){
        //                 if ( car_key === 'car_quantity') {
        //                     car_obj[car_key] = car_count
        //                 }
        //                 if ( car_key === 'car_price') {
        //                     let car_price_quantity = car_item[car_key] * car_count
        //                     car_obj[car_key] = car_price_quantity
        //                 }
        //
        //
        //                 else if ( car_key === 'car_cargos_price') {
        //                     let cargo_array = []
        //                     for (let car_cargo of car_item[car_key]) {
        //                         let car_cargo_obj = {}
        //                         for(let car_cargo_key in car_cargo) {
        //                             if (car_cargo_key == 'cargo_weight') {
        //                                 let car_cargo_weight_quantity = car_cargo[car_cargo_key] * car_count
        //                                 car_cargo_obj[car_cargo_key] = car_cargo_weight_quantity
        //                             }
        //                             else {
        //                                 car_cargo_obj[car_cargo_key] = car_cargo[car_cargo_key]
        //                             }
        //                         }
        //                         cargo_array.push(car_cargo_obj)
        //                     }
        //                     car_obj[car_key] = cargo_array
        //                 }
        //                 else {
        //                     car_obj[car_key] = car_item[car_key]
        //                 }
        //             }
        //             car_arr.push(car_obj)
        //         }
        //         else {
        //             car_arr.push(car_item)
        //         }
        //
        //     }
        //     state.cars_cargos_calculation = car_arr
        // }

        calcCarsCargos(state, {quantity, getters}) {
            let car_arr = []
            let car_count = quantity

            for (let car_item of state.current_car) {
                let car_obj = {}
                for (let car_key in car_item) {
                    if (car_key === 'car_price') {
                        let car_price_quantity = car_item[car_key] * car_count
                        car_obj[car_key] = car_price_quantity
                    }
                    else if (car_key === 'car_weight') {
                        let car_price_quantity = car_item[car_key] * car_count
                        car_obj[car_key] = car_price_quantity
                    }
                    else if (car_key === 'car_cargos_price') {
                        let cargo_array = []
                        for (let car_cargo of car_item[car_key]) {
                            let car_cargo_obj = {}
                            for (let car_cargo_key in car_cargo) {
                                if (car_cargo_key == 'cargo_price') {
                                    let car_cargo_weight_quantity = car_cargo[car_cargo_key] * car_count
                                    car_cargo_obj[car_cargo_key] = car_cargo_weight_quantity
                                }
                                else if (car_cargo_key == 'cargo_number_of_units') {
                                    let car_cargo_weight_quantity = car_cargo[car_cargo_key] * car_count
                                    car_cargo_obj[car_cargo_key] = car_cargo_weight_quantity
                                }
                                else if (car_cargo_key == 'cargo_weight') {
                                    let car_cargo_weight_quantity = car_cargo[car_cargo_key] * car_count
                                    car_cargo_obj[car_cargo_key] = car_cargo_weight_quantity
                                }
                                else {
                                    car_cargo_obj[car_cargo_key] = car_cargo[car_cargo_key]
                                }
                            }
                            cargo_array.push(car_cargo_obj)
                        }
                        car_obj[car_key] = cargo_array
                    } else {
                        car_obj[car_key] = car_item[car_key]
                    }
                }
                car_arr.push(car_obj)
            }
            state.car_cargos_calculation = car_arr
        }
    },
    actions: {
        setCurrentCar(context, {item}) {
            let currentCar = item
            this.commit('setCurrentCar', {currentCar});
        },

        // нужно подумать
        calcCarsCargos(context, {quantity}) {
            this.commit('calcCarsCargos', {quantity});
        }
    }
})

export default store;