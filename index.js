import * as Ys from 'yjs'


const doc = new Ys.Doc()
const ymap = doc.getMap('id')
ymap.set('a', '1')

console.log(doc.get('id').get('a'))