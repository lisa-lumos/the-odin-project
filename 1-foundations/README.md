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

The <head> element is where we put important `meta-information` about our webpages, and `stuff required to be rendered correctly` in the browser. Inside the <head>, we should not use any element that displays content on the webpage. The head element goes within the HTML element and should always be the first element under the opening <html> tag. 

HTML validators `https://validator.w3.org/`, or `https://www.freeformatter.com/html-validator.html` ensure your markup is correct and are an excellent learning tool, as they provide feedback on syntax errors you may be making often and aren’t aware of, such as missing closing tags and extra spaces in your HTML.

The <strong> element makes text bold. It also semantically marks text as important; `this affects tools, like screen readers, that users with visual impairments will rely on to use your website`. The em element makes text italic. It also semantically places emphasis on the text, which again may affect things like screen readers. 

It is recommended to indent any child elements by `two spaces`.


## 🏷 CSS foundations


## 🏷 Flexbox


## 🏷 JavaScript basics


## 🏷 The back end






























