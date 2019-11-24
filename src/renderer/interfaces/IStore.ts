interface IDayOnePhotos {

}

interface IDayOneLocation {

}

interface IDayOneMetadata {

}

interface IDayOneEntry {
  duration: number,
  photos: IDayOnePhotos,
  location: IDayOneLocation,
  creationDate: string,
  modifiedDate: string,
  timeZone: string,
  sourceString: string,
  text: string,
  uuid: string,
  richText: string
}

export interface IDayOneSourceObject {
  metadata: IDayOneMetadata,
  entries: Array<IDayOneEntry>
}

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
