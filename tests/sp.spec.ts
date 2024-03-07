import { test } from "@playwright/test";

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
