# Introduction to Web Dev

## HTML

HTML is mainly intended for document organisation, dividing contents into a hierarchical structure for management. Mark-up languages are generally used to describe the contents of a document, they determine the processing or rendering for content. 

A **DOCTYPE** declaration indicates that the document is following the HTML5 standard, without such a declaration the browser will have to make an assumption about which specification is being used.

A **sitemap** is a top down planning tool used when building websites, containing all pages for a site and they relate to one another. Often composed of boxes with a title and the relevant navigation extension. 

**Wireframes** are a schematic or blueprint for a specific page or category of pages. They are generally low fidelity used by developers to implement high fidelity HTML webpages.

**Block elements** create a block of content within its parent container, beginning and ending with newlines outside of the element. The block element fills the entire width of the parent element. The *Div* element is designed to create sections or divisions within the current page. It has no semantic meaning and acts as an empty container element. *Header* and *Footer* elements are supported by HTML5 within the body element. Footers can be particularly important depending on the desired user action after they reach the end of a webpage. See: https://www.creativebloq.com/web-design/website-footers-1131597. There are further elements supplied by HTML5 such as *section* that identifies a block with a specific purpose. These can provide more semantic information within the webpage structure when compared to simply using *div*.

**Inline elements** are usually nested within a block element in standard practice, as they cannot stand alone on a web page. *span* is the inline equivalent of *div*, it doesn't fill the entire width of the parent. They enable the application of styling to specific segments of text. The order does not matter for the nesting of styling elements. 

**Anchor elements** identify content that can be clicked to navigate to a different location whether that’s on the same page or to a new page. The target attribute defines how the linked content will be opened. Keep in mind the accessibility with using screen readers and hypertext, the hyperlink should contain meaningful text to ensure that the user will understand where it navigates to when read by a screen reader. Be aware of relative and absolute addresses. Bookmark links move the user to another section of the same HTML page, common for indexes and single-page websites: see https://www.intechnic.com/blog/60-beautiful-examples-of-one-page-website-design-inspirations/. Bookmark links use an element's id attribute as the target, remember it's *href="#id-text"*.

For **images** the *img* element is a one-sided/empty inline element but does not need a block parent element. *img* elements do create a new line and it is also recommended to place them inside of a *figure* element. Image files are downloaded separately to the HTML document. The source can be a hosted absolute address or a relative address. Again, considering screen readers it is recommended to supply *alt* text. It is recommended to specify only height or width in the style instead of both as this will maintain the aspect ratio. Good practice to prefer smaller images to include those with slower connections, for example in rural areas. Consider resizing or compressing an image to decrease the size. Creative Commons is in between public domain and full copyright; content under a CC license is still copyright protected but only usually requires acknowledgement for use. https://pixlr.com/x/ can be used to resize images.

Wih **Lists** ordered lists can be denoted with the *ol* tag and elements of the list via the *li* tag. The type attribute of the *ol* tag denotes the sequence indicator of the list. Unordered lists are denoted by the *ul* tag. A definition list can be used to generate a more bespoke list.

**Tables** are created with the *table* tag. Captions can be used to provide a general table heading along with column headings. The colspan attribute of a cell can be used to force it to span multiple column (either the *th* or *td* tag). Similarly, the rowspan attribute can be used to span multiple rows. 

**Forms** from the *form* tag have an action attribute that defines the URL where the form data will be submitted and a method attribute that specifies the HTTP method (GET/POST) to be used when submitting the data. An *input* can be set as *type=submit* to produce a submit button. The *textarea* tag produces a resizable text input box.