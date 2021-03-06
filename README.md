thanthi
=======

### Summary

Often you would come across scenarios of ```JavaScript``` modules dependant on loading of the other ```JavaScript``` modules.

#### Common problem :

1. Bind dom specific events for a ```HTML <div>Some Hello World</div>```
2. Div has not loaded yet, or ```document.Ready``` is not fired yet.
3. You would see a javascript error for unknown div

#### Potential fix:
1. Bind all your events until ```document.ready``` has occurred.  This could cause every part of ur code to dependant on ```document.ready``` and the ```document.ready``` is no longer module.

===

#### Thanthi
`Thanthi` to the rescue. `Thanthi` is a simple messaging based library modeled after a "pub/sub" concept.

#### Installation

* <a download="thanthi.min.js" href="/dist/thanthi.min.js">Get Minified & Gzipped </a>

* <a download="thanthi.js" href="/dist/thanthi.js">Full library </a>

===
#### Usage

##### Receiver :
    Wrap your code and listen to
    ```Javascript
        (function(){/* do something with message*/}).thanthi("message");
    ```

##### Sender :
    Simply send a message
    ```Javascript
    thanthi.send("message");
    ```

> Examples are the best way to demonstrate usage

##### Hello World

````javascript
(function(){
    alert("hello world");
}).thanthi("sayhello");

thanthi.send("sayhello");

````

##### Hello World with parameters

````javascript
(function(helloText){
    alert("hello world" + helloText);
}).thanthi("sayhello", " !!!!");

thanthi.send("sayhello");

````


##### DOM Eventing

```javascript

(function(){
    document.getElementById("say-helloworld").addEventListener("click",function(e){
        alert("Please say hello !!!");
    });
}).thanthi("dom.ready");

$(document).ready(function(){
   thanthi.send("dom.ready") ;
});

```

##### Passing Message Data

``` javascript
(function(){
    var some = this.messageData;
    document.getElementById("say-helloworld").addEventListener("click",function(e){
        alert("Please say hello !!!");
    });
}).thanthi("dom.ready");

$(document).ready(function(){
   thanthi.send("dom.ready",{some:'data'});
});

```