export default function isInRange(range, value) {
  let from = range.from || Number.MIN_SAFE_INTEGER
  let bool = value > from

  if (range.fromInclude) {
    bool = value >= range.fromInclude
  }

  if (!bool) {
    return bool
  }

  let to = range.to || Number.MAX_SAFE_INTEGER
  bool = value < to

  if (range.toInclude) {
    bool = value <= to
  }

  return bool
}
