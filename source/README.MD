To get started with this webpage open the index file.

Navigate to the Cam's Pizzeria.
A new page will open in smooth 60 fps.

Scroll the pizzeria page to see the background pizzas move.
Use the slider on the page to change the sizes off the pizzas.

In the main.js file I took down the created pizza elements from 200 to 20.
This is in line 528 in main.js.

I took the element that created a forced layout out of the for loop.
This is in line 496 in main.js.

Instead of the modulo operator for each pizza when the site scrolls,
I created a moveValue that goes from 0 to 4. When the value is greater
than four it gets reset to 0.
This is in line 501 to 508 in main.js

In line 493 and 441 i changed the document.querySelectorAll() to
document.getElementByClassName().

Changed the changePizzaSizes() function as they did in the videos and removed
the dx() function.