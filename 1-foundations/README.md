# Foundations
(Most things are covered in notes in the "full-stack-peojects" repo, here only includes additional points). 

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


## 🏷 Flexbox


## 🏷 JavaScript basics


## 🏷 The back end






























