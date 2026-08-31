import { test, expect } from '@playwright/test'

test('Amazon India search returns product results', async ({ page }) => {
  await page.goto('https://www.amazon.in/')
  await page.getByPlaceholder('Search Amazon.in').fill('wireless mouse')
  await page.getByPlaceholder('Search Amazon.in').press('Enter')
  await expect(page.locator('[data-component-type="s-search-result"]').first()).toBeVisible()
})
