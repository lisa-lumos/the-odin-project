# Foundations
(Most things are covered in notes in the "full-stack-projects" repo, here only includes additional points). 

## 🏷 HTML foundations
HTML (HyperText Markup Language) defines the structure and content of webpages.

HTML has a vast list of predefined tags `https://developer.mozilla.org/en-US/docs/Web/HTML/Element` that you can use to create all kinds of different elements. It is important to `use the correct tags for content`. Using the correct tags can have 2 big impacts: `how they are ranked in search engines`; and `how accessible they are to users` who rely on assistive technologies, like screen readers, to use the internet. Using the correct elements for content is called `semantic HTML`. 

We should always name the HTML file that will contain the homepage of our websites index.html. This is because web servers will by default look for an index.html page when users land on our websites - and not having one will cause big problems.

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>

  <body>
    <h1>Hello World!</h1>
  </body>
</html>
```

The latest version of HTML is HTML5, and the doctype for that version is simply <!DOCTYPE html>.

In the above boilerplate, `lang` specifies the language of the text content in that element - primarily used for improving accessibility of the webpage. It allows assistive technologies, for example screen readers, to adapt according to the language and invoke correct pronunciation.

The `<head>` element is where we put important `meta-information` about our webpages, and `stuff required to be rendered correctly` in the browser. Inside the <head>, we should not use any element that displays content on the webpage. The head element goes within the HTML element and should always be the first element under the opening <html> tag. 

HTML validators `https://validator.w3.org/`, or `https://www.freeformatter.com/html-validator.html` ensure your markup is correct and are an excellent learning tool, as they provide feedback on syntax errors you may be making often and aren’t aware of, such as missing closing tags and extra spaces in your HTML.

The `<strong>` element makes text bold. It also semantically marks text as important; `this affects tools, like screen readers, that users with visual impairments will rely on to use your website`. The em element makes text italic. It also semantically places emphasis on the text, which again may affect things like screen readers. 

It is recommended to indent any child elements by `two spaces`.

You can use anchor tags to link to any kind of resource on the internet, not just other HTML documents. You can link to videos, pdf files, images, and so on, but for the most part, you will be linking to other HTML documents. Links to pages on other websites on the internet are called `absolute links`. Links to other pages within our own website are called `relative links`, such as `<a href="pages/about.html">About</a>`. In many cases, this will work just fine; however, you can still run into unexpected issues with this approach. Prepending ./ before the link will in most cases prevent such issues, such as: `<a href="./pages/about.html">About</a>`

The src attribute in img tag can embed an image using both absolute and relative paths. The alt attribute is used to describe an image. It will be used in place of the image if it cannot be loaded. It is also used with screen readers to describe what the image is to visually impaired users.

File structure: avoid using spaces in file/folder names, avoid using digits, avoid using capitalized letters. 

There’s four main image formats in use on the web: JPG (handles large color palettes without exorbitantly increasing file size, do not allow for transparent pixels), GIF (simple animations, limited in color palette, binary transparency, cannot have semi-opaque pixels), PNG(bigger than jpg of same quality, allow opacity, great for icons, tech diagrams, logos) and SVG (vector-based, great for responsive design, use them whenever you can. But, if your images contain a lot of text, can have a big impact on file size). 

When writing code, it’s considered best practice to commit every time you have a meaningful change in the code. This will create a timeline of your progress and show that your finished code didn’t appear out of nowhere.

The seven rules of a great Git commit message: (ref: `https://cbea.ms/git-commit/`)
1. Separate subject from body with a blank line
2. Limit the subject line to 50 characters
3. Capitalize the subject line
4. Do not end the subject line with a period
5. Use the imperative mood in the subject line
6. Wrap the body at 72 characters
7. Use the body to explain what and why vs. how

Using VSCode as your text editor will allow you to easily make multi-line commit messages, easily see the character length of each line, and will allow you to use VSCode spell check extensions (Code Spell Checker) to make sure your spelling is correct. 

## 🏷 CSS foundations
### Selectors
Universal Selector - select elements of any type, hence the name “universal”, and the syntax for it is a simple asterisk. In the example below, every element would have the color: purple; style applied to it.
```css
* {
  color: purple;
}
```

Type Selectors - select all elements of the given element type, and the syntax is just the name of the element.

Class Selectors - select all elements with the given class, which is just an attribute you place on an HTML element. Syntax: a period immediately followed by the case-sensitive value of the class attribute. Another thing you can do with the class attribute is to add multiple classes to a single element as a space-separated list, such as `class="alert-text severe-alert"`. Since whitespace is used to separate class names like this, you should never use spaces for multi-worded names and should use a hyphen instead.

