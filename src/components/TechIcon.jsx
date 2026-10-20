import {
  siOpenjdk,
  siC,
  siCplusplus,
  siPython,
  siJavascript,
  siPhp,
  siReact,
  siNodedotjs,
  siHtml5,
  siCss,
  siMysql,
  siPostgresql,
  siMongodb,
  siSqlite,
  siGithub,
  siGit,
  siLinux,
  siUbuntu,
  siDebian,
  siGnubash,
  siApache,
  siJupyter,
  siGooglecolab,
  siKaggle,
  siNumpy,
  siPandas,
  siScikitlearn,
  siOpencv,
  siTensorflow,
  siPytorch,
  siKeras,
  siFastapi,
  siPostman,
  siSwagger,
  siDocker,
  siVercel,
  siNvidia,
  siCpanel,
  siGoogledocs,
  siGooglesheets,
  siGoogleslides,
  siApacheopenoffice,
  siGooglescholar,
  siResearchgate,
} from 'simple-icons'

/**
 * TechIcon — renders an official technology logo as inline SVG.
 *
 * Icons come from `simple-icons` (CC0-1.0). Only named imports are used so
 * Vite can tree-shake: importing the whole `* as si` namespace would pull in
 * all ~3,400 icons and bloat the bundle.
 *
 * Every slug below was verified to exist in simple-icons@16.35.0, so no icon
 * can silently render blank. The SVG inherits `currentColor`, letting the
 * theme recolour a logo on hover without a second asset.
 *
 * A few widely-known logos (Java, VS Code, the Microsoft Office apps) are not
 * distributed by Simple Icons for brand-policy reasons; those rows simply
 * render without an icon rather than showing a broken or substitute image.
 */
const REGISTRY = {
  openjdk: siOpenjdk,
  c: siC,
  cplusplus: siCplusplus,
  python: siPython,
  javascript: siJavascript,
  php: siPhp,
  react: siReact,
  nodedotjs: siNodedotjs,
  html5: siHtml5,
  css: siCss,
  mysql: siMysql,
  postgresql: siPostgresql,
  mongodb: siMongodb,
  sqlite: siSqlite,
  github: siGithub,
  git: siGit,
  linux: siLinux,
  ubuntu: siUbuntu,
  debian: siDebian,
  gnubash: siGnubash,
  apache: siApache,
  jupyter: siJupyter,
  googlecolab: siGooglecolab,
  kaggle: siKaggle,
  numpy: siNumpy,
  pandas: siPandas,
  scikitlearn: siScikitlearn,
  opencv: siOpencv,
  tensorflow: siTensorflow,
  pytorch: siPytorch,
  keras: siKeras,
  fastapi: siFastapi,
  postman: siPostman,
  swagger: siSwagger,
  docker: siDocker,
  vercel: siVercel,
  nvidia: siNvidia,
  cpanel: siCpanel,
  googledocs: siGoogledocs,
  googlesheets: siGooglesheets,
  googleslides: siGoogleslides,
  apacheopenoffice: siApacheopenoffice,
  googlescholar: siGooglescholar,
  researchgate: siResearchgate,
}

export function hasIcon(slug) {
  return Boolean(slug && REGISTRY[slug] && REGISTRY[slug].path)
}

export default function TechIcon({ slug, size = 24, className = '', title }) {
  const icon = slug ? REGISTRY[slug] : null

  // No verified icon? Render nothing rather than a broken/empty box.
  if (!icon || !icon.path) return null

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      aria-hidden={title ? undefined : 'true'}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} fill="currentColor" />
    </svg>
  )
}
