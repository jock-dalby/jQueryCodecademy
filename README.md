# jQueryCodecademy

An HTML document is structured according to the Document Object Model, or DOM. It's by interacting with the DOM that jQuery is able to access and modify HTML.

The DOM consists of every element on the page, laid out in a hierarchical way that reflects the way the HTML document is ordered. Remember how we could think of the HTML document as a tree? You can think of the DOM the same way. Just as with an HTML document, elements in the DOM can have parents, children, and siblings.

###What is jQuery?

jQuery is a library, or set of helpful add-ons, to the JavaScript programming language. It may seem counterintuitive to learn how to use a library before learning the actual language, but there are a few good reasons for this.

1. It takes a while to become comfortable with JavaScript, and it's trickier to manipulate HTML elements directly with JavaScript than with jQuery. In order to help you build awesome websites faster, we're starting you off with jQuery.

2. jQuery provides a simple interface for the underlying JavaScript. It's easier for many users to learn jQuery first, then dive into the nitty-gritty JavaScript details later.

3. jQuery is much better at giving you immediate, visual results than regular JavaScript.

###Functions, Part I: $(document).ready

Functions are the basic unit of action in jQuery. The main entry point of most jQuery applications is a block of code that looks like this:

```js
$(document).ready(function() {
    Do something
});
```

$(document) is a jQuery object. The $() is actually a function in disguise; it turns the document into a jQuery object.
.ready() is a type of function; you can think of it as sort of a helper that runs the code inside its parentheses as soon as the HTML document is ready.
function(){} is the action that .ready() will perform as soon as the HTML document is loaded. (In the above example, the Do something placeholder is where those actions would go.)

###Variables

Variables are a place for us to store information for use at a later time. Variables can hold any type of information you work with, so just think of them as containers.
```js
var $p = $('p');
```
This variable stores the result of a jQuery selector $('p') in the variable $p .

If you wanted to change a webpage based on new information, you can store information in variables.

You probably noticed that we used both $ and $() in the last exercise:

var $p = $('p');
There's a subtle difference between the two.

$p is just a variable name. There is no magic associated with the $ in $p; it's just a convention for saying, "hey, this variable contains a jQuery object." We could call $p anything we want: $paragraph, paragraph, space_cows, whatever! It's just helpful for people reading our code to see $p, since this is a concise way of saying "hey, there's a 'p' jQuery object in here."

$(), on the other hand, is magic. This is the function in disguise that creates jQuery objects. If you're making a jQuery object, you gotta use it!

###Flexible Selections

Anything you can target with CSS, you can modify with jQuery. For example, we can apply a fadeTo() to a p selector like this:
```js
$('p').fadeTo('slow', 0);
```
We can apply a fadeTo() to an li selector like this:

```js
$('li').fadeTo('slow', 0);
```
We can apply a fadeTo() to both the p and li selectors like this:

```js
$('p, li').fadeTo('slow', 0);
```
This is called a compound selector.

###'this' is Important!

The 'this' keyword refers to the jQuery object you're currently doing something with. Its complete rules are a little tricky, but the important thing to understand is if you use an event handler on an element—that's the fancy name for actions like .click() and .mouseenter(), since they handle jQuery events—you can call the actual event that occurs (such as fadeOut()) on $(this), and the event will only affect the element you're currently doing something with (for example, clicking on or mousing over).

```js
$(document).ready(function() {
    $('div').click(function() {
        $(this).fadeOut('slow');
    });
});
```

###Creating HTML Elements

Dynamically adding elements to our HTML page is a powerful tool—it lets us modify not only the formatting, but the actual structure of our websites in response to a user's actions.

```js
$(document).ready(function() {
    $h1 = $('<h1>Hello</h1>');    
});
```
We can insert our newly created elements using a few jQuery actions.

.append() inserts the specified element as the last child of the target element. .prepend() inserts the specified element as the first child of the target element. If we have a div of class .info,

```js
$(".info").append("<p>Stuff!</p>");
$(".info").prepend("<p>Stuff!</p>");
```

will add a paragraph containing the text "Stuff!" inside all divs of class .info. .append() will make the paragraph the last child of each div; .prepend() will make the paragraph the first child of each div.

.appendTo() does the same as .append(), but it just reverses the order of "what to add" and "where to add it." The code

```js
$('<p>Stuff!</p>').appendTo('.info');
```

has the same effect as the .append() code above. .prependTo() has a similar relationship to .prepend().

