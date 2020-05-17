Deltamap
===
![logo](https://raw.githubusercontent.com/shaolun-Ryan/GUANS-libs/master/guans-deltamap/info/logo.svg)

Deltamap is a javascript method to build a svg plot by calling the methods included in the lib itself.
You can install it via `npm`:
```shell
npm install guans-deltamap --dev-save
```
The initial pipeline and approach to use it are as follows:

As SCRIPT method: 
```html
<script src="unpkg/deltamap@x.x.x/dist/deltamap.min.js"></script>
```

As CommonJS method:
```js
const dm = require('guans-deltamap')
```

As ES2015 method:
```js
import * as dm from 'guans-deltamap'
```


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
Please note that the data to be imported must meet the conditon that the `first three fields` must be `ego-name`, `value1`, `value2` sort, other fields could include additional attributes.

Visualize
---
use `dm.vis()`
```php
/* 
This is the method inherited from the format.js
To comvert formatted data into svg plot.`
*/
/* 
@params Array data
@params Array cirlce center coordinates
@params Array Outer and inner radius
@params String The params tto controls the color map of the stroke

@return null
*/
```
The `dm.vis()` method includes modules to render a deltamap plot into specific dom element.
Basic params could be `data`, `c`, `radius` and `additional` fields.
The `additional` field is the additional info user wanna carry with.
The deltamap algo can handle the `add` field automatically and render the strokes via type of `add`.
(Double colors if its boolean or gradient color if its number) 

Besides, the algo provides a interface allowing users control and modify the deltamap outside.
So meet various customized needs. The grammar like:
```js
let plot = dm.vis(svg, dataOutput,[480,300],[250,175],'waterContent')
plot.links.attr('stroke','pink')
plot.link_d.attr('stroke','green')
```

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