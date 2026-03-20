function suggestTechStack(problem: string) {
  const lower = problem.toLowerCase();
  if (lower.includes("parking")) return "React, Node.js, Google Maps API, Firebase";
  if (lower.includes("attendance")) return "Next.js, Face Recognition API, MongoDB";
  return "Next.js, Node.js, PostgreSQL";
}

function generatePitch(problem: string) {
  const lower = problem.toLowerCase();
  
  if (lower.includes("parking") || lower.includes("traffic") || lower.includes("commute")) {
    return `Urban mobility is broken. We are revolutionizing how people navigate by addressing: '${problem}'. Our platform eliminates wasted time and reduces emissions through intelligent tracking, getting city-dwellers back to what matters most.`;
  }
  
  if (lower.includes("attendance") || lower.includes("student") || lower.includes("class") || lower.includes("school")) {
    return `Education infrastructure relies on outdated administrative busywork. We're tackling: '${problem}'. By automating the friction out of the classroom, we empower educators to focus 100% on teaching and students to focus on learning.`;
  }
  
  if (lower.includes("doctor") || lower.includes("health") || lower.includes("hospital") || lower.includes("medical")) {
    return `Healthcare should be accessible and patient-first. Currently: '${problem}'. Our solution bridges the gap between care providers and patients through immediate, actionable insights, saving time and improving outcomes.`;
  }

  if (lower.includes("money") || lower.includes("finance") || lower.includes("budget") || lower.includes("pay") || lower.includes("expensive")) {
    return `Financial anxiety stems from a lack of clear tracking and tooling. The core issue: '${problem}'. We've built an intuitive platform that restores financial control to the user, driving economic empowerment through automation.`;
  }
  
  if (lower.includes("environment") || lower.includes("climate") || lower.includes("waste") || lower.includes("recycle")) {
    return `Climate action requires scalable, community-driven solutions. The problem we face: '${problem}'. Our platform incentivizes eco-friendly habits and transforms environmental responsibility into an effortless, rewarding daily experience.`;
  }

  // Dynamic Fallback Matrix
  const actionVerb = lower.includes("slow") || lower.includes("time") ? "accelerating workflows" : 
                    lower.includes("cost") || lower.includes("expensive") ? "driving down costs" : 
                    lower.includes("hard") || lower.includes("complex") || lower.includes("confusing") ? "radically simplifying operations" : 
                    "creating seamless digital experiences";

  return `Every single day, users are frustrated because ${problem}. We are ${actionVerb} with an elegant, highly scalable platform that completely eliminates this friction. By prioritizing user-centric design and robust automation, we aren't just solving a problem—we are setting a new standard for the industry.`;
}

function generateInnovation(problem: string) {
  return "Our innovation lies in simplifying this problem using automation and scalable systems.";
}

function generateSolution(problem: string) {
  const lower = problem.toLowerCase();
  
  if (lower.includes("parking") || lower.includes("traffic") || lower.includes("commute")) {
    return "Develop a decentralized mobility optimization app utilizing real-time geospatial data to intelligently route users away from congestion and locate available parking instantly.";
  }
  
  if (lower.includes("attendance") || lower.includes("student") || lower.includes("class") || lower.includes("school")) {
    return "Design an automated smart-classroom ecosystem that removes administrative burdens like attendance tracking while providing personalized learning metrics directly to educators.";
  }
  
  if (lower.includes("doctor") || lower.includes("health") || lower.includes("hospital") || lower.includes("medical")) {
    return "Architect a secure, HIPAA-compliant patient management dashboard that standardizes electronic health records and accelerates the triage queue using predictive analysis.";
  }

  if (lower.includes("money") || lower.includes("finance") || lower.includes("budget") || lower.includes("pay") || lower.includes("expensive")) {
    return "Create an intuitive fintech aggregator that leverages financial APIs to automatically categorize spending, track budgets, and actively alert users to prevent overages.";
  }
  
  if (lower.includes("environment") || lower.includes("climate") || lower.includes("waste") || lower.includes("recycle")) {
    return "Deploy an IoT-driven waste tracking platform featuring gamified community rewards, deliberately designed to measure and drastically reduce local carbon footprints.";
  }

  if (lower.includes("food") || lower.includes("restaurant") || lower.includes("hunger")) {
    return "Build a dynamic inventory-sharing network that instantly matches restaurants holding nearing-expiration food with local shelters to completely eliminate food waste.";
  }
  
  if (lower.includes("job") || lower.includes("interview") || lower.includes("work")) {
    return "Construct an automated hiring accelerator that aligns individual skillsets with live hiring trends, preparing candidates dynamically with tailored mock evaluations.";
  }

  // Action-Driven Fallback Matcher
  if (lower.includes("slow") || lower.includes("time")) {
    return "Build a high-performance workflow orchestrator that eliminates process bottlenecks by auto-triggering repetitive tasks and analyzing execution times.";
  }
  if (lower.includes("cost") || lower.includes("expensive")) {
    return "Create a unified analytics dashboard that identifies systemic inefficiencies and actively runs automated scripts to recommend cost-cutting measures.";
  }
  if (lower.includes("hard") || lower.includes("complex") || lower.includes("confusing")) {
    return "Design an incredibly intuitive, low-code progressive web app interface that completely bridges the gap between complex legacy backend systems and everyday users.";
  }

  // Ultimate Universal Fallback
  return "Develop a scalable, multi-tenant web platform engineered specifically to resolve this friction point through powerful predictive automation and a radically simplified user experience.";
}