ID Selectors - Instead of a period, we use a hashtag immediately followed by the case-sensitive value of the ID attribute. The major difference between classes and IDs is that an element can only have one ID. An ID cannot be repeated on a single page.

You could group selectors (comma separated), chain selectors (no separator between chains), combine selectors (space separated, A descendant combinator will only cause elements that match the last selector to be selected if they also have an ancestor that matches the previous selector). 

`font-family` can be a single value or a comma-separated list of values that determine what font an element uses. Each font will fall into one of two categories, either a “font family name” like `"Times New Roman"` (we use quotes due to the whitespace between words) or a “generic family name” like `sans-serif` (generic family names never use quotes). If a browser cannot find or does not support the first font in a list, it will use the next one, then the next one and so on until it finds a supported and valid font. This is why it’s best practice to include a list of values for this property, starting with the font you want to be used most and ending with a generic font family as a fallback, e.g. `font-family: "Times New Roman", sans-serif;`.

It’s best to include `both width and height` for `<img>` elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than the rest of the page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page and will just appear as a blank space until the image loads.

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (`color`, `font-size`, `font-family`, etc.) are usually inherited, while most other properties aren’t. The exception to this is when directly targeting an element, as this always beats inheritance. 

The Styles pane in the Chrome Developer Tools allows you to edit styles directly in the browser, so you can see the changes immediately (responds in real-time). It is extremely useful for quickly testing out various attributes and values without needing to reload the page over and over again.

The CSS box model: `https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model`. Changing the value of the `display` property can change whether the outer display type of a box is block or inline. This changes the way it displays alongside other elements in the layout. 

In the standard box model, if you give a box an inline-size and a block-size (or width and a height) attributes, this defines the inline-size and block-size (width and height in horizontal languages) of the content box. Any padding and border is then added on top of those dimensions to get the total size taken up by the box. 

In the alternative box model, any width is the width of the visible box on the page. The content area width is that width minus the width for the padding and border (see image below). No need to add up the border and padding to get the real size of the box. To turn on the alternative model for an element, set `box-sizing: border-box;`. 

To use the alternative box model for all of your elements (which is a common choice among developers), set the box-sizing property on the <html> element and set all other elements to inherit that value:
```css
html {
  box-sizing: border-box;
}
*,
*::before,
*::after {
  box-sizing: inherit;
}
```

The margin is an invisible space around your box. It pushes other elements away from the box. Margins can have positive or negative values. Setting a negative margin on one side of your box can cause it to overlap other things on the page. 

Margin collapsing - Depending on whether two elements whose margins touch have positive or negative margins, the results will be different:
- Two positive margins will combine to become one margin. Its size will be equal to the largest individual margin.
- Two negative margins will collapse and the smallest (furthest from zero) value will be used.
- If one margin is negative, its value will be subtracted from the total.

## 🏷 Flexbox
Flexbox is a relatively new way of manipulating elements in CSS, and its debut was revolutionary. But at this point, it has become the default way of positioning elements for many developers. Flexbox will be one of the most used tools in your toolbox. 

If something isn’t behaving the way you expect, inspecting it in the developer tools should be your first step every time.

Flexbox is a way to arrange items into rows or columns. These items will flex (i.e. grow or shrink) based on some simple rules that you can define. A `flex container` is any element that has `display: flex` on it. A `flex item` is any element that lives directly inside of a flex container. Any element can be both a flex container and a flex item - you can also put `display: flex` on a `flex item` and then use flexbox to `arrange its children`.

With the following code, the divs will ‘flex’ when the window is resized - they will fill the available area and will each have equal width.
```html
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```css
.flex-container {
  display: flex;
}

.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  flex: 1;
}
```

Creating and nesting multiple flex containers and items is the primary way we will be building up complex layouts.

The flex declaration is actually a shorthand for 3 properties (flex-grow, flex-shrink, flex-basis) that you can set on a flex item. These properties affect how flex items size themselves within their container. 

`flex: 1` = `flex-grow: 1, flex-shrink: 1, flex-basis: 0` = `flex: 1 1 0`. 

### flex-grow
`flex-grow` expects a single number as its value, and that number is used as the flex-item’s “growth factor”. When we applied `flex: 1` to every div inside our container, we were telling `every div to grow the same amount`. The result of this is that every div ends up the exact same size. If we instead add `flex: 2` to just one of the divs, then `that div would grow to 2x the size of the others`. For example:
```css
.flex-container {
  display: flex;
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  flex: 1 1 0%;
}

