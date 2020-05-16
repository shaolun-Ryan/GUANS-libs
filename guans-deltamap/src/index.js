import { info } from '../info/info'
import { varia } from '../format/format'

/* Insert attributes into global. Its ez to debug outside the IDE */
Object.keys(info).forEach(function (obj) {
  global[obj] = info[obj]
})

export {
  info,
  varia
};