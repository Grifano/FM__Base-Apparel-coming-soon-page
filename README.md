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

- Solution URL: [Solution](https://www.frontendmentor.io/solutions/base-apparel-coming-soon-page-using-javascript-validation-and-css-grid-gJ2GLjFmVp)
- Live Site URL: [Live](https://grifano.github.io/FM__Base-Apparel-coming-soon-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- SASS/SCSS
- JavaScript
- Regular Expressions
- Grid CSS
- Flexbox
- Responsive Web Design

### What I learned

I try to implement the Grid CSS with grid-template-areas. But what is the good practice for that? I am not sure about using aside tag for picture... and maybe I had to remove this "page-container" and setup the grid on tag body instead?

```html
<body>
  <div class="page-wrapper">
    <header class="header">
      <div class="container">
        <a href="#" class="logo"><img src="./images/logo.svg" alt="" /></a>
      </div>
    </header>
    <main class="sign-up">
      <div class="container">
        <h1 class="sign-up__title">We're <strong>coming soon</strong></h1>
        <p class="sign-up__subtitle">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <form action="#" class="sign-up__form" id="signUpForm" novalidate>
          <label for="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            pattern="^[a-zA-Z]+@[a-zA-Z.-]+\.[a-z]{2,4}$"
          />
          <button type="submit"></button>
        </form>
        <small id="errorMsg">Please provide a valid email</small>
      </div>
    </main>
    <aside>
      <picture>
        <source srcset="./images/hero-mobile.jpg" media="(max-width: 825px)" />
        <img src="./images/hero-desktop.jpg" alt="Women looking passion" />
      </picture>
    </aside>
  </div>
  <script src="./js/script.js"></script>
</body>
```

What about images? I find this [Guide to the Responsive Images Syntax in HTML](https://css-tricks.com/a-guide-to-the-responsive-images-syntax-in-html/#using-picture) it helped me to figure out these images. I had to render the different images depending on the viewport. Now I know how to do this 😁

```html
<picture>
  <source srcset="./images/hero-mobile.jpg" media="(max-width: 825px)" />
  <img src="./images/hero-desktop.jpg" alt="Women looking passion" />
</picture>
```

Ok, so Grid Css... OMG! I discover amazing features grid-template-areas. There is still a lot to understand with Grid CSS for me, but this grid-area is really great for building layout.
P.S: Also, Autoprefixer doesn't want to work correctly with grid-area... I had to figure out this because this warning is really annoying...

```css
.page-wrapper {
  display: grid;
  grid-template-columns: 1fr minmax(375px, 610px);
  grid-template-areas:
    "header aside"
    "main aside"
    "main aside";
}
header {
  grid-area: header;
}
.sign-up {
  grid-area: main;
}
aside {
  grid-area: aside;
}
```

In this challenge, I decide to implement validation only through JS. That's why I use novalidate attribute to disable HTML validation, and focused on JS. Using the Regex and test method I check if the email is corresponding to the regex pattern and when the method return true form will be submitted. In other ways, I prevent the form submission and add the class show to the prepared element with the error message.

```js
const form = document.getElementById("signUpForm");
const email = document.getElementById("email");
const errorMsg = document.getElementById("errorMsg");
const regex = /^[a-zA-Z]+@[a-zA-Z.-]+.[a-z]{2,4}$/;

form.addEventListener("submit", (e) => {
  const isValid = regex.test(email.value);

  if (isValid) {
    e.submit();
  } else {
    e.preventDefault();
    errorMsg.className = "show";
  }
});
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
