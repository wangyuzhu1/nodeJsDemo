const puppeteer = require('puppeteer'); //  引入依赖 
(async () => {
  /** 爬取JD首页所有图片链接 */
  // // 打开浏览器
  // const browser = await puppeteer.launch()
  // // 打开新页面
  // const page = await browser.newPage()
  // // 跳转到指定url
  // await page.goto('https://www.jd.com/')
  // // 操作url页面内容
  // const hrefList = await page.evaluate(() => {
  //   const imgList = document.querySelectorAll('img')
  //   let list = []
  //   imgList.forEach(function (item) {
  //     list.push(item.src)
  //   })
  //   return list
  // })
  // console.log(hrefList, 'hrefList')
  // // 关闭浏览器
  // browser.close()

  /** 爬取JD首页所有链接跳转页面的title值 */
  const browser1 = await puppeteer.launch()
  const page1 = await browser1.newPage()
  await page1.goto('https://www.jd.com/')
  const resList = await page1.evaluate(async () => {
    const aList = document.querySelectorAll('a')
    // console.log(aList, 'aList')
    const aHrefList = []
    aList.forEach(item => {
      aHrefList.push(item.href)
    })
    // console.log(aHrefList, 'aHrefList')
    return aHrefList
  })
  resList.length = 20
  const testList = []
  for (let srcItem of resList) {
    if (!srcItem.includes('http')) continue
    console.log(srcItem, 'srcItem')
    await page1.goto(srcItem)
    // const titleText = await page1.evaluate(() => {
    //   return document.querySelector('title').innerHTML
    // })
    await page1.pdf({
      path: './JDPage.pdf',
      format: 'A4',
      scale: 1,
      printBackground: true,
      landscape: false,
      displayHeaderFooter: false
  });
    // testList.push(titleText)
  }
  console.log(testList, 'testList')
  browser1.close()
  })()
