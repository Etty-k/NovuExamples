import { serve } from "@novu/framework/next";
import { client, recentLogin} from "../../novu/client";

export const { GET, POST, PUT, OPTIONS } = serve({ client, workflows: [recentLogin]});