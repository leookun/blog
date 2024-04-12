import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
   const iconPath = joinSegments(baseDir, "static/icon.jpg")
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <img src={iconPath} class="page-icon"></img>
      <a href={baseDir}>{title}</a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
}
.page-icon{
  width:1em;
  height:1em;
  margin: 0;
  line-height:1.5em
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
