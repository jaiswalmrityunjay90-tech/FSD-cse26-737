const express = require("express");
const app = express();

app.use(express.json());

let products = [
  {id:1, name:"Laptop", category:"Electronics", price:50000, quantity:5},
  {id:2, name:"Chair", category:"Furniture", price:3000, quantity:10}
];

// GET all
app.get("/products", (req,res) => res.json(products));

// GET by ID
app.get("/products/:id", (req,res) => {
  let p = products.find(x => x.id == req.params.id);
  if (!p) return res.status(404).json({message:"Product not found"});
  res.json(p);
});

// POST
app.post("/products", (req,res) => {
  let p = {id:products.length+1, ...req.body};
  products.push(p);
  res.json(p);
});

// PUT
app.put("/products/:id", (req,res) => {
  let p = products.find(x => x.id == req.params.id);
  if (!p) return res.status(404).json({message:"Product not found"});
  Object.assign(p, req.body);
  res.json(p);
});

// DELETE
app.delete("/products/:id", (req,res) => {
  let i = products.findIndex(x => x.id == req.params.id);
  if (i == -1) return res.status(404).json({message:"Product not found"});
  products.splice(i,1);
  res.json({message:"Product deleted"});
});

// Category
app.get("/products/category/:category", (req,res) => {
  let p = products.filter(x =>
    x.category.toLowerCase() == req.params.category.toLowerCase()
  );
  if (!p.length) return res.status(404).json({message:"Category not found"});
  res.json(p);
});

app.listen(3000, () => console.log("Server running on port 3000"));