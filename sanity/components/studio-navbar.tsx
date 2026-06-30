import type { NavbarProps } from 'sanity'

export function StudioNavbar(props: NavbarProps) {
  return (
    <>
      <style>{`
        [data-testid="studio-navbar"] #workspace-menu,
        [data-testid="studio-navbar"] button[aria-controls="workspace-menu"] {
          pointer-events: none;
          cursor: default;
        }

        [data-testid="studio-navbar"] #workspace-menu svg,
        [data-testid="studio-navbar"] button[aria-controls="workspace-menu"] svg {
          display: none !important;
        }
      `}</style>
      {props.renderDefault(props)}
    </>
  )
}
