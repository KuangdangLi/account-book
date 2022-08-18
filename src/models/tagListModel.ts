import IdGenerator from '@/lib/IdGenerator';

const localStorageKeyName = "tagList";
interface Tag{
  id: string
  name: string
}
interface tagListModel {
  data: Tag[]
  fetch: ()=>Tag[]
  create: (name:string)=>void
  save: ()=> void
}
const tagListModel ={
  data:[] as Tag[],
  fetch(){
    this.data=JSON.parse(window.localStorage.getItem(localStorageKeyName) || "[]");
    return this.data
  },
  create(name:string){
    const names = this.data.map(item=>item.name);
    if(name === ''||name === ' ') throw new Error('the label cannot be empty')
    if(names.indexOf(name)>=0) throw new Error('the label already exists')
    const id = IdGenerator().toString();
    this.data.push({id:id,name:name})
    this.save()
  },
  save(){
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  },
}

export default  tagListModel;