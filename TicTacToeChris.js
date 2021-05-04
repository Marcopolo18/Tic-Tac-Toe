        // declare variable player
        var player;

        // set player to "x";
        player = "x";

        // or combined: declare variable player and set player to "x"
        var player = "x";

        //life-sign
        //alert (player);

        // alert value of variable player
        //alert (player);

        // alert "Hello" plus value of player
        //alert ("Hello " + player);

        //declare variable hint and set it to element object with 
        // id "hint", using document.querySelector () 
        var hint = document.querySelector("#hint");
        //alert(hint);

        // set inner HTML text of hint to "Hello" plus value 
        // of player plus " - select a field!" at the end
        hint.innerHTML = "Hello " + player + " - select a field!";

function markField (mouseEvent) { 

        // dev only: alert target object of mouse event
        //alert (mouseEvent.target);

        //var target = button.innerHTML;

        // alert (mouseEvent.target);

        // declare variable field and set to target object of mouse event;
        var field = mouseEvent.target;

        //label the field with the player's name, set aria-label attribute to set background-image)
        field.setAttribute ("aria-label", player);

        //disable field against further mouse clicks (set disabled attribute)
        field.setAttribute ("disabled", "disabled");

        //change name of current player
        if (player == "x") player = "o"; else player = "x";

        //set inner HTML text of hint to "Next player is" plus value of player plus "!"
        hint.innerHTML = "Next player is " + player + "!";
        
        //call allFieldsAreSelected function
        //allFieldsAreSelected();   

        //if all fields are selected , using allFieldsAreSelected (), then set hint, indicating the end of the game
        if (allFieldsAreSelected (true))
        hint.innerHTML = "Game Over!";
}


function allFieldsAreSelected () {

        // call function allFieldsAreSelected         
        //alert ("Here we go!");

        //declare the variable fields and set it to the list of field objects, using document.querySelectorAll()
        var fields = document.querySelectorAll ("#gameboard button");
        var len = fields.length; //len used for length

        //alert(fields);
        //alert (fields.length);

        //do something
        for (var counter = 0; counter < len; counter++) {
        
                var f = fields [counter]; 
                //get field object from the list fields
                //alert (f.getAttribute ("aria-label") );
                
                //if there is an empty label, return false(exit function)
                if( f.getAttribute ("aria-label") == "" ) { 
                        
                        //alert ("Next Player");
                        return false;
                }

        }
        
        //if the purpose of function is achieved (allFieldsAreSelected), then return true
        //alert("Game Over");
        return true;

        //alert ("counter = " + counter);
        
}       
        
       
       







