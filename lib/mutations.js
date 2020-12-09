'use strict'

const connectDb = require('./db')

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = { teacher: '', topic: '' }
    let db, course

    const newCourse = Object.assign(defaults, input)
    try {
      db = connectDb()
      course = await db.Collection('courses').insertOne(newCourse)
      newCourse._id = course.insertedId
    } catch (e) {
      console.error(e)
    }
    return newCourse
  }
}
