# Pixel LED Bar Landing Page Prompt

## Source
Based on user input: "The Best LED Bar with Pixel Control – 16 Zones"

## Requirements
**Target Audiences**: Lighting Designers, Production Teams, Rental Companies, System Integrators.
**Key Content**:
- "Ultimate Guide" style.
- Top 5 Products: Xmlite, Chauvet Professional, Elation Professional (1M & Chorus Line), ADJ.
- Comparison Table.
- Expert Tips & FAQ.
- CTA for expert advice.

**Tone of Writing**: Professional, Technical, Authoritative.
**Style of Design**: Dark Mode (Stage lighting vibe), High Contrast, Sleek.

## Component Mapping
- **Hero**: `LandingPrimaryImageCtaSection` (Dark theme, strong headline)
- **Intro**: `LandingFeature` (What is a 16-zone pixel bar?)
- **Applications**: `LandingFeatureList` (Common applications)
- **Product Reviews**: `LandingProductFeature` for each of the 5 products.
    - Use `LandingProductFeatureKeyPoints` or custom lists for Pros/Cons/Specs.
- **Comparison**: `LandingPriceComparisonSection` (adapted for technical specs).
- **Expert Tips**: `LandingProductFeatureKeyPoints` or `LandingFeatureList`.
- **FAQ**: `LandingFaqCollapsibleSection`.
- **CTA**: `LandingSaleCtaSection`.

## Generated Content Structure
1. **Hero**: Title, Subtitle, CTAs.
2. **Intro**: Definition & Applications.
3. **Xmlite**: Product Review 1.
4. **Chauvet**: Product Review 2.
5. **Elation 1M**: Product Review 3.
6. **ADJ**: Product Review 4.
7. **Elation Chorus**: Product Review 5.
8. **Comparison**: Table.
9. **Expert Tips**: How to choose.
10. **FAQ**: Common questions.
11. **CTA**: Contact us.
