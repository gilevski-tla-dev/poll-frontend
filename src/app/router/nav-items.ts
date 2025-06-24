import addIcon from "@/shared/assets/add-icon.svg";
import goHomeIcon from "@/shared/assets/go-home.svg";
import goProfileIcon from "@/shared/assets/go-profile.svg";

export const navItems = [
  { icon: goHomeIcon, text: "Главная", route: "/" },
  { icon: addIcon, text: "Создать", route: "/create-poll" },
  { icon: goProfileIcon, text: "Профиль", route: "/" },
];
