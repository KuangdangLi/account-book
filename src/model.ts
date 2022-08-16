const localStorageKeyName = "recordList";
const model = {
  clone(data:RecordItem):RecordItem{
    return JSON.parse(JSON.stringify(data))
  },
  fetch(): RecordItem[]| []{
    return JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
  },
  save(data:RecordItem[]):void {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  },
};

export default model ;
