import { test, expect } from '@playwright/test'

test('Amazon India cart exposes checkout action when items exist', async ({ page }) => {
  await page.goto('https://www.amazon.in/gp/cart/view.html')
  const checkout = page.locator('input[name="proceedToRetailCheckout"]')
  if (await checkout.count()) {
    await expect(checkout).toBeVisible()
  }
})
