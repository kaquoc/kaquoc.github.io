## JQUERRY

Document for JQuerry and its function coutersy of https://www.w3schools.com/jquery/jquery_intro.asp

A lighweight JavaScript library


### Features
- HTML/DOM manipulation
- CSS manipulation
- HTML event methods
- Effects and animations
- AJAX


### Syntax
Selecting HTML elements and perfomring some actions on them:

Basic syntax:

    $(selector).action()

$ is use to define/access JQuery. **selector** to 'query' HTML elements based on their name, id, classes, types,... . A Jquery action() to be performed on the element. Example:

    $("p").hide() - hides current element.

    #("#test").hide() - hides current element with ID 'test'

    $(".test").hide() - hide elements with class 'test'

### Document Ready Event
To prevent any jQuery code from running before the document is finished loading.

Syntax:

    $(function(){
        // jQuery methods go here...
    })

### Events
Similar to events in HTML/Javascript. It's the user actions that a web page responds to.

In JQuery, most DOM events have an equivalent JQuery method. Example:

    $('p').click(function{
        // action goes here, what should happen when the event 'fires'
    })

There are more JQuery DOM events, google it! Example: dbclick stands for double click.

### JQuery HTML Manipulation

#### Get Content

Three simple, but useful, JQuery mthods for DOM manipulation are:

- text() - sets or returns the text content of selected elements
- html() - sets or returns the content of selected elements (including HTML markup)
- val() - sets or returns the value of form fields.

Example:

    $('#button1').click(function(){
        alert("Text" + $('#test').text());     - GET the text content
        $('#test').text("Hello World");        - SET the text content for id 'test'
    });

    $("#btn2").click(function(){
        $("#test2").html("<b>Hello world!</b>");  - SET HTML element
    });


Get Attributes - attr()  - method used to get attribute value from HTML element

Attribute value can be: href, src,...

    $("button").click(function(){
        alert($('#link').attr("href));    - display href attribute of id 'link'
    });

    $("button").click(function(){
        $('#link').attr("href", "www.google.com");    - SET href attribute of id 'link' to google.com
    });



For more example, lookup JQuery tutorial

### IMPORTANT STUFF - AJAX
The art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.

AJAX: = Asyncrhonous JavaScript and XML

Note that AJAX is not exclusive to JQuery

JQuery simply provides several methods for AJAX functionality. This allows you to send request text, HTML, XML, or JSON from a remote server using both HTTP Get and HTTP Post.

#### load() method

load() - loads data from a server and puts the returned data into the selected element.

    $(selector).load(URL,data,callback);

optional data parameter, specifies a set of querystring key/value pairs to send along with the request.

optional call back parameter is the name of the function to execute after the load() method finished.

#### get() and post() methods
Used to request data from the server with an HTTP GET or POST request.

$.get() method requests data from the server with an HTTP GET request.

    $.get("test.php");   - request "test.php" but ignores results
    $.get("test.php",function(data){   - request and return result of the request.
        alert(data);
    });

    Syntax:
    $.get(URL (required),data (optional),function(data,status,xhr) (optional),dataType (optional));

- **URL**: Specified the URL you wish to request
- **data**: specifies data to send to the server along with the request
- **function(data,status,xhr)**: specifies a function to run if request succeeds. Additional parameters: 
    - data: contains the resulting data from the request
    - status: contains the status of the request ("success", "notmodified", "error", "timeout", "parseerror")
    - xhr: contains the XMLHttpRequest object.
- **datatype**: specifies the data type expected of the server response. By default JQuery performs automatic guess
    - "xml", "html", "text", "script", "json", "jsonp".





