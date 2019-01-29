# Embedding technologies poc

## IFRAME
> The iframe element represents a nested browsing context. [HTML 5 standard - "The `<iframe>` element"](http://www.w3.org/TR/html5/embedded-content-0.html#the-iframe-element)

Primarily used to include resources from other domains or subdomains but can be used to include content from the same domain as well. The `<iframe>`'s strength is that the embedded code is 'live' and can communicate with the parent document.

## EMBED
Standardised in HTML 5, before that it was a non standard tag, which admittedly was implemented by all major browsers. Behaviour prior to HTML 5 can vary ...

> The embed element provides an integration point for an external (typically non-HTML) application or interactive content. ([HTML 5 standard - "The <embed> element"](http://www.w3.org/TR/html5/embedded-content-0.html#the-embed-element))

Used to embed content for browser plugins. Exceptions to this is SVG and HTML that are handled differently according to the standard.

The details of what can and can not be done with the embedded content is up to the browser plugin in question. But for SVG you can access the embedded SVG document from the parent with something like:

svg = document.getElementById("parent_id").getSVGDocument();
From inside an embedded SVG or HTML document you can reach the parent with:

parent = window.parent.document;
For embedded HTML there is no way to get at the embedded document from the parent (that I have found).


## OBJECT

> The `<object>` element can represent an external resource, which, depending on the type of the resource, will either be treated as an image, as a nested browsing context, or as an external resource to be processed by a plugin. ([HTML 5 standard - "The `<object>` element"](http://www.w3.org/TR/html5/embedded-content-0.html#the-object-element))

## Conclusion
Unless you are embedding SVG or something static you are probably best of using `<iframe>`. To include SVG use <embed>. Scripts in `<object>` will run but the parent and child contexts can't communicate directly. With `<embed>` you can get the context of the child from the parent and vice versa. This means you can use scripts in the parent to manipulate the child etc. That part is not possible with `<object>` or `<iframe>` where you would have to set up some other mechanism instead, such as the [JavaScript postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage).
