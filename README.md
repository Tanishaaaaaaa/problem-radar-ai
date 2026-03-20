# 🛰️ Problem Radar - Transforming Frustrations into Startups

**Problem Radar** is a powerful innovation engine designed to bridge the gap between real-world pain points and actionable technical solutions. It empowers hackers and entrepreneurs to instantly validate ideas, draft technical specifications, and generate a clear roadmap for execution—all within a seamless, premium interface synced directly to Notion.

---

## 🚀 Key Features

### 📡 The Radar Visualization
A high-impact, real-time animation that brings the "Problem Radar" concept to life. It serves as your digital sentinel, constantly scanning for opportunities in every frustration.

### 🧠 Intelligent Hackathon Engine
Built with a sophisticated local logic engine, Problem Radar performs deep analysis on your inputs to generate:
- **Dynamic Startup Titles**: Unique, catchy branding for your project.
- **Problem & Solution Synthesis**: Clearly defined problem statements and action-driven solutions.
- **Target Audience Identification**: Precision mapping of who your solution serves.
- **Tech Stack Recommendations**: Tailored technology profiles optimized for fast iteration.
- **Winning Elevator Pitches**: Compelling narratives designed to wow judges and investors.

### 📈 Execution & Viability Dashboard
Go beyond the idea with data-driven insights:
- **Market Viability Score**: A calculated metric to gauge potential impact and adoption.
- **Business Models**: Monetization strategies specific to your industry and audience.
- **Team Requirements**: Suggested team compositions based on the complexity of your tech stack.

### 📋 The Notion Superpower
Full Notion SDK integration that transforms your workspace:
- **Auto-Syncing**: Every project is instantly saved to your Notion database.
- **Dynamic Content**: Pages are pre-populated with headings, strategy paragraphs, and market scores.
- **Interactive Kanban Board**: Automatically generates a Sprint 1 checklist inside the Notion page, providing an immediate roadmap for your development team.

---

## 🛠️ Technical Stack

- **Frontend**: Next.js (App Router), React, Tailwind CSS.
- **Styling**: Premium Glassmorphism with customized CSS animations.
- **Backend API**: Next.js Edge Routes.
- **Database/Workspace**: Notion SDK (@notionhq/client).
- **Core Engine engine**: Local Logic System (No-AI dependency for speed and privacy).

---

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Tanishaaaaaaa/NotionAIChallenge.git
   ```

2. **Configure Environment Variables**:
   Create a `.env.local` file with the following keys:
   - `NOTION_API_KEY`: Your Notion Integration Token.
   - `NOTION_DATABASE_ID`: The ID of your target Notion database.

3. **Database Columns**:
   Ensure your Notion database includes these properties:
   - `Problem Title` (Title)
   - `Problem Statement` (Rich Text)
   - `Target Users` (Rich Text)
   - `Severity` (Number)
   - `Tech Stack` (Rich Text)
   - `Pitch` (Rich Text)
   - `Solution Idea` (Rich Text)

4. **Run the Application**:
   ```bash
   npm run dev
   ```

---

## 🏆 Hackathon Winning Worthy
Problem Radar is built to impress. With its stunning aesthetics, integrated execution tools, and seamless Notion workflow, it demonstrates not just a technical solution, but a viable vision for a startup-building ecosystem.
