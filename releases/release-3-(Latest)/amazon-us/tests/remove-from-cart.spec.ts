import { test, expect } from '@playwright/test'

test('Amazon US removes an item from cart', async ({ page }) => {
  await page.goto('https://www.amazon.com/gp/cart/view.html')
  const cartItem = page.locator('[data-name="Active Items"] .sc-list-item').first()
  if (await cartItem.count()) {
    await cartItem.getByText(/delete/i).first().click()
    await expect(cartItem).toBeHidden()
  }
})
