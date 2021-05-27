export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    res.status(200).end();
  } else {
    res.status(405).end();
  }
}
