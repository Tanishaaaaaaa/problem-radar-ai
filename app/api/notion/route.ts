import { NextResponse } from "next/server";
import { addToNotion } from "../../../lib/notion";
import { generateProblem } from "../../../lib/generator";
import { generateHackathonPlan } from "../../../lib/hackathon";

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const structured = generateProblem(body.problem);
    const hackathon = generateHackathonPlan(structured.problem, structured.severity, structured.users);
    
    const finalData = {
      ...structured,
      techStack: hackathon.techStack,
      pitch: hackathon.pitch,
      solution: hackathon.solution,
      businessModel: hackathon.businessModel,
      team: hackathon.team,
      viabilityScore: hackathon.viabilityScore,
      sprintTasks: hackathon.sprintTasks
    };

    await addToNotion(finalData);
    
    return NextResponse.json({ success: true, data: finalData });
  } catch (error) {
    console.error("Notion API Error:", error);
    const msg = error instanceof Error ? error.message : "Failed to add to Notion";
    return NextResponse.json({ success: false, error: msg });
  }
}