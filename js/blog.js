$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("ARMASIZaod9C5DVs8XHUtiBujUgCyORXgWC4wSji", "W1GrZcNSe5vVciFkKZu8Xo6RQpJ7S0iuacjP6SeB");
 
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 
});