function generateBusinessModel(problem: string) {
  const lower = problem.toLowerCase();
  if (lower.includes("doctor") || lower.includes("hospital") || lower.includes("health")) return "B2B Enterprise Licensing (Hospitals/Clinics)";
  if (lower.includes("parking") || lower.includes("traffic") || lower.includes("commute")) return "Freemium B2C App + Municipal Data Subscriptions";
  if (lower.includes("attendance") || lower.includes("student") || lower.includes("school")) return "B2B SaaS ($5/user/month for Schools)";
  if (lower.includes("money") || lower.includes("finance")) return "Transaction-Fee Marketplace (1.5% per tx) + Premium Analytics";
  if (lower.includes("food") || lower.includes("restaurant") || lower.includes("waste") || lower.includes("climate")) return "B2B Subscription for Resource Optimization";
  if (lower.includes("cost") || lower.includes("expensive")) return "Performance-Based Revenue (10% of generated savings)";
  return "Freemium B2C Model with $9.99/mo Pro Tier";
}

function generateTeamRequirements(techStack: string) {
  const stack = techStack.toLowerCase();
  let team = "1x Full-Stack Developer, 1x UX/UI Designer";
  if (stack.includes("tensorflow") || stack.includes("ai") || stack.includes("face recognition")) team += ", 1x Data Scientist";
  if (stack.includes("iot") || stack.includes("sensors")) team += ", 1x Hardware Engineer";
  if (stack.includes("mobile") || stack.includes("react native")) team += ", 1x Mobile Developer";
  if (stack.includes("blockchain")) team += ", 1x Solidity Engineer";
  return team;
}

function calculateViabilityScore(severity: number, users: string) {
  let base = severity * 8 + 15;
  if (users.includes("Urban commuters") || users.includes("Students") || users.includes("Drivers")) base += 5;
  return Math.min(99, Math.round(base)); 
}

function generateSprintTasks(techStack: string) {
  const primaryFramework = techStack.split(',')[0].trim();
  return [
    `Initialize ${primaryFramework} repository and configure environment variables.`,
    "Design robust database schema and wireframe core user execution flow.",
    "Deploy staging environment to Vercel/Netlify for immediate feedback loops.",
    "Build core logic APIs and integrate defined third-party cloud services.",
    "Draft the final hackathon slide deck and record a flawless 2-minute demo video."
  ];
}

export function generateHackathonPlan(problem: string, severity: number, users: string) {
  const techStack = suggestTechStack(problem);
  return {
    techStack,
    pitch: generatePitch(problem),
    innovation: generateInnovation(problem),
    solution: generateSolution(problem),
    businessModel: generateBusinessModel(problem),
    team: generateTeamRequirements(techStack),
    viabilityScore: calculateViabilityScore(severity, users),
    sprintTasks: generateSprintTasks(techStack)
  };
}
