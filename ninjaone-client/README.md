<p align="center">
  <a href="" rel="noopener">
    <img width=200px src="https://i.imgur.com/8HVFoox.png" alt="ninjaOne">
  </a>
</p>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ealvizouri/react-devices-client)](https://github.com/ealvizouri/react-devices-client/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ealvizouri/react-devices-client)](https://github.com/ealvizouri/react-devices-client/pulls)

</div>

---

<h2 align="center">ninjaOne | Devices</h2>
<h3 align="center">by Mariano Alvizouri</h3>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [How to use](#how_to_use)
- [Unit Testing](#unit_testing)
- [End-to-End Testing](#e2e_testing)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

This project was built ⛏️ with:
  - react
  - react-router-dom
  - react-number-format
  - styled-components
  - formik
  - yup
  - storybook
  - @testing-library
  - cypress

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

`NOTE: All the commands are only consider to run under macOs or Linux.`

### Prerequisites

First of all, you need to have NodeJS installed at least v14.18.1 or more. You can check your version with:

```
node -v
```

### Installing Client

From the root's directory folder

```
cd ninjaone-client
```
Then...
```
npm install
```

### Running the project

From the root's directory folder
```
cd ninjaone-client
```
Then...
```
npm start // macOS os linux
npm run start-pc // windows
```
`NOTE: npm start will start the server at port 3001.`

Visit <a href="http://localhost:3001">http://localhost:3001</a> to view this project

## 🎈 How to use <a name="how_to_use"></a>

When you start the client, you should see the home page with a list of devices. The user can:
  - filter by <strong>Device type</strong>
  - order by <strong>System Name (a to z)</strong> and <strong>HDD Capacity (low to high)</strong>
  - delete any device, using the <strong>red button with a white trash icon</strong>
  - edit any device, using the <strong>blue button with a white pencil icon</strong>
  - add a new device, using the <strong>green button (NEW +)</strong>

<img src="https://i.imgur.com/pxnUNI6.png" />

### When adding or editing a device you should see something like this
<img src="https://i.imgur.com/qi68Ue2.png" />

### When deleting a device you should see a confirmation pop up
<img src="https://i.imgur.com/nJeT6Hp.png" />

## 🔧 Running Unit Testing <a name = "unit_testing"></a>

Open a new terminal window/tab. From the root's directory folder, go to the ninjaone-client folder

```
cd ninjaone-client
```
Then

```
npm test
```

You should see something like this
<img src="https://i.imgur.com/Gbes3xT.png" />

## 🔧 Running End-to-End Testing <a name = "e2e_testing"></a>

Open a new terminal window/tab. From the root's directory folder, go to the ninjaone-client folder

```
cd ninjaone-client
```
Then
```
npx cypress open
```
You should see a new window pop up. Then select <strong>E2E Testing</strong>

<img src="https://i.imgur.com/GqBN53d.png" />

Then select your preferred browser. Then click on <strong>Start E2E Testing in [Browser Name]</strong>

<img src="https://i.imgur.com/rKZDjfd.png" />

You should see a new browser's window pop up. Select <strong>devices.cy.js</strong>
<img src="https://i.imgur.com/cr1FwgH.png" />

## ✍️ Authors <a name = "authors"></a>
[LinkedIn - Mariano Alvizouri](https://www.linkedin.com/in/mariano-alvizouri/)

## 🎉 Acknowledgements <a name = "acknowledgement"></a>
- Ryan who's been so patience and energetic!
- RangerTech
- ninjaOne
