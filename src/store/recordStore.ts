import clone from '@/lib/clone';

const localStorageKeyName = "recordList";

const recordStore = {
  recordList:[] as RecordItem[],
  fetchRecord(): RecordItem[]| []{
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
    return this.recordList
  },
  saveRecord():void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  },
  createRecord(record:RecordItem){
    const record2 =clone(record)
    record2.createdAt = new Date().toISOString()
    this.recordList.push(record2)
    this.saveRecord()
  }
};
recordStore.fetchRecord()

export default recordStore ;