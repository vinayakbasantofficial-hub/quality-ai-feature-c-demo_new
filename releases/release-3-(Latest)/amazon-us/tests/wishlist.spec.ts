import { test, expect } from '@playwright/test'

test('Amazon US wishlist page is available', async ({ page }) => {
  await page.goto('https://www.amazon.com/hz/wishlist/ls')
  await expect(page).toHaveURL(/wishlist|signin/)
})
