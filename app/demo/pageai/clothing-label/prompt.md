# Clothing Label Manufacturer Guide Prompt

## Source
Based on provided HTML file: `best-clothing-label-material-manufacturer.html`

## Requirements
**Target Audiences**: Clothing Brands, Schools, Healthcare, Apparel Manufacturers.
**Key Content**:
- Ultimate Guide to Best Clothing Label Material Manufacturers.
- Top 5 list: Great K2, Avery Dennison, CCL, Gildan, BestLabels.
- Comparison Table.
- FAQ.

**Tone of Writing**: Informative, Professional, "Review/Guide" style.
**Style of Design**: Clean, Blog/Article layout, Light theme (white/gray/blue).

## Component Mapping
- **Hero**: `LandingPrimaryImageCtaSection` (or Text focused) - Title, Author, Intro.
- **Intro**: `LandingPrimaryTextCtaSection` - "What Is..."
- **Reviews**: `LandingProductFeature` for each manufacturer.
    - Use `LandingFeatureList` or `LandingProductFeatureKeyPoints` for Pros/Cons if possible, or embed custom HTML/Components within the brick.
- **Comparison**: `LandingPriceComparisonSection` (adapted for feature comparison).
- **FAQ**: `LandingFaqCollapsibleSection`.
- **Footer**: `LandingFooter`.

## Generated Content Structure
1.  **Hero**: Title, Intro text.
2.  **Definition**: What is a label manufacturer?
3.  **K2**: #1 Choice, details.
4.  **Avery**: #2 Choice, details.
5.  **CCL**: #3 Choice, details.
6.  **Gildan**: #4 Choice, details.
7.  **BestLabels**: #5 Choice, details.
8.  **Comparison**: Table.
9.  **FAQ**: Common questions.
