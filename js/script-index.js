$(document).ready( function(){
	var pagePathName= window.location.pathname;
   var name= pagePathName.substring(pagePathName.lastIndexOf("/") + 1);

	 if(name==="index.html"){
		 console.log(name);

		 $("#arrow").hide();

	 }else{
		 $("#menu").hide();
	 };

	 function printNews(){
		 $("#news").append($("<h3>NUEVAS RECETAS </h3>"));
	 };
	 printNews();

	 var activitiesArray="";
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activitiesArray);



});


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	var recipes = recipesArray;
	// console.log(recipes.length);

	for ( var i=0; i < recipes.length; i++){
		if(recipes[i].highlighted===true){
			renderRecipe(recipes[i]);
			console.log(recipes[i]);
		}
	}

};

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {


	$('.list-recipes').append(
		"<a class='item-recipe' href='#'>" +
			"<span class='attribution'>" +
				"<span class='title-recipe'>" + recipe.title + "</span>" +
				"<span class='metadata-recipe'>" +
				 	"<span class='author-recipe'>" + recipe.source.name + "</span>" +
					"<span class='bookmarks-recipe'>" +
						"<span class='icon-bookmark'></span>" +
					"</span>" +
				"</span>" +
			"</span>" +
			"<img src='img/recipes/640x800/" + recipe.name + ".jpg'>" +
		"</a>"
	);
};


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log(activitiesArray);

	if(activitiesArray.length >=0){
		$('.wrapper-message').hide();
	} else {
		for(var i = 0; i <activitiesArray.length; i++){
			renderActivities(activitiesArray[i]);
		};
	}


}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
