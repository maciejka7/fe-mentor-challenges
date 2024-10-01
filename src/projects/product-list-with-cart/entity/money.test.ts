import { expect, it } from 'vitest'
import { createMoney } from './money'

it('money tests', () => {
  const sign = '$$'

  const amout1 = 5
  const amout2 = 3.3
  const amout3 = 1.12

  const money1 = createMoney(amout1, sign)
  const money2 = createMoney(amout2, sign)
  const money3 = createMoney(amout3, sign)

  expect(money1.money()).toEqual(`${sign}5.00`)
  expect(money2.money()).toEqual(`${sign}3.30`)
  expect(money3.money()).toEqual(`${sign}1.12`)
})
