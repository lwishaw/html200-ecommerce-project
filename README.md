# Description

This is an assignment to build a responsive ecommerce web page. Nav and product container div will use flexbox. Sidebar/aside is a module that changes layout and location based on window size. Submitting the mailing list signup form results in user feedback on the page. Clicking a product's “add to cart” or “remove from cart” button updates cart count at top.

Students may use the provided mockups to guide their design to whatever extent they like. Matching the mockups is not required.

## Provided Materials

  - basic HTML and CSS
  - JSON list of products in script.js file
  - reset.css
  - images for all products
  - suggested design mockups

## Assignments

Lesson 03:

  - Make design decisions about how you'd like your site to look. You can use the provided mockups to guide your design to whatever extent you'd like- feel free to implement them exactly or make up your own design completely.
  - Code basic CSS for page. `reset.css` file should remain as it is. `main.css` file can be added to, changed, or completely redone.
  - `nav ul` and `.item-container` elements should be styled as flexbox containers. Implement a responsive grid system of your own design, or use a library, or don't use a grid at all. Be sure all important size values are proportional (em, rem, %).
  - We'll continue working on the CSS for this project throughout the course, in particular making it more responsive. The styling does not have to be perfect after this assignment. It's fine to change or add to the HTML as necessary for your styling.

Lesson 05:

  - Write a JS form handler function to be triggered on form submit. It should print to the console a friendly message that includes the value of the form element with name "email". Something like "Thanks for signing up for our mailing list, bobross@example.com!"

Lesson 06:

  - Serve appropriately sized images. Use GIMP or another photo-editing program to resize all images to more reasonable, consistent dimensions. This includes product images, the logo, and any background or other images you've included.

Lesson 07:

  - Write Javascript function that toggles the inclusion of a product in the "cart".
  - Add/edit HTML as necessary to trigger the function on click of a button for each product.

Lesson 08:

  - Write CSS that uses media queries to change layouts/style based on device size. There shoud be at least one obvious layout change in addition to elements fluidly changing width.
  - Finish styling the page.

Lesson 09:

  - Write Javascript that causes the total number of items in the cart to display next to the cart icon when that total changes.
  - Write Javascript that displays the friendly message on form submit in the page, not in the console.
  - Update the HTML and CSS as necessary to accomodate these changes.
  - Update the Testing section of this README with your own information.

*Extra Challenge*: Incorporate unit tests with [Qunit](https://qunitjs.com/).

*Extra Challenge*: Code a popup that toggles between hidden and displayed when user clicks on cart icon. It should show information about items in the cart (maybe list of their names, but up to you).

*Extra Challenge*: Serve appropriately sized images for user's device. Create multiple sizes of each image, and serve the appropriate one using the `srcset` and `sizes` attributes on the `img` tags. This will require naming all of the images consistently, e.g. "ombre-infinity400.jpg", "ombre-infinity200.jpg". [More](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) about [srcset](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)

*Extra Challenge*: Use browser storage to save details about a user's cart so when they revisit the page, it's in the same state as when they left it. [More about browser storage](https://www.w3schools.com/html/html5_webstorage.asp)

*Extra Challenge*: Dynamically generate the HTML for product listings from the JSON objects in script.js.

## Requirements

  - Site layout looks good on all sizes of devices. At a minimum, elements are proportionally styled and aside element changes location and layout at different screen sizes. This should be tested using a variety of devices and at least one online browser compatiblity testing tool.
  - Nav and product container elements are styled using flexbox.
  - Appropriately sized images are served.
  - User can add and remove items from their cart, which changes cart count number at top of page.
  - This README is updated to include information about the testing steps taken to ensure site quality.
  - Site is live on GH Pages hosting.

## Grading
Each weekly assignment will be graded independently. There will not be a final grade for the entire project.

## Testing
<h2>User base<h2>
<li>
<ul> Some post-secondary college students</ul>
<ul> Females, college-educated, disposable income, over the age of 30</ul>
<ul> Those who live in Midwest/East coast, cooler climate areas </ul>
<ul> Teenagers, disposable income, trendy</ul>
<ul> Husbands, partners, girlfriends purchasing gifts</ul>
<ul> Those buying gifts for family, friends</ul>
<ul> Latina woman over the age of 18, some college education</ul>
<ul>Women based in Hong Kong, over age of 25, like to travel</ul>
<ul>Retirees, mostly female, not a long of disposable income</ul>
<li>
<h2>Devices they might use</h2>
<p>According to Nielsen in November 2016, millennials 18-24, 98% own smartphones; 25-34 97% own smartphones; Gen X (34-44) 96% own smartphones.</p>
<p>2018 Pew study shows along with mobile phones, Americans own a range of other information devices. Nearly 3/4 of U.S. adults now own desktop or laptop computers, while roughly half now own tablet computers and around 1-in-5 own e-reader devices. As of 206, 23% of Hispanics are smartphone dependent and it is their only online access. 73% of adults own a laptop, 53% own tablet (Jan. 10, 2018). E-reader at 22% as of 2016. <p>
<h2>Testing</h2>
<h3>Tested Oregon, USA EC2 chrome</h3>
<p>Load time 2.811s, received A, A, A, F, F, checkmark. Failed to compress images. Issues with images. </p>
<h2>From: Dulles, VA - iPad 2017 iOS 11 - Cable</h2>
<first run load time: 3.217s, received A, A, A, F, F, checkmark, 40/100 compressed images. Issues with images. </p>
<h3>responsivedesignchecker.com report</h3>
<p> iPhone 6/6s/7, Sony Xperia z2/z3, Samsung Galaxy S5/S6/S7- (p) needs to be smaller as type pops out of the box. </p>
<p>Nexus 4, Google Pixel - h3 needs to be smaller as pops out of box. Logo could be smaller too. </p>
<h3> Sonarwhal testing> 
<p>permalink = https://sonarwhal.com/scanner/68ac7849-eee9-4439-b50c-27f79be2021f <p>
<p>Optimization issues, returned that 9 images could be up to 55% smaller. Compression errors. </p>



