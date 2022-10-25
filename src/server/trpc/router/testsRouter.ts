import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const testsRouter = router({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.test.findMany();
  }),
});
