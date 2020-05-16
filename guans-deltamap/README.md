Deltamap
===
![logo](https://raw.githubusercontent.com/shaolun-Ryan/GUANS-libs/master/guans-deltamap/info/logo.svg)

Deltamap is a javascript method to build a svg plot by calling the methods included in the lib itself.
You can install it via `npm`:
```shell
npm install guans-deltamap
```
The initial pipeline and approach to use it are as follows:

As SCRIPT method: 
`<script src="unpkg/deltamap@x.x.x/dist/deltamap.min.js"></script>`

As CommonJS method:
`const dm = require('guans-deltamap')`

As ES2015 method:
`import * as dm from 'guans-deltamap'`


Format
---
use `dm.format()`
```php
/* 
@params Array arr

@return Object dataOutput
Array nodes,
Array links
*/
```
Please note that the data to be imported must meet the conditon that the `first three fields` must be `name`, `value1`, `value2`, others fields could include additional attributes.

Visualize
---
use `dm.vis()`


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
```

We add the vars into the global so u can test them via control panel directly.