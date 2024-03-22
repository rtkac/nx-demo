import { type Context, createContext } from "react";

import type { FormContext } from "./types";

export const CreateFormContext: Context<FormContext> = createContext({
	name: "",
});
