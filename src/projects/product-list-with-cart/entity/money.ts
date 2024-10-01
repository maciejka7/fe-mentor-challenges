import type { Money } from '../types'

export function createMoney(amount: number, sign = '$'): Money {
  const [base, rest] = String(amount).split('.')

  const createMoneyString = (): string => {
    const restOfValue = rest === undefined ? '00' : rest.length === 1 ? `${rest}0` : `${rest}`
    return `${sign}${base}.${restOfValue}`
  }

  return {
    amount,
    sign,
    money: () => createMoneyString(),
  }
}
