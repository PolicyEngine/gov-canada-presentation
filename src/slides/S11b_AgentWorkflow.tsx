import { useState } from "react";
import SlideLayout from "../components/SlideLayout";

const agents = {
  "issue-manager": { x: 65, y: 290, r: 45, icon: "#icon-clipboard", label: "issue-manager", labelY: 355 },
  "doc-collector": { x: 180, y: 290, r: 50, icon: "#icon-books", label: ["document-", "collector"], labelY: 365 },
  "param-architect": { x: 360, y: 100, r: 50, icon: "#icon-gear", label: "parameter-architect", labelY: 35 },
  "test-creator": { x: 360, y: 290, r: 50, icon: "#icon-flask", label: "test-creator", labelY: 365 },
  "rules-engineer": { x: 360, y: 480, r: 50, icon: "#icon-lambda", label: "rules-engineer", labelY: 550 },
  "edge-case-gen": { x: 510, y: 370, r: 44, icon: "#icon-lightning", label: "edge-case-gen", labelY: 430 },
  "impl-validator": { x: 720, y: 100, r: 58, icon: "#icon-search", label: "impl-validator", labelY: 35 },
  "ref-validator": { x: 690, y: 510, r: 44, icon: "#icon-link", label: "reference-validator", labelY: 572 },
  "ci-fixer": { x: 850, y: 290, r: 58, icon: "#icon-wrench", label: "ci-fixer", labelY: 370 },
  "pr-pusher": { x: 960, y: 290, r: 32, icon: "#icon-upload", label: "pr-pusher", labelY: 338 },
  "program-reviewer": { x: 1040, y: 290, r: 32, icon: "#icon-book", label: ["program-", "reviewer"], labelY: 338 },
  "draft-pr": { x: 1120, y: 290, r: 32, icon: "#icon-document", label: "Draft PR", labelY: 338 },
};

const skills = [
  { id: "variable", label: "variable", x: 200, agents: ["doc-collector", "param-architect", "rules-engineer"] },
  { id: "testing", label: "testing", x: 340, agents: ["test-creator", "edge-case-gen", "impl-validator"] },
  { id: "code-style", label: "code-style", x: 480, agents: ["param-architect", "rules-engineer", "ci-fixer"] },
  { id: "parameter", label: "parameter", x: 620, agents: ["param-architect", "ref-validator"] },
  { id: "vectorize", label: "vectorize", x: 760, agents: ["impl-validator", "ci-fixer"] },
  { id: "review", label: "review", x: 900, agents: ["program-reviewer", "ci-fixer"] },
];

const skillY = 620;
const skillWidth = 90;
const skillHeight = 36;

const agentConnections = [
  ["issue-manager", "doc-collector"],
  ["doc-collector", "param-architect"],
  ["doc-collector", "test-creator"],
  ["doc-collector", "rules-engineer"],
  ["test-creator", "edge-case-gen"],
  ["rules-engineer", "edge-case-gen"],
  ["test-creator", "impl-validator"],
  ["test-creator", "ci-fixer"],
  ["param-architect", "impl-validator"],
  ["param-architect", "ci-fixer"],
  ["rules-engineer", "ci-fixer"],
  ["param-architect", "ref-validator"],
  ["rules-engineer", "ref-validator"],
  ["impl-validator", "ci-fixer"],
  ["ref-validator", "ci-fixer"],
  ["edge-case-gen", "ci-fixer"],
  ["ci-fixer", "pr-pusher"],
  ["pr-pusher", "program-reviewer"],
  ["program-reviewer", "draft-pr"],
];

