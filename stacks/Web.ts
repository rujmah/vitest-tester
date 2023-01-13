import { StackContext, StaticSite } from "@serverless-stack/resources";

export function MyStack({ stack }: StackContext) {
  const web = new StaticSite(stack, "MyStaticSite", {
    path: "/static",
    buildCommand: `npm run build -m ${stack.stage}`,
    environment: {
      VITE_MOTD: "To thyself be true; and always use sunblock",
    },
  });

  stack.addOutputs({
    SiteUrl: web.url,
  });
}
