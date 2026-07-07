const mongoose = require("mongoose");

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error(
    "Please define the MONGO_URI environment variable inside .env",
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async () => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(mongoUri, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
};

module.exports = dbConnect;
