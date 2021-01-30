# Module 4: Styling Websites with CSS
### 2021.01.22
***
## Introduction

## Plain Websites are Boring

## CSS Basic
1.Approaches to Cascading Style Sheets
- Inline: by using the style attribute in HTML elements
- Internal: by using a `<style>` element in `<head>` section
- External: by using an external CSS file

2.external:
- in `<head>`
- `<link rel="stylesheet" type="text/css" href=".css">`

3.
```
<style type="text/css">
    p{
      columns: green;
      font-size: 150%;
    }
    h1, h3 {}
</style>
```

## Getting Started with External CSS
1. create .css file
2. you can define your class by use `(property).*** {}` in css file, when you use it, you just conclude `class="***"` in the <>
3. another way: `#*** {}`, `id="***"`

## Setting Colors with CSS
1. color / backgroud-color
2. RGB: { , , }

## Controlling Your Page Layout
1. `<img style="float:left/right;">`
2. `<p style="clear:left;">`

## Common CSS Properties
1. border: **px solid red;
2. display: inline/block;
3. height: **px;
4. width: **px;

## How to Practice CSS

## Testing Website Styles

```
tr:nth-child(even) {
    backgroud-color: ;
}
tr:nth-child(odd) {
    ......;
}
```

## CSS Additional Resources
1.W3 Schools CSS Articles and Reference Guide
- http://www.w3schools.com/css/css_intro.asp
- http://www.w3schools.com/css/css_examples.asp
- http://www.w3schools.com/cssref/

2.HTML Color Codes: http://htmlcolorcodes.com/

3.Color Hex Code Picker: http://www.color-hex.com/

4.Jake Wright: Learn CSS in 12 Minutes: https://www.youtube.com/watch?v=0afZj1G0BIE

5.Creating a Simple Website with HTML and CSS: https://www.youtube.com/watch?v=A3Xgz9PHGuA
