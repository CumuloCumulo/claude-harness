"use client";

import React, { useEffect, useRef, useState } from "react";

interface MermaidDiagramProps {
  chart: string;
}

export function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const idRef = useRef(`mermaid-${Math.random().toString(36).slice(2, 10)}`);

  useEffect(() => {
    let cancelled = false;

    async function render() {
      const mermaid = (await import("mermaid")).default;
      mermaid.initialize({
        startOnLoad: false,
        theme: "dark",
        themeVariables: {
          darkMode: true,
          background: "transparent",
          primaryColor: "rgba(245,158,11,0.15)",
          primaryTextColor: "#e5e5e5",
          primaryBorderColor: "rgba(245,158,11,0.4)",
          lineColor: "rgba(255,255,255,0.3)",
          secondaryColor: "rgba(96,165,250,0.1)",
          tertiaryColor: "rgba(52,211,153,0.1)",
          noteBkgColor: "rgba(245,158,11,0.08)",
          noteTextColor: "#e5e5e5",
          noteBorderColor: "rgba(245,158,11,0.3)",
          actorTextColor: "#e5e5e5",
          actorBorder: "rgba(245,158,11,0.4)",
          actorBkg: "rgba(245,158,11,0.08)",
          signalColor: "#e5e5e5",
          signalTextColor: "#e5e5e5",
          labelBoxBkgColor: "rgba(245,158,11,0.08)",
          labelBoxBorderColor: "rgba(245,158,11,0.3)",
          labelTextColor: "#e5e5e5",
          loopTextColor: "#e5e5e5",
          activationBorderColor: "rgba(245,158,11,0.4)",
          activationBkgColor: "rgba(245,158,11,0.1)",
          sequenceNumberColor: "#111",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "13px",
        },
      });

      try {
        const { svg: rendered } = await mermaid.render(idRef.current, chart.trim());
        if (!cancelled) setSvg(rendered);
      } catch {
        if (!cancelled) setSvg("");
      }
    }

    render();
    return () => { cancelled = true; };
  }, [chart]);

  if (!svg) {
    return (
      <div className="diagram-block">
        <pre
          style={{
            margin: 0,
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--text-secondary)",
            whiteSpace: "pre-wrap",
            overflowX: "auto",
          }}
        >
          {chart}
        </pre>
      </div>
    );
  }

  return (
    <div className="diagram-block">
      <div
        ref={containerRef}
        className="mermaid-native"
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    </div>
  );
}
