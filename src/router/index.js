import { createRouter, createWebHashHistory } from "vue-router"
import PageHome from '@/components/PageHome.vue'
import PageCars from '@/components/PageCars.vue'
import PageCar from '@/components/PageCar.vue'
import PageLocomotives from '@/components/PageLocomotives.vue'
import PageConstructor from '@/components/PageConstructor.vue'
import PageCalculator from '@/components/PageCalculator.vue'
export default createRouter ({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'PageHome',
            component: PageHome,
        },
        {
            path: '/cars',
            name: 'PageCars',
            component: PageCars,
        },
        {
            path: '/car/:car_name?',
            name: 'PageCar',
            component: PageCar,
        },
        {
            path: '/locomotives',
            name: 'PageLocomotives',
            component: PageLocomotives,
        },
        {
            path: '/constructor',
            name: 'PageConstructor',
            component: PageConstructor,
        },
        {
            path: '/сalculator',
            name: 'PageCalculator',
            component: PageCalculator,
        },
    ]
})