# 2. CSS foundations
## Selectors
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
