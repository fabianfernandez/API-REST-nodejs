import { PrismaClient } from "@prisma/client";
import { Router } from "express";

const router = Router();
const prisma = new PrismaClient();

router.get("/lenguajes", async (req, res) => {
  const lenguages = await prisma.programmingLanguage.findMany();
  res.json(lenguages);
});

router.get("/lenguajes/:id", async (req, res) => {
  const lenguage = await prisma.programmingLanguage.findUnique({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(lenguage);
});

router.post("/lenguajes", async (req, res) => {
  const lenguage = await prisma.programmingLanguage.create({
    data: req.body,
  });
  res.json(lenguage);
});

router.put("/lenguajes/:id", async (req, res) => {
  const lenguage = await prisma.programmingLanguage.update({
    where: {
      id: parseInt(req.params.id),
    },
    data: req.body,
  });
  res.json(lenguage);
});

router.delete("/lenguajes/:id", async (req, res) => {
  const lenguage = await prisma.programmingLanguage.delete({
    where: {
      id: parseInt(req.params.id),
    },
  });
  res.json(lenguage);
});

export default router;
