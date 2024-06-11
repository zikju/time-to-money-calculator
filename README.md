<!-- TOC -->
* [Time to Money Calculator](#time-to-money-calculator)
* [Screenshots](#screenshots)
* [Live-examples](#live-examples)
    * [SPA Web](#spa-web)
    * [Chrome Browser Extension](#chrome-browser-extension)
* [Magic under the hood](#magic-under-the-hood)
* [Installation](#installation)
    * [Clone this repository](#clone-this-repository)
    * [Install the dependencies](#install-the-dependencies)
* [Development](#development)
    * [Single Page Application](#single-page-application)
    * [Chrome Browser Extension](#chrome-browser-extension-1)
* [Build](#build)
    * [Single Page Application](#single-page-application-1)
    * [Chrome Browser Extension](#chrome-browser-extension-2)
<!-- TOC -->

---

# Time to Money Calculator

This web-application allows users to easily calculate their total earnings based on the number of hours and minutes worked.



# Screenshots
| ![Screenshot (Dark Version)](https://github.com/zikju/time-to-money-calculator/blob/main/docs/assets/screenshot-dark.jpg?raw=true) | ![Screenshot (Dark Version)](https://github.com/zikju/time-to-money-calculator/blob/main/docs/assets/screenshot-light.jpg?raw=true) |
|------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------|


# Live-examples

### SPA Web
- [https://time2money.zq.lt](https://timetomoney.zq.lt/#/)

### Chrome Browser Extension
- _Coming Soon_

---

# Magic under the hood

- [Quasar Framework](https://github.com/quasarframework/quasar)
  - Vue 3
  - TypeScript
  - ESLint (Standard)
  - Pinia
- [VueUse](https://vueuse.org/)
  - useStorage()

# Installation

### Clone this repository
```bash
git clone https://github.com/zikju/time-to-money-calculator
```

### Install the dependencies
```bash
yarn
# or
npm install
```
---
# Development
### Single Page Application
```bash
quasar dev -m spa
```
### Chrome Browser Extension
```bash
quasar dev -m bex
```
[Read more](https://quasar.dev/quasar-cli-webpack/developing-browser-extensions/build-commands) about Browser Extension development @ Quasar Framework page


---
# Build
### Single Page Application
```bash
quasar build -m spa
```
### Chrome Browser Extension
```bash
quasar build -m bex
```


