To get started with this webpage open the index file.

Navigate to the Cam's Pizzeria.
A new page will open in smooth 60 fps.

Scroll the pizzeria page to see the background pizzas move.
Use the slider on the page to change the sizes off the pizzas.

In the main.js file I took down the created pizza elements from 200 to 20.
This is in line 528 in main.js.

I took the element that created a forced layout out of the for loop.
This is in line 496 in main.js.

In the updatePositions() i created two for loops. One to insert the five
different phase values that is requires, and one that changes the position
to the items[i].style.left value. In it it has a modulo operator that
cycles thru the phase array. Lines 494 to 515.
This hint was given to me by the reviewer MarioNuevo.

In line 493 and 441 i changed the document.querySelectorAll() to
document.getElementByClassName().

Changed the changePizzaSizes() function as they did in the videos and removed
the dx() function.