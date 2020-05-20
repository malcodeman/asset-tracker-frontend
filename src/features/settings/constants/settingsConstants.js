import {
  User,
  Inbox,
  Moon,
  Settings,
  Users,
  Star,
  Shield,
} from "react-feather";

const NAVIGATION = {
  me: [
    {
      id: 0,
      title: "My account",
      icon: User,
    },
    {
      id: 1,
      title: "My notifications",
      icon: Inbox,
    },
    {
      id: 2,
      title: "Themes",
      icon: Moon,
    },
  ],
  workspace: [
    {
      id: 3,
      title: "Settings",
      icon: Settings,
    },
    {
      id: 4,
      title: "Members",
      icon: Users,
    },
    {
      id: 5,
      title: "Upgrade",
      icon: Star,
    },
    {
      id: 6,
      title: "Security",
      icon: Shield,
    },
  ],
};

export { NAVIGATION };

export default {
  NAVIGATION,
};
