import * as JVocab from '@/ts/JlptVocab'

function slashParameters() {
  const page = window.location.pathname
  console.log('page')
  console.log(page.split('/').slice(1))
  console.log('---page---')
  return page.split('/').slice(1)
}

/*


*/

/*
function constUrl(menu) {
  let url = 'https://genshin.jmp.blue'
  for (const el in menu) {
    url += '/' + el
  }
  return url
}
*/

/*
async function getData() {
  const menu = slashParameters()
  //const url = constUrl(menu)
  console.log('----hey----')
  console.log('https://genshin.jmp.blue' + window.location.pathname)
  const res = await fetch('https://genshin.jmp.blue' + window.location.pathname)
  const finalRes = await res.json()

  console.log('----here----')
  console.log('------------')
}*/

function redirectPage(menu: string, option: string) {
  const page = window.location.origin
  console.log(page + '/' + menu + '/' + option)
  location.replace(page + '/' + menu + '/' + option)
}

//await getData()

export { redirectPage, slashParameters }

/*
https://jlpt-vocab-api.vercel.app/, https://github.com/mistval/unofficial-jisho-api
*/
