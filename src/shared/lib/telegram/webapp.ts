export const getTelegramWebApp = (): TelegramWebApp | undefined => {
  return typeof window !== "undefined" ? window.Telegram?.WebApp : undefined;
};

export const getInitData = (): string | undefined => {
  return getTelegramWebApp()?.initData;
};

export const isTelegramAvailable = (): boolean => {
  return typeof window !== "undefined" && !!window.Telegram?.WebApp?.initData;
};
