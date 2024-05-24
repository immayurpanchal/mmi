import { MenuBarExtra, open } from "@raycast/api";
import { useFetch } from "@raycast/utils";
import { MMIResponse } from "./types";

const getCurrentMarketMood = (currentValue: number) => {
  if (currentValue === 0) {
    return "NA";
  } else if (currentValue <= 30) {
    return "Extreme Fear";
  } else if (currentValue <= 50) {
    return "Fear";
  } else if (currentValue <= 70) {
    return "Greed";
  } else {
    return "Extreme Greed";
  }
};

const getMoodIcon = (currentValue: number) => {
  if (currentValue === 0) {
    return "🥲";
  } else if (currentValue <= 30) {
    return "😱";
  } else if (currentValue <= 50) {
    return "😨";
  } else if (currentValue <= 70) {
    return "😈";
  } else {
    return "🔥";
  }
};

export default function Command() {
  const { isLoading: isLoadingData, data } = useFetch<MMIResponse>("https://api.tickertape.in/mmi/now");

  const currentValue = +(data?.data?.currentValue.toFixed(2) ?? 0);
  const currentMarketMood = getCurrentMarketMood(currentValue ?? 0);
  const currentMoodIcon = getMoodIcon(currentValue ?? 0);

  return (
    <MenuBarExtra title={`${currentMoodIcon} ${currentMarketMood} : ${currentValue} `} isLoading={isLoadingData}>
      <MenuBarExtra.Item title="Market Mood" />
      <MenuBarExtra.Item
        key="mmi"
        // icon={getFavicon(bookmark.url)}
        title={`${currentMarketMood} : ${currentValue} `}
        onAction={() => open("https://www.tickertape.in/market-mood-index")}
      />
    </MenuBarExtra>
  );
}
