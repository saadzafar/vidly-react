import _ from "lodash";

export function paginate(items, pageNumber, pageSize) {
  // for pageSize 3, first page start at 0, second page at 3, third page at 6 and onwards
  const startIndex = (pageNumber - 1) * pageSize;
  return _(items)
    .slice(startIndex)
    .take(pageSize)
    .value();
}
