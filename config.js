export const config = {
  port: 3000,
  profile: {
    name: "وكيل اعمال ابو فهد",
    image: {
      customUrl: null,
      fallbackUrl: "https://cdn.discordapp.com/attachments/1243993773730566204/1243993774120763486/FULL.png?ex=67fa07bc&is=67f8b63c&hm=52d5d0d31fd1cbbb8ec35e6452379e518085af7ab761b510552104091d2766c4&"
    }
  },
  theme: {
    colors: {
      primary: "#8B5CF6",
      secondary: "#EC4899",
      accent: "#3B82F6",
      background: {
        light: "#F3F4F6",
        dark: "#1F2937"
      },
      card: {
        light: "#FFFFFF",
        dark: "#374151"
      },
      text: {
        light: {
          primary: "#1F2937",
          secondary: "#4B5563"
        },
        dark: {
          primary: "#F9FAFB",
          secondary: "#D1D5DB"
        }
      }
    },
    animations: {
      enabled: true,
      speed: "normal"
    }
  },
  discord: {
    userId: "1003511814140743825",
    webhookUrl: "YOUR_WEBHOOK_URL"
  },
  social: {
    tiktok: "https://tiktok.com/@yourusername",
    instagram: "https://instagram.com/yourusername",
    discord: "https://discord.gg/r-c0"
  },
  features: {
    tiktok: true,
    instagram: true,
    discord: true,
    ratings: true,
    darkMode: true,
    languageSwitch: true
  },
  languages: {
    available: ["en", "ar"],
    default: "ar"
  }
};
