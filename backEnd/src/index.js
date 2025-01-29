import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/database.js";
import userRouter from "./routes/user.routes.js";
import taskRouter from "./routes/task.routes.js";

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());
app.use(cors());
connectDB(process.env.MONGO_URL);

app.use((req, res, next)=>{
  console.log(req.method, req.path);
  next();
})

app.use("/user",userRouter);
app.use('/tasks',taskRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