/* only div.two is selected here */
.flex-container .two {
  flex: 2 1 0%;
}
```

### flex-shrink
`flex-shrink` is similar to flex-grow, but sets the “shrink factor” of a flex item. `flex-shrink only ends up being applied if the size of all flex items is larger than their parent container`. For example, if our 3 divs from above had a width declaration like: width: 100px, and .flex-container was smaller than 300px, our divs would have to shrink to fit. The default shrink factor is `flex-shrink: 1`, which means all items will shrink evenly. If you want no shrink then use `flex-shrink: 0;`. You can also specify higher numbers to make certain items shrink at a higher rate than normal. For example: 

```css
.flex-container {
  display: flex;
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 100px;
  width: 250px;
  flex: 1 1 auto;
}

.flex-container .two {
  flex-shrink: 0;
}
```
If you shrink your browser window you’ll notice that .two never gets smaller than the given width of 250px, even though the flex-grow rule would otherwise specify that each element should be equally sized. Note that when you specify flex-grow or flex-shrink, flex items do not necessarily respect your given values for width. In the above example, all 3 divs are given a width of 250px, but when their parent is big enough, they grow to fill it. Likewise, when the parent is too small, the default behavior is for them to shrink to fit. This is not a bug, but it could be confusing behavior if you aren’t expecting it.

### flex-basis
`flex-basis` sets the initial size of a flex item, so flex-grow or flex-shrink starts from that baseline size. The shorthand value defaults to `flex-basis: 0%`. The reason we had to change it to `auto` in the flex-shrink example is that with the basis set to 0, those items would ignore the item’s width, and everything would shrink evenly. `Using auto as a flex-basis tells the item to check for a width declaration` (width: 250px).

`flex: auto` = `flex-grow: 1, flex-shrink: 1, flex-basis: auto` = `flex: 1 1 auto`. 

In practice you will likely not be using complex values for flex-grow, flex-shrink or flex-basis. `Generally, you’re most likely to use declarations like flex: 1; to make divs grow evenly and flex-shrink: 0 to keep certain divs from shrinking`.

### flex-direction
flexbox can work either horizontally or vertically, and the way some rules work changes a bit depending on which direction you are working with. The default direction for a flex container is horizontal, or row, but you can change the direction to vertical, or column:
```css
.flex-container {
  flex-direction: column;
}
```

In `most` circumstances, `flex-direction: row` puts the main axis horizontal (left-to-right), and `column` puts the main axis vertical (top-to-bottom). These divs will stack vertically: 
```html
<div class="flex-container">
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div>
```

```css
.flex-container {
  display: flex;
  flex-direction: column;
}

/* this selector selects all divs inside of .flex-container */
.flex-container div {
  background: peachpuff;
  border: 4px solid brown;
  height: 80px;
  flex: 1 1 auto;
}
```

Note that in this example, `flex-direction: column` would not work as expected if we used the shorthand `flex: 1`, because the flex shorthand expands `flex-basis` to `0`, which means that all flex-grow and flex-shrink would begin their calculations from 0. Empty divs by default have 0 height, so for our flex items to fill up the height of their container, they don’t actually need to have any height at all. `flex: 1 1 auto` tells the flex items to default to their given height. We could also have fixed it by `putting a height on the parent` .flex-container, or by using `flex-grow: 1` instead of the shorthand.

Note that when we changed the `flex-direction to column`, `flex-basis refers to height` instead of width. Block-level elements default to the full width of their parent. Changing things to vertical using `flex-direction: column` adds complexity because block-level elements default to the height of their content, and in this case there is no content (it is a div).

```html
<div class="container">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div
```

```css
.container {
  height: 140px;
  padding: 16px;
  background: plum;
  border: 4px solid indigo;
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  /* gap: 8px; */
}

.item {
  width: 60px;
  height: 60px;
  border: 4px solid darkslategray;
  background: skyblue;
}
```
`justify-content` aligns items across the `main axis`. 

To center our box we use the `align-items` property to align our item on the `cross axis`, which in this case is the block axis running `vertically`. We use `justify-content` to align the item on the `main axis`, which in this case is the inline axis running `horizontally`.

References: 
`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox`

Summary of commonly used flex properties: 
```css
/* container */
display: flex; /* declaration */
flex-direction: row /* default */ | column; 
flex-wrap: nowrap /* default */ | wrap;
justify-content: flex-start /* default */ | flex-end | center | space-between | space-around;
align-items: stretch /* default */ | flex-start | flex-end | center | baseline;

/* item */
flex-grow: 0 /* default */ | 1 | 2 | ...;
flex-shrink: 1 /* default */ | 0 | 2 | ...;
flex-basis: auto /* default */ | width value | ...;
```

## 🏷 JavaScript basics


## 🏷 The back end






























