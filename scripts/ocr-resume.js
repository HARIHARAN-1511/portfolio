const path = require('path')
const { createWorker } = require('tesseract.js')

async function run() {
  const worker = await createWorker({
    logger: m => console.log('[tesseract]', m)
  })

  const imgPath = path.join(__dirname, '..', 'assets', 'images', 'resume image.png')

  // Check whether the file still exists (user may have removed it)
  const fs = require('fs')
  if (!fs.existsSync(imgPath)) {
    console.error('OCR skipped: resume image not found at', imgPath)
    await worker.terminate()
    process.exit(0)
  }

  await worker.load()
  await worker.loadLanguage('eng')
  await worker.initialize('eng')

  const { data: { text } } = await worker.recognize(imgPath)
  console.log('\n--- OCR OUTPUT START ---\n')
  console.log(text)
  console.log('\n--- OCR OUTPUT END ---\n')

  await worker.terminate()
}

run().catch(err => {
  console.error('OCR failed:', err)
  process.exit(1)
})
