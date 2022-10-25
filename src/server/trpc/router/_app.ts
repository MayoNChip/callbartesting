// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { testsRouter } from "./testsRouter";
import { authRouter } from "./auth";

export const appRouter = router({
  tests: testsRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
