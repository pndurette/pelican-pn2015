$(document).ready(function() {  

    // It's prettier when a section is full height
    // (if its content's height allows)
    window_height = $(window).height();
   
    $('section').each(function() {
        section = $(this);
        content = section.children('.content');
        content_height = content.outerHeight();

        if (content_height < window_height) {
            section.height(window_height);
        }
    });
});

function quote(quotes) {
    // Write a random quote from an array of quotes
    // quotes: a string that can be evaled as an array of string
    quote = quotes[Math.floor(Math.random()*quotes.length)];
    document.write(quote)
}
