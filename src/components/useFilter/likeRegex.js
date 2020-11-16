export default function likeRegex(filterStr, caseInsensitive = false) {
  const flags = caseInsensitive ? "igs" : "gs"
  console.log(new RegExp(`.*${filterStr.replace(/\s/, ".*")}.*`, flags))
  return new RegExp(`.*${filterStr.replace(/\s/, ".*")}.*`, flags)
}
