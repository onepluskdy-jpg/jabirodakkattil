# Add your LinkedIn profile and update your contact details

## What will change

Three things on your page:

1. **New LinkedIn row** in the contact list, alongside Email, Phone, Instagram and Behance.
   Same style as the others — small uppercase label, large name, arrow that lifts on
   hover. Clicking opens your profile in a new browser tab.
2. **New email everywhere it appears**: `jabirodakkattil.in@gmail.com`
3. **New phone everywhere it appears**: `+91 89518 60301`

The email and phone are shown in two places today — the contact list near the bottom of
the page, and the small info grid under your portrait in the About section. Both places
get the new values, including the tap-to-call and tap-to-mail links.

Nothing else moves: the top bar, the About buttons, and the footer keep their current
links.

## Layout

```text
Email        jabirodakkattil.in@gmail.com    ↗   <- new address
Phone        +91 89518 60301                 ↗   <- new number
Instagram    @jabir.mkm                      ↗
Behance      jabirmuhamme                    ↗
LinkedIn     muhammad-jabir                  ↗   <- new row

About info grid:  Email  jabirodakkattil.in@gmail.com   <- new address
                  Phone  +91 89518 60301                <- new number
```

## Technical details

- `src/components/Contact.tsx`:
  - `mailto:` href and visible text become `jabirodakkattil.in@gmail.com`.
  - `tel:` href becomes `tel:+918951860301`, visible text `+91 89518 60301`.
  - One new `<li>` appended to the existing `divide-y divide-border border-y border-border`
    list, reusing the Instagram/Behance row markup and classes (`font-display
    text-2xl md:text-4xl`, hover to `text-primary`, `ArrowUpRight` with the same
    translate transition), `target="_blank"`, `rel="noopener noreferrer"`. Label
    `LinkedIn`, value `muhammad-jabir` (the profile's own handle, matching how other rows
    show handles). Link: `https://www.linkedin.com/in/muhammad-jabir-8023b1260` — the
    sharing tracking text is dropped.
- `src/components/About.tsx`: the `info` array's Email and Phone `value` fields get the
  new strings.
- Checked: the old address and number appear nowhere else (no page metadata, no search
  listing files), so no other files need editing.
- No new packages, no backend or database changes.
- The new contact details will also be saved to project memory so future edits keep them.

## Verification

- Re-read both files and check `/tmp/observability/build-errors.log` for a clean build.
- Load the preview and screenshot the contact section and the About info grid to confirm
  the new email, phone and LinkedIn row render in the same style as their neighbours, and
  that the LinkedIn, `mailto:` and `tel:` links carry the exact values above.
