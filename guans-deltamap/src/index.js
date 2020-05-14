import {
  info
} from '../info/author'

/* Insert attributes into global. Its ez to debug outside the IDE */
Object.keys(info).forEach(function (obj) {
  global[obj] = info[obj]
})

export {
  info
};