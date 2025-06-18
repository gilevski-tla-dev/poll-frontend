import { initAuthInterceptor } from "./auth";
import { initErrorInterceptor } from "./errors";

export const initInterceptors = () => {
  initAuthInterceptor();
  initErrorInterceptor();
};
