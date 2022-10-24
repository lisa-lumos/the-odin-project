# 3. Flexbox
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

## flex-grow
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

## flex-shrink
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

## flex-basis
`flex-basis` sets the initial size of a flex item, so flex-grow or flex-shrink starts from that baseline size. The shorthand value defaults to `flex-basis: 0%`. The reason we had to change it to `auto` in the flex-shrink example is that with the basis set to 0, those items would ignore the item’s width, and everything would shrink evenly. `Using auto as a flex-basis tells the item to check for a width declaration` (width: 250px).

`flex: auto` = `flex-grow: 1, flex-shrink: 1, flex-basis: auto` = `flex: 1 1 auto`. 

In practice you will likely not be using complex values for flex-grow, flex-shrink or flex-basis. `Generally, you’re most likely to use declarations like flex: 1; to make divs grow evenly and flex-shrink: 0 to keep certain divs from shrinking`.

## flex-direction
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

## Flexbox Summary
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