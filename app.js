//loading api......
const getMealsInfo =(name)=>{
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
          fetch(url)
         .then(res=> res.json())
         .then(data=> displayMealsData(data))
   }

    document.getElementById('searchBtn').addEventListener('click',function(){
        const inputValue = document.getElementById('inputValue').value;
          if (inputValue == 0 || inputValue == undefined || inputValue == null) {
            console.log('empty')
            document.getElementById('error').style.display = 'block';
        }  
          else{  getMealsInfo(inputValue); }

         })
 //display Meals data...  
const displayMealsData = (Data)=>{
   const meals = Data.meals;
   const container = document.getElementById('container');
         container.innerHTML = '';
         meals.forEach(element => {
   const addeMealDiv = document.createElement('div');
         addeMealDiv.className = 'food';
   const strMealName = element.strMeal;
   const imageLink = element.strMealThumb;    
   const mealsInfo = `
       <div  onclick = "displayDetails('${strMealName}')">
       <img src=${imageLink}>
       <p class=''>${strMealName}</p>
      </div> `;

     addeMealDiv.innerHTML = mealsInfo;
     container.appendChild(addeMealDiv)
      
   });
   }
//load api for display ingredient..
 function displayDetails(strMealName){
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${strMealName}`
         fetch(url)
        .then(res => res.json())
        .then(data => displayIngredient(data))   
 }
 
 const displayIngredient =(data)=>{
     const ingredientSection = document.getElementById('ingredient');
          ingredientSection.innerHTML = '';
     const meals = data.meals;
           meals.forEach(element =>{
     const addedIngredientDiv = document.createElement('div');
           addedIngredientDiv.className = 'strDiv';
     const imageLink = element.strMealThumb;
     const mealName = element.strMeal;
     const strMeasure1 = element.strMeasure1;
     const strMeasure2 = element.strMeasure2;
     const strMeasure3 = element.strMeasure3;
     const strMeasure4 = element.strMeasure4;
     const strInstructions = element.strInstructions;
     const ingredientInfo = `
       <img src=${imageLink}>
       <h3>${mealName}</h3>
       <h2>Ingredient</h2>
       <li>${strMeasure1}</li>
       <li>${strMeasure2}</li>
       <li>${strMeasure3}</li>
       <li>${strMeasure4}</li>
       <p id='strInstruc'>${strInstructions}</p> 
     `
     addedIngredientDiv.innerHTML = ingredientInfo ;
     ingredientSection.appendChild(addedIngredientDiv);      
     })
    
 }
