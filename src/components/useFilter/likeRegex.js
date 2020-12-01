export default function likeRegex(filterStr, caseInsensitive = false) {
  const flags = caseInsensitive ? "igs" : "gs"
  return new RegExp(`.*${filterStr.replace(/\s/, ".*")}.*`, flags)
}
