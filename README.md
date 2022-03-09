# cardano-lsd 

[![npm version](https://img.shields.io/npm/v/cardano-lsd?style=plastic)](https://www.npmjs.com/package/cardano-lsd)
[![GitHub Release Date](https://img.shields.io/github/release-date/CardanoGoat-io/cardano-lsd?style=plastic)](https://github.com/CardanoGoat-io/cardano-lsd)
[![npm downloads](https://img.shields.io/npm/dw/cardano-lsd?style=plastic)](https://www.npmjs.com/package/cardano-lsd)
[![npm peer dependency version](https://img.shields.io/npm/dependency-version/cardano-lsd/peer/gsap?style=plastic)](https://greensock.com/gsap/)
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/cardanogoat-io/cardano-lsd?style=plastic)
[![NPM](https://img.shields.io/npm/l/cardano-lsd?style=plastic)](https://github.com/CardanoGoat-io/cardano-lsd/blob/main/LICENSE)

<!-- [![Read the Docs](https://img.shields.io/readthedocs/cardano-lsd?style=plastic)](https://cardano-lsd.readthedocs.io/en/latest/) -->

[![Twitter Follow](https://img.shields.io/twitter/follow/Cardano_G_O_A_T?style=social)](https://twitter.com/Cardano_G_O_A_T)
[![Discord](https://img.shields.io/discord/929963273741295696.svg?style=plastic&label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/hC5Z9bsAPd)

If youd like to show us some support to do this more often. You can send ADA or gifts to our ADA Handle
![ADA Handle](https://img.shields.io/badge/%24ADA%20Handle-%24nft--minter-brightgreen?style=plastic)

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat&logo=jest) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat&logo=jest) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat&logo=jest) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat&logo=jest) |


Reusable cardano frontend components focused on animations. (Frontend Agnostic) With the whole idea of making everything built on cardano, way more visually appealing.

Each component could change in it's use. Better documentation is being created.

## Must Know Dependencies
### Must adhere to licensing requirements in internal packages. https://greensock.com/licensing/

Standard "No Charge" GreenSock License
Copyright 2006-2021, GreenSock, Inc.
Plain English Summary:
You may use the code at no charge in commercial or non-commercial apps, web sites, games, components, and other software as long as end users are not charged a fee of any kind to use your product or gain access to any part of it. If your client pays you a one-time fee to create the site/product, that's perfectly fine and qualifies under the "no charge" license. If end users are charged a usage/access/license fee, please sign up for a "Business Green" Club GreenSock membership which comes with a comprehensive commercial license. See https://greensock.com/club/ for details.
Use at your own risk. No warranties are offered.
Please respect the copyright.
### Table of contents

- [Features](#features)
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)
  - [animated cardano spinner (React Functional)](#animated-cardano-spinner-react-functional)
- [Development](#development)
  - [Workspace setup](#workspace-setup)
  - [Test](#test)
  - [Test coverage](#test-coverage)
- [Style guidelines](#style-guidelines)
- [Docs generation](#docs-generation)

### Features

- [X] CardaNostraAdaSpinner
- [ ] React Class Components
- [ ] Cardano DEFI Components
- [ ] Vue Components
- [ ] Angular Components
- [ ] Protocol proposal update

### Installation

Install the library using [npm](https://docs.npmjs.com/):

`npm install cardano-lsd`

### Documentation



### Examples

#### animated cardano spinner

```javascript
import React, { useEffect } from "react";
import "./App.css";
import { CardaNostraAdaSpinner } from "cardano-lsd";
const App = () => {
  let spinner;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    spinner = new CardaNostraAdaSpinner({id:"ada-spinning"});
    spinner.attachSVG();
  },[]);
    return (
      <div id="App">
        
      <div style={{display: "flex", margin: "0px", padding: "0px", width: "100%", backgroundColor: "pink", opacity: "50%" }} id={"ada-spinning"}></div>
      </div>
    );
}

export default App;
```

```javascript

import { CardaNostraAdaSpinner } from "cardano-lsd";

spinner = new CardaNostraAdaSpinner({id:"ada-spinning", color:"", delay:0.2, duration:4});
spinner.attachSVG();

<div id={"ada-spinning"}></div>

```


-----------------

### Development
Clone from git
``git clone https://github.com/CardanoGoat-io/cardano-lsd.git

Install dependencies:
``npm install

Build:
``npm run build

Build package with watcher:
``npm start
#### Workspace setup

Clone the repository:

`git clone https://github.com/CardanoGoat-io/cardano-lsd.git`

#### Test

cardano-lsd uses [package](jest, jsdom, pupeteer) for unit testing.

Run all tests:
``npm test


#### Test coverage

We use [Package](jest) to calculate the test coverage.

Run all tests and get coverage:
``npm run coverage
### Style guidelines


### Docs generation

<!-- The majority of package documentation is created by the docstrings in python files. 
We use [sphinx](https://www.sphinx-doc.org/en/master/) with 
[Read the Docs theme](https://sphinx-rtd-theme.readthedocs.io/en/stable/) to generate the 
html pages.

Build docs and open the docs in browser: 

`make docs` -->
