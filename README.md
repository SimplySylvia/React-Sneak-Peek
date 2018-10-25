
# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> **React** *Sneak Peek*

### LEARNING OBJECTIVES
*After this lesson, you will be able to:*

- Have a clear understanding of the basics of React.
- Will be able to break a site down into components. 


### STUDENT PRE-WORK
*Before this lesson, you should already be able to:*

- Have a basic understanding of HTML, CSS, and Javascript.
- Have an understanding of the MVC framework.
- Can use cmd line to initialize and compile projects.

<hr>

### What is ReactJS?

React is a JavaScript Framework used to craft modern day UI and views for the front-end in web applications.

> **Selling Point:** By modeling small compatible components that focus on just rendering a view, we can move business logic out of the DOM, and therefore improve our app's performance, maintainability, modularity and readability.

### What is a Frontend Framework? 

- A framework is software providing generic functionality and structure that serves as foundation to build and deploy applications.
- Express is a framework that runs on the server, receiving incoming request from the client, preforming some work that you have defined, and returning some response to the client.  Front-end frameworks run in the client's browser, receive input from interactions with the page, perform some work that you have defined, and make any updates necessary.
- Frameworks can help standardize code, give you additional functionality and performance, and can help get your code off the ground faster.  
- There are [many](https://stateofjs.com/2017/front-end/) front end frameworks and each go about solving problems of how state is managed, updated, and represented by a view but there are many commonalities.
- There is a lot of debate over whether frontend frameworks count as frameworks at all -- some people say that they are just libraries and should be referred to as such.

<hr>

### Some History

The first thing most people hear about React is "Facebook uses it."
* First used by Facebook in 2011.
* Then Instagram in 2012.
* Went open source in May 2013.

React was born out of Facebook's frustration with the traditional MVC model and how..
  * Re-rendering something meant re-rendering everything (or just a lot).
  * That had negative implications on processing power and ultimately user experience, which at times became glitchy and laggy.

**BEHOLD! The OLD FACEBOOK!** 

*2008*

<img src='https://lh3.googleusercontent.com/d4ypmybEZT8SAOj1efmy9CCkKwNG3Dd-Mv0__FoIsWgK0iWuYWBS4NPHOf71ANpKcx2ElOndGeiDInxm8p-sOMqNXBkPy3y-HsH45lGscqJepxFOYkU1_6BbAw' alt='old facebook' width='400px'>

*2011*

<img src='https://lh4.googleusercontent.com/lNCcVZlrC08vdkMrMZ8XCGjD5a3w8yUybFm2YN7VJJzOttmEl99lR_bXcW21hw7AVtKDRvQajA4AsqJHVHqzhHnkNsVmMRXMvi9uuoV3iIU5gIJjSSkUee8fpg' alt='old facebook' width='400px'>

<hr>

### React in MVC

React can be thought of as the "Views" layer.

React will work with any back-end language, but for our in-class examples we will be using Mongoose and Express for the models and controllers.

<details>
  <summary><strong>What is the role of a "view" in a front-end Javascript application?</strong></summary>
  The visual template the user sees, often populated with data from our models.
</details>

<hr>

### React has 4 main features that make it so powerful and popular.

- Components
- JSX
- State
- Props

## JSX

JSX (JavaScript eXtension) is an extension to the JavaScript language syntax. Similar in appearance to HTML, JSX provides a way to structure component rendering using syntax familiar to many developers. React components are typically written using JSX, although they do not have to be (components may also be written in pure JavaScript). JSX is similar to another extension syntax created by Facebook for PHP, XHP.

**Standard HTML**

```html
<div>
  <p>Header</p>
  <img src="images/blog_1.jpg" alt="">
  <p>Footer</p>
</div>
```
**JSX Example**

```jsx
class App extends React.Component {
  render() {
    return (
      <div>
        <p>Header</p>
        <img src={Blog1} alt=""/>
        <p>Footer</p>
      </div>
    );
  }
}

```

[JSX & React Documentation](https://reactjs.org/docs/introducing-jsx.html)

## Components

One comment made about React when it was first open sourced was "Rethinking established best practices" which kind of became the React motto.  In React, we want to move away from template pages, away from separating code based purely on file type, and more towards a **component-based** separation of concerns.  [Templates vs Components](https://wanderoak.co/fixed-templates-vs-components/)

When taking a look at Facebook, you could think of each status post as a mini-component in React. And a list of those updates, is a component that contains several of those mini-components. You could take that one step further and think of the Facebook app, as one giant component with several components within it. (Things like the list of status updates, the friends list, the header, etc...)

Imagine you worked at Facebook when they wanted to shift from using likes to reactions. Using traditional JavaScript, HTML, and CSS the shift would make you have to change your code in a bunch of places. Component based architecture allows us to maintain our code more easily.

### [F.I.R.S.T. Components](https://addyosmani.com/first/)

A React component is built to expect an input and render a UI with it. More importantly, a well-structured component only receives data specific to its purpose.

This is because React follows a more **functional** approach to programming. For React components under this approach, **the same input will always produce the same output**.

Best practice is that React components follow the **F.I.R.S.T.** guidelines

#### Focused

Components should do one thing and do it well.

#### Independent

Components should increase cohesion and reduce coupling. Behavior in one component should not impact the behavior of another. In other words, components should not rely on one another.

> But they should compliment one another.

#### Reusable

Components should be written in a way that reduces the duplication of code.

#### Small

Ideally, components should be short and condensed.

#### Testable

Because the same input will always produce the same output, components are easily unit testable.

> If you're interested, [Jest](https://facebook.github.io/jest/docs/tutorial-react.html) is a popular testing library for React.

## State and Props

State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.

<hr>

## *Now let's Dive into the example code to see the difference between a static site and a React site.*


<details>
  <summary><strong>Let's Break down Monument!</strong></summary>
 
**Component breakdown for `index.html`:**

    - Header
      - Nav
    - Main
      - ArticlesList
        - Article
        - Article
        - Article
      - About
      - VisualGuide
      - Contact
    - Footer

**Component breakdown for `blog.html`:**
   
    - Header
      - Nav
    - Main
      - PostsList
        - Post
        - Post
        - Post
      - About
      - Issues
      - Comment
    - Footer

</details>

