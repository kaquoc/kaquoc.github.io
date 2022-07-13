## What I learn from creating a website

a document for what I've learn during my process of creating this website with HTML, CSS, and JavaScript.

When a user visit a web page, the server returns an HTML file to the browser. Browser then reads the HTML and constructs the Document Object
Model Tree (DOM Tree).

             |HTML|
                |
                |
             |BODY|
                |
    ----------------------
    |           |      |
    |           |   | H1 |
  |H5|          |   
            | DIV |
                |
            .....

Note: HTML represents initial page content while DOM represent the updated page content.

In JavaScript, you can target HTML element by its #id or .class

Declarative programming: ordering a pizza without being concernde abouts the steps it takes to make the pizza.

## REACT!
A declarative UI library use to create dynamic websites.
Refresher: Dynamic vs Static
- Static: everything loads from the begining, same for every user
- Dynamic: present different information to different visitors. Content is loaded on-the-go.

## JavaScript Objects
Simple stuff like with Java.
However, JavaScript treats "this" keyword differently compare to Java
- JavaScript this always refers to the "owner" of the function, rather than the object that a function is a method of
    - this in object method: this refers to the object
    - this alone: this refers to global object
    - in a function: this refers to global object
    - in an event: this refers to the element that receives the event
    note: a global object is an object that always exist in the global scope. So like Object in Java.
- Java this refers to the current instance object on which the method is executed.

## JavaScript Events
"things" that happen to HTML elements

Can be something the browser does, or something the user does.

    <element event = "some Javascript">

or

    <button onclick = "document.getElementById('demo').innerHTML = something">Some Texst</button>









