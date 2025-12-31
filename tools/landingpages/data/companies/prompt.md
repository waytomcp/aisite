
```

---

### MODULE: HERO SECTION GENERATION
**Role:** Senior Lighting Tech Editor & Product Analyst
**Task:** Write the "hero" section for a product comparison guide.

**Task1:**### MODULE: MARKET ANALYSIS & VARIABLE EXTRACTION
**Role:** Senior Market Researcher & Product Strategist
**Task:** Analyze the company profile and competitor data to define key input variables for a product comparison guide.

**Input Context:**
- **key words:** LED Bar with Pixel Control
- **Company Data:** `xmlite.md` (Focus on "Primary Customer Segments" and "Products and Solutions")
- **Competitor Data:** `xmlite_competitor.json` (Focus on major brands in the "competitors" lists)

**Output Rules:**
1.  **Target Keyword:** Define as "The Best [Product Category] [Feature]" (e.g., "The Best LED Bar with Pixel Control 16 Zones").
2.  **Top Competitors:** Identify 4 major industry competitors listed in the data (e.g., ROBE, Clay Paky, Goldensea, PR Lighting).
3.  **Evaluation Criteria:** Select 5 critical technical features for this product type (e.g., Pixel Mapping, Brightness, Control Protocols).
4.  **Target Audience:** Extract 4 primary customer segments from the company profile.
5.  **Use Cases:** Identify 5 typical application scenarios for this product.

**Output Format:**
Print the result strictly in this Markdown format:
```markdown
**Task1:**

**Input Variables:**
- **Target Keyword:** "[Target Keyword]"
- **Top Competitors:** [[Competitor 1], [Competitor 2], [Competitor 3], [Competitor 4]]
- **Evaluation Criteria:** [[Criterion 1], [Criterion 2], [Criterion 3], [Criterion 4], [Criterion 5]]
- **Target Audience:** [[Audience 1], [Audience 2], [Audience 3], [Audience 4]]
- **Use Cases:** [[Case 1], [Case 2], [Case 3], [Case 4], [Case 5]]

**Input Variables:**
- **Target Keyword:** "The Best LED Bar with Pixel Control 16 Zones"
- **Top Competitors:** [ROBE, Clay Paky, Goldensea, PR Lighting]
- **Evaluation Criteria:** [Pixel Mapping Capabilities, Brightness & Color Quality, Control Protocols (DMX/Art-Net), Build Quality & Reliability, Price-to-Performance Ratio]
- **Target Audience:** [Professional Lighting Rental Companies, Stage Designers, TV & Broadcast Studios, Event Production Teams]
- **Use Cases:** [Concert Touring, TV Studio Effects, Stage Backgrounds, Architectural Lighting, Nightclub Installations]

**Output Rules (JSON Format):**
1.  **"title"**: Create a concise, high-impact title containing the `Target Keyword`.
2.  **"description"**: Write a strictly structured paragraph (100-120 words) following this **5-Sentence Formula**:
    * **Sentence 1 (Authority):** Start with "Our definitive guide to [Target Keyword]."
    * **Sentence 2 (Methodology):** "We evaluated top manufacturers on [Insert 4-5 Evaluation Criteria]."
    * **Sentence 3 (Audience):** "These companies deliver the best solutions for [Insert Target Audience] seeking [Key Benefit]."
    * **Sentence 4 (The Winners):** "Our top 5 recommendations are [Insert Top Competitors], each offering the best performance for professional applications."
    * **Sentence 5 (Closing/CTA):** "Find the perfect [Short Product Name] for your needs, whether for [Insert Use Cases]. We provide in-depth reviews to help you choose the best fixture for creating stunning visual displays."
3.  **"buttonText"**: "Compare [Product Category]"

**Tone:**
- Authoritative, professional, objective, and industry-focused.