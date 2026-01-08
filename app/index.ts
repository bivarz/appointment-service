import express, { Request, Response } from "express";
import bodyParser from "body-parser";

const app = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.json({ message: "Appointment Service API" });
});

app.get("/appointments", (req: Request, res: Response) => {
  res.json({ appointments: [] });
});

app.post("/appointments", (req: Request, res: Response) => {
  const appointment = req.body;
  res.status(201).json({ message: "Appointment created", appointment });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
