interface TelegramWebApp {
  initData: string;
  ready: () => void;
  close: () => void;
  BackButton: {
    show: () => void;
    hide: () => void;
    onClick: (callback: () => void) => void;
    offClick: (callback: () => void) => void;
    isVisible: boolean;
  };
  onWindowResize: (callback: () => void) => void;
}

interface Window {
  Telegram: {
    WebApp: TelegramWebApp;
  };
}