const IconDefs = () => (
  <defs>
    <g id="icon-clipboard">
      <rect x="-12" y="-16" width="24" height="32" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="-6" y="-20" width="12" height="6" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
      <line x1="-7" y1="-4" x2="7" y2="-4" stroke="currentColor" strokeWidth="2"/>
      <line x1="-7" y1="3" x2="7" y2="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="-7" y1="10" x2="4" y2="10" stroke="currentColor" strokeWidth="2"/>
    </g>
    <g id="icon-books">
      <rect x="-14" y="-8" width="8" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(-10)"/>
      <rect x="-4" y="-10" width="8" height="24" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
      <rect x="6" y="-8" width="8" height="22" rx="1" fill="none" stroke="currentColor" strokeWidth="2" transform="rotate(10)"/>
    </g>
    <g id="icon-gear">
      <circle cx="0" cy="0" r="7" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M0,-16 L3,-12 L3,-10 L-3,-10 L-3,-12 Z" fill="currentColor"/>
      <path d="M0,16 L3,12 L3,10 L-3,10 L-3,12 Z" fill="currentColor"/>
      <path d="M-16,0 L-12,3 L-10,3 L-10,-3 L-12,-3 Z" fill="currentColor"/>
      <path d="M16,0 L12,3 L10,3 L10,-3 L12,-3 Z" fill="currentColor"/>
      <path d="M-11,-11 L-9,-8 L-7,-9 L-9,-12 Z" fill="currentColor"/>
      <path d="M11,-11 L9,-8 L7,-9 L9,-12 Z" fill="currentColor"/>
      <path d="M-11,11 L-9,8 L-7,9 L-9,12 Z" fill="currentColor"/>
      <path d="M11,11 L9,8 L7,9 L9,12 Z" fill="currentColor"/>
    </g>
    <g id="icon-flask">
      <path d="M-5,-16 L-5,-4 L-14,14 L14,14 L5,-4 L5,-16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <line x1="-7" y1="-16" x2="7" y2="-16" stroke="currentColor" strokeWidth="2"/>
      <line x1="-9" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="2" strokeDasharray="3 2"/>
    </g>
    <g id="icon-lambda">
      <text x="0" y="8" fontFamily="Georgia, serif" fontSize="40" fontWeight="400" fill="currentColor" textAnchor="middle">λ</text>
    </g>
    <g id="icon-lightning">
      <polygon points="2,-16 -8,2 -1,2 -4,16 8,-2 1,-2" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinejoin="round"/>
    </g>
    <g id="icon-search">
      <circle cx="-3" cy="-3" r="12" fill="none" stroke="currentColor" strokeWidth="2.5"/>
      <line x1="6" y1="6" x2="16" y2="16" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    </g>
    <g id="icon-link">
      <ellipse cx="-6" cy="0" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-45)"/>
      <ellipse cx="6" cy="0" rx="8" ry="12" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-45)"/>
    </g>
    <g id="icon-wrench">
      <path d="M-6,-16 C-12,-10 -12,-2 -6,4 L8,18 L14,12 L0,-2 C6,-8 6,-14 0,-16 L-2,-10 L-6,-10 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </g>
    <g id="icon-upload">
      <line x1="0" y1="12" x2="0" y2="-8" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
      <polyline points="-8,-2 0,-12 8,-2" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="-12" y1="16" x2="12" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </g>
    <g id="icon-book">
      <path d="M0,-12 L0,14" stroke="currentColor" strokeWidth="2"/>
      <path d="M0,-12 C-6,-14 -12,-12 -16,-8 L-16,12 C-12,8 -6,10 0,14" fill="none" stroke="currentColor" strokeWidth="2"/>
      <path d="M0,-12 C6,-14 12,-12 16,-8 L16,12 C12,8 6,10 0,14" fill="none" stroke="currentColor" strokeWidth="2"/>
    </g>
    <g id="icon-document">
      <path d="M-10,-16 L6,-16 L14,-8 L14,16 L-10,16 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M6,-16 L6,-8 L14,-8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <line x1="-5" y1="0" x2="9" y2="0" stroke="currentColor" strokeWidth="2"/>
      <line x1="-5" y1="6" x2="9" y2="6" stroke="currentColor" strokeWidth="2"/>
    </g>
  </defs>
);

