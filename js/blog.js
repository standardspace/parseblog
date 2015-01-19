$(function() {
 
    Parse.$ = jQuery;
 
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("ARMASIZaod9C5DVs8XHUtiBujUgCyORXgWC4wSji", "W1GrZcNSe5vVciFkKZu8Xo6RQpJ7S0iuacjP6SeB");

    var Blog = Parse.Object.extend("Blog");

    var Blogs = Parse.Collection.extend({
	    model: Blog
	});

	var blogs = new Blogs();

	blogs.fetch({
	    success: function(blogs) {
	        console.log(blogs);
	    },
	    error: function(blogs, error) {
	        console.log(error);
	    }
	});
 
});