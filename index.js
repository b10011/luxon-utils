const { DateTime } = require("luxon");

const valid_units = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds",
];

function luxon_split_into(start, end, split_into, chunk_unit) {
  if (start > end) throw "`end` can't be before `start`";

  if (!valid_units.includes(split_into))
    throw `\`${split_into}\` not in ${valid_units.join(", ")}`;

  if (!valid_units.includes(chunk_unit))
    throw `\`${chunk_unit}\` not in ${valid_units.join(", ")}`;

  if (start.zoneName != end.zoneName)
    throw "`start` and `end` can't have different timezones";

  let pointer = start;
  let next_split = pointer.plus({ [split_into]: 1 }).startOf(split_into);

  let res = [];

  while (pointer < end) {
    if (next_split > end) {
      res.push({
        start: pointer.toISO(),
        end: end.toISO(),
        [chunk_unit]: end.diff(pointer, chunk_unit).toObject()[chunk_unit],
      });
      break;
    } else {
      res.push({
        start: pointer.toISO(),
        end: next_split.toISO(),
        [chunk_unit]: next_split.diff(pointer, chunk_unit).toObject()[
          chunk_unit
        ],
      });
      pointer = next_split;
    }
    next_split = pointer.plus({ [split_into]: 1 }).startOf(split_into);
  }

  return res;
}

module.exports = {
  luxon_split_into,
};
