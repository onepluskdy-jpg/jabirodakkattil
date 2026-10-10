# Add your LinkedIn profile to the Contact section

## What will change

A new **LinkedIn** row is added to the contact list on your page, sitting alongside the
existing Email, Phone, Instagram and Behance rows. It looks and behaves exactly like the
others: small uppercase label, large name, and an arrow that lifts on hover. Clicking it
opens your LinkedIn profile in a new browser tab.

The link points to your profile address, with the sharing tracking text removed:
`https://www.linkedin.com/in/muhammad-jabir-8023b1260`

Nothing else moves — the top bar, the About buttons, and the footer keep their current
links.

## Layout

```text
Email        muhammedjabirmkm@gmail.com      ↗
Phone        +91 70124 18488                 ↗
Instagram    @jabir.mkm                      ↗
Behance      jabirmuhamme                    ↗
LinkedIn     muhammad-jabir                  ↗   <- new
```

## Technical details

- File: `src/components/Contact.tsx` — one new `<li>` appended to the existing
  `divide-y divide-border border-y border-border` list, reusing the same markup and
  classes as the Instagram and Behance rows (`font-display text-2xl md:text-4xl`,
  hover to `text-primary`, `ArrowUpRight` icon with the same translate transition).
- Attributes: `target="_blank"`, `rel="noopener noreferrer"`, label `LinkedIn`,
  value `muhammad-jabir` (the profile's own handle, matching how the other rows show
  handles rather than full names).
- No new packages, no backend or database changes, no other files touched.

## Verification

- Re-read `Contact.tsx` and check `/tmp/observability/build-errors.log` for a clean build.
- Load the preview and screenshot the contact section to confirm the LinkedIn row renders
  in the same style as its neighbours, and that its link resolves to the address above.
