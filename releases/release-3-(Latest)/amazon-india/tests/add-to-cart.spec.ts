import { test, expect } from '@playwright/test'

test('Amazon India adds a product to cart', async ({ page }) => {
  await page.goto('https://www.amazon.in/')
  await page.getByPlaceholder('Search Amazon.in').fill('usb cable')
  await page.getByPlaceholder('Search Amazon.in').press('Enter')
  await page.locator('[data-component-type="s-search-result"]').first().click()
  await page.getByRole('button', { name: /add to cart/i }).first().click()
  await expect(page.locator('#nav-cart-count')).not.toHaveText('0')
})
