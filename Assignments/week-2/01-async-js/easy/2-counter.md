## Counter without setInterval

<!-- Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.  -->

function Counter ( ) { let count = 0 ; this . up = function ( ) { return ++ count ; } ; this . down = function ( ) { return -- count ; } ; } let counter = new Counter ( ) ; alert ( counter . up ( ) ) ;

(Hint: setTimeout)
