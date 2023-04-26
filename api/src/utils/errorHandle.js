export const handleHttp = (res, error, errorRow) => {
  console.log(`🛑⛔❗${errorRow}❗⛔🛑 `)
  res.status(500)
  res.send({ error })
}
