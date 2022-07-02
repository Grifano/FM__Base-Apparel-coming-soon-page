# Frontend Mentor - Base Apparel coming soon page

This is a solution to the [Base Apparel coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/base-apparel-coming-soon-page-5d46b47f8db8a7063f9331a0).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
    - [My Process](#my-process)
      - [Build with](#built-with)
      - [What I learned](#what-i-learned)
      - [Continued Development](#continued-development)
      - [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./images/ScreenShot.jpg)

### Links

- Solution URL: [Solution]()
- Live Site URL: [Live](https://grifano.github.io/FM__Base-Apparel-coming-soon-page/)

## My process

### Built with

<!-- - Semantic HTML5 markup
- CSS custom properties
- SASS/SCSS
- JavaScript
- Flexbox
- Responsive Web Design -->

### What I learned

As I have two different sizes of images, I decide to add images depending on the screen size. I find the answer at [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) And the srcset and size attribute can help me with this. The desktop version should be rendered at any size, not less than 375px. Then, the mobile version should be generated instead. How cool is that 😁?

```html
<div class="sign-up__img">
  <img
    srcset="./images/hero-mobile.jpg 375w, ./images/hero-desktop.jpg 610w"
    sizes="(max-width: 375px) 375px, 610px"
    src="./images/hero-desktop.jpg"
    alt=""
  />
</div>
```

```css
???
```

```js
???
```

### Continued development

I'm focusing on improving my programming skills with HTML&CSS and JavaScript. My plan is to get comfortable with the basics before I going to dive into the Frontend framework/library like React, Angular, Vue, etc.
I hope that such amzing tools like [Frontend Mentor](https://www.frontendmentor.io/), [freeCodeCamp](https://www.freecodecamp.org/learn), and [Uxcel](https://uxcel.com?invite=EE4PBID94EEH) help me with my this.

### Useful resources

[Frontend Mentor](https://www.frontendmentor.io/) - Get a challenge and try to make them as close to a mockup as you can.  
[Uxcel](https://uxcel.com?invite=EE4PBID94EEH) - improv UX/UI Design skills, by reading the article and check your new knowledge by passing a quiz.  
[freeCodeCamp](https://www.freecodecamp.org/learn) - Free learning platform for learning programing, as Frontend, Backend, Web technology, and more.

## Author

- Website - [Serhii "Gr[i]fano" Orlenko"](https://grifano.webflow.io/)
- Frontend Mentor - [@Grifano](https://www.frontendmentor.io/profile/Grifano)
- Twitter - [@Grifano](https://twitter.com/OrlenkoSerhii)
- LinkedIn - [@Grifano](https://www.linkedin.com/in/serhii-orlenko-44aaa4a3/)

<!-- ## Acknowledgments -->
