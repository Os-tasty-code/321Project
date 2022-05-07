const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)

        // tried adding '.cyan.underline' to color/underline the connection but didn't work (will try again later)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } 
    catch(error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDB