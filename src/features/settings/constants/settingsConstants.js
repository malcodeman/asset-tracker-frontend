import { User, Inbox, Settings, Users, Star, Shield } from "react-feather";

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
  ],
  workspace: [
    {
      id: 2,
      title: "Settings",
      icon: Settings,
    },
    {
      id: 3,
      title: "Members",
      icon: Users,
    },
    {
      id: 4,
      title: "Upgrade",
      icon: Star,
    },
    {
      id: 5,
      title: "Security",
      icon: Shield,
    },
  ],
};

export { NAVIGATION };

export default {
  NAVIGATION,
};
