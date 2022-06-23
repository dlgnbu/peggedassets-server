import type { PeggedAsset } from "./types";

export type { PeggedAsset };

export const peggedCategoryList = ["stablecoins"]; // this should include all strings from union type PeggedCategory

/*
`chain` is the first chain of a protocol we tracked at defillama,
  so if a protocol launches on Ethereum and we start tracking it there, and then it launches on polygon and
  we start tracking it on both polygon and ethereum, then `chain` should be set to `Ethereum`.

`chains` is not used by the current code, but good to fill it out because it is used in our test to detect errors

both `name` and `gecko_id` must be included. `name` is used to fetch icon and as API slug. `gecko_id` is used to fetch adapters. 

`description` should be brief but still include: Issuer (or degree of decentralization), function of asset, and peg mechanism.

`mechanismDescription` should include details on minting and redemption.
*/

export default [
  {
    id: "1",
    name: "Tether",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    symbol: "USDT",
    url: "https://tether.to/",
    description:
      "Launched in 2014, Tether tokens pioneered the stablecoin model. Tether tokens are pegged to real-world currencies on a 1-to-1 basis. This offers traders, merchants and funds a low volatility solution when exiting positions in the market.",
    mechanismDescription:
      "Tether customers who have undergone a verification process can exchange USD for USDT and redeem USDT for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "tether",
    cmcId: "825",
    category: "stablecoins", // is for the frontend
    pegType: "peggedUSD", // should match balance key returned by adapter
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Polygon",
      "BSC",
      "Avalanche",
      "Solana",
      "Arbitrum",
      "Optimism",
      "Boba",
      "Metis",
      "Moonbeam",
      "KCC",
      "Moonriver",
      "Harmony",
      "Syscoin",
      "Heco",
      "OKExChain",
      "IoTeX",
      "Omni",
      "Aurora",
      "Algorand",
      "Milkomeda",
      "Kardia",
      "Telos",
      "Fuse",
      "TomoChain",
      "Meter",
      "Tron",
      "Liquidchain",
      "Bittorrent",
      "Crab",
      "EOS",
      "Statemine",
      "Evmos",
      "Oasis",
      "Terra",
      "Astar",
      "Gnosis",
      "Theta",
      "RSK",
      "REINetwork",
      "Loopring",
      "zkSync",
      "Shiden",
      "Fantom",
    ],
    auditLinks: ["https://tether.to/en/transparency/#reports"],
    twitter: "https://twitter.com/Tether_to",
    wiki: "https://wiki.defillama.com/wiki/USDT",
  },
  {
    id: "2",
    name: "USD Coin",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    url: "https://www.circle.com/usdc/",
    description:
      "USDC is a fully regulated dollar digital stablecoin launched by Circle and Coinbase. USDC is fully backed by cash and short-dated U.S. government obligations, so that it is always redeemable 1:1 for U.S. dollars.",
    mechanismDescription:
      "An eligible business can exchange USD for USDC and redeem USDC for USD through a Circle Account.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "usd-coin",
    cmcId: "3408",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Polygon",
      "BSC",
      "Solana",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "Boba",
      "Metis",
      "KCC",
      "Moonriver",
      "Harmony",
      "OKExChain",
      "Moonbeam",
      "Syscoin",
      "TomoChain",
      "Ronin",
      "Aurora",
      "Fuse",
      "Meter",
      "Telos",
      "Milkomeda",
      "Elastos",
      "Algorand",
      "Tron",
      "Terra",
      "Oasis",
      "Crab",
      "Evmos",
      "Astar",
      "Hedera",
      "Stellar",
      "Flow",
      "Gnosis",
      "Theta",
      "RSK",
      "REINetwork",
      "Loopring",
      "zkSync",
      "Shiden",
      "Fantom",
      "DFK",
    ],
    auditLinks: ["https://www.centre.io/usdc-transparency?hsLang=en"],
    twitter: null,
    wiki: "https://wiki.defillama.com/wiki/USDC",
  },
  {
    id: "3",
    name: "TerraUSD",
    address: null,
    symbol: "UST",
    url: "https://www.terra.money/",
    description:
      "Terra is a digital currency. The supply of Terra is adjusted in response to changes in demand to keep its price stable. This is achieved using Luna, the mining token whose stable rewards are designed to absorb volatility from changing economic cycles.",
    mechanismDescription:
      "Using Terra Station, $1 worth of LUNA can be burned to mint 1 UST, and vice-versa.",
    chain: "Terra",
    onCoinGecko: true,
    gecko_id: "terrausd",
    cmcId: "7129",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "chainlink",
    chains: [
      "Terra",
      "Ethereum",
      "Polygon",
      "BSC",
      "Solana",
      "Harmony",
      "Fantom",
      "Aurora",
      "Avalanche",
      "Osmosis",
      "Moonbeam",
      "Oasis",
      "Celo",
      "Fuse",
      "Arbitrum",
      "Optimism",
      "Metis",
      "DFK",
    ],
    auditLinks: null,
    twitter: "https://twitter.com/terra_money",
    wiki: "https://wiki.defillama.com/wiki/Terra",
  },
  {
    id: "4",
    name: "Binance USD",
    address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    symbol: "BUSD",
    url: "https://www.binance.com/en/busd",
    description:
      "BUSD is a 1:1 USD-backed stablecoin approved by the New York State Department of Financial Services (NYDFS), issued in partnership with Paxos.",
    mechanismDescription:
      "Paxos customers who have undergone a verification process can exchange USD for BUSD and redeem BUSD for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "binance-usd",
    cmcId: "4687",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Harmony",
      "IoTeX",
      "OKExChain",
      "Moonriver",
      "Solana",
      "Polygon",
      "Fuse",
      "Meter",
      "Moonbeam",
      "Milkomeda",
      "Elastos",
      "Aurora",
      "Oasis",
      "Terra",
      "Shiden",
      "Astar",
      "Evmos",
      "Syscoin",
      "Boba",
      "Metis",
      "Fantom",
      "KCC",
      "RSK",
      "Theta",
    ],
    auditLinks: ["https://paxos.com/attestations/"],
    twitter: "https://twitter.com/PaxosGlobal",
    wiki: "https://wiki.defillama.com/wiki/Binance_USD",
  },
  {
    id: "5",
    name: "Dai",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    symbol: "DAI",
    url: "https://makerdao.com/",
    description:
      "The Dai stablecoin is a decentralized, unbiased, collateral-backed cryptocurrency soft-pegged to the US Dollar. Dai is held in cryptocurrency wallets or within platforms, and is supported on Ethereum and other popular blockchains.",
    mechanismDescription:
      "Users mint Dai by depositing accepted collateral assets into Maker Vaults within the Maker Protocol. When the loan is repaid to retrieve the collateral, the paid back Dai is burned.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "dai",
    cmcId: "4943",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Solana",
      "Polygon",
      "BSC",
      "Optimism",
      "Harmony",
      "Avalanche",
      "Arbitrum",
      "Moonriver",
      "Aurora",
      "Fantom",
      "Moonbeam",
      "Syscoin",
      "Milkomeda",
      "Astar",
      "Oasis",
      "Evmos",
      "Gnosis",
      "Terra",
      "RSK",
      "REINetwork",
      "Loopring",
      "zkSync",
      "Aztec",
      "Velas",
      "Shiden",
      "Boba",
      "StarkNet",
    ],
    auditLinks: null,
    twitter: "https://twitter.com/MakerDAO",
    wiki: "https://wiki.defillama.com/wiki/Dai",
  },
  {
    id: "6",
    name: "Frax",
    address: "0x853d955acef822db058eb8505911ed77f175b99e",
    symbol: "FRAX",
    url: "https://frax.finance/",
    description:
      "Frax attempts to be the first stablecoin protocol to implement design principles of both collateralized and algorithmic stablecoins to create a highly scalable, trustless, extremely stable, and ideologically pure on-chain money.",
    mechanismDescription:
      "Using the Frax Finance app, FRAX can be minted by locking USDC and burning FXS in a proportion determined by the protocol's collateral ratio.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "frax",
    cmcId: "6952",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Arbitrum",
      "Aurora",
      "Boba",
      "Fantom",
      "Evmos",
      "Harmony",
      "Moonbeam",
      "Moonriver",
      "Optimism",
      "Polygon",
      "Solana",
      "zkSync",
      "Milkomeda",
    ],
    auditLinks: null,
    twitter: "https://twitter.com/fraxfinance",
    wiki: "https://wiki.defillama.com/wiki/Frax",
  },
  {
    id: "7",
    name: "TrueUSD",
    address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    symbol: "TUSD",
    url: "https://trueusd.com/",
    description:
      "TrueUSD (TUSD) is an independently-verified digital asset redeemable 1-for-1 for US Dollars.",
    mechanismDescription:
      "TrueUSD customers who have undergone a verification process can exchange USD for TUSD and redeem TUSD for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "true-usd",
    cmcId: "2563",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Polygon",
      "Arbitrum",
      "Fantom",
      "Tron",
      "Syscoin",
      "Heco",
      "Cronos",
    ],
    auditLinks: ["https://real-time-attest.trustexplorer.io/truecurrencies"],
    twitter: "https://twitter.com/tusdio",
    wiki: "https://wiki.defillama.com/wiki/TrueUSD",
  },
  {
    id: "8",
    name: "Liquity USD",
    address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
    symbol: "LUSD",
    url: "https://www.liquity.org/",
    description:
      "Liquity is a decentralized borrowing protocol that allows you to draw interest-free loans against Ether used as collateral. Loans are paid out in LUSD (a USD pegged stablecoin).",
    mechanismDescription:
      "Using a Liquity frontend, users mint LUSD by depositing ETH as collateral into a Trove. When the loan is repaid to retrieve the collateral, the paid back LUSD is burned.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "liquity-usd",
    cmcId: "9566",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "chainlink",
    chains: ["Ethereum", "Polygon", "Optimism"],
    auditLinks: null,
    twitter: "https://twitter.com/LiquityProtocol",
    wiki: "https://wiki.defillama.com/wiki/Liquity",
  },
  {
    id: "9",
    name: "Fei USD",
    address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    symbol: "FEI",
    url: "https://fei.money/",
    description:
      "Fei is a decentralized, scalable, and DeFi-native stablecoin protocol. Fei Protocol's goal is to scalably issue a $1 pegged decentralized stablecoin, FEI.",
    mechanismDescription:
      "New FEI is minted via a buy-only bonding curve denominated in ETH. The Fei Protocol deploys its Protocol Controlled Value as liquidity for trading, and FEI is minted or burned to maintain the peg whenever it is traded.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "fei-usd",
    cmcId: "8642",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "chainlink",
    chains: ["Ethereum"],
    auditLinks: null,
    twitter: "https://twitter.com/feiprotocol",
    wiki: "https://wiki.defillama.com/wiki/Fei",
  },
  {
    id: "10",
    name: "Magic Internet Money",
    address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    symbol: "MIM",
    url: "https://abracadabra.money/",
    description:
      "Abracadabra.money is a lending platform that uses interest-bearing tokens as collateral to borrow a USD pegged stablecoin (Magic Internet Money - MIM), that can be used as any other traditional stablecoin.",
    mechanismDescription:
      "Using Abracadabra.money, users mint MIM by depositing interest-bearing tokens as collateral into an Abracadabra cauldron. When the loan is repaid to retrieve the collateral, the paid back MIM is burned.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "magic-internet-money",
    cmcId: "162",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Polygon",
      "Avalanche",
      "Arbitrum",
      "Fantom",
      "BSC",
      "Moonriver",
      "Boba",
      "Metis",
    ],
    auditLinks: null,
    twitter: "https://twitter.com/MIM_Spell",
    wiki: "https://wiki.defillama.com/wiki/MIM",
  },
  {
    id: "11",
    name: "Pax Dollar",
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    symbol: "USDP",
    url: "https://paxos.com/usdp/",
    description:
      "USDP is a regulated stablecoin by Paxos that is redeemable one-to-one for US Dollars.",
    mechanismDescription:
      "Paxos customers who have undergone a verification process can exchange USD for USDP and redeem USDP for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "paxos-standard",
    cmcId: "3330",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: ["Ethereum", "BSC"],
    auditLinks: ["https://paxos.com/attestations/"],
    twitter: "https://twitter.com/paxosglobal",
    wiki: "https://wiki.defillama.com/wiki/USDP",
  },
  {
    id: "12",
    name: "Neutrino USD",
    address: null,
    symbol: "USDN",
    url: "https://neutrino.at/",
    description:
      "Neutrino USD (USDN) is an algorithmic stablecoin pegged to the US dollar and backed by WAVES.",
    mechanismDescription:
      "NSBT stakers can mint 1 USDN by burning $1 worth of WAVES, and vice-versa.",
    chain: "Waves",
    onCoinGecko: true,
    gecko_id: "neutrino",
    cmcId: "5068",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "chainlink",
    chains: ["Waves", "Ethereum", "Polygon", "BSC"],
    auditLinks: null,
    twitter: "https://twitter.com/neutrino_proto",
    wiki: "https://wiki.defillama.com/wiki/Neutrino",
  },
  {
    id: "13",
    name: "YUSD Stablecoin",
    address: "avax:0x111111111111ed1d73f860f57b2798b683f2d325",
    symbol: "YUSD",
    url: "https://yeti.finance/",
    description:
      "Yeti Finance is a cross-margin lending protocol on Avalanche that allows users to borrow up to 21x against their portfolio and receive YUSD, an overcollateralized stablecoin.",
    mechanismDescription:
      "Using the Yeti Finance app, users mint YUSD by depositing an accepted collateral asset into a Trove. When the loan is repaid to retrieve the collateral, the paid back YUSD is burned.",
    chain: "Avalanche",
    onCoinGecko: true,
    gecko_id: "yusd-stablecoin",
    cmcId: "19577",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "dexscreener",
    chains: ["Avalanche"],
    auditLinks: null,
    twitter: "https://twitter.com/YetiFinance",
    wiki: "https://wiki.defillama.com/wiki/Yeti_Finance",
  },
  {
    id: "14",
    name: "USDD",
    address: "tron:TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn",
    symbol: "USDD",
    url: "https://usdd.io/",
    description:
      "USDD is a decentralized cryptocurrency issued by the TRON DAO Reserve.",
    mechanismDescription:
      "Members of the TRON DAO Reserve (TDR) can mint and issue USDD by staking TRX. $1 worth of TRX can be burned to mint 1 USDD, and vice-versa.",
    chain: "Tron",
    onCoinGecko: true,
    gecko_id: "usdd",
    cmcId: "19891",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "dexscreener",
    chains: ["Tron", "Bittorrent", "Ethereum", "BSC"],
    auditLinks: ["https://usdd.io/SlowMistAuditReport-USDDTRC20.pdf"],
    twitter: "https://twitter.com/usddio",
    wiki: "https://wiki.defillama.com/wiki/USDD",
  },
  {
    id: "15",
    name: "Dola",
    address: "0x865377367054516e17014ccded1e7d814edc9ce4",
    symbol: "DOLA",
    url: "https://www.inverse.finance/",
    description:
      "DOLA is an over-collateralized stablecoin pegged to the US Dollar.  It can also be used as collateral within the Frontier protocol to achieve high capital efficiency, leverage and native yield.",
    mechanismDescription:
      "Using the Frontier Banking app, users mint DOLA by depositing an accepted collateral asset into a vault. When the loan is repaid to retrieve the collateral, the paid back DOLA is burned.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "dola-usd",
    cmcId: "19191",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "dexscreener",
    chains: ["Ethereum", "Fantom"],
    auditLinks: null,
    twitter: "https://twitter.com/InverseFinance",
    wiki: "https://wiki.defillama.com/wiki/Inverse_Finance",
  },
  {
    id: "16",
    name: "Parrot USD",
    address: "solana:Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS",
    symbol: "PAI",
    url: "https://parrot.fi/",
    description:
      "PAI is an over-collateralized stablecoin created by the Parrot Protocol on Solana.",
    mechanismDescription:
      "Using the Parrot app, users mint PAI by depositing an accepted collateral asset into a vault. When the loan is repaid to retrieve the collateral, the paid back PAI is burned.",
    chain: "Solana",
    onCoinGecko: true,
    gecko_id: "parrot-usd",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "birdeye",
    chains: ["Solana"],
    auditLinks: null,
    twitter: "https://twitter.com/gopartyparrot",
    wiki: "https://wiki.defillama.com/wiki/Parrot_Protocol",
  },
  {
    id: "17",
    name: "HUSD",
    address: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    symbol: "HUSD",
    url: "https://www.stcoins.com/",
    description:
      "HUSD is an over-collateralized stablecoin built on the Ethereum, HECO and Tron networks.",
    mechanismDescription:
      "Stable Universal customers who have undergone a verification process can exchange USD for HUSD and redeem HUSD for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "husd",
    cmcId: "4779",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "dexscreener",
    chains: ["Ethereum", "Tron", "Heco", "Elastos", "Solana"],
    auditLinks: [""],
    twitter: "https://twitter.com/Stablecoin_HUSD",
    wiki: "https://wiki.defillama.com/wiki/HUSD",
  },
  {
    id: "18",
    name: "Nexus USD",
    address: "0x1b84765de8b7566e4ceaf4d0fd3c5af52d3dde4f",
    symbol: "NUSD",
    url: "https://synapseprotocol.com/",
    description:
      'nUSD, or "nexus" USD, is a cross-chain stablecoin fully backed by the nexus stablecoin liquidity pool on Ethereum consisting of DAI, USDC, and USDT.',
    mechanismDescription:
      "When a stablecoin is bridged between Synapse-enabled chains, the funds are automatically converted to nUSD, and bridged to the destination chain. Once there, this nUSD can be auto-swapped to that chain's native stablecoins using the local nUSD pool.",
    chain: "Ethereum",
    onCoinGecko: false,
    gecko_id: "nexus-usd",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: null,
    chains: [
      "Ethereum",
      "BSC",
      "Polygon",
      "Avalanche",
      "Arbitrum",
      "Fantom",
      "Harmony",
      "Boba",
      "Optimism",
      "Cronos",
      "Metis",
      "DFK",
    ],
    auditLinks: null,
    twitter: "https://twitter.com/SynapseProtocol",
    wiki: "https://wiki.defillama.com/wiki/Synapse",
  },
  {
    id: "19",
    name: "Gemini Dollar",
    address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    symbol: "GUSD",
    url: "https://www.gemini.com/dollar",
    description:
      "GUSD is a 1:1 USD-backed stablecoin issued by Gemini. Gemini customers can redeem a GUSD for $1 at Gemini.",
    mechanismDescription:
      "Gemini customers who have undergone a verification process can exchange USD for GUSD and redeem GUSD for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "gemini-dollar",
    cmcId: "3306",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: ["Ethereum", "Wanchain"],
    auditLinks: ["https://www.gemini.com/dollar"],
    twitter: "https://twitter.com/gemini",
    wiki: "https://wiki.defillama.com/wiki/GUSD",
  },
  {
    id: "20",
    name: "Alchemix USD",
    address: "0xbc6da0fe9ad5f3b0d58160288917aa56653660e9",
    symbol: "ALUSD",
    url: "https://alchemix.fi/",
    description:
      "alUSD is a yield-backed synthetic stablecoin powered by the Alchemix protocol.",
    mechanismDescription:
      "alUSD is minted by depositing an accepted collateral asset into an Alchemix Vault. The collateral is used to generate yield that pays down the alUSD debt. Any alUSD used to repay the loan to retrieve the collateral is burned.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "alchemix-usd",
    cmcId: "8614",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "dexscreener",
    chains: ["Ethereum", "Arbitrum", "Optimism", "Fantom"],
    auditLinks: null,
    twitter: "https://twitter.com/AlchemixFi",
    wiki: "https://wiki.defillama.com/wiki/Alchemix",
  },
  {
    id: "21",
    name: "flexUSD",
    address: "0xa774ffb4af6b0a91331c084e1aebae6ad535e6f3",
    symbol: "FLEXUSD",
    url: "https://coinflex.com/",
    description:
      "flexUSD is a multi-yield bearing stablecoin on Ethereum and smartBCH.",
    mechanismDescription:
      "Using the CoinFLEX app, users swap USDC to mint flexUSD 1:1. flexUSD can be redeemed for USDC 1:1 at any time.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "flex-usd",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "coingecko",
    chains: ["Ethereum", "smartBCH"],
    auditLinks: null,
    twitter: "https://twitter.com/coinflexdotcom",
    wiki: "https://wiki.defillama.com/wiki/flexUSD",
  },
  {
    id: "22",
    name: "sUSD",
    address: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    symbol: "SUSD",
    url: "https://synthetix.io/",
    description:
      "Synthetix is a protocol for issuing and trading synthetic assets on Ethereum. Each synthetic asset (or Synth) is an ERC20 token which tracks the price of an external asset; for example each sUSD token tracks the price of the US dollar.",
    mechanismDescription:
      "An SNX holder can mint sUSD by locking their SNX as collateral via the Synthetix smart contract. sUSD can be burned to swap to another synthetic asset or to repay the debt to retrieve the collateral.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "nusd",
    cmcId: "2927",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "chainlink",
    chains: ["Ethereum", "Arbitrum", "Optimism", "Fantom"],
    auditLinks: null,
    twitter: "https://twitter.com/synthetix_io",
    wiki: "https://wiki.defillama.com/wiki/Synthetix",
  },
  {
    id: "23",
    name: "Origin Dollar",
    address: "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
    symbol: "OUSD",
    url: "https://www.ousd.com/",
    description:
      "OUSD is a yield-earning, rebasing stablecoin that is backed 1:1 by other stablecoins like USDT, USDC and DAI.",
    mechanismDescription:
      "Using the Origin Dollar app, users swap USDC, USDT, or DAI to mint OUSD 1:1. OUSD can be redeemed for USDC, USDT, or DAI 1:1 at any time.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "origin-dollar",
    cmcId: "7189",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "dexscreener",
    chains: ["Ethereum"],
    auditLinks: null,
    twitter: "https://twitter.com/originprotocol",
    wiki: "https://wiki.defillama.com/wiki/Origin_Dollar",
  },
  {
    id: "24",
    name: "Celo Dollar",
    address: "celo:0x765de816845861e75a25fca122bb6898b8b1282a",
    symbol: "CUSD",
    url: "https://celo.org/",
    description:
      "Celo Dollars (cUSD) are stablecoins that follow the US Dollar and are native to the Celo blockchain's Reserve system. The Celo Reserve is a system of smart contracts that uses a portfolio of cryptocurrencies to expand and contract the supply cUSD, similar to MakerDAO's lending protocol.",
    mechanismDescription:
      "Using the Mento app, $1 worth of CELO can be sent to the CELO reserve to mint 1 cUSD, and 1 1 cUSD can be burned to receive $1 worth of CELO.",
    chain: "Celo",
    onCoinGecko: true,
    gecko_id: "celo-dollar",
    cmcId: "7236",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "coingecko",
    chains: ["Celo", "Ethereum", "Solana"],
    auditLinks: null,
    twitter: "https://twitter.com/CeloOrg",
    wiki: "https://wiki.defillama.com/wiki/Celo",
  },
  {
    id: "25",
    name: "Reserve",
    address: "0x196f4727526ea7fb1e17b2071b3d8eaa38486988",
    symbol: "RSV",
    url: "https://reserve.org/",
    description:
      "RSV is backed by a basket of on-chain collateral assets, held by the Reserve Vault smart contract. This basket is comprised of equal parts TUSD, PAX, and USDC.",
    mechanismDescription:
      "Using the RSV Portal app, equal parts USDC, TUSD, and PAX can be swapped to mint RSV. RSV can be redeemed for its corresponding basket of assets at any time.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "reserve",
    cmcId: "6727",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "uniswap",
    chains: ["Ethereum", "Gnosis"],
    auditLinks: null,
    twitter: "https://twitter.com/holareserve",
    wiki: "https://wiki.defillama.com/wiki/Reserve_Protocol",
  },
  {
    id: "26",
    name: "mStable USD",
    address: "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
    symbol: "MUSD",
    url: "https://mstable.org/",
    description:
      "mUSD is USD-pegged cryptoasset on Ethereum and Polygon backed by a basket of selected USD stablecoins.",
    mechanismDescription:
      "Using the mStable app, users can swap an accepted stablecoin to mint mUSD 1:1. mUSD can be redeemed for another stablecoin 1:1 at any time.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "musd",
    cmcId: "5747",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "coingecko",
    chains: ["Ethereum", "Polygon", "Gnosis"],
    auditLinks: null,
    twitter: "https://twitter.com/mstable_",
    wiki: "https://wiki.defillama.com/wiki/mStable",
  },
  {
    id: "27",
    name: "USDK",
    address: "0x1c48f86ae57291f7686349f12601910bd8d470bb",
    symbol: "USDK",
    url: "https://www.oklink.com/en",
    description:
      "USDK is a USD-pegged stablecoin, jointly launched by OKLink and Prime Trust, an American Trust company.",
    mechanismDescription:
      "OKLink customers who have undergone a verification process can exchange USD for USDK and redeem USDK for USD.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "usdk",
    cmcId: "4064",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "fiat-backed",
    priceSource: "chainlink",
    chains: ["Ethereum", "Polygon", "OKExChain", "Solana"],
    auditLinks: [
      "https://oklinksupport.zendesk.com/hc/zh-hk/categories/360001824211-%E8%B5%84%E9%87%91%E5%AE%A1%E8%AE%A1",
    ],
    twitter: "https://twitter.com/OKLink",
    wiki: "https://wiki.defillama.com/wiki/USDK",
  },
  {
    id: "28",
    name: "Vai",
    address: "bsc:0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
    symbol: "VAI",
    url: "https://venus.io/",
    description:
      "Vai is Venus Protocol's decentralized synthetic stablecoin that is pegged to USD.",
    mechanismDescription:
      "VAI is minted by supplying and locking a single or basket of cryptocurrencies. VAI is exchangeable to all supporting assets, including USD, which can be redeemed directly to your bank account in the Swipe Wallet platform for verified users.",
    chain: "BSC",
    onCoinGecko: true,
    gecko_id: "vai",
    cmcId: "7824",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "chainlink",
    chains: ["BSC"],
    auditLinks: null,
    twitter: "https://twitter.com/VenusProtocol",
    wiki: "https://wiki.defillama.com/wiki/Venus",
  },
  {
    id: "29",
    name: "TOR",
    address: "fantom:0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e",
    symbol: "TOR",
    url: "https://tor.cash/",
    description:
      "TOR is a fully collateralized stablecoin built on the Fantom Opera Chain.",
    mechanismDescription: "Using the Hector Finance app, users swap DAI to mint TOR 1:1. TOR can be redeemed for DAI 1:1 at any time.",
    chain: "Fantom",
    onCoinGecko: true,
    gecko_id: "tor",
    cmcId: "18105",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "dexscreener",
    chains: ["Fantom"],
    auditLinks: null,
    twitter: "https://twitter.com/HectorDAO_HEC",
    wiki: "https://wiki.defillama.com/wiki/Hector_Finance",
  },
  {
    id: "30",
    name: "Dollar on Chain",
    address: "rsk:0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db",
    symbol: "DOC",
    url: "https://moneyonchain.com/doc-bitcoin-backed-stablecoin/",
    description:
      "Dollar on Chain an over-collateralized USD-pegged stablecoin backed by rBTC on the RSK Blockchain.",
    mechanismDescription: "Using the Money On Chain app, users mint DoC by depositing rBTC into a vault. When the loan is repaid to retrieve the collateral, the paid back DoC is burned.",
    chain: "RSK",
    onCoinGecko: false,
    gecko_id: "doc",
    cmcId: "7558",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: null,
    chains: ["RSK"],
    auditLinks: null,
    twitter: "https://twitter.com/moneyonchainok",
    wiki: "https://wiki.defillama.com/wiki/Dollar_On_Chain",
  },
  {
    id: "31",
    name: "SpiceUSD",
    address: "avax:0xab05b04743e0aeaf9d2ca81e5d3b8385e4bf961e",
    symbol: "USDS",
    url: "https://app.spicetrade.ai/",
    description:
      "Spice USD (Ticker USDS) is a stablecoin soft-pegged to USD in the Spice Protocol on Avalanche.",
    mechanismDescription: "Using the Spice Trade app, USDS can be minted by locking USDC and burning SPICE in a proportion determined by the protocol's collateral ratio.",
    chain: "Avalanche",
    onCoinGecko: true,
    gecko_id: "spiceusd",
    cmcId: "20306",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "dexscreener",
    chains: ["Avalanche", "Ethereum", "Polygon", "BSC"],
    auditLinks: null,
    twitter: "https://twitter.com/spicetradeai",
    wiki: "https://wiki.defillama.com/wiki/Spice_Protocol",
  },
  {
    id: "32",
    name: "Sperax USD",
    address: "arbitrum:0xd74f5255d557944cf7dd0e45ff521520002d5748",
    symbol: "USDS",
    url: "https://sperax.io/",
    description:
      "Sperax USD (USDs) is a USD-pegged stablecoin that is primarily backed by crypto collateral which generates organic yield for its holders.",
    mechanismDescription: "Using the Sperax app, USDs can be minted by locking USDC or USDT and burning SPA in a proportion determined by the protocol's collateral ratio.",
    chain: "Arbitrum",
    onCoinGecko: true,
    gecko_id: "sperax-usd",
    cmcId: "17285",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "dexscreener",
    chains: ["Arbitrum"],
    auditLinks: null,
    twitter: "https://twitter.com/SperaxUSD",
    wiki: "https://wiki.defillama.com/wiki/Sperax",
  },
  {
    id: "33",
    name: "USDP Stablecoin",
    address: "0x1456688345527be1f37e9e627da0837d6f08c925",
    symbol: "USDP",
    url: "https://unit.xyz/",
    description:
      "USDP is a decentralized, unbiased, and fully-backed stablecoin whose value is soft-pegged to US Dollar. USDP runs on the Ethereum, BSC, and Fantom networks.",
    mechanismDescription: "Using the Unit Protocol app, users mint USDP by depositing an accepted collateral asset into a vault. When the loan is repaid to retrieve the collateral, the paid back USDP is burned.",
    chain: "Ethereum",
    onCoinGecko: true,
    gecko_id: "usdp",
    cmcId: "8886",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "coingecko",
    chains: ["Ethereum", "Gnosis", "BSC", "Fantom"],
    auditLinks: null,
    twitter: "https://twitter.com/unitprotocol",
    wiki: "https://wiki.defillama.com/wiki/USDP",
  },
  {
    id: "34",
    name: "USD Balance",
    address: "fantom:0x6fc9383486c163fa48becdec79d6058f984f62ca",
    symbol: "USDB",
    url: "https://www.usdbalance.com/",
    description:
      "USDB is an algorithmic stablecoin that powers the FantOHM OHM fork.",
    mechanismDescription: "Using the USD Balance app, $1 worth of FHM can be burned to mint 1 USDB.",
    chain: "Fantom",
    onCoinGecko: true,
    gecko_id: "usd-balance",
    cmcId: "19224",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "algorithmic",
    priceSource: "dexscreener",
    chains: ["Fantom"],
    auditLinks: null,
    twitter: "https://twitter.com/USDB_",
    wiki: "https://wiki.defillama.com/wiki/FantOHM",
  },
  {
    id: "35",
    name: "MAI",
    address: "polygon:0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    symbol: "MAI",
    url: "https://www.mai.finance/",
    description:
      "MAI is a USD-pegged stablecoin backed by collateral available on many chains.",
    mechanismDescription: "Using the Mai Finance app, users mint MAI by depositing an accepted collateral asset into a vault. When the loan is repaid to retrieve the collateral, the paid back MAI is burned.",
    chain: "Polygon",
    onCoinGecko: true,
    gecko_id: "mimatic",
    cmcId: "10238",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "dexscreener",
    chains: [
      "Polygon",
      "Fantom",
      "Avalanche",
      "Moonriver",
      "Harmony",
      "Cronos",
      "Optimism",
      "BSC",
      "Arbitrum",
      "Gnosis",
      "Solana",
      "IoTeX",
      "Aurora",
      "Celo",
      "Metis",
      "Milkomeda",
    ],
    auditLinks: null,
    twitter: "https://twitter.com/QiDaoProtocol",
    wiki: "https://wiki.defillama.com/wiki/Qi_Dao",
  },
  {
    id: "36",
    name: "Ratio Stable Coin",
    address: "solana:USDrbBQwQbQ2oWHUPfA8QBHcyVxKUq1xHyXsSLKdUq2",
    symbol: "USDR",
    url: "https://ratio.finance/",
    description:
      "USDr is an algorithmically risk-adjusted Collateralized Debt Position. Users can mint USDr using stable yield-bearing assets, starting with stablecoin LP from Saber.",
    mechanismDescription: "USDr is minted by depositing an accepted collateral asset into Ratio Finance. The collateral is used to generate yield that pays down the USDr debt. Any USDr used to repay the loan to retrieve the collateral is burned.",
    chain: "Solana",
    onCoinGecko: true,
    gecko_id: "ratio-stable-coin",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "birdeye",
    chains: ["Solana"],
    auditLinks: null,
    twitter: "https://twitter.com/ratiofinance",
    wiki: "https://wiki.defillama.com/wiki/Ratio_Finance",
  },
  {
    id: "37",
    name: "USDJ",
    address: "tron:TMwFHYXLJaRUPeW6421aqXL4ZEzPRFGkGT",
    symbol: "USDJ",
    url: "https://just.network/",
    description:
      "USDJ is a fully collateral-backed USD-pegged stablecoin on Tron.",
    mechanismDescription: "Using the JustStable app, users mint USDJ by depositing TRX into a vault. When the loan is repaid to retrieve the collateral, the paid back USDJ is burned.",
    chain: "Tron",
    onCoinGecko: true,
    gecko_id: "just-stablecoin",
    cmcId: "5446",
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: "coingecko",
    chains: ["Tron"],
    auditLinks: null,
    twitter: "https://twitter.com/defi_just",
    wiki: "https://wiki.defillama.com/wiki/USDJ",
  },
  {
    id: "38",
    name: "STBL",
    address: "algorand:465865291",
    symbol: "STBL",
    url: "https://www.algofi.org/",
    description:
      "STBL is an algorithmic over-collateralized stablecoin that is native to the Algofi protocol.",
    mechanismDescription: "Using the Algofi app, users mint STBL by depositing an accepted collateral asset into a vault. When the loan is repaid to retrieve the collateral, the paid back STBL is burned.",
    chain: "Algorand",
    onCoinGecko: false,
    gecko_id: "stbl",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    pegMechanism: "crypto-backed",
    priceSource: null,
    chains: ["Algorand"],
    auditLinks: null,
    twitter: "https://twitter.com/algofiorg",
    wiki: "https://wiki.defillama.com/wiki/Algofi",
  },
] as PeggedAsset[];
