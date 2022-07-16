# API and WEB SCRAPING
Document on the understanding of API and its usage.
Thank you FreeCodeCamp

## What is an API?
Application Programming Interface
Allow developer access to data. 
API exists everywhere!!!
Even in programming languages: e.g when you use built-in function such as String.toUpperCase();
The tools that take care of all the complicated stuff. 

## API vs Webscraping

You can web scrape to access data as well!
The difference is that web scraping access specific website(s) and specific data. Then using tools to convert those voluminous data in structured format for the users. Basically, if you want the data, you have to do all the work.

On the other hand, through the API, the user gain access directly to the data already in a structured format (such as JSON). Therefore the APIs depends on the owner of the dataset.

## How APIs works
They are based on objects
Your code interact with APIs using one or more JS objects, serve as containers for the data the API uses.

### Relationships between JavaScript, APIs
    . JavaScript - scripting language built into browsers that allows you to implement functionality on web pages.
    . Browser APIs - built into the browser that sits on top of JS and allow easier implementation of functionality.
    . Third-party APIs - constructs built into third-party platforms (e.g Twitter, Youtube) that allow you to you their platform's functionality into your own web pages.
    . JS Libraries - JS files that contain custom function that you can use to help you write your own web page. E.g: JQuerry, React.
    . JavaScript frameworks - the next step up from libraries. JS frameworks (e.g Angular) tend to be packages of HTML, CSS, JavaScript, and other technologies that you install and then use to write an entire web app from scratch.

Differences between framework vs libary: 
- Inversion of control. When you call a method from a library, the developer is in control. With framework, the framework calls the developer's code.