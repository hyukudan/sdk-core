export enum ChainId {
  MAINNET = 1,
  GOERLI = 5,
  MAGMA_SEPOLIA = 6969696969
}

export const SUPPORTED_CHAINS = [
  ChainId.MAINNET,
  ChainId.GOERLI,
  ChainId.MAGMA_SEPOLIA
] as const
export type SupportedChainsType = typeof SUPPORTED_CHAINS[number]

export enum NativeCurrencyName {
  ETHER = 'ETH',
  LAVA = 'LAVA'
}