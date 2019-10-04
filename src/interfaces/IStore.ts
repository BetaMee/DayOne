
interface IEntry {
  entryId: number,
  week: number,
  time: string,
  content: string
}

export interface IViewEntryItem {
  id: number,
  year: number,
  month: number,
  entryList: Array<IEntry>
}