```js
$(document).ready(function(){
    $('body').append("<p>I'm a paragraph!</p>")
});
```
We can specify where in the DOM we insert an element with the .before() and .after() functions. The syntax looks like this:

```js
$('target').after('<tag>To add</tag>');
```

Where 'target' is the element after which you want to add something and the bit between <tag>s is the HTML element you want to add. You can add h1s, divs, or any other valid HTML you like.

Moving elements around in the DOM is a snap—all we need to do is use the jQuery functions we just learned on existing elements instead of creating new ones.

```js
var $paragraph = $("p"); // existing element
$("div").after($paragraph); // Move it!
// Same as:
$("div").after($("p"));
```

We can move the position in the DOM by using the variable in our after() statement
Note: This does not copy the element from one location to another, it moves the original element effectively saving you from having to delete the original.

```js
$(document).ready(function(){
    $('#one').after('<p>Hello!</p>');
    $('#two').after($('p'));
});
```

###Removing Elements

Adding elements to our HTML documents is great, but without the ability to remove them, our pages can quickly become cluttered. Thankfully, we have two jQuery functions, .empty() and .remove(), that help us delete content from our pages.

.empty() deletes an element's content and all its descendants. For instance, if you .empty() an 'ol', you'll also remove all its 'li's and their text.

.remove(), not only deletes an element's content, but deletes the element itself.

```js
 $('p').remove();
 ```

###Adding and Removing Classes

We don't have to limit ourselves to adding or removing entire elements, though—we can fine-tune our jQuery superpowers to alter classes, CSS, and even the contents of our HTML elements.

Let's start with classes. jQuery includes two functions, .addClass() and .removeClass(), that can be used to add or remove a class from an element. This is great if, for example, you have a highlighted class that you want to apply to an element when clicked.

The syntax looks like this:

$('selector').addClass('className');
$('selector').removeClass('className');
where 'selector' is the HTML element you want and 'className' is the class name you want to add or remove.

Remember: You aren't selecting anything, you are modifying your element. This means that you do not need # or . before your class.

```js
$(document).ready(function() {
    $('#text').click(function(){
        $('#text').addClass('highlighted');    
    });
});
```
###Toggling Classes
What if we want to toggle a class back and forth, though? That is, what if we want jQuery to automatically check to see whether our #text is .highlighted, so that when we click on it, it adds the class if it isn't there and removes it if it is?

As you probably guessed, jQuery includes a .toggleClass() function that does exactly this. If the element it's called on has the class it receives as an input, .toggleClass() removes that class; if the target element doesn't have that class, .toggleClass() adds it.

```js
$(document).ready(function() {
    $('#text').click(function(){
        $('#text').toggleClass('highlighted');    
    });
});
```

###Changing Your Style

What if we want to fine-tune individual CSS property values, though? Remember style="height:300px; width:300px;"?

Because resizing elements is so common, jQuery has specific .height() and .width() functions that can be used to change the heights and widths of HTML elements. For instance:
```js
    $("div").height("100px");
    $("div").width("50px");
```

would give all <div>s on the page a height of 100 pixels and a width of 50 pixels.

jQuery also includes a general-purpose .css() function that takes two inputs: the first is the CSS element to alter, and the second is the value to set it to. For example:

```js
    $("div").css("background-color","#008800");
```

would give all <div>s on the page a green background color. You can modify any element's CSS attributes this way.

```js
$(document).ready(function(){
    $('div').height('200px');
    $('div').width('200px');
    $('div').css('border-radius', '10px');
});
```
###Modifying Content

Finally, we can update the contents of our HTML elements—that is, the bit between the opening and closing tags—using the .html() and .val() functions.

.html() can be used to set the contents of the first element match it finds. For instance,
```js
$('div').html();
```
will get the HTML contents of the first div it finds, and
```js
$('div').html("I love jQuery!");
```
will set the contents of the first div it finds to "I love jQuery!"

.val() is used to get the value of form elements. For example,
```js
$('input:checkbox:checked').val();
```
would get the value of the first checked checkbox that jQuery finds.

###The .dblclick() Event

We might want to cause a jQuery effect when a user double clicks on an element, rather than just single-clicking. We can do this with the .dblclick() event handler.

```js
$(document).ready(function(){
    $('div').dblclick(function(){
        $('div').fadeOut('fast');
    });
});
```

###Hover

