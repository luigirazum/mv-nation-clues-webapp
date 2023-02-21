<a name="readme-top"></a>

<div align="center">

  <img src="./src/assets/imgs/logo/nationclues_logo.png" alt="logo" width="100" height="auto" />
  <br/>

### NationClues WebApp
<b>NationClues WebApp</b> is a [SPA](https://en.wikipedia.org/wiki/Single-page_application) mobile application to check a list of metrics (numeric values) created using React and Redux. The WebApp is composed by several pages:  1) The [HomePage] that contains a list of items that could be filtered by some parameters; for example, it's a list of metrics that can be filtered by the country (imagine a search field to introduce the country name like Italy, Croatia, etc.), 2) Details page, a page for the item details; in the example, the detail page for Czech Republic cities with number of views.<br>The WebApp allows users to:<br> 1) Select an item from the list in the Homepage, <br> 2) Filter the items in the Homepage using the search field.<br> 3) When clicking an item in the Homepage it will show the item details.<br>
<sub><b>API</b> is used to get the data.</sub>

</div>

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [:statistics: NationClues WebApp ](#statistics-nationclues-webapp-)
    - [Preview of NationClues WebApp.](#preview-of-nationclues-webapp)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Available Scripts](#available-scripts)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [⭐ Show your support ](#-show-your-support-)
  - [📝 License ](#-license-)

# :statistics: NationClues WebApp <a name="about-project"></a>

*NationClues WebApp* is a [SPA](https://en.wikipedia.org/wiki/Single-page_application) mobile application to check a list of metrics (numeric values) created using React and Redux. The WebApp is composed by several pages: 

1) The [HomePage] that contains a list of items that could be filtered by some parameters; for example, it's a list of metrics that can be filtered by the country (imagine a search field to introduce the country name like Italy, Croatia, etc.),
2) [Details] page, a page for the item details; in the example, the detail page for Czech Republic cities with number of views.
 
The WebApp allows users to:
- Select an item from the list in the Homepage,
- Filter the items in the Homepage using the search field.
- When clicking an item in the Homepage it will show the item details.<br>

<sub><b>restcountries API</b> to get the data.</sub>

<div align="center">

### Preview of NationClues WebApp.

<p>
  <sup>The <b>NationClues WebApp</b> consists of <b>HomePage</b>, and, <b>Details</b> page.</sup><br>
  <img src="./src/assets/imgs/wireframes/wf_nationclues_wa_home.png" alt="HomePage" width="600" height="auto" /><br>
  <sup>the <b>HomePage</b> section displays a list of all available items.<br>Users can select any item or filter using the search field.</sup><br><br>
  <img src="./src/assets/imgs/wireframes/wf_nationclues_wa_details.png" alt="Details" width="600" height="auto" /><br>
  <sup>the <b>Details</b> page displays the details for that item.<br>Some more explanation.</sup><br><br>
  <img src="./src/assets/imgs/wireframes/wf_nationclues_wa_other.png" alt="Other Feature" width="600" height="auto" /><br>
  <sup>the <b>Other Feature</b> description will be here.</sup><br><br>
</p>

</div>


## 🛠 Built With <a name="built-with"></a>
### Tech Stack <a name="tech-stack"></a>
This project was bootstrapped with:
  <ul>
    <li>
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="ReactJS" alt="react js" width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" /> Create React App</a>
    </li>
    <li>
      <a href="https://react-redux.js.org/" target="_blank" rel="noopener noreferrer">
      <img align="center" title="React/Redux" alt="react redux" width="20px" height="20px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" /> React Redux</a>
    </li>
  </ul>


### Key Features <a name="key-features"></a>

- *feature 1*
- *feature 2*
- *feature 3*
- *feature 4*


<p align="right">(<a href="#readme-top">back to top</a>)</p>
<!--
## 🚀 Live Demo <a name="live-demo"></a>

- <a href="https://luigirazum.github.io/mv-nation-clues-metrics-webapp/" target="_blank" rel="noopener noreferrer">Metrics WebApp - Live Demo</a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy of this project up and running, follow these steps.

### Prerequisites

In order to run this project locally you need `git` installed. Please got to [Getting Started - Installing Git guide](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and follow the steps described for your system to install `git`.

- ### Setup
    Clone this repository to your desired folder:
    ```sh
    cd my-folder
    git clone git@github.com:luigirazum/mv-nation-clues-metrics-webapp.git
    ```
- ### Install
    Install the package dependencies for this project with:
    ```sh
    cd mv-nation-clues-metrics-webapp
    npm install
    ```


### Available Scripts
- #### Run
    In the project directory, you can run:

    ```sh
    npm start
    ```

  - Runs the app in the development mode.
    - Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
  - The page will reload when you make changes.
  - You may also see any lint errors in the console.

- #### Test
    ```sh
    npm test
    ```

   - Launches the test runner in the interactive watch mode.\
    See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

- #### Build
    ```sh
    npm run build
    ```

  - Builds the app for production to the `build` folder.
    - It correctly bundles React in production mode and optimizes the build for the best performance.
  - The build is minified and the filenames include the hashes.
  - Your app is ready to be deployed!\
    See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

<!-- 
### Deployment

You can deploy this project using:
```sh
  npm deploy
```
-->
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👨‍💻 Luis Zubia

- GitHub: <a href="https://github.com/luigirazum" target="_blank" rel="noopener noreferrer">@luigirazum</a>
- Twitter: <a href="https://twitter.com/LuigiRazum" target="_blank" rel="noopener noreferrer">@LuigiRazum</a>
- LinkedIn: <a href="https://linkedin.com/in/luiszubia" target="_blank" rel="noopener noreferrer">Luis Zubia</a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] *feature #1*
- [ ] *feature #2*


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

In order to improve this project, contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgments"></a>
- 👏 I would like to thank the support of my partners.
- 🎨 The design guidelines, including:
    - 👉 Colors.
    - 👉 Typography and,
    - 👉 Layout.

  are based on [Nelson Sakwa Original design](https://www.behance.net/gallery/31579789/Ballhead-App-%28Free-PSDs%29) idea 💡 on Behance, under [Creative Commons License](https://creativecommons.org/licenses/by-nc/4.0/).


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐ Show your support <a name="support"></a>

I really enjoyed making this project, so, if you like it, I appreciate your support giving a ⭐.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!--
## ❓ FAQ <a name="faq"></a>

- *Why should you use this project?*

  - Because you can realize what you can achieve using this amazing tool.

- *Why did I make this project?*

  - In order to start putting in practice the use of WebPack, JS ES6 modules and API's.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
-->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>