export default function isInRange(range, value) {
  let from = range.toInclude || range.from || Number.MIN_SAFE_INTEGER
  let bool

  if (range.fromInclude) {
    bool = value >= range.fromInclude
  } else {
    bool = value > from
  }

  if (!bool) {
    return bool
  }

  let to = range.toInclude || range.to || Number.MAX_SAFE_INTEGER

  if (range.toInclude) {
    bool = value <= to
  } else {
    bool = value < to
  }
  return bool
}
