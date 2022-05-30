import { readFile, writeFile } from 'fs/promises'

const textMapEN = JSON.parse(await readFile('./GenshinData/TextMap/TextMapEN.json'))
const textMapCHS = JSON.parse(await readFile('./GenshinData/TextMap/TextMapCHS.json'))

const textMap = JSON.stringify(Object.keys(textMapEN).map(key => [textMapEN[key], textMapCHS[key]]).filter(pair => pair[0] && pair[1]))

await writeFile('./textMap.json', textMap)

