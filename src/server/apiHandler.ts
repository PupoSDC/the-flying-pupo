import type {
    NextApiHandler,
    NextApiRequest,
    NextApiResponse,
  } from "next/types";
  import { NotFoundError } from "../types/errors";
  
  export const apiHandler =
    (
      callbacks: Partial<
        Record<
          "get" | "post" | "put" | "delete",
          (req: NextApiRequest, res: NextApiResponse) => unknown
        >
      >
    ): NextApiHandler =>
    async (req, res) => {
      const method = req.method?.toLowerCase();
      const callback = callbacks[method as "get"];
      if (!callback) {
        res.status(501).send("Not Implemented");
        return;
      }
      try {
        const response = await callback(req, res);
        return res.status(200).json(response);
      } catch (error) {
        const jsError = error as Error;
        console.error(error);
        switch (jsError.name) {
          case NotFoundError.name:
            return res.status(404).send("Not Found");
          default:
            return res.status(500).send("Server Error");
        }
      }
    };