// import { createProxySSGHelpers } from "@trpc/react-query/ssg";
import { appRouter } from "@/server/api/root";
import { prisma } from "@/server/db";
import superjson from "superjson";
import { createServerSideHelpers } from "@trpc/react-query/server";

// export const generateSSGHelper = () =>
//   createProxySSGHelpers({
//     router: appRouter,
//     ctx: { prisma, session: null },
//     transformer: superjson, // optional - adds superjson serialization
//   });

export const generateSSGHelper = () =>
  createServerSideHelpers({
    router: appRouter,
    ctx: { prisma, session: null },
    transformer: superjson, // optional - adds superjson serialization
  });