What if you wanted to create an effect when your mouse is on top of an object, then have that effect vanish when your mouse moved away? You might notice this effect in use on many site's navigation bars!

```js
$('div').hover(
    function(){
      $(this).addClass('highlight');
   },
   function(){
      $(this).removeClass('highlight');
   }
);
```
1. We first select the element we want to modify $('div')
2. Secondly notice that our hover effect is able to take two functions(){} separated by a comma. The comma is very important!
3. The first function(){} we pass will be run when we first mouse over our target. Here we apply a class of highlight
4. The second function(){} will be called when our mouse leaves the object. This is where we remove the class highlight

Your second function(){} doesn't have to be the opposite of the first function(){}, but it would be very common!

###Let's .focus()!

Another event we can make use of is .focus(). We say an element has focus when we click on it or tab over to it. If you've ever filled out a form on a web page and seen how each text box lights up when you tab to it or click on it, you've seen focus in action!

The .focus() event handler only works on elements that can receive focus—the list of these elements is a bit vague, but HTML elements like textareas and <input>s are the usual suspects.

```js
$(document).ready(function(){
    $('input').focus(function(){
        $('input').css('outline-color', '#FF0000')    
    });
});
```
###The .keydown() Event

The .keydown() event is triggered whenever a key on the keyboard is pressed. It only works on whatever page element has focus, so you'll need to click on the window containing your div before pressing a key in order for you to see its effects.

Let's go ahead and combine our new event with a new effect: .animate()! We'll use this to move an object on the screen whenever we press a key.

The .animate() effect takes two inputs: the animation to perform, and the time in which to perform the animation. Here's an example:

```js
$(document).ready(function(){
    $(document).keydown(function(){
        $('div').animate({left:'+=10px'} and 500);    
    });    
});
```
###Animating a sprite => See folder

This will take the first div it finds and move it ten pixels to the right. Remember, increasing the distance from the left margin moves something to the right; the += bit is just a shorthand for "take the existing number and add ten to it." In this case, it add ten pixels to the current distance from the left margin.

Now it's time to animate our character based on the user's input from the keyboard.

Every key press on a keyboard is translated into a number for the computer to use.

```js
// Left arrow key pressed
case 37:
  ('img').animate({left: "-=10px"}, 'fast');
```

The left arrow key on our keyboards translates to number 37 to the computer. When that key is pressed, we animate our image to the left by subtracting 10px
To move up we subtract 10px from the top
To move right we add 10px to the left
Finally, to move down we add 10px to the top

```js
$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=10px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				$('img').animate({top: "-=10px"}, 'fast');
				break;
			// Right Arrow Pressed
			case 39:
				$('img').animate({left: "+=10px"}, 'fast');
				break;
			// Down Arrow Pressed
			case 40:
				$('img').animate({top: "+=10px"}, 'fast');
				break;
		}
	});
});
```

##Introducing: jQuery UI

###.effect()

jQuery UI includes a number of ultra-fancy animations you can use to make your websites do incredible things.

For instance,  jQuery UI has an .effect() effect, and we are totally going to give it the input 'explode'.

Note that we've included an extra <script> tag in our HTML documents; this is used to include jQuery UI in our webpages. We don't have to do this with regular jQuery, since Codecademy automatically includes it for us.

```js
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('explode');
    });
});
```

###.bounce()

Cool, right? But we can do much more than just blow things up.

Another possible effect is 'bounce'. We give this as an input to .effect() just like 'explode', but we add an extra input to tell it how many times to bounce. This code will make our target 'div' bounce twice in 200 milliseconds:

```js
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('bounce', {times:3}, 500);
    });    
});
```
###.slide()
We can also make Krypton .slide() into view. Not surprisingly, we do this by calling the .effect() effect and passing in 'slide' as an input.

If you want to see everything jQuery UI can do, you can check out the documentation here!
http://jqueryui.com/

```js
$(document).ready(function(){
    $('div').click(function(){
        $('div').effect('slide');
    });    
});
```

###draggable()

jQuery UI includes a .draggable() function that can make any HTML element draggable—you can click on it and move it anywhere on the page! See draggableElements folder.

```js
$(document).ready(function(){
    $('#car').draggable();
});
```
###resizable();

```js
$(document).ready(function(){
    $('div').resizable();    
});
```
###selectable()

```js
$(document).ready(function(){
    $('ol').selectable();    
});
```

###sortable()
```js
$(document).ready(function(){
    $('ol').sortable();    
});
```
