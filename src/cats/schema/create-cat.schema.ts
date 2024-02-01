import { z } from 'zod';

// Estratégia de validacao com schemas do zod

export const createCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();

// export type CreateCatDto = z.infer<typeof createCatSchema>
