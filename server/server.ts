import express, { Request, Response } from "express";
const app = express();
const PORT: number= 5001;
app.get("/", (_req: Request, res: Response) => {
    return res.send("Reached endpoint")
});

app.listen(PORT, () => {
    console.log("listening on port ", PORT )
});