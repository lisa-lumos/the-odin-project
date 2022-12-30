# 2. CSS foundations
## Selectors
**Universal Selector** - select all elements.
```css
* { /* universal selector, apply to every element */
  color: purple;
}
```

**Type Selectors** - select all elements of the given element type (tag).

**Class Selectors** - select all elements with the given class name. Syntax: a period before the class name. E.g.: `<div class="alert-text class1 class2">` in html, `.alert-text { color: red; }` in css. 

**ID Selectors** - select all elements with the given id. An element can only have one ID. An ID cannot be repeated on a single page. E.g.: `<div id="title-id">` in html, `#title-id { color: red; }` in css. 

You could:
- **group selectors** (comma separated) for elements that have intersections in styles, to reduce repetition
- **chain selectors** (no separator between chains) for elements that satisfy all selectors in the chain
- **combine selectors** (space separated) , A descendant combinator match an elem if it has a ancestor that satisfies the first selector, and itself satisfies the second selector. (You can use more than 2 selectors following the ancestor tree, but it is hard to understand and debug later on with this.) 

`font-family` can be a single value or a comma-separated list of values. Each font will fall into one of two categories, either a “font family name” like `"Times New Roman"` (use quotes due to the spaces inside) or a “generic family name” like `sans-serif` (they never us\
e quotes). If a browser cannot find or does not support the first font in a list, it will use the next one, and so on until it finds a supported and valid font. So it’s best practice to include a list of values, starting with the one you want and ending with a generic font family as a fallback, e.g. `font-family: "Times New Roman", sans-serif;`.

**Image Height and Width**: If you wanted to adjust the size of the image without causing it to lose its proportions, you would use a value of “auto” for the height property and adjust the width value. It’s best to include `both width and height` for `<img>` elements, even if you don’t plan on adjusting the values from the image file’s original ones. When these values aren’t included, if an image takes longer to load than other page contents, the image won’t take up any space on the page at first, but will suddenly cause a drastic shift of the other page contents once it does load in. Explicitly stating a height and width prevents this from happening, as space will be “reserved” on the page by a blank space until the image loads.

Cascade determines which rules actually get applied to a HTML element. Specificity, inheritance, rule order. 

To `calculate specificity`, Start at 0, add 100 for each ID value, add 10 for each class value (or pseudo-class or attribute selector), add 1 for each element selector or pseudo-element. Inline style gets a specificity value of 1000, and is always given the highest priority. But if you use the !important rule, it will even override inline styles. The universal selector (*) has a specificity of 0. 

Inheritance refers to certain CSS properties that, when applied to an element, are inherited by that element’s descendants, even if we don’t explicitly write a rule for those descendants. Typography based properties (`color`, `font-size`, `font-family`, etc.) are usually inherited, while most other properties aren’t. The exception is when directly targeting an element, because it is more specific. Mozilla CSS Properties Reference (`https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference`) can be used to learn if a particular CSS property is inherited or not - look for the Inherited field inside the Formal Definition section.

## Chrome developer tool
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
