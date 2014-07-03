thanthi
=======

### Summary

Often you would come across scenarios of ```JavaScript``` modules dependant on loading of the other ```JavaScript``` modules.

#### Common problem :

1. Bind dom specific events for a ```HTML <div>Some Hello World</div>``
2. Div has not loaded yet, or ```document.Ready``` is not fired yet.
3. You would see a javascript error for unknown div

#### Potential fix:
1. Bind all your events until ```document.ready``` has occurred.  This could cause every part of ur code to dependant on ```document.ready``` and the ```document.ready``` is no longer module.






