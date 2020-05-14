Deltamap
===
Deltamap is a javascript method to build a svg plot by calling the methods included in the lib itself.
You can install it via `npm`:
```shell
npm install guans-deltamap
```
The initial pipeline and approach to use it are as follows:

Format
---

Visualize
---

Info
---
As the first lib published from GUANS Lab, we set several basic info users interests and some methods we need in the future coding process. Please see as follows:
```js
let info = {
    author,
    email,
    institution,
    members,
    page,//Labs official website
    logoOrigin,//logo src of the lab
    createLogo()//method to build logo
}
We add the vars into the global so u can test them via control panel directly.
```