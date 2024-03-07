import { test } from "@playwright/test";


const userAgentStrings = [
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
];

test.use({
  userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)]
})

test("test", async ({ page }) => {
  await page.goto("https://photo-contest.sophielagirafe.fr/galerie");
  await page
    .locator('img[src="photos/mars/500/65e4e4f73a24e3.38168596.jpg"]')
    .click();
  const child = page.locator(
    'img[src="photos/mars/65e4e4f73a24e3.38168596.jpg"]'
  );
  await page
    .locator(".uk-modal-container")
    .filter({ has: child })
    .getByRole("button", { name: "Vote" })
    .click();
});
