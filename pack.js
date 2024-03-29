import { readFile, writeFile } from 'fs/promises'

const textMapEN = JSON.parse(await readFile('./GenshinData/TextMap/TextMapEN.json'))
const textMapCHS = JSON.parse(await readFile('./GenshinData/TextMap/TextMapCHS.json'))

const textMap = JSON.stringify([...new Set(Object.keys(textMapEN).map(key => [textMapEN[key], textMapCHS[key]]).filter(pair => pair[0] && pair[1]).map(w => JSON.stringify(w)))].map(w => JSON.parse(w)))

await writeFile('./textMap.json', textMap)

const html = String(await readFile('./index.html'))

const [h1, res] = html.split('/*STARTW*/')
const [_, h2] = res.split('/*ENDW*/')

const down = `${h1}${JSON.stringify(textMap)}${h2}`

await writeFile('./down.html', down)
