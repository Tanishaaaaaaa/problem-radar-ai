import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function addToNotion(data: any) {
  return await notion.pages.create({
    parent: {
      database_id: process.env.NOTION_DATABASE_ID!,
    },
    properties: {
      Name: {
        title: [
          {
            text: {
              content: data.title,
            },
          },
        ],
      },
      "Problem Statement": {
        rich_text: [
          {
            text: {
              content: data.problem,
            },
          },
        ],
      },
      "Target Users": {
        rich_text: [
          {
            text: {
              content: data.users,
            },
          },
        ],
      },
      "Severity": {
        number: data.severity
      },
      "Tech Stack": {
        rich_text: [
          { text: { content: data.techStack } }
        ]
      },
      "Pitch": {
        rich_text: [
          { text: { content: data.pitch } }
        ]
      },
      "Solution Idea": {
        rich_text: [
          { text: { content: data.solution || "" } }
        ]
      }
    },
    children: [
      {
        object: 'block',
        type: 'heading_2',
        heading_2: { rich_text: [{ type: 'text', text: { content: "Hackathon Execution Plan" } }] }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: `Monetization Strategy: ${data.businessModel}` }, annotations: { bold: true } }] }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: `Required Team: ${data.team}` }, annotations: { bold: true } }] }
      },
      {
        object: 'block',
        type: 'paragraph',
        paragraph: { rich_text: [{ type: 'text', text: { content: `Market Viability Score: ${data.viabilityScore}%` }, annotations: { bold: true, color: "green" } }] }
      },
      {
        object: 'block',
        type: 'divider',
        divider: {}
      },
      {
        object: 'block',
        type: 'heading_2',
        heading_2: { rich_text: [{ type: 'text', text: { content: "Sprint 1: Kanban Setup" } }] }
      },
      ...(data.sprintTasks as string[]).map((task) => ({
        object: 'block' as const,
        type: 'to_do' as const,
        to_do: { rich_text: [{ type: 'text' as const, text: { content: task } }], checked: false }
      }))
    ]
  });
}