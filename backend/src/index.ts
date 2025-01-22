import express from "express";
import { dbConnect } from "./config/db";
import { userRouter } from "./routes/users/user";
import { constRouter } from "./routes/content/content";
import { tagRouter } from "./routes/tag/tag";
import { shareRouter } from "./routes/share/share";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.use("/users", userRouter);
app.use("/content", constRouter);
app.use("/tag", tagRouter);
app.use("/share", shareRouter);

app.listen(port, () => {
  console.log(`Server is running at port no ${port}`);
});

dbConnect();
