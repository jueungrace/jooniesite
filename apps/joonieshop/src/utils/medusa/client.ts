import Medusa from "@medusajs/medusa-js";
// @ts-expect-error -- TODO: Fix "cannot find module" issue.
import { PUBLIC_MEDUSA_BACKEND_URL, PUBLIC_DEV_MEDUSA_BACKEND_URL } from '$env/static/public';
import { dev } from '$app/environment';

const BACKEND_URL = dev ? PUBLIC_DEV_MEDUSA_BACKEND_URL : PUBLIC_MEDUSA_BACKEND_URL;

export const medusaClient = new Medusa({ baseUrl: BACKEND_URL, maxRetries: 3 });