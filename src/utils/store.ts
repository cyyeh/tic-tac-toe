import { syncedStore, getYjsValue } from '@syncedstore/core'
import { WebrtcProvider } from 'y-webrtc'
import * as Ys from 'yjs'
import { v4 as uuidv4 } from 'uuid'

const YsDoc = new Ys.Doc()
const YsText = YsDoc.getText('gameState')
YsText.insert(0, '')
const YsArray: Ys.Array<string> = YsDoc.getArray('cells')
for (let i = 0; i < 9; i++) {
  YsArray.insert(i, [''])
}

export const store = syncedStore({
  gameState: 'text',
  cells: [] as string[]
}, YsDoc)

export const roomId = new URLSearchParams(window.location.search).get('id')
export const id = roomId ? roomId : uuidv4()

const doc = getYjsValue(store)
export const webrtcProvider = new WebrtcProvider(id, doc as any)
webrtcProvider.maxConns = 2

export const disconnect = () => webrtcProvider.disconnect()
export const connect = () => webrtcProvider.connect()
