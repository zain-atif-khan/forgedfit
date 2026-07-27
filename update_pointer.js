const fs = require('fs');

let data = fs.readFileSync('src/components/BorderGlow.tsx', 'utf8');

data = data.replace(
`  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const edge = getEdgeProximity(card, x, y);
    const angle = getCursorAngle(card, x, y);

    card.style.setProperty('--edge-proximity', \`\${(edge * 100).toFixed(3)}\`);
    card.style.setProperty('--cursor-angle', \`\${angle.toFixed(3)}deg\`);
  }, [getEdgeProximity, getCursorAngle]);`,
`  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const edge = getEdgeProximity(card, x, y);
      const angle = getCursorAngle(card, x, y);

      card.style.setProperty('--edge-proximity', \`\${(edge * 100).toFixed(3)}\`);
      card.style.setProperty('--cursor-angle', \`\${angle.toFixed(3)}deg\`);
    });
  }, [getEdgeProximity, getCursorAngle]);
  
  const handlePointerLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    requestAnimationFrame(() => {
      card.style.setProperty('--edge-proximity', '0');
    });
  }, []);`
);

fs.writeFileSync('src/components/BorderGlow.tsx', data);
