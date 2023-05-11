import { hash } from "bcrypt";
import connectMongo from "@/pages/database/connect";
import Users from "@/pages/model/schema";
async function handler(req, res) {
  console.log("connected");
  connectMongo().catch(() => res.json({ error: "Connection Failed" }));
  if (req.method === "POST") {
    const { username, email, password,cpassword } = req.body;
    const checkAlreadyExisting = await Users.findOne({ email:email });
    if (checkAlreadyExisting) {
      return res.status(422).json({ message: "User already exists" });
    }
    if(password!==cpassword){
      return res.status(301).json({message:"Both the passwords do not match"})
    }
    Users.create({ username, email, password }).then((data, err) => {
      if (err) return res.status(404).json({ err });
      res.status(201).json({ status: true, user: data });
    });
  } else {
    res.status(500).json({ message: "Route not valid" });
  }
}
export default handler;
