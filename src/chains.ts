export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  MAGMA = 6969696969
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.MAGMA
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  // Strings match input for CLI
  ETHER = 'ETH',
  LAVA = 'LAVA'
}
