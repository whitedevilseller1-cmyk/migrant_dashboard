# Task: Resolve All Errors and Fix Styling in Premium Migrant Worker Dashboard

## Current Work
The development server is running, but there are 217 TypeScript errors in VSCode (primarily from shadcn/ui components lacking proper JSX types/exports and recharts import issues) and styling problems (purple defaults due to Tailwind CSS not being processed/applied). Custom government colors are defined in tailwind.config.js, but PostCSS/Tailwind setup is incomplete. The goal is to fix all TS errors, apply proper styling, and ensure the app renders correctly without console errors.

## Key Technical Concepts
- React with TypeScript (.tsx files).
- Vite as build tool.
- Tailwind CSS for styling, with custom theme extensions (gov-blue, gov-green, etc.).
- shadcn/ui components (using Radix UI primitives, class-variance-authority for variants).
- Recharts for charts.
- Framer Motion for animations.

## Relevant Files and Code
- **src/App.tsx**: Main dashboard component; imports shadcn/ui components and recharts. Contains mock data and custom components like InteractiveStatCard. Recent error: Line 99 - JSX 'Bar' type issue from recharts.
  - Key snippet (recharts usage):
    ```
    <BarChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 0 }}>
        <Bar dataKey="records" fill={currentColors.fill} radius={[4, 4, 0, 0]} />
    </BarChart>
    ```
- **tailwind.config.js**: Newly created with custom gov colors and shadcn theme vars.
- **src/components/ui/**: Contains .tsx files for components (button.tsx, card.tsx, etc.), but may lack proper forwardRef typing or index.ts barrel exports, causing TS JSX errors.
- **src/index.css**: Needs @tailwind directives for CSS processing.
- **package.json**: Has shadcn deps; Tailwind/PostCSS installed, but tailwindcss-animate missing.
- No postcss.config.js yet.

## Problem Solving
- Tailwind not applying: Missing PostCSS config and CSS directives.
- TS Errors: UI components not recognized as valid React elements (likely missing React.forwardRef with proper generics); recharts import may need type assertion or correct import.
- Styling: Purple page indicates fallback colors; custom classes undefined without Tailwind processing.

## Pending Tasks and Next Steps
- [x] **Install tailwindcss-animate**: Required for animations in shadcn/ui.
   - Command: `npm install tailwindcss-animate`
   - After: Update tailwind.config.js if needed (already references it).

- [x] **Create postcss.config.js**: Enable Tailwind processing in Vite.
   - Content: Basic module.exports with tailwindcss and autoprefixer.

- [x] **Update src/index.css**: Add @tailwind base; @tailwind components; @tailwind utilities; to apply styles. (Already present with custom vars.)

- [x] **Fix TS Errors in shadcn/ui**:
   - Create src/components/ui/index.ts: Barrel exports for all components to simplify imports.
   - Read and edit sample file (e.g., src/components/ui/button.tsx) to ensure proper typing (React.FC or forwardRef<ComponentProps>).
   - Fix recharts in src/App.tsx: Ensure correct imports; add type if needed. (Resolved via tsconfig and types installation.)

1. **Restart dev server**: Kill current process and run `npm run dev` to apply changes.

2. **Verify fixes**: Check VSCode for reduced TS errors (aim for 0); restart server and confirm no console errors.

3. **Thorough Testing**:
   - Launch browser at http://localhost:3000/.
   - Verify: Proper styling (no purple; gov colors applied), components render (cards, buttons, alerts), interactions (theme toggle, SOS alert, sidebar menu).
   - Interact: Click buttons, open alert dialog, scroll timeline, check responsive layout.
   - Console: No TS/runtime errors.

Progress will be updated here after each step completion.
