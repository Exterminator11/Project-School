import express from "express"
import RestaurantsControl from './restaurants.controller.js'

const router=express.Router()

router.route("/").get(RestaurantsControl.apiGetRestaurants)

export default router