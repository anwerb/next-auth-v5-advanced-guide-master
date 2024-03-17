import { db } from "@/lib/db";

export const getFoodById = async ( id: string) => {
  try {
    const food = await db.food.findUnique({ where: { id } });

    return food;
  } catch {
    return null;
  }
};

export const getAllFood = async () => {
    try {
      const food = await db.food.findMany();
  
      return food;
    } catch {
      return null;
    }
  };