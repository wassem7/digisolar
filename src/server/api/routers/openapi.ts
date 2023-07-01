import { generateOpenApiDocument } from "trpc-openapi";
import { appRouter } from "../root";

export const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "tRPC OpenAPI",
  version: "1.0.0",
  baseUrl: "https://water-purity-checker.vercel.app/",
  // baseUrl: process.env.BASE_URL,
});
