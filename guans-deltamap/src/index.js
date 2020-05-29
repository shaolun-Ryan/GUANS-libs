import { info } from '../info/info'
import { varia, getFields, getMainFields, getAddFields, getExtent} from '../format/format'
import { vis } from '../visualize/index'

import getTest from '../getTest.js'

import './style.css'

/* Insert attributes into global. Its ez to debug outside the IDE */
Object.keys(info).forEach(function (obj) {
  global[obj] = info[obj]
})

export {
  info,
  varia,
  getFields,
  getMainFields,
  getAddFields,
  vis,
  getExtent,
  getTest
};