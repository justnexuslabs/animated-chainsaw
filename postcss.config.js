export const tokenConfig = {
  symbol: "$DEN",
  totalSupply: 1_000_000_000,
  nftPrice: "TBA",
  badgeSupply: 150,
  founderEditions: 300
};

export const allocations = [
  { label: "Community & Ecosystem", percent: 35, detail: "Mission-based ecosystem releases" },
  { label: "Liquidity", percent: 20, detail: "Launch and liquidity strategy allocation" },
  { label: "Treasury", percent: 15, detail: "Controlled protocol reserve" },
  { label: "Team / Founders", percent: 15, detail: "12-month cliff, then 36-month linear vesting" },
  { label: "Partnerships", percent: 10, detail: "Milestone-based unlocks" },
  { label: "Advisors / Contributors", percent: 5, detail: "6-month cliff, then 24-month linear vesting" }
];

export const vestingSchedule = [
  {
    label: "Team / Founders",
    cliff: "12-month cliff",
    release: "36-month linear vesting"
  },
  {
    label: "Treasury",
    cliff: "6-month cliff",
    release: "36-month controlled release"
  },
  {
    label: "Partnerships",
    cliff: "Milestone gated",
    release: "Milestone-based unlocks"
  },
  {
    label: "Advisors / Contributors",
    cliff: "6-month cliff",
    release: "24-month linear vesting"
  },
  {
    label: "Community",
    cliff: "Mission phased",
    release: "Based on missions and ecosystem growth"
  },
  {
    label: "Liquidity",
    cliff: "Launch strategy",
    release: "Launch/liquidity strategy allocation"
  }
];
