//Surround in function to include required async keyword
async function fetchRecipes() {
    try{
        //Wait on first Promise
        let response = await fetch('https://nutritionix-api.p.rapidapi.com/\
                                    v1_1/search/fruit?fields=item_name%2C\
                                    brand_name%2Cnf_calories%2Cnf_total_fat', 
                                    recipeoptions); 
                                    //recipeoptions declared in fetch_promise.js
        
        //Wait on second Promise
        let data = await response.json();
        
        console.log(data);
    } catch (error){
        console.error(error);
    }
}

//Call the async function
fetchRecipes();

