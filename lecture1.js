/*
 * 1. Are the following variable valid? If it is not please explain it and correct them using the est practise
 */
//variable names do not start with numbers
//var 1stCar = 'Doge';
var firstCar = 'Doge';

//do not use keywords as variable names
//var var = 'variable';
var variableName ='variable';

//do not use space between your variable name
//var first name = 'Jerry';
var firstName = 'Jerry';

//variable names follow camelCase convention make it human readable 
//var Sch00lName = 'MEST';
var shoolName = 'MEST';
//use camelCase to be human readable
var totalNumber = 100;

/*
 * 2. Are the following variable valid? If it is not please explain it and correct them by using the best practise
 */

 //use escape sequence for quotes and special characters

 //var greeting  =  'It's nice to me you today!';
var greeting  =  'It\'s nice to me you today!';

 //var response = "Ashwin said,\"Yes Sir!\"";
var response = "Ashwin said,\"Yes Sir!\"";


/*
 * 3. Try 0.3 + 0.1 === 0.4, explain what happen here
 */

 //the strict operator returns true because the opposite operands areof similar datatype  and are equal
0.3 + 0.1 === 0.4
true

/*
 * 4. Build a pizza object by using all three object creation method, it must has at least 4 properties
 */
   const pizza{
	    mushroom,
	    groundBeef,
	    hamPieces,
	    pineappleSlices,
	   };

//inbuilt  objects
   var pizza  = {};
	pizza.Mushrooms  = ‘thosemushrooms’;
	pizza.groundBeef = ‘4 peaces’;
	pizza.hamPieces  = 12;
	pizza.pineappleSlices = '12 slices';


//function objects
    function Pizza(mushrooms, groundBeef, hamPieces,pineappleSlices) {
				this.mushrooms = mushrooms; 
				this.groundBeef = groundBeef;
				this.hamPieces = hamPieces; 
				this.pineappleSlices = pineappleSlices; 
                                 } 

//object.create
	var object = Object.create(); 
	Var pizza = {
		mushrooms  = 'thosemushrooms';
		groundBeef = 'pieces';
		hamPieces  = 12;
		pineappleSlices = '12 slices';
		    };
	var pizza1 = Object.create(pizza); 


/*
 *  5. Build a Animal object by using object constructor function, and add at least two method to prototype,
 *     create two animals from it.
 */

	function Animals(name, warmBlood, invertabrate) {
	    this.name = name;
	    this.warmBlood = warmBlood;
	    this.invertabrate = invertabrate;
	  }

	Animals.prototype.view = function() {
	    return this.name ;
	};
	
   	Animals.prototype.isWarmBlood = function(warmBlood) {
		return this.warmBlood
	};


//create two animal instances
    var Animal1 = new animals("Eagle", true, true);

    var Animal2 = new animals("cow", true, true);



/*
 * 6. Write a small menu selection function by using if-else and switch, input number, output name of your order
 */

//if else
	var item  =prompt("menu items", "put your items number here");
            if( item === 1 ){
             alert('item 1 is fries 89$');
            }
            else if( item === 2 ){
               alert('item 2 is burger 29$');
	    }
            else{
		    alert('item not in menu')
	    }
          }

//case statement
            var item=var n = prompt("menu items", "put your items number here");
            switch (item)
            {
               case 1:
	           alert('item 1 is fries 89$');
               break;
            
               case  2:
                   alert('item 2 is burger 29$');
               break;
            
               default:  
	           alert('item not in menu')
            }
/*
 * 7. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array ,for loop and conditions.
 */


	var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
	for (i = 0; i < studentScores.length; i++) {
		if (studentScores[i] <= 50)
		{
	           console.log('Fail')
		}
		else if  (studentScores[i] >= 51 && studentScores[i] <= 80 )
		{
	           console.log('Pass')
		}
		else if (studentScores[i] >= 81 && studentScores[i] <= 100)
		{
		    console.log('Exemplary')
		}
		else
		{
		    console.log('out of range')
		}
	}



/*
 * 8. var studentScores = [50, 67, 80, 90, 100, 30, 88, 68]; write a program by using studentScores array , array.forEach and conditions.
 */

        var studentScores = [50, 67, 80, 90, 100, 30, 88, 68];
        var totalSum = 0;
	for each (var score in studentScores) {
	totalSum += score;
	var average= totalSum/studentScores.length
	}

console.log(totalSum);
console.log(average);
