const STORAGE_KEY = "lingvo_usage";
const PROMO_KEY = "lingvo_promo";

interface UsageData {
  date: string;
  count: number;
}

function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export function getUsage(): UsageData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { date: getToday(), count: 0 };

    const data: UsageData = JSON.parse(raw);
    if (data.date !== getToday()) {
      return { date: getToday(), count: 0 };
    }
    return data;
  } catch {
    return { date: getToday(), count: 0 };
  }
}

export function incrementUsage(): void {
  const usage = getUsage();
  usage.count += 1;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(usage));
}

export function hasReachedLimit(): boolean {
  if (hasValidPromo()) return false;
  return getUsage().count >= 3;
}

export function applyPromo(code: string): boolean {
  if (code.toLowerCase().trim() === "free") {
    try {
      localStorage.setItem(PROMO_KEY, "free");
    } catch {}
    return true;
  }
  return false;
}

export function hasValidPromo(): boolean {
  try {
    return localStorage.getItem(PROMO_KEY) === "free";
  } catch {
    return false;
  }
}
