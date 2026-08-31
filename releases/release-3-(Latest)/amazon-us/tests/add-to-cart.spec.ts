import { test, expect } from '@playwright/test'

test('Amazon US adds a product to cart', async ({ page }) => {
  await page.goto('https://www.amazon.com/')
  await page.getByPlaceholder('Search Amazon').fill('phone charger')
  await page.getByPlaceholder('Search Amazon').press('Enter')
  await page.locator('[data-component-type="s-search-result"]').first().click()
  await page.getByRole('button', { name: /add to cart/i }).first().click()
  await expect(page.locator('#nav-cart-count')).not.toHaveText('0')
})
