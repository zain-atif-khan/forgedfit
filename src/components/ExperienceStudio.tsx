import React, { useState } from 'react';
import { useTheme, PALETTES, UI_STYLES, LIGHTING_PRESETS } from '../context/ThemeContext';
import { Sliders, X, Check, Sparkles, Palette, Layout, Sun, RefreshCw, Eye, CheckCircle2, Copy, Menu, Compass, ArrowUp } from 'lucide-react';
import { StaggeredMenu } from './StaggeredMenu';

interface ExperienceStudioProps {
  onSelectHeroScene?: (sceneIndex: number) => void;
}

export const ExperienceStudio: React.FC<ExperienceStudioProps> = () => {
  const {
    activePalette,
    activeUIStyle,
    activeLighting,
    customPalette,
    setPalette,
    setUIStyle,
    setLighting,
    updateCustomColors,
    isStudioOpen,
    setIsStudioOpen
  } = useTheme();

  const [copied, setCopied] = useState(false);

  const handleCopyPreset = () => {
    const presetText = `Forge Fit Sanctuary Customizer Configuration:
• Theme Palette: ${activePalette.name} (${activePalette.bgMain} / ${activePalette.accentGold})
• UI Design Archetype: ${activeUIStyle.name}
• Atmospheric Lighting: ${activeLighting.name}`;
    navigator.clipboard.writeText(presetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      {/* Floating Trigger Button for UI Studio Customizer */}
      {!isStudioOpen && (
        <button
          onClick={() => setIsStudioOpen(true)}
          className="fixed bottom-6 right-6 z-[99990] flex items-center space-x-2.5 px-4 py-3 rounded-full shadow-[var(--shadow-lg)] border transition-all duration-300 hover:scale-105 active:scale-95 group"
          style={{
            backgroundColor: activePalette.bgCard,
            borderColor: activePalette.accentGold,
            color: activePalette.textPrimary,
            boxShadow: `0 10px 30px -5px ${activePalette.accentGold}33`,
          }}
          title="Open UI Studio Customizer"
        >
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:rotate-180 duration-500"
            style={{ backgroundColor: activePalette.accentGold, color: activePalette.bgMain }}
          >
            <Sparkles size={14} />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold" style={{ color: activePalette.accentGold }}>
              Interactive
            </span>
            <span className="text-xs font-serif font-semibold tracking-wider">
              UI Studio
            </span>
          </div>
        </button>
      )}

      {/* Slide-out Customizer Drawer Panel */}
      {isStudioOpen && (
        <div
          className="fixed inset-0 z-[99999] flex justify-end bg-[var(--overlay-bg)] backdrop-blur-md animate-in fade-in"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsStudioOpen(false);
            }
          }}
        >
          <div
            className="w-full max-w-md h-[100dvh] flex flex-col border-l shadow-[var(--shadow-lg)] overflow-hidden transition-all duration-300 relative z-[10000]"
            style={{
              backgroundColor: activePalette.bgCard,
              borderColor: activePalette.borderMain,
              color: activePalette.textPrimary,
            }}
          >
            {/* Drawer Header */}
            <div
              className="p-6 border-b flex items-center justify-between shrink-0"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
              }}
            >
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center border shadow-md"
                  style={{
                    borderColor: activePalette.accentGold,
                    backgroundColor: activePalette.bgPanel,
                  }}
                >
                  <Sparkles size={18} style={{ color: activePalette.accentGold }} />
                </div>
                <div>
                  <span
                    className="text-[10px] uppercase tracking-[0.25em] font-semibold block"
                    style={{ color: activePalette.accentGold }}
                  >
                    Real-time UI Customizer
                  </span>
                  <h3 className="font-serif text-xl font-medium">Experience Studio</h3>
                </div>
              </div>

              <button
                onClick={() => setIsStudioOpen(false)}
                className="w-9 h-9 rounded-full flex items-center justify-center border transition-colors hover:opacity-80"
                style={{
                  backgroundColor: activePalette.bgPanel,
                  borderColor: activePalette.borderMain,
                  color: activePalette.textPrimary,
                }}
                aria-label="Close UI Studio"
              >
                <X size={18} />
              </button>
            </div>

            {/* Quick Navigation Scroll Anchor Tabs */}
            <div
              className="px-6 py-2.5 border-b shrink-0 flex items-center space-x-2 overflow-x-auto no-scrollbar"
              style={{
                backgroundColor: activePalette.bgPanel,
                borderColor: activePalette.borderMain,
              }}
            >
              {[
                { label: 'Palettes', targetId: 'studio-sec-palettes', icon: Palette },
                { label: 'Color Builder', targetId: 'studio-sec-custom', icon: Sliders },
                { label: 'Typography', targetId: 'studio-sec-typography', icon: Layout },
                { label: 'Lighting', targetId: 'studio-sec-lighting', icon: Sun },
                { label: 'Navigation', targetId: 'studio-sec-navigation', icon: Compass },
              ].map((tab, idx) => {
                const TabIcon = tab.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      const el = document.getElementById(tab.targetId);
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border shrink-0 flex items-center space-x-1.5 transition-all hover:scale-105"
                    style={{
                      backgroundColor: activePalette.bgMain,
                      borderColor: activePalette.borderMain,
                      color: activePalette.textSecondary,
                    }}
                  >
                    <TabIcon size={12} style={{ color: activePalette.accentGold }} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Scrollable Customizer Content Body */}
            <div
              id="studio-scroll-body"
              className="p-6 overflow-y-auto flex-1 space-y-8 scroll-smooth touch-pan-y custom-scrollbar"
              style={{
                WebkitOverflowScrolling: 'touch',
              }}
            >
              
              {/* Live Preview Widget */}
              <div
                className="p-4 rounded-2xl border shadow-inner transition-all duration-300 space-y-3"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.accentGold,
                }}
              >
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest" style={{ color: activePalette.textSecondary }}>
                  <span className="flex items-center space-x-1">
                    <Eye size={12} className="text-amber-400" />
                    <span>Live Theme Preview</span>
                  </span>
                  <span className="font-mono text-amber-400">{activePalette.name.split('&')[0]}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-serif text-lg font-normal" style={{ color: activePalette.textPrimary }}>
                      Forge Fit Sanctuary
                    </h5>
                    <p className="text-[11px] font-light" style={{ color: activePalette.textSecondary }}>
                      Ultra-luxury biometric conditioning
                    </p>
                  </div>
                  <button
                    style={{
                      backgroundColor: activePalette.accentGold,
                      color: activePalette.bgMain,
                    }}
                    className="px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider shadow"
                  >
                    Button Sample
                  </button>
                </div>
              </div>

              {/* SECTION 1: Color Palette Selector */}
              <div id="studio-sec-palettes">
                <div className="flex items-center space-x-2 mb-2">
                  <Palette size={16} style={{ color: activePalette.accentGold }} />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    1. Luxury Color Palettes
                  </h4>
                </div>
                <p className="text-xs font-light mb-4" style={{ color: activePalette.textSecondary }}>
                  Choose between the original main UI, rich olive greens, pristine white ivory, and bespoke luxury tones.
                </p>

                <div className="space-y-3">
                  {PALETTES.map((palette) => {
                    const isSelected = palette.id === activePalette.id;
                    return (
                      <button
                        key={palette.id}
                        onClick={() => setPalette(palette.id)}
                        className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between group ${
                          isSelected ? 'shadow-[var(--shadow-md)] scale-[1.02] ring-1 ring-amber-400' : 'hover:opacity-90'
                        }`}
                        style={{
                          backgroundColor: isSelected ? activePalette.bgPanel : activePalette.bgMain,
                          borderColor: isSelected ? activePalette.accentGold : activePalette.borderMain,
                        }}
                      >
                        <div className="space-y-1 pr-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-semibold" style={{ color: isSelected ? activePalette.textPrimary : palette.textPrimary }}>
                              {palette.name}
                            </span>
                            {isSelected && (
                              <span
                                className="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                                style={{
                                  backgroundColor: palette.accentGold,
                                  color: palette.bgMain,
                                }}
                              >
                                Active
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] font-light leading-snug" style={{ color: activePalette.textSecondary }}>
                            {palette.subtitle}
                          </p>
                        </div>

                        {/* Color Swatch Dots */}
                        <div className="flex items-center space-x-1 shrink-0">
                          {palette.previewColors.map((color, idx) => (
                            <span
                              key={idx}
                              className="w-3.5 h-3.5 rounded-full border border-[var(--glass-border)] shadow-sm"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                      </button>
                    );
                  })}

                  {/* Custom Bespoke Color Palette Button */}
                  <button
                    onClick={() => setPalette('custom-bespoke')}
                    className={`w-full p-4 rounded-2xl text-left border transition-all flex items-center justify-between group ${
                      activePalette.id === 'custom-bespoke' ? 'shadow-[var(--shadow-md)] scale-[1.02] ring-1 ring-amber-400' : 'hover:opacity-90'
                    }`}
                    style={{
                      backgroundColor: activePalette.id === 'custom-bespoke' ? activePalette.bgPanel : activePalette.bgMain,
                      borderColor: activePalette.id === 'custom-bespoke' ? activePalette.accentGold : activePalette.borderMain,
                    }}
                  >
                    <div className="space-y-1 pr-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold" style={{ color: activePalette.textPrimary }}>
                          🎨 Bespoke Custom UI Colors
                        </span>
                        {activePalette.id === 'custom-bespoke' && (
                          <span
                            className="text-[9px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider"
                            style={{
                              backgroundColor: customPalette.accentGold,
                              color: customPalette.bgMain,
                            }}
                          >
                            Active Custom
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] font-light leading-snug" style={{ color: activePalette.textSecondary }}>
                        Your personalized hex color overrides
                      </p>
                    </div>

                    <div className="flex items-center space-x-1 shrink-0">
                      {[customPalette.bgMain, customPalette.bgCard, customPalette.accentGold, customPalette.borderMain].map((color, idx) => (
                        <span
                          key={idx}
                          className="w-3.5 h-3.5 rounded-full border border-[var(--glass-border)] shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                </div>
              </div>

              {/* SECTION 1.5: Interactive Custom UI Color Picker */}
              <div
                id="studio-sec-custom"
                className="p-5 rounded-2xl border space-y-4 shadow-[var(--shadow-md)]"
                style={{
                  backgroundColor: activePalette.bgMain,
                  borderColor: activePalette.accentGold,
                }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Sliders size={16} style={{ color: activePalette.accentGold }} />
                    <h4 className="text-xs uppercase tracking-widest font-semibold">
                      Custom Color Builder
                    </h4>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded border" style={{ borderColor: activePalette.borderMain, color: activePalette.accentGold }}>
                    Live Pickers
                  </span>
                </div>

                <p className="text-xs font-light" style={{ color: activePalette.textSecondary }}>
                  Customize exact hex tones. Adjusting any picker dynamically applies your custom palette in real time.
                </p>

                {/* Color Pickers Grid */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  {/* Canvas Main BG */}
                  <div className="p-2.5 rounded-xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold">Main Canvas</span>
                      <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>{customPalette.bgMain}</span>
                    </div>
                    <input
                      type="color"
                      value={customPalette.bgMain}
                      onChange={(e) => updateCustomColors({ bgMain: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </div>

                  {/* Card Surface BG */}
                  <div className="p-2.5 rounded-xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold">Card Surface</span>
                      <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>{customPalette.bgCard}</span>
                    </div>
                    <input
                      type="color"
                      value={customPalette.bgCard}
                      onChange={(e) => updateCustomColors({ bgCard: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </div>

                  {/* Panel Surface BG */}
                  <div className="p-2.5 rounded-xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold">Panel Surface</span>
                      <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>{customPalette.bgPanel}</span>
                    </div>
                    <input
                      type="color"
                      value={customPalette.bgPanel}
                      onChange={(e) => updateCustomColors({ bgPanel: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </div>

                  {/* Border Tone */}
                  <div className="p-2.5 rounded-xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold">Border Tone</span>
                      <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>{customPalette.borderMain}</span>
                    </div>
                    <input
                      type="color"
                      value={customPalette.borderMain}
                      onChange={(e) => updateCustomColors({ borderMain: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </div>

                  {/* Primary Accent */}
                  <div className="p-2.5 rounded-xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold">Primary Accent</span>
                      <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>{customPalette.accentGold}</span>
                    </div>
                    <input
                      type="color"
                      value={customPalette.accentGold}
                      onChange={(e) => updateCustomColors({ accentGold: e.target.value, accentHover: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </div>

                  {/* Primary Text */}
                  <div className="p-2.5 rounded-xl border flex items-center justify-between" style={{ backgroundColor: activePalette.bgCard, borderColor: activePalette.borderMain }}>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-semibold">Primary Text</span>
                      <span className="text-[10px] font-mono" style={{ color: activePalette.textSecondary }}>{customPalette.textPrimary}</span>
                    </div>
                    <input
                      type="color"
                      value={customPalette.textPrimary}
                      onChange={(e) => updateCustomColors({ textPrimary: e.target.value })}
                      className="w-7 h-7 rounded cursor-pointer border-0 bg-transparent"
                    />
                  </div>
                </div>

                {/* Quick Color Preset Chips */}
                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider font-semibold block mb-2" style={{ color: activePalette.textSecondary }}>
                    Quick Color Starter Presets:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Emerald', bgMain: '#08140E', bgCard: '#112219', bgPanel: '#193023', borderMain: '#2A4A37', accentGold: '#4E9F70', textPrimary: '#F0F7F2', textSecondary: '#A2C2AD' },
                      { name: 'Olive', bgMain: '#111713', bgCard: '#1C241E', bgPanel: '#26312A', borderMain: '#3A4B40', accentGold: '#8CA899', textPrimary: '#F2F6F4', textSecondary: '#A5B8AC' },
                      { name: 'Warm Beige', bgMain: '#F7F3EE', bgCard: '#FFFFFF', bgPanel: '#EFEAE3', borderMain: '#DCD4C9', accentGold: '#B88E52', textPrimary: '#2C251E', textSecondary: '#7A6E62' },
                      { name: 'Velvet Rose', bgMain: '#140A0D', bgCard: '#221217', bgPanel: '#2F1A21', borderMain: '#4D2935', accentGold: '#C05A74', textPrimary: '#FAF0F3', textSecondary: '#D4A8B5' },
                      { name: 'Sapphire', bgMain: '#070D18', bgCard: '#0F1A2E', bgPanel: '#172744', borderMain: '#28406C', accentGold: '#417BD9', textPrimary: '#F0F5FF', textSecondary: '#A0BBE8' },
                    ].map((preset, idx) => (
                      <button
                        key={idx}
                        onClick={() => updateCustomColors(preset)}
                        className="px-2.5 py-1 rounded-full text-[10px] font-semibold border transition-all hover:scale-105"
                        style={{
                          backgroundColor: preset.bgCard,
                          borderColor: preset.accentGold,
                          color: preset.textPrimary,
                        }}
                      >
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* SECTION 2: UI Style & Layout */}
              <div id="studio-sec-typography">
                <div className="flex items-center space-x-2 mb-2">
                  <Layout size={16} style={{ color: activePalette.accentGold }} />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    2. Typography & UI Archetype
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {UI_STYLES.map((style) => {
                    const isSelected = style.id === activeUIStyle.id;
                    return (
                      <button
                        key={style.id}
                        onClick={() => setUIStyle(style.id)}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                          isSelected ? 'shadow-md border-amber-400' : 'opacity-80 hover:opacity-100'
                        }`}
                        style={{
                          backgroundColor: isSelected ? activePalette.bgPanel : activePalette.bgMain,
                          borderColor: isSelected ? activePalette.accentGold : activePalette.borderMain,
                        }}
                      >
                        <div>
                          <span className="font-medium block" style={{ color: activePalette.textPrimary }}>
                            {style.name}
                          </span>
                        </div>
                        {isSelected && (
                          <Check size={16} style={{ color: activePalette.accentGold }} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 3: Atmospheric Lighting */}
              <div id="studio-sec-lighting">
                <div className="flex items-center space-x-2 mb-2">
                  <Sun size={16} style={{ color: activePalette.accentGold }} />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    3. Atmospheric Ambient Lighting
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-2.5">
                  {LIGHTING_PRESETS.map((light) => {
                    const isSelected = light.id === activeLighting.id;
                    return (
                      <button
                        key={light.id}
                        onClick={() => setLighting(light.id)}
                        className={`p-3.5 rounded-xl border text-left flex items-center justify-between text-xs transition-all ${
                          isSelected ? 'shadow-md border-amber-400' : 'opacity-80 hover:opacity-100'
                        }`}
                        style={{
                          backgroundColor: isSelected ? activePalette.bgPanel : activePalette.bgMain,
                          borderColor: isSelected ? activePalette.accentGold : activePalette.borderMain,
                        }}
                      >
                        <span className="font-medium" style={{ color: activePalette.textPrimary }}>
                          {light.name}
                        </span>
                        {isSelected && (
                          <Check size={16} style={{ color: activePalette.accentGold }} />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* SECTION 4: Interactive Staggered Navigation Menu */}
              <div id="studio-sec-navigation">
                <div className="flex items-center space-x-2 mb-2">
                  <Compass size={16} style={{ color: activePalette.accentGold }} />
                  <h4 className="text-xs uppercase tracking-widest font-semibold">
                    4. Staggered Fluid Navigation Menu
                  </h4>
                </div>
                <p className="text-xs font-light mb-4" style={{ color: activePalette.textSecondary }}>
                  Full-screen GSAP animated navigation menu with staggered pre-layer transitions and social links.
                </p>

                <div
                  className="p-4 rounded-2xl border space-y-3"
                  style={{
                    backgroundColor: activePalette.bgMain,
                    borderColor: activePalette.borderMain,
                  }}
                >
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span>Menu Controller:</span>
                    <span className="text-amber-400 font-mono">Right Slide-out</span>
                  </div>

                  <div className="pt-2 border-t" style={{ borderColor: activePalette.borderMain }}>
                    <StaggeredMenu
                      position="right"
                      colors={[activePalette.bgMain, activePalette.bgCard, activePalette.accentGold]}
                      accentColor={activePalette.accentGold}
                      menuButtonColor={activePalette.textPrimary}
                      openMenuButtonColor={activePalette.accentGold}
                      isFixed={false}
                      displaySocials={true}
                      displayItemNumbering={true}
                      items={[
                        { label: 'Sanctuary Arenas', link: '#arena', ariaLabel: 'Sanctuary Arenas' },
                        { label: 'Master Programs', link: '#programs', ariaLabel: 'Master Programs' },
                        { label: 'Coaching Elite', link: '#coaching', ariaLabel: 'Coaching Elite' },
                        { label: 'Membership Tiers', link: '#membership', ariaLabel: 'Membership Tiers' },
                        { label: 'Biohacking Vaults', link: '#wellness', ariaLabel: 'Biohacking Vaults' },
                        { label: 'Concierge Inquiry', link: '#faq', ariaLabel: 'Concierge FAQ' },
                      ]}
                      socialItems={[
                        { label: 'Instagram', link: 'https://instagram.com' },
                        { label: 'LinkedIn', link: 'https://linkedin.com' },
                        { label: 'YouTube', link: 'https://youtube.com' },
                      ]}
                    />
                  </div>
                </div>
              </div>

            </div>

            {/* Footer Action Buttons */}
            <div
              className="p-6 border-t flex items-center justify-between space-x-2 shrink-0"
              style={{
                backgroundColor: activePalette.bgMain,
                borderColor: activePalette.borderMain,
              }}
            >
              <button
                onClick={() => {
                  const el = document.getElementById('studio-scroll-body');
                  if (el) {
                    el.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
                style={{
                  backgroundColor: activePalette.bgPanel,
                  borderColor: activePalette.borderMain,
                  color: activePalette.accentGold,
                }}
                title="Scroll back to top of studio"
              >
                <ArrowUp size={16} />
              </button>

              <button
                onClick={() => {
                  setPalette('obsidian-gold');
                  setUIStyle('classique');
                  setLighting('warm-golden');
                }}
                className="px-3.5 py-3 rounded-full border text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5 hover:opacity-80 transition-opacity"
                style={{
                  borderColor: activePalette.borderMain,
                  color: activePalette.textSecondary,
                }}
                title="Reset to default theme"
              >
                <RefreshCw size={13} />
                <span>Reset</span>
              </button>

              <button
                onClick={handleCopyPreset}
                style={{
                  backgroundColor: activePalette.accentGold,
                  color: activePalette.bgMain,
                }}
                className="flex-1 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-[var(--shadow-sm)] hover:opacity-90 font-button flex items-center justify-center space-x-1.5"
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={14} />
                    <span>Configuration Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Save Theme Configuration</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
