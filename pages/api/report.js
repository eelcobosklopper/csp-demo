export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200);
  }
  return resolve(); // Next api really wants me to return a promise
}
