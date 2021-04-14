interface IDayOnePhotos {}

interface IDayOneLocation {}

interface IDayOneMetadata {
  name: string, // 一个日记本的姓名
  count: number, // entries的数量
  metaid: string, // 唯一id,
  color: string // 展示颜色
}

interface IDayOneEntry {
  duration: number,
  photos: IDayOnePhotos,
  location: IDayOneLocation,
  creationDate: string,
  modifiedDate: string,
  formatedDateObj: {
    week: string,
    day: number
  },
  timeZone: string,
  sourceString: string,
  text: string,
  uuid: string,
  richText: string,
  isSelected: boolean,
  metadata: IDayOneMetadata
}


interface IPanelViewState extends IDayOneMetadata {
  isSelected: boolean
}
export type TEntryData = Array<IDayOneEntry>

/**
 * DayOne 数据源注解
 */
export interface IDayOneSourceObject {
  metadata: IDayOneMetadata,
  entries: TEntryData
}


export interface IStateStore {
  viewstate: Array<IDayOneSourceObject>,
  currentMetaId: string,
  selectedEntryId: string,
  panelViewState: Array<IPanelViewState>,
  listViewData: TEntryData,
  selectDayOneByMetaId: (metaid: string) => void
  selectDayOneEntryById: (entryId: string) => void,
  initDayOneFromDist: () => void,
  addDayOneEntry: () => void,
  addDayOneEntrySave: () => void,
  removeDayOneEntryById: () => void,
  editDayOneEntryById: () => void,
  findDayOneEntryById: () => void,
  addDayOneJournal: () => void,
  removeDayOneJournalById: () => void,
  editDayOneJournalById: () => void,
  findDayOneJournalById: () => void
}