function FlowDiagram6() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <div style={{ background: "#f9f8f6", borderRadius: 12, padding: "8px 12px" }}>
      <style>{`
        @keyframes rotateLoop {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -72; }
        }
      `}</style>
      <svg viewBox="0 0 1160 700" style={{ display: "block", width: "100%", maxHeight: "calc(100vh - 280px)" }}>
        <IconDefs />

        {/* Loop indicator ellipse */}
        <ellipse
          cx="540" cy="290" rx="320" ry="250"
          fill="rgba(13, 115, 119, 0.03)" stroke="#0d7377"
          strokeWidth="2.5" strokeDasharray="12 6"
          style={{ opacity: hoveredSkill ? 0.15 : 0.6, transition: "opacity 0.2s ease", animation: "rotateLoop 6s linear infinite" }}
        />
        <text
          x="540" y="560" textAnchor="middle" fontFamily="monospace" fontSize="12"
          fill="#4a6363" fontStyle="italic"
          style={{ opacity: hoveredSkill ? 0.3 : 1, transition: "opacity 0.2s ease" }}
        >
          iterate until tests pass
        </text>

        {/* Agent-to-agent connections */}
        {agentConnections.map(([from, to], i) => {
          const a1 = agents[from as keyof typeof agents];
          const a2 = agents[to as keyof typeof agents];
          return (
            <line
              key={i}
              x1={a1.x} y1={a1.y} x2={a2.x} y2={a2.y}
              stroke="#4a6363" strokeWidth="1.5" strokeDasharray="5 3" fill="none"
              style={{ opacity: hoveredSkill === null ? 0.5 : 0.1, transition: "opacity 0.2s ease" }}
            />
          );
        })}

        {/* Skill-to-agent lines */}
        {skills.map((skill) =>
          skill.agents.map((agentId) => {
            const agent = agents[agentId as keyof typeof agents];
            const isHighlighted = hoveredSkill === skill.id;
            return (
              <line
                key={`${skill.id}-${agentId}`}
                x1={skill.x} y1={skillY} x2={agent.x} y2={agent.y + agent.r}
                stroke="#0d7377"
                strokeWidth={isHighlighted ? 2.5 : 1}
                strokeDasharray={isHighlighted ? "none" : "4 3"}
                style={{ opacity: hoveredSkill === null ? 0.4 : isHighlighted ? 1 : 0.1, transition: "all 0.2s ease" }}
              />
            );
          })
        )}

        {/* Agent nodes */}
        {Object.entries(agents).map(([id, agent]) => {
          const isConnected = hoveredSkill
            ? skills.find(s => s.id === hoveredSkill)?.agents.includes(id)
            : false;
          return (
            <g key={id}>
              <circle
                cx={agent.x} cy={agent.y} r={agent.r}
                fill="#ffffff" stroke="#0d7377" strokeWidth="2"
                style={{ opacity: hoveredSkill === null ? 1 : isConnected ? 1 : 0.4, transition: "opacity 0.2s ease" }}
              />
              <g
                transform={`translate(${agent.x},${agent.y + (id === "rules-engineer" ? 8 : id === "doc-collector" ? -8 : 0)}) scale(${agent.r / 38})`}
                style={{ color: "#4a6363", pointerEvents: "none", opacity: hoveredSkill === null ? 1 : isConnected ? 1 : 0.4, transition: "opacity 0.2s ease" }}
              >
                <use href={agent.icon} />
              </g>
              {Array.isArray(agent.label) ? (
                agent.label.map((line, i) => (
                  <text
                    key={i} x={agent.x} y={agent.labelY + i * 16}
                    textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#4a6363"
                    style={{ opacity: hoveredSkill === null ? 1 : isConnected ? 1 : 0.4, transition: "opacity 0.2s ease" }}
                  >
                    {line}
                  </text>
                ))
              ) : (
                <text
                  x={agent.x} y={agent.labelY}
                  textAnchor="middle" fontFamily="monospace" fontSize="11" fill="#4a6363"
                  style={{ opacity: hoveredSkill === null ? 1 : isConnected ? 1 : 0.4, transition: "opacity 0.2s ease" }}
                >
                  {agent.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Skills row */}
        <text x="70" y={skillY + skillHeight / 2 + 5} fontFamily="monospace" fontSize="11" fill="#4a6363" fontWeight="600">
          Skills
        </text>

        {skills.map((skill) => {
          const isHovered = hoveredSkill === skill.id;
          return (
            <g
              key={skill.id}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredSkill(skill.id)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <rect
                x={skill.x - skillWidth / 2} y={skillY} width={skillWidth} height={skillHeight}
                rx="5"
                fill={isHovered ? "#0d7377" : "rgba(13, 115, 119, 0.1)"}
                stroke="#0d7377" strokeWidth={isHovered ? 2 : 1.5}
                style={{ transition: "all 0.2s ease" }}
              />
              <text
                x={skill.x} y={skillY + skillHeight / 2 + 5}
                textAnchor="middle" fontFamily="monospace" fontSize="12"
                fill={isHovered ? "#ffffff" : "#0d7377"}
                fontWeight={isHovered ? 600 : 400}
                style={{ transition: "all 0.2s ease", pointerEvents: "none" }}
              >
                {skill.label}
              </text>
            </g>
          );
        })}

        <text x="1000" y={skillY + skillHeight / 2 + 5} textAnchor="middle" fontFamily="monospace" fontSize="16" fill="#0d7377">...</text>

        <text x="580" y="685" textAnchor="middle" fontFamily="monospace" fontSize="12" fill="#4a6363" fontStyle="italic">
          Hover over a skill to see which agents use it
        </text>
      </svg>
    </div>
  );
}

export default function S11b_AgentWorkflow() {
  return (
    <SlideLayout variant="white" id="slide-11b">
      <div className="space-y-2">
        <div>
          <h2 className="text-4xl font-bold text-pe-dark leading-tight tracking-tight">
            AI-powered policy encoding
          </h2>
          <div className="w-32 accent-bar mt-3" />
          <p className="text-base text-gray-600 mt-2 max-w-3xl">
            Multi-agent workflow: 12 specialized agents collaborate to turn statutes into tested, validated code.
          </p>
        </div>
        <FlowDiagram6 />
      </div>
    </SlideLayout>
  );
}
