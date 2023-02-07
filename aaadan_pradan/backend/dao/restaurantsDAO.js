let restaurants

export default class RestaurantsDAO{
    static async injectDB(connection){
        if(restaurants){
            return
        }
        try{
            restaurants=await connection.db(process.env.RESTREVIEWS_NS).collection("restaurants")
        }
        catch(e){
            console.error(
                `Unable to establish a collection handle in user_models:${e}`
            )
        }
    }

    static async getRestaurants({
        filters=null, // sorting is required
        page=0, //start page
        restaurantsPerPage=20, // show per page
    }={}){
        let query
        if(filters){
            if('name' in filters){
                query={$text:{$search: filters["name"]}}
            }
            else if("cuisine" in filters){
                query={"cuisine":{$eq: filters["cuisine"]}}
            }
            else if("zipcode" in filters){
                query={"address.zipcode":{$eq: filters["zipcode"]}}
            }
        }
        let cursor

        try{
            cursor=await restaurants
            .find(query)
        }
        catch(err){
            console.log(`Unable to issue find command, %{e}`)
            return{restaurantsList:[],totalNumRestaurants:0}
        }

        const displayCursor=cursor.limit(restaurantsPerPage).skip(restaurantsPerPage*page)//skip from the page you are at to the wanted page

        try{
            const restaurantsList=await displayCursor.toArray()
            const totalNumRestaurants = await restaurants.countDocuments(query)

            return{restaurantsList,totalNumRestaurants}
        }catch(err){
            console.error(`Unable to convert cursor to array or problem counting documents, ${err}`)
        }
        return {restaurantsList:[],totalNumRestaurants:0}
    }
}