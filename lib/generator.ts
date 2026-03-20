function detectUsers(input: string) {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes("student")) return "Students";
  if (lowerInput.includes("driver")) return "Drivers";
  if (lowerInput.includes("parking")) return "Urban commuters";
  return "General users";
}

function detectSeverity(input: string) {
  const lowerInput = input.toLowerCase();
  if (lowerInput.includes("always") || lowerInput.includes("impossible")) return 9;
  if (lowerInput.includes("often")) return 7;
  return 5;
}

function generateTitle(input: string) {
  const lower = input.toLowerCase();
  
  // Theme-Based Titles
  if (lower.includes("parking") || lower.includes("traffic") || lower.includes("commute")) return "ParkFlow OS";
  if (lower.includes("attendance") || lower.includes("student") || lower.includes("school")) return "EduSync Platform";
  if (lower.includes("doctor") || lower.includes("health") || lower.includes("hospital")) return "CareBridge AI";
  if (lower.includes("money") || lower.includes("finance") || lower.includes("budget") || lower.includes("pay")) return "FinGuard Systems";
  if (lower.includes("environment") || lower.includes("climate") || lower.includes("waste")) return "EcoTrack Global";
  if (lower.includes("food") || lower.includes("restaurant") || lower.includes("hunger")) return "FoodShare Network";
  if (lower.includes("job") || lower.includes("interview") || lower.includes("work")) return "HireMatch Pro";

  // Action-Driven Titles
  if (lower.includes("slow") || lower.includes("time")) return "VelocityHub";
  if (lower.includes("cost") || lower.includes("expensive")) return "OptiValue Dashboard";
  if (lower.includes("hard") || lower.includes("complex") || lower.includes("confusing")) return "SimpliFlow OS";

  // Fallback Dynamic Hackathon Title Extractor
  const skipWords = ['this', 'that', 'with', 'when', 'hate', 'like', 'really', 'just', 'have', 'need', 'want'];
  const words = input.split(' ').filter(w => w.length > 3 && !skipWords.includes(w.toLowerCase()));
  
  if (words.length > 0) {
    const core = words[0].replace(/[^a-zA-Z]/g, '');
    if (core.length >= 3) {
      const formatted = core.charAt(0).toUpperCase() + core.slice(1).toLowerCase();
      return `Project ${formatted}X`;
    }
  }

  return "Project Nexus";
}

export function generateProblem(input: string) {
  return {
    title: generateTitle(input),
    problem: input,
    users: detectUsers(input),
    severity: detectSeverity(input)
  };
}
