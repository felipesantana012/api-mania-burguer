import mongoose from "mongoose";

const conectarDB = async () => {
  try {
    if (!global.mongoose) {
      mongoose.set("strictQuery", false);
      await mongoose.connect(process.env.MONGO_URI, {
      });
      console.log("MongoDB conectado");
    }
  } catch (erro) {
    console.error("Erro na conexão com MongoDB:", erro.message);
    process.exit(1);
  }
};
export default conectarDB;
