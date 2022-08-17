const localStorageKeyName = "tagList";
interface tagListModel {
  data: string[]
  fetch: ()=>string[]
  create: (name:string)=>void
  save: ()=> void
}
const tagListModel ={
  data:[] as string[],
  fetch(){
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
    return this.data
  },
  create(name:string){
    if(name === ''||name === ' ') throw new Error('the label cannot be empty')
    if(this.data.indexOf(name)>=0) throw new Error('the label already exists')
    this.data.push(name)
    this.save()
  },
  save(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
}

export default  tagListModel;